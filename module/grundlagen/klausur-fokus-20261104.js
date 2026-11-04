'use strict';

// Grundkurs-Fassung: 20 Hauptaufgaben, 2 freiwillige Vertiefungen.
// Neue Aufgaben verwenden neue IDs, damit gespeicherte Antworten zugeordnet bleiben.
window.klausurTaskData.klausurTasks.push(...[
  {
    "id": "fokus-hofmann",
    "title": "1. Wasser zerlegen im Hofmann-Apparat (25 BE)",
    "shortTitle": "Hofmann-Apparat",
    "image": "../../assets/solarlabor.png",
    "description": "Gasnachweise, Teilgleichungen und das Volumenverhältnis auswerten · 25 BE",
    "context": "Eine Lerngruppe untersucht die Wasserzersetzung. Bearbeiten Sie die Aufgaben anhand von Material 1 und 2. Schreiben Sie auch bei Rechnungen Ihren Lösungsweg auf. H⁺ darf als vereinfachte Schreibweise für hydratisierte Protonen verwendet werden.",
    "materials": [
      {
        "title": "Material 1: Versuchsaufbau und Bedingungen",
        "type": "text",
        "content": "Ein Hofmann-Apparat enthält mit wenig Schwefelsäure angesäuertes Wasser und reaktionsträge Platinelektroden. Gasraum A liegt über der mit dem Minuspol verbundenen Elektrode, Gasraum B über der mit dem Pluspol verbundenen Elektrode. Die Gase werden getrennt aufgefangen. Die Säure erhöht die Leitfähigkeit; Sulfat-Ionen werden im betrachteten Modell nicht umgesetzt. Alle Volumina werden bei gleicher Temperatur und gleichem Druck verglichen. Nach einer Anlaufphase wird die Volumenmessung auf null gesetzt."
      },
      {
        "title": "Material 2: Gasvolumina – didaktisch modellierte Daten",
        "type": "table",
        "columns": [
          "Zeit ab Messbeginn / min",
          "Gasraum A / mL",
          "Gasraum B / mL"
        ],
        "rows": [
          [
            "0",
            "0",
            "0"
          ],
          [
            "2",
            "12",
            "6"
          ],
          [
            "4",
            "24",
            "12"
          ],
          [
            "6",
            "36",
            "18"
          ]
        ]
      }
    ],
    "subtasks": [
      {
        "id": "fokus-hofmann-1-r2",
        "label": "1.",
        "type": "freeText",
        "operator": "Beschreiben",
        "prompt": "Sie die Entwicklung beider Gasvolumina und ihr Verhältnis anhand von Material 2. Trennen Sie die Beschreibung von einer Erklärung. (3 BE)",
        "points": 3,
        "hint": "Vergleichen Sie gleiche Zeitabschnitte und bilden Sie einen Quotienten.",
        "modelAnswer": "Beide Volumina steigen gleichmäßig (1 BE). In jeweils 2 min kommen in A 12 mL und in B 6 mL hinzu (1 BE für beide Angaben). Ab dem ersten Messpunkt nach Beginn beträgt das Volumenverhältnis A : B = 2 : 1 (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-hofmann-2-r2",
        "label": "2.",
        "type": "freeText",
        "operator": "Ordnen",
        "prompt": "Sie jedem Gasraum das Gas und die Bezeichnung Anode oder Kathode zu. Begründen Sie die Elektrodenzuordnung mit Elektronenaufnahme oder -abgabe. Nennen Sie für jedes Gas einen geeigneten Nachweis. (6 BE)",
        "points": 6,
        "hint": "Unterscheiden Sie Gas, Reaktionsart und Elektrodenname. Erinnern Sie sich bei den Nachweisen an die Beobachtung, die das jeweilige Gas kennzeichnet.",
        "modelAnswer": "Gasraum A enthält H₂, Gasraum B O₂ (1 BE für beide Gase). A liegt an der Kathode, B an der Anode (1 BE für beide Zuordnungen). An A nehmen H⁺-Ionen Elektronen auf: Reduktion (1 BE). An B wird Wasser unter Elektronenabgabe oxidiert (1 BE). Nachweise: Knallgasprobe für Wasserstoff (1 BE), Glimmspanprobe für Sauerstoff (1 BE). Bei nur einer richtigen Zuordnung innerhalb eines Paars sind 0,5 BE möglich. Die allgemeine Definition der Elektrodennamen wird nicht zusätzlich bepunktet.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-hofmann-3",
        "label": "3.",
        "type": "freeText",
        "operator": "Formulieren",
        "prompt": "Sie die beiden Teilgleichungen in saurer Lösung und die Gesamtgleichung der Wasserzersetzung. Gleichen Sie Atome und Ladungen aus. (6 BE)",
        "points": 6,
        "hint": "Gleichen Sie zunächst die einzelnen Halbgleichungen aus und bringen Sie die Elektronenzahlen auf denselben Wert.",
        "modelAnswer": "Kathode: 4 H⁺ + 4 e⁻ → 2 H₂ (2 BE). Anode: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ (2 BE). Gesamt: 2 H₂O → 2 H₂ + O₂ (2 BE). Gleichwertig mit Oxonium-Ionen: Kathode 4 H₃O⁺ + 4 e⁻ → 2 H₂ + 4 H₂O; Anode 6 H₂O → O₂ + 4 H₃O⁺ + 4 e⁻. Proportionale Koeffizienten sind zulässig.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-hofmann-4",
        "label": "4.",
        "type": "freeText",
        "operator": "Erklären",
        "prompt": "Sie das Gasvolumenverhältnis mithilfe der Gesamtgleichung. Berechnen Sie anschließend die Volumina nach 10 min bei unverändertem Verlauf. (5 BE)",
        "points": 5,
        "hint": "Verbinden Sie Stoffmengenverhältnis und Gasvolumenverhältnis. Nutzen Sie für die Rechnung die Tabelle, auch wenn Ihre Gleichung noch unsicher ist.",
        "modelAnswer": "Aus der Gesamtgleichung folgt n(H₂) : n(O₂) = 2 : 1 (2 BE: Bezug auf die Koeffizienten und korrektes Verhältnis). Bei gleichem Druck und gleicher Temperatur entspricht dem das Gasvolumenverhältnis 2 : 1 (1 BE). A: 6 mL/min · 10 min = 60 mL; B: 3 mL/min · 10 min = 30 mL (je 1 BE einschließlich Ansatz).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-hofmann-5",
        "label": "5.",
        "type": "freeText",
        "operator": "Beurteilen",
        "prompt": "Sie die Aussage: „Die Schwefelsäure liefert die Energie für die Gasbildung; deshalb müsste die Gasbildung nach Abschalten der Spannungsquelle dauerhaft weitergehen.“ Beziehen Sie die Rolle der Säure und die Energieumwandlung ein. (5 BE)",
        "points": 5,
        "hint": "Unterscheiden Sie die Leitfähigkeit einer Lösung von der Energiequelle des Prozesses.",
        "modelAnswer": "Die Aussage ist falsch (1 BE). Die Säure liefert bewegliche Ionen und verbessert die Leitfähigkeit (1 BE); sie wird im Modell insgesamt nicht verbraucht (1 BE). Die Spannungsquelle liefert elektrische Energie, die bei der Wasserzersetzung in chemische Energie überführt wird (1 BE). Ohne Energiezufuhr findet keine dauerhafte weitere Elektrolyse statt; bereits gebildete Gasblasen können noch aufsteigen (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true,
    "reviewVersion": "Grundkurs-Fassung vom 04.11.2026"
  },
  {
    "id": "fokus-pem",
    "title": "2. Wasserstoff als Energiespeicher: PEM-Brennstoffzelle (25 BE)",
    "shortTitle": "PEM-Brennstoffzelle",
    "image": "../../assets/wasserstoff.png",
    "description": "Teilchenwege, Elektrodenreaktionen und Platin-Katalyse erklären · 25 BE",
    "context": "Eine Schule untersucht eine PEM-Brennstoffzelle, die eine Lampe betreibt. Bearbeiten Sie die Aufgaben anhand von Material 1 und 2. H⁺ bezeichnet vereinfacht protonische Ladung im wasserhaltigen Medium. Die Wirkungsgradrechnung am Ende ist freiwillige Vertiefung.",
    "materials": [
      {
        "title": "Material 1: Aufbau und Betrieb",
        "type": "text",
        "content": "Wasserstoff wird der linken, Sauerstoff der rechten Elektrode zugeführt. Beide Elektroden besitzen einen festen Platin-Katalysator und sind außen über eine Lampe verbunden. Zwischen den Elektroden liegt eine feuchte Protonenaustauschmembran (PEM). Sie trennt die Gasräume, leitet protonische Ladung und ist für Elektronen nicht leitfähig. Die Gase reagieren an den Katalysatoroberflächen. Wasser wird auf der Sauerstoffseite abgeführt."
      },
      {
        "title": "Material 2: Zwei Vorschläge zur Nutzung",
        "type": "text",
        "content": "Vorschlag A: Tagsüber wird überschüssiger Solarstrom zur Wasserelektrolyse genutzt. Die erzeugten Gase werden getrennt gespeichert und versorgen am Abend die Brennstoffzelle. Vorschlag B: Ein Teil des Brennstoffzellenstroms soll die Lampe versorgen, der Rest einen Elektrolyseur. Dessen Gase sollen vollständig zurück zur Brennstoffzelle gelangen. Nach dem Start soll die Anordnung ohne weitere Energiezufuhr unbegrenzt laufen. In beiden Vorschlägen geben Elektrolyseur und Brennstoffzelle Wärme an die Umgebung ab; diese Wärme wird nicht weiter genutzt."
      }
    ],
    "subtasks": [
      {
        "id": "fokus-pem-1",
        "label": "1.",
        "type": "freeText",
        "operator": "Erläutern",
        "prompt": "Sie die Wege von Elektronen und Protonen zwischen den Elektroden in Material 1 und die Funktion der Membran. Gehen Sie auch auf den Verbraucher ein. (5 BE)",
        "points": 5,
        "hint": "Verfolgen Sie beide Ladungsträger getrennt. Überlegen Sie, wodurch die Lampe mit Energie versorgt wird.",
        "modelAnswer": "An der Wasserstoffseite entstehen Protonen und Elektronen (1 BE). Elektronen fließen außen von der Wasserstoff- zur Sauerstoffelektrode durch die Lampe und übertragen dabei elektrische Energie (2 BE). H⁺ wandern durch die Membran zur Sauerstoffseite (1 BE). Die Membran ermöglicht den inneren Ladungsausgleich und trennt zugleich die Gase; sie sperrt den direkten Elektronenweg (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-pem-2",
        "label": "2.",
        "type": "freeText",
        "operator": "Formulieren",
        "prompt": "Sie beide Teilgleichungen und die Gesamtgleichung der PEM-Brennstoffzelle mit H⁺ als Protonenschreibweise. (6 BE)",
        "points": 6,
        "hint": "Prüfen Sie für jede Elektrode Stoff- und Ladungsbilanz. Im Gesamtprozess dürfen keine Elektronen übrig bleiben.",
        "modelAnswer": "Anode: 2 H₂ → 4 H⁺ + 4 e⁻ (2 BE). Kathode: O₂ + 4 H⁺ + 4 e⁻ → 2 H₂O (2 BE). Gesamt: 2 H₂ + O₂ → 2 H₂O (2 BE). Proportionale Koeffizienten sind gleichwertig. Anschluss an das Unterrichtsmodell: O₂ + 4 e⁻ → 2 O²⁻ und 2 O²⁻ + 4 H⁺ → 2 H₂O ergeben beim Addieren dieselbe Kathodengleichung. Diese beiden korrekt zusammengehörenden Schritte werden ebenfalls anerkannt. O²⁻ dient hier ausschließlich als formales Bilanzteilchen; es wandert nicht durch die PEM. Die Schritte beschreiben keinen vollständigen realen Reaktionsmechanismus.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-pem-3",
        "label": "3.",
        "type": "freeText",
        "operator": "Vergleichen",
        "prompt": "Sie PEM-Brennstoffzelle und Hofmann-Apparat hinsichtlich Energieumwandlung, Polung der Anode und Polung der Kathode. Erklären Sie, was die Elektrodennamen bei beiden gemeinsam bedeuten. (5 BE)",
        "points": 5,
        "hint": "Legen Sie dieselben Vergleichskriterien für beide Geräte an. Unterscheiden Sie Polung und Reaktionsart.",
        "modelAnswer": "Brennstoffzelle: chemische → elektrische Energie; Hofmann-Apparat: elektrische → chemische Energie (2 BE). In der Brennstoffzelle ist die Anode negativ und die Kathode positiv, bei der Elektrolyse ist die Anode positiv und die Kathode negativ (2 BE). Gemeinsam: Oxidation an der Anode, Reduktion an der Kathode (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-pem-katalyse-r2",
        "label": "4.",
        "type": "freeText",
        "operator": "Erläutern",
        "prompt": "Sie die Funktion des Platins in Material 1. Gehen Sie auf den Reaktionsweg und den Verbleib des Katalysators ein, begründen Sie die Bezeichnung „heterogene Katalyse“ und sagen Sie die Folge fehlenden Platins für die Stromabgabe unter sonst gleichen Bedingungen voraus. (5 BE)",
        "points": 5,
        "hint": "Trennen Sie Reaktionsgeschwindigkeit und Energiebilanz. Vergleichen Sie die Phasen der reagierenden Stoffe mit der Phase des Katalysators.",
        "modelAnswer": "Platin ermöglicht einen Reaktionsweg mit geringerer Aktivierungsenergie (1 BE). Die Reaktanden lagern sich an der Oberfläche an und reagieren dort; Produkte lösen sich wieder ab (1 BE). Platin wird im Gesamtprozess nicht verbraucht und steht erneut zur Verfügung (1 BE). Die Katalyse ist heterogen, weil gasförmige Reaktanden an einem festen Katalysator reagieren (1 BE). Ohne Platin laufen die Elektrodenreaktionen unter den betrachteten Bedingungen wesentlich langsamer; die Stromabgabe nimmt stark ab (1 BE). Ein vollständiger Stillstand muss nicht behauptet werden.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-pem-speicher-r2",
        "label": "5.",
        "type": "freeText",
        "operator": "Beurteilen",
        "prompt": "Sie beide Vorschläge aus Material 2 hinsichtlich ihrer Funktionsfähigkeit. Begründen Sie, ob die Lampe zeitversetzt bzw. unbegrenzt ohne weitere Energiezufuhr betrieben werden kann. Unterscheiden Sie Stoffkreislauf und Energieumwandlung. (4 BE)",
        "points": 4,
        "hint": "Verfolgen Sie die Herkunft der Energie für die Lampe und den Verbleib der übrigen Energie. Ein Stoff kann erneut entstehen, ohne dass die eingesetzte elektrische Energie vollständig zurückgewonnen wird.",
        "modelAnswer": "A ist grundsätzlich möglich: Die tagsüber zugeführte elektrische Energie wird teilweise chemisch in den Gasen gespeichert und kann am Abend teilweise wieder als elektrische Energie genutzt werden (2 BE: Urteil und Energieweg). B funktioniert nicht unbegrenzt: Wegen der Wärmeabgabe und der Energieabgabe an die Lampe steht für die erneute Elektrolyse weniger Energie zur Verfügung; der Gasvorrat lässt sich ohne weitere Energiezufuhr nicht vollständig erneuern (2 BE: Urteil und begründete Energiebilanz). Stoffliche Rückführung bedeutet keine verlustfreie Rückgewinnung elektrischer Energie.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-pem-wirkungsgrad-zusatz-r2",
        "label": "Zusatz",
        "type": "freeText",
        "operator": "Berechnen",
        "prompt": "Sie mithilfe des Zusatzmaterials die Wirkungsgrade von Elektrolyseur, Brennstoffzelle und gesamtem Speicherzyklus. Notieren Sie die Ansätze. Diese Vertiefung gehört nicht zu den 25 BE.",
        "points": 0,
        "optional": true,
        "hint": "Wählen Sie für jedes Teilsystem seine eigene zugeführte Energie als Nenner.",
        "modelAnswer": "Elektrolyseur: 70 kJ / 100 kJ = 0,70 = 70 %. Brennstoffzelle: 35 kJ / 70 kJ = 0,50 = 50 %. Speicherzyklus: 35 kJ / 100 kJ = 0,35 = 35 %, auch 0,70 · 0,50 = 0,35. Es wird keine zusätzliche Energie erzeugt; ein Teil wird als Wärme abgegeben. Die Rechnung ist Zusatztraining ohne Bewertungseinheiten im Hauptblock.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true,
    "extensionMaterials": [
      {
        "title": "Zusatzmaterial: Energiebilanz – didaktisch modellierte Daten",
        "type": "table",
        "columns": [
          "Größe für einen vollständigen Speicherzyklus",
          "Energie"
        ],
        "rows": [
          [
            "Elektrische Energie für die Elektrolyse",
            "100 kJ"
          ],
          [
            "Im erzeugten Wasserstoff gespeicherte chemische Energie",
            "70 kJ"
          ],
          [
            "Von der Brennstoffzelle abgegebene elektrische Energie",
            "35 kJ"
          ]
        ]
      },
      {
        "title": "Rechenhilfe zur freiwilligen Vertiefung",
        "type": "text",
        "content": "Die Energien beziehen sich auf dieselbe Wasserstoffmenge und dieselbe energetische Bezugsbasis. Der Wasserstoff wird vollständig umgesetzt. Weitere Speicher- und Transportverluste werden vernachlässigt. Wirkungsgrad η = nutzbare abgegebene Energie / zugeführte Energie; für Prozentangaben mit 100 % multiplizieren."
      }
    ],
    "reviewVersion": "Grundkurs-Fassung vom 04.11.2026"
  },
  {
    "id": "fokus-korrosion",
    "title": "3. Warum rostet ein Stahlgeländer? (25 BE)",
    "shortTitle": "Säure- und Sauerstoffkorrosion",
    "image": "../../assets/sauerstoff.png",
    "description": "Versuchsbefunde deuten und zwei Korrosionsarten vergleichen · 25 BE",
    "context": "An einem Stahlgeländer treten nach einem feuchten Winter Roststellen auf. Modellversuche sollen die Bedingungen der Korrosion klären. Stahl wird vereinfacht als Eisen betrachtet.",
    "materials": [
      {
        "title": "Material 1: Vergleichsversuch",
        "type": "text",
        "content": "Vier identische, gereinigte Eisennägel werden gleich lange bei gleicher Temperatur untersucht. A liegt in trockener Luft. B liegt vollständig in sauerstofffreiem Wasser unter Schutzgas. C liegt in neutralem, belüftetem Wasser. D liegt in neutraler, belüfteter Natriumchlorid-Lösung. Bei C und D sind die Anfangskonzentration des gelösten Sauerstoffs und die benetzte Nagelfläche gleich. Alle anderen Bedingungen sind möglichst gleich. Die qualitative Beobachtung ist didaktisch modelliert; eine Korrosionsrate wurde nicht gemessen."
      },
      {
        "title": "Material 2: Beobachtungen nach zwei Tagen",
        "type": "table",
        "columns": [
          "Ansatz",
          "Beobachtung"
        ],
        "rows": [
          [
            "A",
            "Kein sichtbarer Rost"
          ],
          [
            "B",
            "Kein sichtbarer Rost"
          ],
          [
            "C",
            "Rostbildung"
          ],
          [
            "D",
            "Stärkere sichtbare Rostbildung als bei C"
          ]
        ]
      },
      {
        "title": "Material 3: Zwei Umgebungen für Eisen",
        "type": "text",
        "content": "Modell I: Ein neutraler, sauerstoffhaltiger Wasserfilm bedeckt eine ungeschützte Eisenoberfläche. Modell II: Ein gereinigtes Eisenstück liegt in sauerstofffreier, verdünnter Salzsäure. An ihm treten Gasbläschen auf, und es verliert Metallsubstanz. Eine schützende Oberflächenschicht liegt in beiden Modellen nicht vor. Erklären Sie die Vorgänge mit den im Unterricht erarbeiteten Teilreaktionen."
      }
    ],
    "subtasks": [
      {
        "id": "fokus-korrosion-1",
        "label": "1.",
        "type": "freeText",
        "operator": "Beschreiben",
        "prompt": "Sie die Ergebnisse in Material 2, ohne sie bereits zu erklären. (3 BE)",
        "points": 3,
        "hint": "Benennen Sie die Gruppen ohne sichtbare Veränderung und vergleichen Sie die beiden übrigen Ansätze.",
        "modelAnswer": "In A und B ist kein sichtbarer Rost erkennbar (1 BE). In C bildet sich Rost (1 BE). D zeigt stärkere sichtbare Rostbildung als C (1 BE). Aus den qualitativen Angaben lässt sich keine zahlenmäßige Korrosionsrate ableiten.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-korrosion-2",
        "label": "2.",
        "type": "freeText",
        "operator": "Erklären",
        "prompt": "Sie die Unterschiede zwischen A, B und C sowie zwischen C und D mithilfe der Versuchsbedingungen. Begrenzen Sie Ihre Aussage auf die hier untersuchte Sauerstoffkorrosion. (5 BE)",
        "points": 5,
        "hint": "Prüfen Sie jeweils, welcher Bestandteil oder welche Eigenschaft des leitfähigen Wasserfilms verändert wird.",
        "modelAnswer": "A fehlt der Wasserfilm als Elektrolyt (1 BE). B fehlt gelöster Sauerstoff für die kathodische Reaktion des betrachteten Modells (1 BE). C enthält Wasser und Sauerstoff, sodass die gekoppelte Metalloxidation und Sauerstoffreduktion ablaufen kann (1 BE). Die gelösten Ionen in D erhöhen die elektrische Leitfähigkeit (1 BE) und erleichtern dadurch den ionischen Ladungstransport, was die Korrosion begünstigen kann (1 BE). Salz ist keine notwendige Voraussetzung des Rostens. Aus der sichtbaren Rostmenge wird hier keine genaue Korrosionsrate abgeleitet.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-korrosion-3",
        "label": "3.",
        "type": "freeText",
        "operator": "Formulieren",
        "prompt": "Sie für Modell I die anodische und kathodische Teilgleichung sowie die anschließende Bildung von Eisen(II)-hydroxid aus den Ionen. Erklären Sie kurz, warum Eisen(II)-hydroxid noch nicht mit dem endgültigen Rost gleichzusetzen ist. (7 BE)",
        "points": 7,
        "hint": "Nutzen Sie die neutrale Umgebung für die Sauerstoffreduktion. Trennen Sie Elektronenübertragung und anschließende Fällung.",
        "modelAnswer": "Anode: Fe → Fe²⁺ + 2 e⁻ (2 BE). Kathode: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ (2 BE). Fällung: Fe²⁺ + 2 OH⁻ → Fe(OH)₂ (2 BE). Durch weitere Oxidation mit Sauerstoff entstehen Eisen(III)-Verbindungen des Rosts; Fe(OH)₂ ist ein Zwischenprodukt (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-korrosion-4",
        "label": "4.",
        "type": "freeText",
        "operator": "Vergleichen",
        "prompt": "Sie Modell I und II hinsichtlich anodischer Reaktion, reduziertem Teilchen und Produkt der kathodischen Reaktion. Formulieren Sie zusätzlich die kathodische Teilgleichung für Modell II. (6 BE)",
        "points": 6,
        "hint": "Stellen Sie die Modelle anhand derselben drei Kriterien gegenüber. Nutzen Sie H₃O⁺ oder die vereinfachte Schreibweise H⁺.",
        "modelAnswer": "In beiden Modellen wird Eisen zu Fe²⁺ oxidiert (1 BE). In Modell I wird O₂ reduziert und OH⁻ gebildet (2 BE). In Modell II werden H₃O⁺ bzw. H⁺ reduziert; es entsteht H₂ (1 BE). Kathode in Modell II: 2 H₃O⁺ + 2 e⁻ → H₂ + 2 H₂O, alternativ 2 H⁺ + 2 e⁻ → H₂ (2 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-korrosion-planung-r2",
        "label": "5.",
        "type": "freeText",
        "operator": "Entwickeln",
        "prompt": "Sie einen Vergleichsversuch zur Prüfung der Vermutung: „Gelöste Salze begünstigen die Sauerstoffkorrosion von Eisen.“ Nennen Sie zwei Ansätze, zwei konstant zu haltende Bedingungen sowie eine geeignete Beobachtung. Erläutern Sie, welcher Befund die Vermutung stützen würde. (4 BE)",
        "points": 4,
        "hint": "Verändern Sie gezielt nur den zu untersuchenden Einfluss. Eine Vermutung wird durch Beobachtungen gestützt, nicht schon durch die Versuchsidee bewiesen.",
        "modelAnswer": "Zwei gleiche, gereinigte Eisennägel werden in neutralem, belüftetem Wasser ohne zugesetztes Salz bzw. mit zugesetztem Natriumchlorid verglichen (1 BE). Zwei passende Kontrollbedingungen, z. B. gleiche Temperatur, Dauer, benetzte Eisenfläche oder vergleichbare Sauerstoffversorgung, werden genannt (1 BE). Die Rostbildung wird nach gleicher Zeit unter gleichen Beobachtungsbedingungen verglichen, z. B. anhand von Fotos (1 BE). Stärkere sichtbare Rostbildung im salzhaltigen Ansatz würde die Vermutung unter diesen Bedingungen stützen; die qualitative Beobachtung liefert keine genaue Korrosionsrate (1 BE). Gleichwertige, sinnvoll kontrollierte Vergleiche sind anzuerkennen.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true,
    "reviewVersion": "Grundkurs-Fassung vom 04.11.2026"
  },
  {
    "id": "fokus-korrosionsschutz",
    "title": "4. Korrosionsschutz im Indikatorversuch (25 BE)",
    "shortTitle": "Korrosionsschutz im Experiment",
    "image": "../../assets/korrosion.png",
    "description": "Indikatorfarben auswerten und Lack, Zink sowie Kupferkontakt beurteilen · 25 BE",
    "context": "Vier Nagelproben werden mit einem Korrosionsindikator untersucht. Nutzen Sie Material 1 bis 3, um Beobachtungen auf Teilchenebene zu erklären und ein Schutzkonzept zu beurteilen. Die Untersuchung wird als Material ausgewertet; ein eigener Versuch ist für die Bearbeitung nicht nötig. Der Zinnüberzug am Ende ist freiwillige Vertiefung.",
    "materials": [
      {
        "title": "Material 1: Versuchsbedingungen und Farbnachweise",
        "type": "text",
        "content": "Vier vergleichbare Eisennägel liegen gleich lange bei gleicher Temperatur in neutralem, sauerstoffhaltigem Indikatorgel. Blau weist auf Fe²⁺-Ionen hin, Rosa auf OH⁻-Ionen. Die Farben zeigen die Bildung dieser Ionen, nicht unmittelbar braunen Rost. A ist unbehandelt. B ist lackiert und besitzt einen Kratzer bis zum Eisen. C ist über ein Kabel leitend mit einer Zinkelektrode im selben Gel verbunden. D berührt einen Kupferstreifen elektrisch leitend. Die Kontaktstellen sind blank. Es gilt die bekannte Redoxreihe: Zink ist unedler als Eisen, Kupfer edler als Eisen."
      },
      {
        "title": "Material 2: Beobachtungen – didaktisch modellierte Befunde",
        "type": "table",
        "columns": [
          "Probe",
          "Beobachtung"
        ],
        "rows": [
          [
            "A · Eisen",
            "Blaue und rosa Bereiche an unterschiedlichen Stellen."
          ],
          [
            "B · Lack mit Kratzer",
            "Blau am freiliegenden Eisen; unter intaktem Lack kaum Färbung."
          ],
          [
            "C · Eisen mit Zink",
            "Am Eisen kaum Blau, aber Rosa."
          ],
          [
            "D · Eisen mit Kupfer",
            "Deutlich Blau am Eisen; Rosa am Kupfer bzw. in seiner Nähe."
          ]
        ]
      },
      {
        "title": "Material 3: Schutz einer Stahlkonstruktion im Wasser",
        "type": "text",
        "content": "Eine Stahlkonstruktion befindet sich dauerhaft in neutralem, sauerstoffhaltigem Wasser. Ihre Oberfläche wird gelegentlich durch Abrieb beschädigt. Verglichen werden eine Lackierung, leitend angeschlossene austauschbare Zinkblöcke im selben Wasser und leitend befestigte Kupferplatten. Regelmäßige Wartung ist möglich. Zinkblöcke können kontrolliert und ersetzt werden. Ein zusätzlicher Vorschlag ist, Zinkblöcke ohne Metallkontakt oder Kabel lediglich neben die Konstruktion ins Wasser zu legen. Stahl wird hier vereinfacht als Eisen betrachtet."
      }
    ],
    "subtasks": [
      {
        "id": "fokus-schutz-indikator-r2",
        "label": "1.",
        "type": "freeText",
        "operator": "Werten",
        "prompt": "Sie die Beobachtung zu Probe A aus: Ordnen Sie die blauen und rosa Bereiche der Anode bzw. Kathode zu und formulieren Sie die zugehörigen Teilgleichungen. Nutzen Sie die Farbnachweise aus Material 1. (6 BE)",
        "points": 6,
        "hint": "Gehen Sie in drei Schritten vor: nachgewiesenes Ion, zugehörige Teilreaktion, Elektrodenname.",
        "modelAnswer": "Blau weist auf Fe²⁺-Bildung und damit einen anodischen Bereich hin (1 BE). Fe → Fe²⁺ + 2 e⁻ (2 BE). Rosa weist auf OH⁻-Bildung und damit einen kathodischen Bereich hin (1 BE). O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ (2 BE). Die blauen und rosa Färbungen sind Ionennachweise und nicht selbst Rost.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-schutz-lack-r2",
        "label": "2.",
        "type": "freeText",
        "operator": "Erklären",
        "prompt": "Sie die unterschiedliche Färbung an der intakten Lackschicht und am Kratzer von Probe B. Gehen Sie auf Barrierewirkung und Eisenauflösung ein. (4 BE)",
        "points": 4,
        "hint": "Verknüpfen Sie die zugängliche Eisenoberfläche mit den Voraussetzungen der Sauerstoffkorrosion und dem passenden Ionennachweis.",
        "modelAnswer": "Die intakte Lackschicht trennt Eisen vom Wasserfilm und erschwert den Zutritt von Wasser und Sauerstoff (1 BE); deshalb wird dort die Eisenauflösung unterdrückt und kaum Fe²⁺ nachgewiesen (1 BE). Am Kratzer ist Eisen dem Elektrolyten zugänglich (1 BE), wird oxidiert und bildet Fe²⁺, das die Blaufärbung verursacht (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-schutz-zink-r2",
        "label": "3.",
        "type": "freeText",
        "operator": "Erläutern",
        "prompt": "Sie die Beobachtung zu Probe C anhand der Redoxreihe. Formulieren Sie die Oxidation des Zinks und erklären Sie Elektronenfluss, geringe Blaufärbung und Rosafärbung am Eisen. (6 BE)",
        "points": 6,
        "hint": "Verfolgen Sie getrennt das oxidierte Metall, den Elektronenweg und die Reaktion, die am anderen Metall stattfinden kann.",
        "modelAnswer": "Zink ist unedler als Eisen und wird bevorzugt oxidiert (1 BE). Zn → Zn²⁺ + 2 e⁻ (2 BE). Elektronen gelangen über das Kabel vom Zink zum Eisen (1 BE). Die Oxidation des Eisens wird unterdrückt, daher entstehen kaum Fe²⁺-Ionen und kaum Blau (1 BE). Am Eisen wird Sauerstoff reduziert; die gebildeten OH⁻-Ionen bewirken Rosa (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-schutz-kupfer-r2",
        "label": "4.",
        "type": "freeText",
        "operator": "Erklären",
        "prompt": "Sie Probe D im Vergleich zu Probe C. Benennen Sie beim Eisen-Kupfer-Kontakt das oxidierte Metall und den Elektronenweg. Deuten Sie die blaue und rosa Färbung. (4 BE)",
        "points": 4,
        "hint": "Ein anderes Kontaktmetall kann die Rollen der beiden Metalle verändern. Verwenden Sie die Redoxreihe und die beiden Farbnachweise.",
        "modelAnswer": "Kupfer ist edler als Eisen; beim Eisen-Kupfer-Kontakt wird Eisen oxidiert, während bei C Zink oxidiert wird (1 BE). Die Elektronen fließen vom Eisen zum Kupfer (1 BE). Fe²⁺ aus der Eisenauflösung erklärt Blau am Eisen (1 BE). Am Kupfer kann Sauerstoff unter Bildung von OH⁻ reduziert werden; das erklärt Rosa dort (1 BE). Eine Reduktion von Kupfer-Ionen wird nicht vorausgesetzt, da solche Ionen nicht als Reaktionspartner zugegeben wurden.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-schutz-empfehlung-r2",
        "label": "5.",
        "type": "freeText",
        "operator": "Beurteilen",
        "prompt": "Sie die Vorschläge in Material 3. Empfehlen Sie ein Schutzkonzept und begründen Sie es anhand der Schutzwirkung bei Beschädigung und des Wartungsbedarfs. Prüfen Sie ausdrücklich, ob ein nur danebenliegender Zinkblock genügt. (5 BE)",
        "points": 5,
        "hint": "Übertragen Sie die Versuchsergebnisse auf die Konstruktion. Prüfen Sie sowohl den Elektronenweg als auch den Ionenweg und berücksichtigen Sie den Verbrauch von Material.",
        "modelAnswer": "Leitend angeschlossene Zinkblöcke sind geeignet, weil Zink anstelle des Eisens oxidiert wird und auch freiliegendes Eisen kathodisch geschützt werden kann (1 BE). Eine Lackierung wirkt als Barriere, verliert diesen Schutz aber an beschädigten Stellen (1 BE). Kupferplatten sind ungeeignet, weil ihr leitender Kontakt die Eisenauflösung begünstigen kann (1 BE). Zink wird verbraucht und muss kontrolliert und ersetzt werden (1 BE). Nur danebenliegendes Zink genügt nicht: Das gemeinsame Wasser ermöglicht Ionenleitung, ersetzt aber nicht den metallischen Elektronenweg zum Stahl (1 BE). Eine begründete Kombination aus Lackierung und angeschlossenen Zinkblöcken ist ebenfalls geeignet; dieselben Kriterien werden bewertet.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "fokus-schutz-zinn-zusatz-r2",
        "label": "Zusatz",
        "type": "freeText",
        "operator": "Erklären",
        "prompt": "Sie mithilfe des Zusatzmaterials, warum ein beschädigter Zinnüberzug die lokale Eisenauflösung begünstigen kann. Vergleichen Sie mit dem bekannten Kupferkontakt. Diese Vertiefung gehört nicht zu den 25 BE.",
        "points": 0,
        "optional": true,
        "hint": "Nutzen Sie die angegebenen Potenziale, um die Rollen der Metalle zu bestimmen. Übertragen Sie anschließend das bekannte Kontaktelement.",
        "modelAnswer": "Zinn ist nach den angegebenen Potenzialen edler als Eisen. Freiliegendes Eisen bildet die Anode: Fe → Fe²⁺ + 2 e⁻. Elektronen gelangen zur Zinnoberfläche, an der Sauerstoff zu OH⁻ reduziert werden kann. Wie beim Kupferkontakt kann dadurch die Eisenauflösung am Kratzer begünstigt werden. Bei intaktem Überzug wirkt die Zinnschicht dagegen als Barriere. Weder eine Zinnabscheidung noch Kenntnisse über Flächenverhältnisse sind für die Lösung erforderlich.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true,
    "extensionMaterials": [
      {
        "title": "Zusatzmaterial: Beschädigter Zinnüberzug",
        "type": "text",
        "content": "Eine dichte Zinnschicht schützt Stahl zunächst als Barriere. An einem Kratzer erreicht ein neutraler, sauerstoffhaltiger Wasserfilm den Stahl. Zinn und Stahl sind elektrisch leitend verbunden. Zur qualitativen Einordnung gelten E°(Fe²⁺/Fe) = −0,44 V und E°(Sn²⁺/Sn) = −0,14 V. Das Metall mit dem negativeren Standardpotenzial wird im vereinfachten Kontaktmodell bevorzugt oxidiert. Schutzschichten auf den freiliegenden Metallen werden hier nicht berücksichtigt; die Potenziale liefern keine Korrosionsgeschwindigkeit."
      }
    ],
    "reviewVersion": "Grundkurs-Fassung vom 04.11.2026"
  }
]);
