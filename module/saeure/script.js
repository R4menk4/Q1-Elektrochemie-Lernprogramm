const steps = [...document.querySelectorAll('.step')];
const navButtons = [...document.querySelectorAll('.nav-step')];
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const progressBar = document.querySelector('#progressBar');
const progressText = document.querySelector('#progressText');
const progressPercent = document.querySelector('#progressPercent');
const scoreValue = document.querySelector('#scoreValue');
const scoreText = document.querySelector('#scoreText');
const liveRegion = document.querySelector('#liveRegion');
const storageKey = 'saeurekorrosion-lernprogramm-v2';

let state = loadState();
let currentStep = Math.min(state.currentStep || 0, steps.length - 1);
let selectedCard = null;
let lastZoomTrigger = null;

function emptyState() {
  return { visited: [0], results: {}, dnd: {} };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved ? { ...emptyState(), ...saved, results: saved.results || {}, dnd: saved.dnd || {} } : emptyState();
  } catch {
    return emptyState();
  }
}

function saveState() {
  state.currentStep = currentStep;
  try { localStorage.setItem(storageKey, JSON.stringify(state)); }
  catch { liveRegion.textContent = 'Dein Browser kann gerade nicht speichern. Du kannst trotzdem weiterarbeiten.'; }
}

function revealElement(id, show = true) {
  if (!id) return;
  const element = document.getElementById(id);
  if (element) element.hidden = !show;
}

