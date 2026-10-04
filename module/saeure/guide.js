// Zusätzliche Lernhilfen. Bestehende Aufgaben-IDs und gespeicherte Antworten bleiben erhalten.
(() => {
  const goals = [
    'Heute reicht ein Schritt nach dem anderen. Hilfen gehören zum Lernen dazu.',
    'Dein Ziel: Erkennen, wer bei der Sauerstoffkorrosion Elektronen aufnimmt.',
    'Dein Ziel: Metall, saure Lösung und bewegliche Ionen unterscheiden.',
    'Dein Ziel: Erst die Anode verstehen, dann die Kathode und zuletzt den Zusammenhang.',
    'Dein Ziel: Den Weg der Elektronen vom Weg der Ionen unterscheiden.',
    'Dein Ziel: Den entscheidenden Unterschied an der Kathode erkennen.',
    'Dein Ziel: Eine Aufgabe nach der anderen bearbeiten. Pausen sind erlaubt.',
    'Das nimmst du mit: Eisen gibt Elektronen ab. Oxonium-Ionen nehmen sie auf.'
  ];
  state.guidePositions ||= {};
  state.answers ||= {};
  state.helpUsed ||= {};
  const guide = document.createElement('aside');
  guide.className = 'learning-guide';
  guide.setAttribute('aria-label', 'Dein nächster Schritt');
  const goal = document.createElement('p');
  const stage = document.createElement('p'); stage.className = 'guide-stage'; stage.setAttribute('aria-live', 'polite');
  const back = document.createElement('button'); back.className = 'secondary-button'; back.textContent = 'Vorheriger Teilschritt';
  back.type = 'button';
  guide.append(goal, stage, back);
  document.querySelector('#lerninhalt').prepend(guide);

  const groups = new Map();
  const reactionStep = steps[3];
  const panels = [...reactionStep.querySelectorAll('.investigation-panel')];
  const sequence = reactionStep.querySelector('.sequence-activity');
  groups.set(3, { units: [...panels, sequence], labels: ['A · Eisen gibt Elektronen ab', 'B · Oxonium-Ionen nehmen Elektronen auf', 'C · Den Vorgang zusammenfügen'] });
  groups.set(6, { units: [...steps[6].querySelectorAll('.exercise-block')], labels: ['Gasbläschen deuten', 'Transportwege unterscheiden', 'Korrosionsarten zuordnen', 'Eine Aussage beurteilen', 'Extra: Korrosionsschutz erklären'] });
  reactionStep.querySelector('.graphic-grid').classList.add('guided-grid');

  function position() {
    const group = groups.get(currentStep);
    return group ? Math.max(0, Math.min(Number(state.guidePositions[currentStep]) || 0, group.units.length - 1)) : 0;
  }
  function render() {
    const group = groups.get(currentStep), pos = position();
    goal.textContent = goals[currentStep];
    stage.hidden = !group; back.hidden = !group;
    if (group) {
      group.units.forEach((unit, i) => { unit.hidden = pos !== i; });
      stage.textContent = `Teilschritt ${pos + 1} von ${group.units.length}: ${group.labels[pos]}`;
      back.disabled = pos === 0;
      nextButton.textContent = pos < group.units.length - 1 ? 'Zum nächsten Teilschritt' : 'Zum nächsten Abschnitt';
      if (currentStep === 3) {
        reactionStep.querySelector('.graphic-grid').hidden = pos === 2;
        document.querySelector('#acid-summary').hidden = pos !== 2 || !state.results['dnd-corrosion-sequence'];
      }
    }
  }
  window.renderLearningGuide = render;
  window.advanceLearningGuide = () => {
    const group = groups.get(currentStep), pos = position();
    if (!group || pos === group.units.length - 1) return false;
    state.guidePositions[currentStep] = pos + 1;
    saveState(); render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('#lerninhalt').focus({ preventScroll: true });
    return true;
  };
  window.retreatLearningGuide = () => {
    if (!groups.has(currentStep) || position() === 0) return false;
    state.guidePositions[currentStep] = position() - 1;
    saveState(); render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.querySelector('#lerninhalt').focus({ preventScroll: true });
    return true;
  };
  back.addEventListener('click', window.retreatLearningGuide);

  const glossary = document.createElement('details'); glossary.className = 'help-box glossary';
  glossary.innerHTML = '<summary>Begriffe kurz erklärt</summary><dl><dt>Oxidation</dt><dd>Ein Teilchen gibt Elektronen ab.</dd><dt>Reduktion</dt><dd>Ein Teilchen nimmt Elektronen auf.</dd><dt>Anode</dt><dd>Hier findet die Oxidation statt. Merkhilfe: Anode = Abgabe.</dd><dt>Kathode</dt><dd>Hier findet die Reduktion statt.</dd><dt>Elektrolyt</dt><dd>Ein Stoffsystem, in dem bewegliche Ionen elektrische Ladung transportieren. Hier ist das eine wässrige Lösung.</dd><dt>H₃O⁺</dt><dd>Oxonium-Ion. Es ist typisch für wässrige saure Lösungen.</dd><dt>Fe²⁺ / e⁻ / H₂</dt><dd>Eisen(II)-Ion / Elektron / Wasserstoffmolekül.</dd></dl>';
  guide.append(glossary);

  function help(parent, items) {
    const box = document.createElement('div'); box.className = 'hint-ladder';
    const title = document.createElement('p'); title.className = 'hint-intro'; title.textContent = 'Du entscheidest, wie viel Hilfe du brauchst.'; box.append(title);
    items.forEach((item, i) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary'); summary.textContent = `${i < 2 ? 'Tipp ' + (i + 1) : 'Musterlösung anzeigen'} · ${item[0]}`;
      const content = document.createElement('p'); content.textContent = item[1];
      details.append(summary, content); box.append(details);
    });
    parent.append(box);
  }
  const radioHelp = [["Vergleiche die möglichen Reaktionspartner in der beschriebenen Umgebung.", "Untersuche bei jeder Auswahl, ob sie zur Elektronenaufnahme oder zur Elektronenabgabe gehört.", "Genau: Sauerstoff nimmt Elektronen auf. Dabei entstehen Hydroxid-Ionen."], ["Überlege, welche Funktion die Lösung für den Ablauf haben könnte.", "Unterscheide einen beweglichen Ladungsträger von einem bloßen Reaktionsgefäß.", "Genau: Bewegliche Ionen ermöglichen den Ladungstransport in der Lösung."], ["Bestimme, ob der beschriebene Vorgang eine Elektronenabgabe oder -aufnahme ist.", "Prüfe bei jeder Antwort Atombilanz und Ladungsbilanz.", "Genau: Fe gibt zwei Elektronen ab. Fe²⁺ geht in Lösung."], ["Unterscheide eine Beobachtung von ihrer chemischen Deutung.", "Prüfe bei jeder Auswahl, ob sich ihre Bestandteile aus den Ausgangsteilchen herleiten lassen.", "Genau: Bei der Reduktion der Oxonium-Ionen entstehen H₂ und H₂O."], ["Was bedeutet der Wortbestandteil „lokal“ für den Ort der Vorgänge?", "Prüfe, ob die vorgeschlagene Erklärung zwei zusammenwirkende Reaktionsorte beschreibt.", "Genau: Die beiden Reaktionsorte liegen auf derselben Metalloberfläche."], ["Vergleiche Anode und Kathode jeweils getrennt.", "Suche erst Gemeinsamkeiten und dann Unterschiede zwischen den beiden Modellen.", "Genau: In beiden Fällen wird Eisen oxidiert. Die Kathodenreaktion unterscheidet sich."], ["Welche Beobachtung deutet auf einen gasförmigen Stoff hin?", "Leite mögliche Produkte aus den in der Lösung vorhandenen Teilchen ab.", "Genau: Die Bläschen bestehen aus Wasserstoff, H₂."], ["Zeichne die zwei möglichen Transportwege im Versuchsaufbau.", "Überlege für jedes Medium, welche geladenen Teilchen darin beweglich sind.", "Genau: Elektronen im Metall, Ionen im Elektrolyten."]];
  document.querySelectorAll('.auto-question').forEach((form, index) => {
    const [tip1, tip2, success] = radioHelp[index];
    form.dataset.hint = `Noch nicht ganz. ${tip1} Probiere eine andere Antwort oder öffne Tipp 2.`;
    form.dataset.success = success;
    help(form, [['Eine Spur', tip1], ['Konkreter Hinweis', tip2]]);
    const input = form.querySelector('input');
    const key = input.name;
    const saved = [...form.querySelectorAll('input')].find(el => el.value === state.answers[key]);
    if (saved) saved.checked = true;
    if (state.results[`auto-${index}`] === true) {
      form.querySelector('.feedback').textContent = `Bereits gelöst. ${success}`;
      form.querySelector('.feedback').className = 'feedback correct';
    }
    form.addEventListener('change', () => {
      state.answers[key] = form.querySelector('input:checked')?.value;
      delete state.results[`auto-${index}`];
      const feedback = form.querySelector('.feedback'); feedback.textContent = 'Auswahl geändert. Prüfe deinen neuen Versuch.'; feedback.className = 'feedback';
      saveState(); updateScore();
    });
  });

  const activityHelp = {
    'anode-equation': [
      ["Ausgang und Ergebnis", "Unterscheide zunächst Ausgangsteilchen und Reaktionsprodukte. Lege noch keine Koeffizienten fest."],
      ["Bilanz prüfen", "Zähle auf beiden Seiten Atome und Gesamtladung. Prüfe die Position der Elektronen anhand der Reaktionsart."],
      ["Vergleichen und erklären", "Fe → Fe²⁺ + 2 e⁻. Eisen gibt zwei Elektronen ab. Die Gesamtladung ist auf beiden Seiten 0."]
    ],
    'cathode-equation': [
      ["Reaktionsart prüfen", "Überlege, ob bei dieser Teilreaktion Elektronen abgegeben oder aufgenommen werden."],
      ["Schrittweise ausgleichen", "Gleiche zuerst die Atome und anschließend die Ladung aus. Verändere dafür die Koeffizienten, nicht die Teilchenformeln."],
      ["Vergleichen und erklären", "2 H₃O⁺ + 2 e⁻ → H₂ + 2 H₂O. Auf beiden Seiten: 6 H-Atome, 2 O-Atome und Gesamtladung 0."]
    ],
    'corrosion-sequence': [
      ["Ursache und Folge", "Suche die notwendige Ausgangsbedingung. Welche Karten beschreiben anschließend eine Ursache oder eine Folge?"],
      ["Kette prüfen", "Prüfe für jeden Übergang, ob die vorherige Karte die nächste Aussage erklärt."],
      ["Eine Erklärungskette", "Kontakt → Elektronenabgabe → Fe²⁺ in Lösung → Elektronenfluss → Aufnahme durch H₃O⁺ → Wasserstoff. Das ist eine Erklärung in Schritten: Oxidation und Reduktion laufen gekoppelt ab, nicht als voneinander getrennte zeitliche Phasen."]
    ],
    'corrosion-comparison': [
      ["Eine Zeile wählen", "Bearbeite zunächst nur eine Vergleichszeile. Lies dafür beide Überschriften genau."],
      ["Modelle vergleichen", "Vergleiche für beide Modelle Reaktionspartner, Teilreaktionen und beobachtbare Folgen getrennt."],
      ["Zeile für Zeile vergleichen", "Säurekorrosion: saure, wässrige Lösung / H₃O⁺ / H₂ und H₂O / Gasbläschen, Eisen löst sich. Sauerstoffkorrosion: Wasserfilm und O₂ / O₂ / OH⁻ / Rostprodukte nach Folgereaktionen."]
    ]
  };
  document.querySelectorAll('.dnd-activity').forEach(activity => {
    const key = activity.dataset.key;
    activity.querySelectorAll('.table-drop').forEach(zone => {
      const row = zone.closest('.comparison-row');
      const column = [...row.children].indexOf(zone) === 1 ? 'Säurekorrosion' : 'Sauerstoffkorrosion';
      zone.setAttribute('role', 'cell');
      zone.setAttribute('aria-label', `${column}: ${row.firstElementChild.textContent}`);
    });
    help(activity, activityHelp[key]);
    activity.dataset.success = key.endsWith('-equation') ? 'Atome und Ladungen sind auf beiden Seiten ausgeglichen.' : 'Nutze dein Ergebnis für die nächste Erklärung.';
  });

  document.querySelectorAll('.select-question').forEach((form, index) => {
    help(form, [['Reaktionspartner vergleichen', 'Notiere für jedes Modell, welche Teilchen vor der Reaktion vorhanden sind.'], ['Bilanz kontrollieren', 'Prüfe, ob die ausgewählten Produkte zu den Atomen und Ladungen der Ausgangsteilchen passen.']]);
    form.querySelectorAll('select').forEach(select => {
      select.value = state.answers[select.id] || '';
      select.addEventListener('change', () => {
        state.answers[select.id] = select.value; delete state.results[`select-${index}`];
        form.querySelector('.feedback').textContent = 'Auswahl geändert. Prüfe deinen neuen Versuch.';
        form.querySelector('.feedback').className = 'feedback';
        select.parentElement.querySelector('.item-feedback')?.remove();
        saveState(); updateScore();
      });
    });
  });
  help(document.querySelector('#open1').closest('.open-question'), [
    ['Satzanfang', 'Prüfe zuerst, welche Teile der Aussage du durch die Teilreaktionen belegen kannst.'],
    ['Zweiter Satz', 'Unterscheide unmittelbare Reaktionsprodukte von möglichen späteren Veränderungen. Welche zusätzlichen Bedingungen wären dafür nötig?']
  ]);
  help(document.querySelector('#open2').closest('.open-question'), [
    ['Satzanfang', 'Vergleiche eine frei zugängliche Oberfläche mit einer vollständig beschichteten Oberfläche.'],
    ['Begründung', 'Untersuche, welche Voraussetzungen des Korrosionsvorgangs durch die Beschichtung beeinflusst werden.'],
    ['Vergleichen', 'Eine intakte Lackschicht verhindert den direkten Kontakt zwischen Eisen und dem wässrigen Elektrolyten. Sie erschwert auch den Zutritt von Sauerstoff. An Rissen kann Korrosion erneut einsetzen.']
  ]);
  document.querySelector('#open1').placeholder = 'Beginne mit einem Satz. Du kannst deine Erklärung danach ergänzen.';
  document.querySelector('#open2').placeholder = 'Eine geschlossene Lackschicht trennt die Eisenoberfläche von …';
  const reflection = document.createElement('div'); reflection.className = 'note';
  reflection.innerHTML = '<label for="nextQuestion"><strong>Das möchte ich noch klären</strong></label><p>Eine konkrete Frage hilft bei der Kursbesprechung. Auch ein Stichwort reicht.</p><textarea id="nextQuestion" rows="2" placeholder="Zum Beispiel: Warum braucht man zwei Elektronen?"></textarea>';
  steps[7].append(reflection);
  reflection.querySelector('textarea').value = state.nextQuestion || '';
  reflection.querySelector('textarea').addEventListener('input', event => { state.nextQuestion = event.target.value; saveState(); });
  render();
})();
