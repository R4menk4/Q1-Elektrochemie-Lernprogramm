'use strict';
const steps=[
  {
    "title": "Ein Energiespeicher fürs Handy",
    "body": "<p>Beim Entladen liefert ein Akku elektrische Energie. Ein Ladegerät kann die chemische Veränderung weitgehend umkehren: Der Akku ist wiederaufladbar.</p><p>Du übst hier mit dem vereinfachten Graphit-Metalloxid-Modell aus euren Materialien. Alle folgenden Elektrodenreaktionen beziehen sich auf das <b>Entladen</b>.</p>",
    "q": {
      "id": "energie",
      "ask": "Welche Energieumwandlung nutzt dein Handy beim Entladen?",
      "options": [
        "Elektrische Energie wird als chemische Energie gespeichert.",
        "Chemische Energie wird in elektrische Energie umgewandelt.",
        "Energie wird aus dem Nichts erzeugt."
      ],
      "correct": 1,
      "why": "Beim Entladen treibt eine chemische Reaktion den elektrischen Strom an. Beim Laden wird elektrische Energie zugeführt.",
      "hints": [
        "Betrachte den Akku ohne angeschlossenes Ladegerät. Welche Energieform nutzt der Verbraucher?",
        "Unterscheide gespeicherte Energie und die Energie, die das Handy gerade erhält."
      ]
    }
  },
  {
    "title": "Vier Bauteile unterscheiden",
    "body": "<p>Die <b>negative Elektrode</b> enthält Graphit mit eingelagertem Lithium. Die <b>positive Elektrode</b> enthält ein Lithium-Metalloxid. Der <b>Elektrolyt</b> ermöglicht die Bewegung von Lithium-Ionen; der <b>Separator</b> hält die Elektroden getrennt.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-2.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-2.png\" alt=\"Unterrichtsfolie 2 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details>",
    "q": {
      "id": "aufbau",
      "ask": "Welche Zuordnung passt zum vereinfachten Modell?",
      "options": [
        "Negativ: Graphit; positiv: Metalloxid; Elektrolyt: Ionentransport.",
        "Negativ: Metalloxid; positiv: Graphit; Elektrolyt: Elektronenleitung.",
        "Beide Elektroden bestehen aus reinem Lithium-Metall."
      ],
      "correct": 0,
      "why": "Lithium wird in Wirtsmaterialien eingelagert. Der Elektrolyt ermöglicht Ionentransport im Inneren.",
      "hints": [
        "Ordne jedem Bauteil zunächst eine Funktion zu: Speicherung, Transport oder Trennung.",
        "Prüfe jede angebotene Zuordnung einzeln an der beschrifteten Übersicht."
      ]
    }
  },
  {
    "title": "Zwei Wege beim Entladen",
    "body": "<p><b>Elektronen</b> fließen von der negativen Graphit-Elektrode durch den äußeren Stromkreis und das Handy zur positiven Elektrode.</p><p><b>Li⁺-Ionen</b> wandern innen durch den Elektrolyten und den ionendurchlässigen Separator ebenfalls zur positiven Elektrode.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-2.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-2.png\" alt=\"Unterrichtsfolie 2 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details>",
    "q": {
      "id": "wege",
      "ask": "Welcher Weg ist richtig?",
      "options": [
        "Elektronen und Li⁺-Ionen fließen gemeinsam durch das Handy.",
        "Elektronen wandern durch den Separator, Li⁺-Ionen durch das Kabel.",
        "Elektronen fließen außen durch den Verbraucher, Li⁺-Ionen wandern innen durch den Elektrolyten."
      ],
      "correct": 2,
      "why": "Beide Ladungsträger sind am Prozess beteiligt, nehmen aber unterschiedliche Wege.",
      "hints": [
        "Zeichne zwei mögliche Wege: durch den Verbraucher und durch das Innere der Zelle.",
        "Überlege für jeden Weg, welches Medium dort liegt und welche Teilchen darin beweglich sind."
      ]
    }
  },
  {
    "title": "Negative Elektrode: Oxidation",
    "body": "<p>Beim Entladen wird Lithium aus dem Graphit ausgelagert. Im vereinfachten Modell entstehen C₆, Li⁺ und ein Elektron. Die negative Elektrode ist beim Entladen die <b>Anode</b>.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-3.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-3.png\" alt=\"Unterrichtsfolie 3 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details>",
    "q": {
      "id": "oxidation",
      "ask": "Stelle die Oxidation an der Graphit-Elektrode auf.",
      "equation": [
        "LiC6",
        "C6 + Li+ + e-"
      ],
      "why": "Li, C und die Gesamtladung bleiben erhalten. Das Elektron steht rechts: Es wird abgegeben.",
      "hints": [
        "Bestimme zuerst Ausgangsstoff und Reaktionsprodukte aus der Beschreibung.",
        "Zähle Lithium- und Kohlenstoffatome auf beiden Seiten deines Entwurfs.",
        "Vergleiche die Gesamtladungen und prüfe, auf welcher Seite Elektronen bei einer Oxidation stehen müssen."
      ]
    }
  },
  {
    "title": "Positive Elektrode: Reduktion",
    "body": "<p>Die positive Elektrode nimmt beim Entladen Li⁺-Ionen und Elektronen auf. Lithium wird in das Metalloxid eingelagert. Hier findet die <b>Reduktion</b> statt: Die positive Elektrode ist die <b>Kathode</b>.</p><p>Me steht als Platzhalter für ein Metall im vereinfachten Materialmodell. Li⁺ wird nicht als Lithium-Metall abgeschieden; die Elektronenaufnahme betrifft das Wirtsmaterial.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-4.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-4.png\" alt=\"Unterrichtsfolie 4 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details>",
    "q": {
      "id": "reduktion",
      "ask": "Stelle die Reduktion an der Metalloxid-Elektrode auf.",
      "equation": [
        "MeO2 + Li+ + e-",
        "LiMeO2"
      ],
      "why": "Ion und Elektron werden auf der linken Seite aufgenommen. LiMeO₂ beschreibt das lithiierte Metalloxid im vereinfachten Modell.",
      "hints": [
        "Unterscheide das Wirtsmaterial vor und nach der Einlagerung.",
        "Prüfe, welche Teilchen laut Beschreibung aufgenommen werden und was dies für ihre Position in der Gleichung bedeutet.",
        "Kontrolliere zum Schluss Atomanzahl und Gesamtladung auf beiden Seiten."
      ]
    }
  },
  {
    "title": "Beide Teilreaktionen verbinden",
    "body": "<p>Addiere die Teilreaktionen:</p><p class=\"eq-display\">LiC₆ → C₆ + Li⁺ + e⁻<br>MeO₂ + Li⁺ + e⁻ → LiMeO₂</p><p>Li⁺ und e⁻ stehen nach dem Addieren auf beiden Seiten. Kürze sie. Welche Gesamtreaktion bleibt?</p>",
    "q": {
      "id": "gesamt",
      "ask": "Stelle die Gesamtreaktion beim Entladen auf.",
      "equation": [
        "LiC6 + MeO2",
        "C6 + LiMeO2"
      ],
      "why": "Die intern übertragenen Lithium-Ionen und Elektronen tauchen in der Gesamtgleichung nicht mehr auf.",
      "hints": [
        "Schreibe beide Teilreaktionen untereinander und addiere ihre Seiten getrennt.",
        "Markiere Teilchen, die nach dem Addieren auf beiden Seiten vorkommen.",
        "Kürze gleiche Mengen auf beiden Seiten und kontrolliere anschließend die Atombilanz."
      ]
    }
  },
  {
    "title": "Der Separator verhindert direkten Kontakt",
    "body": "<p>Der Separator hält die Elektroden auseinander. Er ist <b>elektronisch isolierend</b>, aber für den Ionentransport durch den Elektrolyten durchlässig.</p><p>Wird diese Trennung beschädigt, kann ein innerer Kurzschluss entstehen. Dadurch kann sich der Akku stark erwärmen; Brandgefahr ist möglich.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-5.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-5.png\" alt=\"Unterrichtsfolie 5 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details>",
    "q": {
      "id": "separator",
      "ask": "Was muss der Separator ermöglichen und verhindern?",
      "options": [
        "Er muss alle Lithium-Ionen aufhalten.",
        "Er muss Ionentransport ermöglichen und direkten elektrischen Kontakt der Elektroden verhindern.",
        "Er muss Elektronen direkt zwischen den Elektroden leiten."
      ],
      "correct": 1,
      "why": "Ionentransport im Inneren ist nötig. Ein direkter elektronisch leitender Kontakt würde den äußeren Verbraucher umgehen.",
      "hints": [
        "Unterscheide direkten Kontakt der Elektroden und den Transport durch den Elektrolyten.",
        "Prüfe bei jeder Antwort, ob damit sowohl ein funktionierender Akku als auch die Trennung der Elektroden möglich wäre."
      ]
    }
  },
  {
    "title": "Vorteile abwägen und erklären",
    "body": "<p>Hohe Energiedichte, geringes Gewicht, kompakte Bauform, Wiederaufladbarkeit und geringe Selbstentladung machen Lithium-Ionen-Akkus für mobile Geräte geeignet. Nachteile sind unter anderem aufwendiges Recycling und mögliche Brandgefahr bei Beschädigung.</p><details><summary>Unterrichtsfolie als Hilfe öffnen</summary><a href=\"folie-7.png\" target=\"_blank\" rel=\"noopener\"><img style=\"width:100%;height:auto\" src=\"folie-7.png\" alt=\"Unterrichtsfolie 7 zum Lithium-Ionen-Akku. Erklärung im Text dieses Lernschritts.\"></a><p>Tippe auf die Folie, um sie größer zu öffnen.</p></details><label for=\"reflection\"><b>Erkläre mit eigenen Worten:</b> Warum braucht der Akku zwei getrennte Wege für Elektronen und Lithium-Ionen?</label><textarea id=\"reflection\" placeholder=\"Elektronen fließen … Lithium-Ionen wandern … Der Separator …\"></textarea><details><summary>Mustererklärung zum Vergleichen</summary><p>Elektronen fließen beim Entladen außen durch das Handy zur positiven Elektrode. Lithium-Ionen wandern innen durch den Elektrolyten dorthin. Der Separator verhindert direkten Kontakt der Elektroden, ermöglicht aber den Ionentransport. So wird der äußere Verbraucher nicht durch einen inneren Kurzschluss umgangen.</p></details>",
    "q": {
      "id": "bewertung",
      "ask": "Was bedeutet eine hohe Energiedichte für das Handy?",
      "options": [
        "Der Akku kann viel Energie bei geringem Gewicht bzw. kleinem Volumen speichern.",
        "Der Akku hält ohne Laden unbegrenzt lange.",
        "Der Akku besitzt keine chemischen Reaktionen."
      ],
      "correct": 0,
      "why": "Eine hohe Energiedichte ermöglicht kompakte, leichte Energiespeicher. Die gespeicherte Energiemenge bleibt endlich.",
      "hints": [
        "Der Begriff Dichte setzt eine Größe ins Verhältnis zu einer anderen. Welche Größen könnten hier gemeint sein?",
        "Vergleiche zwei Akkus mit gleicher gespeicherter Energiemenge, aber unterschiedlicher Größe und Masse."
      ]
    }
  }
];
const key='lithium-ionen-uebung-v1', $=id=>document.getElementById(id);
let state={step:0,answers:{},solved:{},hints:{},reflection:''};
try{const x=JSON.parse(localStorage.getItem(key));if(x&&typeof x==='object')state={...state,...x,answers:x.answers||{},solved:x.solved||{},hints:x.hints||{}};}catch{}
state.step=Number.isInteger(state.step)?Math.max(0,Math.min(7,state.step)):0;
function save(){try{localStorage.setItem(key,JSON.stringify(state));$('save').textContent='Dein Lernstand ist in diesem Browser gespeichert.';}catch{$('save').textContent='Speichern ist hier nicht möglich. Sichere deinen Merksatz im Heft.';}}
function normalize(s){return s.replace(/[₀₁₂₃₄₅₆₇₈₉]/g,c=>'₀₁₂₃₄₅₆₇₈₉'.indexOf(c)).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).replace(/[⁺]/g,'+').replace(/[⁻−–]/g,'-').replace(/[\s^]/g,'').toLowerCase();}
function parseSide(value){let rest=normalize(value),out={};const species=['limeo2','lic6','meo2','li+','c6','e-'];while(rest){const n=rest.match(/^\d+/);const count=n?Number(n[0]):1;if(!count||count>1000)return null;if(n)rest=rest.slice(n[0].length);const item=species.find(x=>rest.startsWith(x));if(!item)return null;out[item]=(out[item]||0)+count;rest=rest.slice(item.length);if(rest){if(rest[0]!=='+')return null;rest=rest.slice(1);if(!rest)return null;}}return Object.keys(out).length?out:null;}
function equationCorrect(left,right,target){const actual=[parseSide(left),parseSide(right)],expected=target.map(parseSide);if(actual.some(x=>!x))return false;let ratio=null;for(let i=0;i<2;i++){if(Object.keys(actual[i]).length!==Object.keys(expected[i]).length)return false;for(const [s,n]of Object.entries(expected[i])){if(!actual[i][s])return false;const r=actual[i][s]/n;if(ratio===null)ratio=r;else if(Math.abs(r-ratio)>1e-9)return false;}}return true;}
function feedback(text,good){$('feedback').textContent=text;$('feedback').className='feedback'+(good?' good':'');}
function progress(){const n=steps.filter(s=>state.solved[s.q.id]).length;$('progress').textContent=`Schritt ${state.step+1} von 8 · ${n} von 8 Aufgaben gelöst`;$('bar').value=n;}
function render(){const s=steps[state.step],q=s.q;$('jump').value=state.step;$('lesson').innerHTML=`<p class="eyebrow">Schritt ${state.step+1} von 8</p><h1>${s.title}</h1>${s.body}<section class="question"><h2>${q.ask}</h2><div id="answer"></div><p id="feedback" class="feedback" role="status"></p><button id="hint" class="secondary">Einen Tipp öffnen</button><div id="hints" class="hint"></div></section>${state.step===7?'<h2>Das kannst du jetzt wiederholen</h2><div id="review" class="review"></div>':''}`;
 if(q.equation){$('answer').innerHTML='<p>Schreibe z. B. LiC6, MeO2, Li+, C6 und e-. Hoch- und Tiefzahlen funktionieren ebenfalls. Die Reihenfolge auf einer Seite ist frei.</p><div class="equation"><label>Edukte (links)<input id="left" autocomplete="off" autocapitalize="off" spellcheck="false"></label><span>→</span><label>Produkte (rechts)<input id="right" autocomplete="off" autocapitalize="off" spellcheck="false"></label></div><p><button id="check">Gleichung prüfen</button></p>';const a=state.answers[q.id]||['',''];$('left').value=a[0]||'';$('right').value=a[1]||'';for(const id of ['left','right'])$(id).addEventListener('input',()=>{state.answers[q.id]=[$('left').value,$('right').value];delete state.solved[q.id];feedback('',false);progress();save();});$('check').onclick=()=>{const ok=equationCorrect($('left').value,$('right').value,q.equation);state.solved[q.id]=ok;feedback(ok?'Richtig. '+q.why:'Noch nicht ganz. Prüfe die Teilchen, ihre Anzahl und die Ladungen. Ein Tipp zeigt dir den nächsten Baustein.',ok);progress();save();};
 }else{const box=document.createElement('div');box.className='choices';q.options.forEach((text,i)=>{const b=document.createElement('button');b.className='choice';b.textContent=text;b.setAttribute('aria-pressed',String(state.answers[q.id]===i));b.onclick=()=>{state.answers[q.id]=i;const ok=i===q.correct;state.solved[q.id]=ok;box.querySelectorAll('button').forEach((el,j)=>el.setAttribute('aria-pressed',String(j===i)));feedback(ok?'Richtig. '+q.why:'Noch nicht ganz. '+q.hints[0]+' Du kannst direkt eine andere Antwort ausprobieren.',ok);progress();save();};box.append(b);});$('answer').append(box);}
 function hints(){const n=Math.min(state.hints[q.id]||0,q.hints.length);$('hints').replaceChildren(...q.hints.slice(0,n).map(t=>{const p=document.createElement('p');p.textContent=t;return p;}));$('hint').disabled=n===q.hints.length;$('hint').textContent=n===q.hints.length?'Alle Tipps geöffnet':n?'Nächsten Tipp öffnen':'Einen Tipp öffnen';}
 $('hint').onclick=()=>{state.hints[q.id]=(state.hints[q.id]||0)+1;hints();save();};hints();if(state.solved[q.id])feedback('Schon gelöst. '+q.why,true);
 if($('reflection')){$('reflection').value=state.reflection;$('reflection').oninput=()=>{state.reflection=$('reflection').value;save();};steps.slice(0,7).forEach((x,i)=>{const b=document.createElement('button');b.className='secondary';b.textContent=(state.solved[x.q.id]?'✓ ':'↗ ')+x.title;b.onclick=()=>go(i);$('review').append(b);});}
 $('back').disabled=state.step===0;$('next').disabled=state.step===7;$('next').textContent='Weiter →';progress();save();}
function go(i){state.step=i;render();$('lesson').focus({preventScroll:true});$('lesson').scrollIntoView({block:'start',behavior:'auto'});}
steps.forEach((s,i)=>{const o=document.createElement('option');o.value=i;o.textContent=`${i+1} · ${s.title}`;$('jump').append(o);});$('jump').onchange=()=>go(Number($('jump').value));$('back').onclick=()=>go(Math.max(0,state.step-1));$('next').onclick=()=>go(Math.min(7,state.step+1));$('reset').onclick=()=>{if(confirm('Deine Antworten, Tipps und den Merksatz in diesem Lernprogramm zurücksetzen?')){state={step:0,answers:{},solved:{},hints:{},reflection:''};render();}};render();