function showStep(index, announce = true) {
  currentStep = Math.max(0, Math.min(index, steps.length - 1));
  if (!state.visited.includes(currentStep)) state.visited.push(currentStep);
  steps.forEach((step, i) => step.classList.toggle('active', i === currentStep));
  navButtons.forEach((button, i) => {
    button.classList.toggle('active', i === currentStep);
    button.classList.toggle('done', state.visited.includes(i) && i !== currentStep);
    button.setAttribute('aria-current', i === currentStep ? 'step' : 'false');
  });
  prevButton.disabled = currentStep === 0;
  nextButton.textContent = currentStep === steps.length - 1 ? 'Zum Start' : 'Weiter';

  const visitedLearningSteps = new Set(state.visited).size;
  const percent = Math.round(((visitedLearningSteps - 1) / (steps.length - 1)) * 100);
  progressBar.style.width = `${Math.max(0, percent)}%`;
  progressText.textContent = `${currentStep + 1} von ${steps.length}`;
  progressPercent.textContent = `${Math.max(0, percent)} % angesehen`;
  saveState();
  updateScore();
  window.renderLearningGuide?.();

  if (announce) {
    const title = steps[currentStep].querySelector('h1')?.textContent || '';
    liveRegion.textContent = `Lernschritt ${currentStep + 1}: ${title}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('#lerninhalt').focus({ preventScroll: true });
  }
}

navButtons.forEach(button => button.addEventListener('click', () => showStep(Number(button.dataset.step))));
prevButton.addEventListener('click', () => {
  if (window.retreatLearningGuide?.()) return;
  showStep(currentStep - 1);
});
nextButton.addEventListener('click', () => {
  if (window.advanceLearningGuide?.()) return;
  showStep(currentStep === steps.length - 1 ? 0 : currentStep + 1);
});

document.querySelectorAll('.auto-question').forEach((form, index) => {
  const questionId = `auto-${index}`;
  if (state.results[questionId] === true) revealElement(form.dataset.reveal);

  form.addEventListener('submit', event => {
    event.preventDefault();
    const selected = form.querySelector('input[type="radio"]:checked');
    const feedback = form.querySelector('.feedback');
    if (!selected) {
      feedback.textContent = 'Wähle zuerst eine Antwort aus.';
      feedback.className = 'feedback incorrect';
      return;
    }
    const correct = selected.value === form.dataset.correct;
    state.results[questionId] = correct;
    feedback.textContent = correct
      ? (form.dataset.success || 'Richtig. Deine Auswahl passt zum dargestellten Vorgang.')
      : (form.dataset.hint || 'Noch nicht ganz. Öffne den ersten Tipp unter der Aufgabe und versuche es noch einmal.');
    feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    if (correct) revealElement(form.dataset.reveal);
    saveState();
    updateScore();
  });
});

document.querySelectorAll('.select-question').forEach((form, index) => {
  const questionId = `select-${index}`;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const selects = [...form.querySelectorAll('select')];
    const feedback = form.querySelector('.feedback');
    selects.forEach(select => {
      let marker = select.parentElement.querySelector('.item-feedback');
      if (!marker) { marker = document.createElement('span'); marker.className = 'item-feedback'; select.parentElement.append(marker); }
      marker.textContent = !select.value ? 'Noch offen' : select.value === select.dataset.answer ? '✓ Passt' : 'Noch einmal prüfen: Wer nimmt Elektronen auf?';
    });
    const correctCount = selects.filter(select => select.value === select.dataset.answer).length;
    const correct = correctCount === selects.length;
    state.results[questionId] = correct;
    feedback.textContent = correct
      ? 'Alles richtig zugeordnet.'
      : `${correctCount} von ${selects.length} passen bereits. Bearbeite jetzt eine der offenen Zuordnungen. Nutze bei Bedarf die Begriffshilfe.`;
    feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
    saveState();
    updateScore();
  });
});

function clearSelectedCard() {
  if (selectedCard) selectedCard.classList.remove('selected');
  selectedCard = null;
  document.querySelectorAll('.drop-zone').forEach(zone => zone.classList.remove('selected-target'));
}

function persistActivity(activity) {
  const key = activity.dataset.key;
  activity.querySelectorAll('.drag-card').forEach(card => {
    card.classList.remove('card-correct', 'card-retry');
    card.removeAttribute('aria-label');
  });
  const feedback = activity.querySelector('.feedback');
  feedback.textContent = 'Anordnung geändert. Prüfe deinen nächsten Versuch, wenn du bereit bist.';
  feedback.className = 'feedback';
  state.dnd[key] = [...activity.querySelectorAll('.drag-card')].map(card => ({
    card: card.dataset.card,
    zone: card.parentElement.dataset.zone
  }));
  delete state.results[`dnd-${key}`];
  if (activity.dataset.reveal) revealElement(activity.dataset.reveal, false);
  saveState();
  updateScore();
}

function moveCard(card, zone, persist = true) {
  if (!card || !zone) return;
  if (card.closest('.dnd-activity') !== zone.closest('.dnd-activity')) return;
  const tail = zone.querySelector(':scope > .drop-tail');
  if (tail) zone.insertBefore(card, tail);
  else zone.appendChild(card);
  clearSelectedCard();
  if (persist) persistActivity(zone.closest('.dnd-activity'));
}

function restoreActivity(activity) {
  const saved = state.dnd[activity.dataset.key];
  if (!saved?.length) return;
  saved.forEach(item => {
    const card = activity.querySelector(`[data-card="${item.card}"]`);
    const zone = activity.querySelector(`[data-zone="${item.zone}"]`);
    if (card && zone) moveCard(card, zone, false);
  });
}

function resetActivity(activity) {
  const bank = activity.querySelector('[data-zone="bank"]');
  [...activity.querySelectorAll('.drag-card')]
    .sort((a, b) => Number(a.dataset.order) - Number(b.dataset.order))
    .forEach(card => bank.appendChild(card));
  const feedback = activity.querySelector('.feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';
  clearSelectedCard();
  persistActivity(activity);
}

function checkActivity(activity) {
  const mode = activity.dataset.mode;
  let correct = false;
  let detail = '';

  if (mode === 'sequence') {
    const actual = [...activity.querySelector('[data-zone="answer"]').querySelectorAll('.drag-card')].map(card => card.dataset.value);
    const expected = bestSequenceOrder(activity.dataset.key, actual, activity.dataset.answer.split('|'));
    correct = isValidSequence(activity.dataset.key, actual, expected);
    const firstMismatch = actual.findIndex((value, index) => normalizeToken(value) !== normalizeToken(expected[index]));
    detail = actual.length < expected.length
      ? `Du hast ${actual.length} von ${expected.length} Bausteinen gelegt. ${firstMismatch < 0 ? 'Dein Anfang passt.' : 'Prüfe zuerst den Baustein an Stelle ' + (firstMismatch + 1) + '.'} Prüfe den nächsten Baustein mit den Tipps zu Atomen und Ladungen.`
      : `Noch nicht ganz. Nutze Tipp 2 zum Ausgleich oder öffne bei Bedarf ausdrücklich die Musterlösung. Du kannst einzelne Karten zurück in die Auswahl legen.`;
  }

  if (mode === 'mapping') {
    const cards = [...activity.querySelectorAll('.drag-card')];
    const placed = cards.filter(card => card.parentElement.dataset.zone !== 'bank');
    const correctCount = placed.filter(card => card.parentElement.dataset.zone === card.dataset.target).length;
    cards.forEach(card => {
      const placedHere = card.parentElement.dataset.zone !== 'bank';
      card.classList.toggle('card-correct', placedHere && card.parentElement.dataset.zone === card.dataset.target);
      card.classList.toggle('card-retry', placedHere && card.parentElement.dataset.zone !== card.dataset.target);
      card.setAttribute('aria-label', `${card.textContent}: ${!placedHere ? 'noch nicht zugeordnet' : card.parentElement.dataset.zone === card.dataset.target ? 'richtig zugeordnet' : 'Zuordnung noch einmal prüfen'}`);
    });
    correct = placed.length === cards.length && correctCount === cards.length;
    detail = placed.length < cards.length
      ? `${correctCount} Karten passen bereits. Ordne als Nächstes nur eine weitere Karte zu.`
      : `${correctCount} von ${cards.length} Karten liegen richtig. Prüfe Bedingungen, Elektronenakzeptor und Kathodenprodukt.`;
  }

  const key = `dnd-${activity.dataset.key}`;
  state.results[key] = correct;
  const feedback = activity.querySelector('.feedback');
  feedback.textContent = correct ? 'Geschafft! ' + (activity.dataset.success || 'Die Zuordnung passt. Erkläre dir kurz, warum.') : detail;
  feedback.className = `feedback ${correct ? 'correct' : 'incorrect'}`;
  if (correct) revealElement(activity.dataset.reveal);
  saveState();
  updateScore();
}

document.querySelectorAll('.dnd-activity').forEach(activity => {
  restoreActivity(activity);
  if (state.results[`dnd-${activity.dataset.key}`] === true) revealElement(activity.dataset.reveal);

  activity.querySelectorAll('.drop-zone').forEach(zone => {
    zone.tabIndex = 0;
    zone.addEventListener('dragover', event => {
      event.preventDefault();
      zone.classList.add('drag-over');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
    zone.addEventListener('drop', event => {
      event.preventDefault();
      zone.classList.remove('drag-over');
      moveCard(selectedCard, zone);
    });
    zone.addEventListener('click', event => {
      if (event.target.closest('.drag-card')) return;
      if (selectedCard && activity.contains(selectedCard)) moveCard(selectedCard, zone);
    });
    zone.addEventListener('keydown', event => {
      if (event.target.closest('.drag-card')) return;
      if ((event.key === 'Enter' || event.key === ' ') && selectedCard && activity.contains(selectedCard)) {
        event.preventDefault();
        moveCard(selectedCard, zone);
      }
    });
  });

  activity.querySelectorAll('.drag-card').forEach(card => {
    card.addEventListener('dragstart', event => {
      clearSelectedCard();
      selectedCard = card;
      card.classList.add('selected');
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', card.dataset.card);
    });
    card.addEventListener('dragend', clearSelectedCard);
    card.addEventListener('click', event => {
      event.stopPropagation();
      if (selectedCard === card) {
        clearSelectedCard();
        return;
      }
      clearSelectedCard();
      selectedCard = card;
      card.classList.add('selected');
      activity.querySelectorAll('.drop-zone').forEach(zone => zone.classList.add('selected-target'));
      card.classList.remove('selected-target');
    });
  });

  activity.querySelector('.dnd-check').addEventListener('click', () => checkActivity(activity));
  activity.querySelector('.dnd-reset').addEventListener('click', () => resetActivity(activity));
});

document.querySelectorAll('.reveal-button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = document.getElementById(button.dataset.target);
    const willShow = answer.hidden;
    answer.hidden = !willShow;
    button.textContent = willShow ? 'Hinweis ausblenden' : (button.dataset.target === 'solution1' ? 'Musterlösung anzeigen' : 'Denkhilfe anzeigen');
  });
});

document.querySelectorAll('textarea').forEach(area => {
  area.value = state[area.id] || '';
  area.addEventListener('input', () => {
    state[area.id] = area.value;
    saveState();
  });
});

const imageDialog = document.querySelector('#imageDialog');
const dialogImage = document.querySelector('#dialogImage');
const dialogImageFrame = document.querySelector('#dialogImageFrame');
const closeImageDialog = document.querySelector('#closeImageDialog');

document.querySelectorAll('.zoomable-image').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    lastZoomTrigger = link;
    const sourceImage = link.querySelector('img');
    dialogImage.src = link.getAttribute('href');
    dialogImage.alt = sourceImage.alt;
    dialogImageFrame.classList.toggle('reaction-crop', link.dataset.crop === 'reaction' || link.dataset.crop === 'cathode');
    dialogImageFrame.classList.toggle('cathode-mask', link.dataset.crop === 'cathode');
    imageDialog.showModal();
    closeImageDialog.focus();
  });
});

closeImageDialog.addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  if (event.target === imageDialog) imageDialog.close();
});
imageDialog.addEventListener('close', () => lastZoomTrigger?.focus());

function updateScore() {
  const values = Object.values(state.results);
  const correct = values.filter(Boolean).length;
  const total = document.querySelectorAll('.auto-question').length
    + document.querySelectorAll('.select-question').length
    + document.querySelectorAll('.dnd-activity').length;
  scoreValue.textContent = `${correct}`;
  if (!values.length) scoreText.textContent = 'Dein erster Versuch zählt. Hilfen stehen jederzeit bereit; es gibt keinen Punktabzug.';
  else if (correct === total) scoreText.textContent = 'Alle geprüften Aufgaben sind richtig gelöst.';
  else scoreText.textContent = `${correct} Aufgaben gelöst – mit oder ohne Hilfe. Du kannst offene Aufgaben später wieder aufgreifen. Deine eigenen Erklärungen besprecht ihr im Kurs.`;
}

function normalizeToken(value) { return value?.replace(/^plus[12]$/, 'plus'); }

// Choose an equivalent reference matching the learner's existing beginning.
// Feedback and scaffolding must accept the same summand orders as validation.
function bestSequenceOrder(key, actual, expected) {
  if (!key.endsWith('-equation')) return expected;
  const split = expected.indexOf('arrow');
  const permutations = items => items.length <= 1 ? [items] : items.flatMap((item, i) =>
    permutations(items.filter((_, j) => i !== j)).map(rest => [item, ...rest]));
  const left = expected.slice(0, split).filter((_, i) => i % 2 === 0);
  const right = expected.slice(split + 1).filter((_, i) => i % 2 === 0);
  const join = items => items.flatMap((v, i) => i ? ['plus', v] : [v]);
  const candidates = permutations(left).flatMap(l => permutations(right).map(r => [...join(l), 'arrow', ...join(r)]));
  const prefix = candidate => {
    let i = 0;
    while (i < actual.length && normalizeToken(actual[i]) === normalizeToken(candidate[i])) i++;
    return i;
  };
  return candidates.reduce((best, candidate) => prefix(candidate) > prefix(best) ? candidate : best, candidates[0]);
}

function isValidSequence(key, actual, expected) {
  if (actual.length !== expected.length) return false;
  if (!key.endsWith('-equation')) return actual.every((v, i) => v === expected[i]);
  const sides = tokens => {
    const at = tokens.indexOf('arrow');
    if (at < 0) return null;
    const parts = [tokens.slice(0, at), tokens.slice(at + 1)];
    if (parts.some(part => !part.length || part.some((v, i) => i % 2 === 1 ? normalizeToken(v) !== 'plus' : ['plus', 'arrow'].includes(normalizeToken(v))))) return null;
    return parts.map(part => part.filter((_, i) => i % 2 === 0).sort().join('|'));
  };
  return JSON.stringify(sides(actual)) === JSON.stringify(sides(expected));
}

document.querySelector('#resetButton').addEventListener('click', () => {
  const confirmed = window.confirm('Möchtest du deinen gesamten Fortschritt und deine Eingaben löschen?');
  if (!confirmed) return;
  localStorage.removeItem(storageKey);
  window.location.reload();
});

showStep(currentStep, false);
