'use strict';
const key = 'elektrochemie-kompetenzen-v1';
const levels = new Set(['practice', 'help', 'secure']);
let saved = {};
try {
  const value = JSON.parse(localStorage.getItem(key));
  if (value && typeof value === 'object' && !Array.isArray(value)) saved = value;
} catch {}
const $ = id => document.getElementById(id);
const allItems = competencies.flatMap(group => group.items);
function persist() {
  try {
    localStorage.setItem(key, JSON.stringify(saved));
    $('storage').textContent = 'Deine Einschätzungen sind in diesem Browser gespeichert.';
  } catch { $('storage').textContent = 'Speichern ist hier nicht möglich.'; }
}
// Nur gleichwertige frühere Aussagen übernehmen; neue Kompetenzen beginnen offen.
// Alte Einträge bleiben gespeichert, werden aber nicht als aktuelle Kompetenz gezählt.
let migrated = false;
allItems.forEach(item => {
  if (Object.prototype.hasOwnProperty.call(saved, item.id)) return;
  const previous = (item.legacyIds || []).find(id => levels.has(saved[id]));
  if (previous) { saved[item.id] = saved[previous]; migrated = true; }
});
if (migrated) persist();
function inScope(item) {
  const scope = $('scope').value;
  if (scope === 'extra') return !!item.optional;
  return !item.optional && (scope !== 'exam' || item.exam);
}
function update() {
  const selected = allItems.filter(inScope);
  const secure = selected.filter(item => saved[item.id] === 'secure').length;
  const assessed = selected.filter(item => levels.has(saved[item.id])).length;
  const mode = $('filter').value;
  let shown = 0;
  allItems.forEach(item => {
    const isSecure = saved[item.id] === 'secure';
    const visible = inScope(item) && (mode === 'secure' ? isSecure : mode === 'practice' ? !isSecure : true);
    document.getElementById('row-' + item.id).hidden = !visible;
    if (visible) shown++;
  });
  document.querySelectorAll('#groups article').forEach(article => {
    article.hidden = ![...article.querySelectorAll('.skill')].some(row => !row.hidden);
  });
  $('summary').textContent = `${secure} von ${selected.length} Aussagen dieser Themenauswahl sicher · ${assessed} eingeschätzt · ${shown} angezeigt`;
  $('empty').hidden = shown !== 0;
  $('scope-note').textContent = $('scope').value === 'exam'
    ? 'Wasserstoff, Brennstoffzelle und Korrosion einschließlich benötigter Redoxgrundlagen und Methoden. Freiwillige Vertiefungen zählen nicht mit. Maßgeblich bleiben die Angaben deiner Lehrkraft.'
    : $('scope').value === 'extra'
      ? 'Wirkungsgradrechnung und Zinnüberzug sind freiwillige Vertiefungen. Ihre Einschätzungen zählen nicht zu den Hauptinhalten oder zum Klausurfilter.'
      : 'Alle Hauptinhalte des Lernprogramms. Freiwillige Vertiefungen findest du in einer eigenen Themenauswahl; sie zählen hier nicht mit.';
}
competencies.forEach(group => {
  const article = document.createElement('article');
  const heading = document.createElement('h2'); heading.textContent = group.title; article.append(heading);
  group.items.forEach(item => {
    const row = document.createElement('div'); row.className = 'skill'; row.id = 'row-' + item.id; row.dataset.id = item.id;
    const label = document.createElement('label'); label.htmlFor = 'skill-' + item.id; label.textContent = item.text;
    const select = document.createElement('select'); select.id = label.htmlFor;
    for (const [value, text] of [['', 'Noch nicht eingeschätzt'], ['practice', 'Das möchte ich noch üben'], ['help', 'Das kann ich mit Hilfe'], ['secure', 'Das kann ich sicher']]) {
      const option = document.createElement('option'); option.value = value; option.textContent = text; select.append(option);
    }
    select.value = levels.has(saved[item.id]) ? saved[item.id] : '';
    select.onchange = () => { saved[item.id] = select.value; persist(); update(); };
    const link = document.createElement('a'); link.href = '../../index.html#' + item.route; link.target = '_top'; link.textContent = 'Üben / nachholen →';
    row.append(label, select, link);
    if (item.optional) {
      const note = document.createElement('p'); note.className = 'extra-note';
      note.textContent = 'Öffne in der verlinkten Aufgabe den Abschnitt „Freiwillige Vertiefung“ unter den Materialien.'; row.append(note);
    }
    article.append(row);
  });
  $('groups').append(article);
});
$('filter').onchange = update;
$('scope').onchange = update;
$('reset').onclick = () => {
  if (confirm('Alle Einschätzungen in diesem Selbstcheck zurücksetzen – auch außerhalb der aktuellen Filterauswahl?')) {
    saved = {}; document.querySelectorAll('.skill select').forEach(select => { select.value = ''; }); persist(); update();
  }
};
update();
