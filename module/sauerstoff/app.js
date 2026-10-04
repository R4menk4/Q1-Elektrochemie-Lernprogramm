'use strict';
const steps=[
  {
    "title": "Rost in deinem Alltag",
    "body": "<img class=\"hero-img\" src=\"rost.png\" alt=\"Illustration einer rostigen und einer geschützten Schraube\"><p>Rost ist mehr als ein brauner Fleck: Eisen wird nach und nach abgebaut. Schau dir die drei Beispiele aus der Präsentation an.</p><div class=\"cases\"><div class=\"case\"><b>Fahrradkette</b><p>Eine nasse Stahlkette kann rosten und schwergängig werden. Bei starker Schädigung kann sie reißen.</p></div><div class=\"case\"><b>Bremsleitung</b><p>Wird eine stählerne Bremsleitung durch Korrosion undicht, können Bremsflüssigkeit und Bremsdruck verloren gehen.</p></div><div class=\"case\"><b>Betonbrücke</b><p>Wenn der Schutz des Bewehrungsstahls geschädigt ist, kann er rosten. Rostprodukte brauchen mehr Platz und können Beton absprengen; Stahlverlust kann die Tragfähigkeit vermindern.</p></div></div>",
    "q": {
      "id": "alltag",
      "ask": "Warum kann Rost die Sicherheit eines Bauteils beeinträchtigen?",
      "options": [
        "Rost färbt nur die Oberfläche.",
        "Eisen wird abgebaut; das Bauteil kann an Festigkeit verlieren.",
        "Rost macht jedes Bauteil sofort unbrauchbar."
      ],
      "correct": 1,
      "why": "Entscheidend sind Materialverlust und Schädigung. Ein kleiner Rostfleck bedeutet nicht automatisch den sofortigen Ausfall.",
      "hints": [
        "Unterscheide eine reine Farbveränderung von einer Veränderung des Materials.",
        "Überlege, was ein Bauteil belastbar macht und wie Korrosion diese Eigenschaft beeinflussen könnte."
      ]
    }
  },
  {
    "title": "Was braucht Eisen zum Rosten?",
    "body": "<p>Für die hier betrachtete Sauerstoffkorrosion kommen <b>Eisen, Wasser und Sauerstoff</b> zusammen. Schon ein dünner Feuchtigkeitsfilm reicht als Reaktionsraum.</p><p>Gelöste Ionen erhöhen die elektrische Leitfähigkeit des Wasserfilms. Deshalb kann Salz die Korrosion beschleunigen. Salz ist aber keine notwendige Voraussetzung.</p>",
    "q": {
      "id": "bedingungen",
      "ask": "Welche Bedingungen ermöglichen das Rosten auch ohne zugesetztes Salz?",
      "options": [
        "Eisen, trockene Luft, kein Wasserfilm.",
        "Eisen und sauerstofffreies Wasser, dauerhaft ohne Sauerstoffzufuhr.",
        "Eisen, ein Wasserfilm und zugänglicher Sauerstoff."
      ],
      "correct": 2,
      "why": "Wasserfilm und Sauerstoff ermöglichen den betrachteten Prozess. Gelöste Ionen erleichtern den Ladungstransport; Salz ist kein Pflichtbestandteil.",
      "hints": [
        "Prüfe die drei beschriebenen Umgebungen jeweils auf Reaktionspartner und Transportmöglichkeiten.",
        "Unterscheide notwendige Bedingungen von Stoffen, die den Vorgang nur beschleunigen."
      ]
    }
  },
  {
    "title": "Anode: Eisen gibt Elektronen ab",
    "body": "<p>Beginne mit nur einem Eisenatom: Es gibt <b>zwei Elektronen</b> ab und wird zu einem <b>Eisen(II)-Ion</b>.</p><p>Dieser Vorgang heißt <b>Oxidation</b>. Der Ort der Oxidation heißt <b>Anode</b>. Hier wird das Eisen abgebaut.</p>",
    "q": {
      "id": "anode",
      "ask": "Ergänze die Teilgleichung der Oxidation.",
      "equation": [
        "Fe",
        "Fe2+ + 2e-"
      ],
      "hints": [
        "Trenne die Fragen: Was geschieht mit dem Eisenatom und was geschieht mit seiner Ladung?",
        "Zähle die Atome und addiere die Ladungen auf jeder Seite deines Entwurfs.",
        "Prüfe anhand der Bedeutung von Oxidation, auf welcher Seite Elektronen stehen müssen."
      ],
      "why": "Ein Eisenatom bleibt erhalten. Rechts ergeben +2 und zweimal −1 zusammen 0: Die Ladung ist auf beiden Seiten gleich."
    }
  },
  {
    "title": "Kathode: Sauerstoff nimmt Elektronen auf",
    "body": "<p>Die abgegebenen Elektronen werden an einer anderen Stelle verbraucht: <b>Sauerstoff nimmt sie auf</b>. Das ist die <b>Reduktion</b> an der <b>Kathode</b>.</p><p>Im annähernd neutralen Wasserfilm entstehen dabei Hydroxid-Ionen. Wasser reagiert mit.</p><p class=\"eq-display\">O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻</p><p>Prüfe in Ruhe: links und rechts jeweils vier O-Atome, vier H-Atome und die Gesamtladung −4.</p>",
    "q": {
      "id": "kathode",
      "ask": "Baue die kathodische Teilgleichung nach.",
      "equation": [
        "O2 + 2H2O + 4e-",
        "4OH-"
      ],
      "hints": [
        "Notiere die beteiligten Teilchensorten zunächst ohne Koeffizienten.",
        "Gleiche die Anzahl der Sauerstoff- und Wasserstoffatome systematisch ab.",
        "Vergleiche die Gesamtladungen beider Seiten. Verändere zum Ausgleichen Koeffizienten, nicht die Formeln."
      ],
      "why": "Sauerstoff nimmt Elektronen auf. Es entstehen Hydroxid-Ionen; bei dieser Teilreaktion entsteht kein Wasserstoffgas."
    }
  },
  {
    "title": "Das Lokalelement entdecken",
    "body": "<p>Auf demselben Eisenstück können anodische und kathodische Bereiche entstehen. Du brauchst keine zwei verschiedenen Metalle. Tippe die vier Stationen des Modells an.</p><svg class=\"model\" viewBox=\"0 0 740 300\" role=\"img\" aria-label=\"Schematischer Wasserfilm über Eisen. Anode links, Kathode rechts. Elektronen fließen im Metall von links nach rechts, Ionen bewegen sich im Wasserfilm.\"><path d=\"M45 165 Q370 -70 695 165Z\" fill=\"#d4ecf4\"/><rect x=\"45\" y=\"165\" width=\"650\" height=\"105\" rx=\"8\" fill=\"#bac6ce\"/><text x=\"330\" y=\"250\" fill=\"#193c49\">Eisen</text><g data-zone=\"0\"><circle cx=\"165\" cy=\"174\" r=\"27\" fill=\"#bc6633\"/><text x=\"80\" y=\"215\">Anode: Fe → Fe²⁺</text><path d=\"M165 148v-38\" stroke=\"#bc6633\" stroke-width=\"5\"/><text x=\"138\" y=\"100\">Fe²⁺ ↑</text></g><g data-zone=\"1\"><path d=\"M255 187h200l-17-10m17 10-17 10\" fill=\"none\" stroke=\"#075966\" stroke-width=\"5\"/><text x=\"298\" y=\"216\">Elektronen →</text></g><g data-zone=\"2\"><circle cx=\"570\" cy=\"174\" r=\"27\" fill=\"#087f88\"/><text x=\"487\" y=\"215\">Kathode: O₂ → OH⁻</text><text x=\"520\" y=\"116\">O₂ + H₂O</text></g><g data-zone=\"3\"><path d=\"M255 125h195m-195 0 17-10m-17 10 17 10m178-10-17-10m17 10-17 10\" fill=\"none\" stroke=\"#346caa\" stroke-width=\"4\"/><text x=\"284\" y=\"95\">Ionenbewegung</text></g></svg><div class=\"model-controls\"><button data-model=\"0\" aria-pressed=\"false\">1 · Anode</button><button data-model=\"1\" aria-pressed=\"false\">2 · Elektronen</button><button data-model=\"2\" aria-pressed=\"false\">3 · Kathode</button><button data-model=\"3\" aria-pressed=\"false\">4 · Wasserfilm</button></div><p id=\"modelText\" class=\"feedback\">Wähle eine Station. Die Pfeile im Wasserfilm stehen allgemein für Ionenbewegungen, nicht für eine feste Bewegungsrichtung aller Ionen.</p>",
    "q": {
      "id": "wege",
      "ask": "Wie werden Ladungen im Lokalelement transportiert?",
      "options": [
        "Elektronen fließen durch das Metall, Ionen bewegen sich im Wasserfilm.",
        "Elektronen schwimmen durch den Wasserfilm zur Kathode.",
        "Eisenatome fließen als Strom durch die Luft."
      ],
      "correct": 0,
      "why": "Das Metall leitet Elektronen. Der Wasserfilm ist ein Elektrolyt: Bewegliche Ionen ermöglichen dort den Ladungstransport.",
      "hints": [
        "Unterscheide die beiden Medien im Modell.",
        "Überlege für jedes Medium, welche geladenen Teilchen sich darin bewegen können."
      ]
    }
  },
  {
    "title": "Wie entstehen Rostprodukte?",
    "body": "<p>Die Teilreaktionen liefern zunächst <b>Fe²⁺</b> und <b>OH⁻</b>. Diese Ionen können Eisen(II)-hydroxid bilden:</p><p class=\"eq-display\">Fe²⁺ + 2 OH⁻ → Fe(OH)₂</p><p>Mit weiterem Sauerstoff entstehen anschließend Eisen(III)-Verbindungen. Eine vereinfachte Darstellung aus der Präsentation lautet:</p><p class=\"eq-display\">4 Fe(OH)₂ + O₂ + 2 H₂O → 4 Fe(OH)₃</p><p><b>Rost ist ein Gemisch</b> verschiedener Eisenoxide, Oxidhydroxide und wasserhaltiger Verbindungen. Fe(OH)₂ allein ist noch nicht der typische braune Rost. Die poröse Rostschicht schützt das Eisen nicht dauerhaft.</p>",
    "q": {
      "id": "rost",
      "ask": "Warum kann Eisen unter einer Rostschicht weiter korrodieren?",
      "options": [
        "Weil Rost eine dichte, dauerhaft schützende Schicht bildet.",
        "Weil die poröse Schicht Wasser und Sauerstoff nicht zuverlässig fernhält.",
        "Weil Rost aus reinem Eisen besteht."
      ],
      "correct": 1,
      "why": "Die Rostschicht schirmt das Metall nicht dauerhaft ab. Wasser und Sauerstoff können weiterhin an noch vorhandenes Eisen gelangen.",
      "hints": [
        "Denke an die Struktur der Schicht statt nur an ihre Farbe.",
        "Prüfe, ob die genannten Eigenschaften einen dauerhaften Abschluss gegen die Umgebung ermöglichen."
      ]
    }
  },
  {
    "title": "Sauerstoffkorrosion oder Säurekorrosion?",
    "body": "<p>In beiden Fällen gibt Eisen Elektronen ab: <b>Fe → Fe²⁺ + 2 e⁻</b>.</p><p>Der Unterschied liegt bei der kathodischen Reaktion:</p><ul><li><b>Sauerstoffkorrosion im neutralen Wasserfilm:</b> Sauerstoff wird reduziert, OH⁻ entsteht.</li><li><b>Säurekorrosion:</b> Oxonium-Ionen werden reduziert, Wasserstoffgas entsteht: 2 H₃O⁺ + 2 e⁻ → H₂ + 2 H₂O.</li></ul><p>Reale Umgebungen können mehrere Prozesse gleichzeitig ermöglichen. Hier vergleichst du die beiden Grundmodelle.</p>",
    "q": {
      "id": "vergleich",
      "ask": "Was unterscheidet die beiden hier betrachteten Grundmodelle?",
      "options": [
        "Nur bei Sauerstoffkorrosion wird Eisen oxidiert.",
        "Bei Sauerstoffkorrosion entsteht an der Kathode immer Wasserstoffgas.",
        "Bei Sauerstoffkorrosion wird O₂ reduziert; bei Säurekorrosion entstehen aus H₃O⁺ unter Elektronenaufnahme H₂ und Wasser."
      ],
      "correct": 2,
      "why": "Die Oxidation des Eisens ist gleich. Unterscheiden kannst du die Modelle anhand der kathodischen Teilreaktion.",
      "hints": [
        "Vergleiche Anoden- und Kathodenreaktion getrennt.",
        "Notiere je Modell Ausgangsteilchen und Produkte und suche dann Gemeinsamkeiten und Unterschiede."
      ]
    }
  },
  {
    "title": "Dein Wissen anwenden",
    "body": "<p>Du hast die Bausteine kennengelernt. Verbinde sie jetzt zu einer Erklärung.</p><label for=\"reflection\"><b>Warum kann ein feuchtes, salziges Fahrradteil schneller korrodieren als ein vergleichbares Teil mit salzarmem Wasserfilm?</b></label><p>Schreibhilfe: „Eisen gibt … ab. Sauerstoff nimmt … auf. Die gelösten Ionen …“</p><textarea id=\"reflection\" placeholder=\"Zwei oder drei Sätze reichen.\"></textarea><details><summary>Mit einer Mustererklärung vergleichen</summary><p>Eisen gibt an anodischen Stellen Elektronen ab. Diese fließen im Metall zu kathodischen Stellen, wo Sauerstoff unter Mitwirkung von Wasser zu Hydroxid-Ionen reduziert wird. Die gelösten Ionen erhöhen die Leitfähigkeit des Wasserfilms und erleichtern den Ladungstransport. Dadurch kann die Korrosion schneller ablaufen. Feuchtigkeit und Sauerstoff bleiben erforderlich.</p></details>",
    "q": {
      "id": "transfer",
      "ask": "Welche Begründung passt zum Schutz durch eine unbeschädigte Lackschicht?",
      "options": [
        "Lack versorgt das Eisen mit zusätzlichem Sauerstoff.",
        "Lack erschwert den Kontakt des Eisens mit Wasser und Sauerstoff.",
        "Lack macht Eisen zu einem anderen Element."
      ],
      "correct": 1,
      "why": "Eine intakte Lackschicht wirkt als Barriere. Was bei Schäden oder Kontakt mit anderen Metallen geschieht, kannst du im Programm „Korrosion und Korrosionsschutz“ untersuchen.",
      "hints": [
        "Erinnere dich an die Bedingungen, die der Korrosionsvorgang braucht.",
        "Überlege, welche dieser Bedingungen durch eine intakte Beschichtung beeinflusst werden könnte."
      ]
    }
  }
];
const key='sauerstoffkorrosion-lernweg-v1', $=id=>document.getElementById(id);
let state={step:0,answers:{},solved:{},hints:{},reflection:''};
try{const x=JSON.parse(localStorage.getItem(key));if(x&&typeof x==='object')state={...state,...x,answers:x.answers||{},solved:x.solved||{},hints:x.hints||{}};}catch{}
state.step=Number.isInteger(state.step)?Math.max(0,Math.min(7,state.step)):0;
function save(){try{localStorage.setItem(key,JSON.stringify(state));$('save').textContent='Dein Lernstand ist in diesem Browser gespeichert.';}catch{$('save').textContent='Speichern ist hier nicht möglich. Sichere deinen Merksatz im Heft.';}}
function normalize(s){return s.replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).replace(/[⁺]/g,'+').replace(/[⁻−–]/g,'-').replace(/[\s^]/g,'').toLowerCase();}
function parseSide(value){let rest=normalize(value),out={};const species=['fe(oh)3','fe(oh)2','fe2+','h3o+','oh-','h2o','o2','h2','fe','e-'];while(rest){const n=rest.match(/^\d+/);const count=n?Number(n[0]):1;if(!count||count>1000)return null;if(n)rest=rest.slice(n[0].length);const item=species.find(x=>rest.startsWith(x));if(!item)return null;out[item]=(out[item]||0)+count;rest=rest.slice(item.length);if(rest){if(rest[0]!=='+')return null;rest=rest.slice(1);if(!rest)return null;}}return Object.keys(out).length?out:null;}
function equationCorrect(left,right,target){const actual=[parseSide(left),parseSide(right)],expected=target.map(parseSide);if(actual.some(x=>!x))return false;let ratio=null;for(let i=0;i<2;i++){if(Object.keys(actual[i]).length!==Object.keys(expected[i]).length)return false;for(const [s,n]of Object.entries(expected[i])){if(!actual[i][s])return false;const r=actual[i][s]/n;if(ratio===null)ratio=r;else if(Math.abs(r-ratio)>1e-9)return false;}}return true;}
function feedback(text,good){$('feedback').textContent=text;$('feedback').className='feedback'+(good?' good':'');}
function progress(){const n=steps.filter(s=>state.solved[s.q.id]).length;$('progress').textContent=`Schritt ${state.step+1} von 8 · ${n} von 8 Aufgaben gelöst`;$('bar').value=n;}
function render(){const s=steps[state.step],q=s.q;$('jump').value=state.step;$('lesson').innerHTML=`<p class="eyebrow">Schritt ${state.step+1} von 8</p><h1>${s.title}</h1>${s.body}<section class="question"><h2>${q.ask}</h2><div id="answer"></div><p id="feedback" class="feedback" role="status"></p><button id="hint" class="secondary">Einen Tipp öffnen</button><div id="hints" class="hint"></div></section>${state.step===7?'<h2>Das kannst du jetzt wiederholen</h2><div id="review" class="review"></div>':''}`;
 if(q.equation){$('answer').innerHTML='<p>Schreibe z. B. Fe2+, O2, H2O und e-. Hoch- und Tiefzahlen funktionieren ebenfalls. Die Reihenfolge auf einer Seite ist frei.</p><div class="equation"><label>Edukte (links)<input id="left" autocomplete="off" autocapitalize="off" spellcheck="false"></label><span>→</span><label>Produkte (rechts)<input id="right" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div><p><button id="check">Gleichung prüfen</button></p>';const a=state.answers[q.id]||['',''];$('left').value=a[0]||'';$('right').value=a[1]||'';for(const id of ['left','right'])$(id).addEventListener('input',()=>{state.answers[q.id]=[$('left').value,$('right').value];delete state.solved[q.id];feedback('',false);progress();save();});$('check').onclick=()=>{const ok=equationCorrect($('left').value,$('right').value,q.equation);state.solved[q.id]=ok;feedback(ok?'Richtig. '+q.why:'Noch nicht ganz. Prüfe die Teilchen, ihre Anzahl und die Ladungen. Ein Tipp zeigt dir den nächsten Baustein.',ok);progress();save();};
 }else{const box=document.createElement('div');box.className='choices';q.options.forEach((text,i)=>{const b=document.createElement('button');b.className='choice';b.textContent=text;b.setAttribute('aria-pressed',String(state.answers[q.id]===i));b.onclick=()=>{state.answers[q.id]=i;const ok=i===q.correct;state.solved[q.id]=ok;box.querySelectorAll('button').forEach((el,j)=>el.setAttribute('aria-pressed',String(j===i)));feedback(ok?'Richtig. '+q.why:'Noch nicht ganz. '+q.hints[0]+' Du kannst direkt eine andere Antwort ausprobieren.',ok);progress();save();};box.append(b);});$('answer').append(box);}
 function hints(){const n=Math.min(state.hints[q.id]||0,q.hints.length);$('hints').replaceChildren(...q.hints.slice(0,n).map(t=>{const p=document.createElement('p');p.textContent=t;return p;}));$('hint').disabled=n===q.hints.length;$('hint').textContent=n===q.hints.length?'Alle Tipps geöffnet':n?'Nächsten Tipp öffnen':'Einen Tipp öffnen';}
 $('hint').onclick=()=>{state.hints[q.id]=(state.hints[q.id]||0)+1;hints();save();};hints();if(state.solved[q.id])feedback('Schon gelöst. '+q.why,true);
 const modelTexts=['Anode: Eisenatome geben Elektronen ab und gehen als Fe²⁺-Ionen in den Wasserfilm über. Hier wird Metall abgebaut.','Elektronen bewegen sich durch das Eisen von anodischen zu kathodischen Bereichen.','Kathode: Gelöster Sauerstoff nimmt Elektronen auf. Zusammen mit Wasser entstehen OH⁻-Ionen.','Wasserfilm: Bewegliche Ionen ermöglichen den Ladungstransport im Elektrolyten. Elektronen fließen hier nicht frei durch die Lösung.'];document.querySelectorAll('[data-model]').forEach(b=>b.onclick=()=>{const i=Number(b.dataset.model);document.querySelectorAll('[data-zone]').forEach(z=>z.classList.toggle('lit',Number(z.dataset.zone)===i));document.querySelectorAll('[data-model]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));$('modelText').textContent=modelTexts[i];});
 if($('reflection')){$('reflection').value=state.reflection;$('reflection').oninput=()=>{state.reflection=$('reflection').value;save();};steps.slice(0,7).forEach((x,i)=>{const b=document.createElement('button');b.className='secondary';b.textContent=(state.solved[x.q.id]?'✓ ':'↗ ')+x.title;b.onclick=()=>go(i);$('review').append(b);});}
 $('back').disabled=state.step===0;$('next').disabled=state.step===7;$('next').textContent='Weiter →';progress();save();}
function go(i){state.step=i;render();$('lesson').focus({preventScroll:true});$('lesson').scrollIntoView({block:'start',behavior:'auto'});}
steps.forEach((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${i+1} · ${s.title}`;$('jump').append(o);});$('jump').onchange=()=>go(Number($('jump').value));$('back').onclick=()=>go(Math.max(0,state.step-1));$('next').onclick=()=>go(Math.min(7,state.step+1));$('reset').onclick=()=>{if(confirm('Deine Antworten, Tipps und den Merksatz in diesem Lernprogramm zurücksetzen?')){state={step:0,answers:{},solved:{},hints:{},reflection:''};render();}};render();
