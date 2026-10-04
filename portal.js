'use strict';
const modules = [
{"id": "selbstcheck", "title": "Mein Selbstcheck", "track": "0 · Üben und den Lernstand prüfen", "path": "module/selbstcheck/index.html", "type": "Ich kann … · mit direkten Übungslinks", "description": "Schätze deine Kompetenzen ein und finde gezielt passende Erklärungen und Übungen.", "goal": "Schätze deine Kompetenzen ein und finde gezielt passende Erklärungen und Übungen.", "tasks": ["Wähle einen passenden Bereich.", "Bearbeite zunächst nur eine Aufgabe oder eine Kompetenz.", "Nutze Erklärungen und Hilfen, wenn du noch unsicher bist."], "help": "Du kannst jederzeit zur Themenübersicht zurückkehren. Dein gespeicherter Lernstand bleibt erhalten."},
{"id": "klausur", "title": "Klausurähnliche Aufgaben", "track": "0 · Üben und den Lernstand prüfen", "path": "module/grundlagen/index.html?view=klausurOverview", "type": "Vier Themenbereiche · sieben Aufgaben", "description": "Wähle Aufgaben zu Redoxreaktionen, galvanischen Zellen, Elektrolyse oder Batterien und Akkus.", "goal": "Wähle Aufgaben zu Redoxreaktionen, galvanischen Zellen, Elektrolyse oder Batterien und Akkus.", "tasks": ["Wähle einen passenden Bereich.", "Bearbeite zunächst nur eine Aufgabe oder eine Kompetenz.", "Nutze Erklärungen und Hilfen, wenn du noch unsicher bist."], "help": "Du kannst jederzeit zur Themenübersicht zurückkehren. Dein gespeicherter Lernstand bleibt erhalten."},
{"id": "redox", "title": "Redoxreaktionen", "track": "1 · Grundlagen und galvanische Zellen", "path": "module/grundlagen/index.html?view=redoxOverview", "type": "Erklärungen · drei Übungsstufen", "description": "Erkenne Elektronenabgabe und -aufnahme und stelle Teilgleichungen und Gesamtreaktionen auf.", "goal": "Erkenne Elektronenabgabe und -aufnahme und stelle Teilgleichungen und Gesamtreaktionen auf.", "tasks": ["Wähle einen passenden Bereich.", "Bearbeite zunächst nur eine Aufgabe oder eine Kompetenz.", "Nutze Erklärungen und Hilfen, wenn du noch unsicher bist."], "help": "Du kannst jederzeit zur Themenübersicht zurückkehren. Dein gespeicherter Lernstand bleibt erhalten."},
{"id": "potenziale", "title": "Elektrodenpotenziale", "track": "1 · Grundlagen und galvanische Zellen", "path": "module/grundlagen/index.html?view=electrodePotentials", "type": "Standardpotenziale · Zellspannung", "description": "Verstehe die Bezugselektrode, vergleiche Halbzellen und berechne Zellspannungen.", "goal": "Verstehe die Bezugselektrode, vergleiche Halbzellen und berechne Zellspannungen.", "tasks": ["Wähle einen passenden Bereich.", "Bearbeite zunächst nur eine Aufgabe oder eine Kompetenz.", "Nutze Erklärungen und Hilfen, wenn du noch unsicher bist."], "help": "Du kannst jederzeit zur Themenübersicht zurückkehren. Dein gespeicherter Lernstand bleibt erhalten."},
 {id:'daniell',path:'module/grundlagen/public/Simulationen/Galvanische_Zelle/index.html',title:'Daniell-Element',track:'1 · Grundlagen und galvanische Zellen',type:'Simulation · Elektroden im Teilchenmodell',description:'Untersuche Zink- und Kupferelektrode, Elektronenfluss und den Ladungsausgleich durch die Ionenbrücke.',goal:'Du kannst erklären, wie eine galvanische Zelle elektrische Energie bereitstellt.',tasks:['Verschaffe dir zuerst einen Überblick über die galvanische Zelle.','Öffne nacheinander die Zink- und Kupferansicht und beschreibe die Teilreaktionen.','Vergleiche den späteren Zustand und bearbeite den Selbstcheck.'],help:'Anode: Oxidation von Zink. Kathode: Reduktion der Kupfer-Ionen. Halte Elektronenfluss im Leiter und Ionenbewegung in den Lösungen auseinander.'},

{"id": "lithium", "title": "Lithium-Ionen-Akku", "track": "1 · Grundlagen und galvanische Zellen", "type": "Übung · acht Schritte · mit Folienhilfen", "description": "Übe Aufbau, Elektronen- und Ionenwege, Separator sowie Teil- und Gesamtreaktion des Handy-Akkus.", "goal": "Du kannst das Entladen im Graphit-Metalloxid-Modell erklären.", "tasks": ["Wiederhole Aufbau und Ladungstransport.", "Stelle die Teilreaktionen und die Gesamtreaktion auf.", "Begründe die Funktion des Separators und die Eignung für mobile Geräte."], "help": "Die Unterrichtsfolien lassen sich als Hilfe öffnen. Stoffe dürfen auf derselben Gleichungsseite in beliebiger Reihenfolge stehen."},
 {id:'saeure',title:'Säurekorrosion',track:'2 · Korrosion verstehen und verhindern',type:'Geführter Lernweg · mit gestuften Hilfen',description:'Verstehe, warum Eisen in saurer Lösung reagiert, und baue die Teilgleichungen in kleinen Schritten.',goal:'Du kannst erklären, wer Elektronen abgibt und wer sie aufnimmt.',tasks:['Öffne den Abschnitt „Vorwissen“ und probiere eine Antwort aus.','Gehe bei den Teilreaktionen zuerst nur die Anode durch. Öffne einen Tipp, sobald du ihn brauchst.','Notiere am Ende: Was unterscheidet Säure- von Sauerstoffkorrosion?'],help:'Du darfst Aufgaben wiederholen. Die Tipps helfen dir beim Prüfen von Atomen, Ladungen und Reaktionswegen.'},
 {id:'sauerstoff',title:'Sauerstoffkorrosion',track:'2 · Korrosion verstehen und verhindern',type:'Eigener Lernweg · acht kleine Schritte',description:'Vom Rost am Fahrrad zum Lokalelement: Entdecke die Teilreaktionen, den Wasserfilm und die Bildung von Rost.',goal:'Du kannst erklären, wie Eisen, Wasser und Sauerstoff zusammen zur Korrosion führen.',tasks:['Beginne mit einem Alltagsbeispiel und den Bedingungen des Rostens.','Baue die beiden Teilgleichungen mit den Tipps auf.','Erkunde das Lokalelement und formuliere am Ende deine eigene Erklärung.'],help:'Jeder Schritt enthält nur eine Prüfaufgabe. Du darfst Tipps öffnen und Antworten wiederholen. Dein Lernstand wird im Browser gespeichert.'},
 {id:'korrosion',title:'Korrosion und Korrosionsschutz',track:'2 · Korrosion verstehen und verhindern',type:'Anwendungsfälle · Modelle · Übungen',description:'Untersuche Sauerstoffkorrosion, Lackschäden, Zinkschutz, Kontakt mit Kupfer und Sauerstoffgefälle.',goal:'Du kannst eine Schutzmaßnahme mit den Vorgängen an Anode und Kathode begründen.',tasks:['Beginne mit „Start und Diagnose“.','Bearbeite zunächst nur den lackierten Nagel und die beschädigte Lackschicht.','Vergleiche anschließend: Warum kann Zink schützen, während Kupfer die Korrosion von Eisen begünstigt?'],help:'Die weiteren Fälle sind für spätere Unterrichtsphasen gedacht. Nutze die Hilfen und Kausalketten im Programm.'},
 {id:'wasserstoff',title:'Wasserstoff und Brennstoffzelle',track:'3 · Energie speichern und nutzen',type:'Lernweg · Teilchenanimationen · Aufgaben',description:'Vom Hofmann-Apparat zur PEM-Brennstoffzelle: Gase, Teilreaktionen, Ladungswege und Katalyse.',goal:'Du kannst Elektrolyse und Brennstoffzelle als entgegengesetzte Stoffumwandlungen erklären.',tasks:['Beginne bei „Vorwissen“ und „Gase entdecken“.','Beobachte das Gasvolumenverhältnis und ordne die Elektroden zu.','Untersuche später die Brennstoffzelle: Wo bewegen sich Elektronen, wo Protonen?'],help:'Du kannst die Lernschritte frei wählen und Lösungen heranziehen. Bearbeite zunächst nur die Schritte aus deinem Unterrichtsauftrag.'},
 {id:'solarlabor',title:'Solar-Wasserstoff-Labor',track:'3 · Energie speichern und nutzen',type:'Simulation · Aufbauen und experimentieren',description:'Montiere Hofmann-Apparat und Brennstoffzelle, verbinde die Anlage und bringe den Motor zum Laufen.',goal:'Du kannst den Weg von Sonnenlicht über Wasserstoff zu elektrischer Energie beschreiben.',tasks:['Öffne zuerst den Hofmann-Apparat. Setze die Elektroden ein und beachte beim Befüllen die Hähne.','Montiere danach die Brennstoffzelle. Prüfe die Montage, bevor du die Anlage verbindest.','Sammle Gase. Untersuche dann, ob der Motor auch ohne Beleuchtung weiterlaufen kann.'],help:'Auf einem kleinen Bildschirm kannst du die Werkbank seitlich verschieben. Nutze „Mehr Platz fürs Programm“. Dein Versuchsaufbau bleibt beim Themenwechsel erhalten, solange diese Seite geöffnet bleibt.'}
];
const $=id=>document.getElementById(id);
const storageKey='elektrochemie-lernraum-v1';
let saved={last:'redox',done:{},notes:{}};
try{const data=JSON.parse(localStorage.getItem(storageKey));if(data&&typeof data==='object')saved={...saved,...data,done:data.done||{},notes:data.notes||{}};}catch{}
let active=null;
const frames=new Map();
function persist(){try{localStorage.setItem(storageKey,JSON.stringify(saved));$('saveStatus').textContent='In diesem Browser gespeichert.';}catch{$('saveStatus').textContent='Speichern ist in diesem Browser nicht möglich. Notiere wichtige Ergebnisse zusätzlich im Heft.';}}
function updateProgress(){const n=modules.filter(m=>saved.done[m.id]).length;$('progress').textContent=`${n} von ${modules.length} Themen selbst als bearbeitet markiert`;document.querySelectorAll('[data-status]').forEach(el=>{el.textContent=saved.done[el.dataset.status]?'Für heute bearbeitet':'Bereit zum Entdecken';});const last=modules.find(m=>m.id===saved.last)||modules[0];$('resume').textContent=`Weiter mit ${last.title}`;}
for(const track of [...new Set(modules.map(m=>m.track))]){
 const section=document.createElement('section');section.className='track';
 const title=document.createElement('h3');title.textContent=track;section.append(title);
 const grid=document.createElement('div');grid.className='card-grid';section.append(grid);
 modules.filter(m=>m.track===track).forEach(m=>{
  const card=document.createElement('a');card.className='module-card';card.href='#'+m.id;
  const picture=document.createElement('img');picture.src=`assets/${m.id}.png`;picture.alt='';picture.className='card-art';picture.width=1536;picture.height=1024;picture.loading="lazy";picture.decoding="async";
  const number=document.createElement('span');number.className='card-number';number.textContent=String(modules.indexOf(m)+1).padStart(2,'0');number.setAttribute('aria-hidden','true');
  const body=document.createElement('div');body.className='card-body';
  const tag=document.createElement('span');tag.className='tag';tag.textContent=m.type;
  const h=document.createElement('h3');h.textContent=m.title;
  const desc=document.createElement('p');desc.textContent=m.description;
  const status=document.createElement('p');status.className='muted';status.dataset.status=m.id;
  const link=document.createElement('span');link.className='card-start';link.textContent='Thema entdecken →';
  body.append(tag,h,desc,status,link);card.append(picture,number,body);grid.append(card);
 });$('cards').append(section);
}
function pauseModule(id){const frame=frames.get(id);if(frame)frame.contentWindow?.postMessage({type:'elektrochemie-pause'},location.protocol==='file:'?'*':location.origin);}
function route(){
 const raw=location.hash.slice(1), parts=raw.split('?'), id=parts[0]==='grundlagen'?'redox':parts[0], m=modules.find(x=>x.id===id);
 const task=new URLSearchParams(parts[1]||'').get('task');
 if(active&&active!==id)pauseModule(active);
 document.body.classList.remove('focus-mode');$('focus').setAttribute('aria-pressed','false');$('focus').textContent='Mehr Platz fürs Programm';
 active=m?.id||null;
 $('overview').hidden=!!m;$('workspace').hidden=!m;$('focus').hidden=!m;
 $('allTopics').hidden=!m;
 for(const [key,frame] of frames)frame.hidden=key!==active;
 if(!m){$('loadStatus').textContent='';return;}
 saved.last=m.id;persist();updateProgress();
 $('moduleTitle').textContent=m.title;$('moduleTrack').textContent=m.track;$('moduleGoal').textContent=m.goal;$('moduleHelp').textContent=m.help;
 $('moduleTasks').replaceChildren(...m.tasks.map(t=>{const li=document.createElement('li');li.textContent=t;return li;}));
 let path=m.path || `module/${m.id}/index.html`;if(m.id==='klausur'&&task)path='module/grundlagen/index.html?view=klausurDetail&task='+encodeURIComponent(task);if(frames.has(m.id)&&frames.get(m.id).dataset.path!==path){frames.get(m.id).remove();frames.delete(m.id);}$('standalone').href=path;
 $('complete').checked=!!saved.done[m.id];$('notes').value=saved.notes[m.id]||'';
 $('nextModule').textContent=modules.indexOf(m)===modules.length-1?'Zur Themenübersicht':'Nächster Themenbaustein';
 if(!frames.has(m.id)){
  const frame=document.createElement('iframe');frame.title=m.title;frame.src=path+(path.includes("?")?"&":"?")+"revision=11";frame.dataset.path=path;
  frame.addEventListener('load',()=>{frame.dataset.ready='true';if(active===m.id)$('loadStatus').textContent='Programm geöffnet. Du arbeitest jetzt direkt im Lernprogramm.';else pauseModule(m.id);});
  frame.addEventListener('error',()=>{if(active===m.id)$('loadStatus').textContent='Das Programm konnte nicht geladen werden. Versuche „Einzeln öffnen“.';});
  frames.set(m.id,frame);$('frames').append(frame);
 }
 $('loadStatus').textContent=frames.get(m.id).dataset.ready?'Programm geöffnet.':'Programm wird geladen …';
 $('main').focus({preventScroll:true});
}
$('resume').addEventListener('click',()=>{location.hash=modules.some(m=>m.id===saved.last)?saved.last:'redox';});
$('complete').addEventListener('change',()=>{if(!active)return;saved.done[active]=$('complete').checked;persist();updateProgress();});
$('notes').addEventListener('input',()=>{if(!active)return;saved.notes[active]=$('notes').value;persist();});
$('nextModule').addEventListener('click',()=>{const i=modules.findIndex(m=>m.id===active);location.hash=modules[i+1]?.id||'ueberblick';});
$('focus').addEventListener('click',()=>{const on=document.body.classList.toggle('focus-mode');$('focus').setAttribute('aria-pressed',String(on));$('focus').textContent=on?'Einstieg und Hilfen anzeigen':'Mehr Platz fürs Programm';});
window.addEventListener('hashchange',route);
document.addEventListener('visibilitychange',()=>{if(document.hidden&&active)pauseModule(active);});
updateProgress();route();
