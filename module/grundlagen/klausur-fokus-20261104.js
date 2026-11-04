'use strict';

// Sechs Grundkurs-Blöcke mit je 25 BE und zwei freiwilligen Vertiefungen.
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
    "title": "4. Ein Pumpengehäuse im Hafen schützen (25 BE)",
    "shortTitle": "Korrosionsschutz im Hafen",
    "image": "../../assets/korrosion.png",
    "description": "Ein Schutzkonzept prüfen, einen Montagefehler erklären und Wartungskosten abwägen · 25 BE",
    "context": "Ein stählernes Pumpengehäuse befindet sich dauerhaft im Hafenwasser. Bei Wartungsarbeiten entstehen gelegentlich kleine Lackschäden. Entscheiden Sie anhand von Material 1 bis 3, wie das Gehäuse geschützt werden soll. Stahl wird vereinfacht als Eisen betrachtet. Die Aufgabe ist eine Materialauswertung; ein eigener Versuch ist nicht erforderlich.",
    "materials": [
      {
        "title": "Material 1: Einsatzbedingungen und zwei Angebote",
        "type": "text",
        "content": "Das Hafenwasser ist annähernd neutral, sauerstoffhaltig und enthält gelöste Salze. Das Gehäuse muss acht Jahre eingesetzt werden. Kleine Kratzer werden nicht immer sofort bemerkt. Angebot A umfasst nur eine dichte Lackierung. Angebot B umfasst dieselbe Lackierung und zusätzlich austauschbare Zinkblöcke. Zinkblöcke und freiliegende Stahlstellen berühren dasselbe Wasser. Jeder Zinkblock ist über eine metallische Anschlussleitung elektrisch leitend mit dem Gehäuse verbunden. Zink ist unedler als Eisen. Im betrachteten Modell wird am kathodischen Bereich gelöster Sauerstoff reduziert."
      },
      {
        "title": "Material 2: Eine Störung nach der Wartung",
        "type": "text",
        "content": "Nach einer Wartung wird an einer beschädigten Lackstelle erneut Eisenauflösung festgestellt. Der Zinkblock ist noch ausreichend groß und berührt weiterhin das Wasser. Allerdings wurde die metallische Anschlussleitung versehentlich entfernt; zwischen Zinkblock und Stahl besteht auch sonst kein Metallkontakt. Eine Mitarbeiterin meint: „Das leitfähige Hafenwasser ersetzt die Anschlussleitung.“ Alle übrigen Bedingungen sind unverändert."
      },
      {
        "title": "Material 3: Kosten für acht Jahre – didaktisch modellierte Angaben",
        "type": "table",
        "columns": [
          "Kostenposition",
          "Angebot A · nur Lack",
          "Angebot B · Lack und Zink"
        ],
        "rows": [
          [
            "Erstinstallation",
            "180 €",
            "300 €"
          ],
          [
            "Geplante Wartung jeweils am Ende der Jahre 2, 4 und 6",
            "75 € je Termin",
            "40 € je Termin"
          ],
          [
            "Leistungsumfang der Wartung",
            "Lackstellen nacharbeiten",
            "Lack kontrollieren/nacharbeiten und verbrauchte Zinkblöcke ersetzen"
          ]
        ]
      },
      {
        "title": "Hinweis zur Kostenbetrachtung",
        "type": "text",
        "content": "Rechnen Sie nur mit den angegebenen drei Wartungsterminen; ein Termin nach Ablauf des achten Jahres wird nicht berücksichtigt. Die Preise sind für diese Aufgabe konstruiert. Kosten ungeplanter Schäden und Ausfälle sind nicht beziffert. Regelmäßige Wartung ist bei beiden Angeboten organisatorisch möglich."
      }
    ],
    "subtasks": [
      {
        "id": "schutz-hafen-barriere-v3",
        "operator": "Erklären",
        "label": "1.",
        "type": "freeText",
        "prompt": "Sie die Wirkung der Lackierung aus Angebot A und ihre Grenze bei einem Kratzer bis zum Stahl. Beziehen Sie die Bedingungen in Material 1 ein. (4 BE)",
        "points": 4,
        "modelAnswer": "Die dichte Lackschicht trennt die Eisenoberfläche vom Wasser (1 BE) und erschwert den Zutritt von Sauerstoff zur Metalloberfläche (1 BE). Am Kratzer liegt Eisen im leitfähigen Wasser frei (1 BE); dort kann die gekoppelte Eisenoxidation und Sauerstoffreduktion ablaufen. Lack schützt die freiliegende Stelle nicht als Opferanode (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "schutz-hafen-reaktionen-v3",
        "operator": "Formulieren",
        "label": "2.",
        "type": "freeText",
        "prompt": "Sie für Angebot B die Oxidationsgleichung des Zinks und die kathodische Sauerstoffreduktion im neutralen Wasser. Benennen Sie Anode und Kathode und geben Sie die Elektronenflussrichtung an. (6 BE)",
        "points": 6,
        "modelAnswer": "Anode: Zn → Zn²⁺ + 2 e⁻ (2 BE). Kathodische Reaktion: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ (2 BE). Der Zinkblock ist die Anode, die geschützte Stahloberfläche bildet den kathodischen Bereich (1 BE für beide Zuordnungen). Elektronen gelangen durch die metallische Verbindung vom Zink zum Stahl (1 BE). Proportionale Koeffizienten sind gleichwertig.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "schutz-hafen-stoerung-v3",
        "operator": "Beurteilen",
        "label": "3.",
        "type": "freeText",
        "prompt": "Sie die Aussage der Mitarbeiterin in Material 2. Erklären Sie die erneute Eisenauflösung und schlagen Sie eine gezielte Änderung mit einer begründeten Vorhersage ihrer Wirkung vor. (5 BE)",
        "points": 5,
        "modelAnswer": "Die Aussage ist falsch: Im Wasser transportieren Ionen die Ladung (1 BE), während die metallische Verbindung den Elektronenweg vom Zink zum Stahl bereitstellt (1 BE). Ohne diesen Elektronenweg schützt der vorhandene Zinkblock den Stahl nicht kathodisch; Eisen kann an der Lackschadstelle wieder oxidiert werden (1 BE). Die elektrisch leitende Anschlussleitung wird wiederhergestellt, bei sonst unveränderten Bedingungen (1 BE). Dadurch können Elektronen wieder zum Stahl gelangen und dessen Oxidation wird unterdrückt; die Eisenauflösung sollte abnehmen (1 BE). Eine leitende Verbindung allein ist kein Ersatz für den ebenfalls notwendigen gemeinsamen Elektrolyten.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "schutz-hafen-kosten-v3",
        "operator": "Berechnen",
        "label": "4.",
        "type": "freeText",
        "prompt": "Sie die planmäßigen Gesamtkosten beider Angebote über acht Jahre anhand von Material 3 und die Kostendifferenz. Geben Sie Ihre Ansätze an. (4 BE)",
        "points": 4,
        "modelAnswer": "A: 180 € + 3 · 75 € = 405 € (1 BE Ansatz, 1 BE Ergebnis). B: 300 € + 3 · 40 € = 420 € (1 BE für Ansatz und Ergebnis). Differenz: 420 € − 405 € = 15 €; B ist planmäßig 15 € teurer (1 BE). Unbezifferte Schäden werden nicht mit erfundenen Kosten ergänzt.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "schutz-hafen-entscheidung-v3",
        "operator": "Empfehlen",
        "label": "5.",
        "type": "freeText",
        "prompt": "Sie eines der Angebote für die Bedingungen aus Material 1. Wägen Sie Schutzwirkung bei Beschädigung, planmäßige Kosten und Wartungsbedarf ab. Nennen Sie außerdem eine Grenze der wirtschaftlichen Beurteilung. (6 BE)",
        "points": 6,
        "modelAnswer": "B ist unter den genannten Bedingungen zu empfehlen (1 BE). Kleine unbemerkte Lackschäden bleiben bei ausreichendem Zink und leitender Verbindung kathodisch geschützt (1 BE), während A an der Schadstelle seine Barrierewirkung verliert (1 BE). Den höheren planmäßigen Kosten von nur 15 € steht die zusätzliche Schutzwirkung gegenüber (1 BE). Zink wird verbraucht; regelmäßige Kontrolle, Ersatz und die Prüfung der Verbindung bleiben erforderlich (1 BE). Schäden und Ausfälle sind nicht beziffert, deshalb lässt sich keine vollständige wirtschaftliche Gesamtbilanz berechnen (1 BE). Fachlich begründete alternative Gewichtungen und konsequente Folgefehler aus der Rechnung sind anzuerkennen; ein anderer Vorschlag muss das Risiko unbemerkter Schäden ausdrücklich berücksichtigen.",
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
        "modelAnswer": "Zinn ist nach den angegebenen Potenzialen edler als Eisen. Freiliegendes Eisen bildet die Anode: Fe → Fe²⁺ + 2 e⁻. Elektronen gelangen zur Zinnoberfläche, an der Sauerstoff zu OH⁻ reduziert werden kann. Wie beim Kupferkontakt kann dadurch die Eisenauflösung am Kratzer begünstigt werden. Bei intaktem Überzug wirkt die Zinnschicht dagegen als Barriere. Weder eine Zinnabscheidung noch Kenntnisse über Flächenverhältnisse sind für die Lösung erforderlich.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "extensionMaterials": [
      {
        "title": "Zusatzmaterial: Beschädigter Zinnüberzug",
        "type": "text",
        "content": "Eine dichte Zinnschicht schützt Stahl zunächst als Barriere. An einem Kratzer erreicht ein neutraler, sauerstoffhaltiger Wasserfilm den Stahl. Zinn und Stahl sind elektrisch leitend verbunden. Zur qualitativen Einordnung gelten E°(Fe²⁺/Fe) = −0,44 V und E°(Sn²⁺/Sn) = −0,14 V. Das Metall mit dem negativeren Standardpotenzial wird im vereinfachten Kontaktmodell bevorzugt oxidiert. Schutzschichten auf den freiliegenden Metallen werden hier nicht berücksichtigt; die Potenziale liefern keine Korrosionsgeschwindigkeit."
      }
    ],
    "focusExam": true
  },
  {
    "id": "fokus-sauerstoffkorrosion",
    "title": "5. Rost an einer Fahrradschraube (25 BE)",
    "shortTitle": "Nur Sauerstoffkorrosion",
    "image": "../../assets/sauerstoff.png",
    "description": "Versuchsdaten, Elektronen- und Ionenwege sowie Rostbildung erklären · 25 BE",
    "context": "Eine unbeschichtete Stahlschraube am Fahrrad rostet nach wiederholten Fahrten auf nassen Straßen. Untersuchen Sie ausschließlich die Sauerstoffkorrosion in einem annähernd neutralen Wasserfilm. Stahl wird als Eisen betrachtet. Verwenden Sie Material 1 bis 3.",
    "materials": [
      {
        "title": "Material 1: Modelluntersuchung",
        "type": "text",
        "content": "Drei gleich große, gereinigte Eisenproben werden 14 Tage bei gleicher Temperatur untersucht. A liegt in trockener Luft. B trägt einen dauerhaft feuchten, annähernd neutralen Wasserfilm ohne zugesetztes Salz. C trägt einen ebenso feuchten, annähernd neutralen Wasserfilm mit wenig zugesetztem Natriumchlorid. B und C haben dieselbe benetzte Eisenfläche und vergleichbaren Sauerstoffzutritt aus der Luft. Anschließend werden Korrosionsprodukte mit demselben Verfahren entfernt, ohne das unveränderte Metall abzutragen. Gemessen wird der Verlust an Metallmasse, nicht die Masse des Rosts."
      },
      {
        "title": "Material 2: Ergebnisse nach 14 Tagen – didaktisch modellierte Daten",
        "type": "table",
        "columns": [
          "Probe",
          "Sichtbare Beobachtung",
          "Verlust an Metallmasse"
        ],
        "rows": [
          [
            "A · trockene Luft",
            "Kein sichtbarer Rost",
            "0 mg"
          ],
          [
            "B · Wasserfilm ohne Salzzusatz",
            "Rostbildung",
            "18 mg"
          ],
          [
            "C · Wasserfilm mit Salzzusatz",
            "Stärkere Rostbildung als bei B",
            "45 mg"
          ]
        ]
      },
      {
        "title": "Material 3: Reaktionsräume und Folgereaktionen",
        "type": "text",
        "content": "Auf derselben Schraube können räumlich getrennte anodische und kathodische Bereiche entstehen. Das Eisen verbindet sie metallisch; darüber liegt der zusammenhängende Wasserfilm. Eisen(II)-Ionen und Hydroxid-Ionen können im Wasserfilm zusammentreffen. Bei der anschließenden Rostbildung entstehen verschiedene Eisen(III)-Verbindungen. Rost ist porös und keine dauerhaft dichte Schutzschicht. Die Aufgabe betrachtet keine saure Lösung."
      }
    ],
    "subtasks": [
      {
        "id": "sauerstoff-daten-v1",
        "operator": "Beschreiben",
        "label": "1.",
        "type": "freeText",
        "prompt": "Sie die Befunde in Material 2. Berechnen Sie, um welchen Faktor der Metallverlust von C größer ist als der von B. Trennen Sie Beobachtung und Erklärung. (4 BE)",
        "points": 4,
        "modelAnswer": "A zeigt keinen sichtbaren Rost und im Modell keinen gemessenen Metallverlust (1 BE). B rostet und verliert 18 mg; C zeigt stärkere Rostbildung und verliert 45 mg (1 BE für den Vergleich). Faktor: 45 mg / 18 mg (1 BE Ansatz) = 2,5; C verliert die 2,5-fache Metallmasse von B (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "sauerstoff-teilreaktionen-v1",
        "operator": "Formulieren",
        "label": "2.",
        "type": "freeText",
        "prompt": "Sie die anodische und die kathodische Teilgleichung der Sauerstoffkorrosion im neutralen Wasserfilm. Benennen Sie jeweils den Elektronendonator bzw. Elektronenakzeptor. (6 BE)",
        "points": 6,
        "modelAnswer": "Anode: Fe → Fe²⁺ + 2 e⁻ (2 BE); Eisen ist Elektronendonator (1 BE). Kathode: O₂ + 2 H₂O + 4 e⁻ → 4 OH⁻ (2 BE); Sauerstoff ist Elektronenakzeptor (1 BE). Anode und Kathode sind hier Bereiche derselben Metalloberfläche. Proportionale Koeffizienten sind zulässig.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "sauerstoff-ladungswege-v1",
        "operator": "Erläutern",
        "label": "3.",
        "type": "freeText",
        "prompt": "Sie anhand von Material 3 die Wege der Elektronen und den Ladungstransport im Wasserfilm. Erklären Sie, weshalb für dieses Lokalelement kein zweites Metall benötigt wird. (5 BE)",
        "points": 5,
        "modelAnswer": "An anodischen Bereichen entstehen bei der Eisenoxidation Elektronen (1 BE). Sie gelangen durch das Metall zu kathodischen Bereichen (1 BE), wo sie von Sauerstoff aufgenommen werden (1 BE). Im Wasserfilm übernehmen bewegliche Ionen den Ladungstransport und ermöglichen den Ladungsausgleich (1 BE). Beide Reaktionsbereiche können auf demselben Eisenstück liegen; der metallische Kontakt und der gemeinsame Elektrolyt koppeln sie, sodass kein zweites Metall notwendig ist (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "sauerstoff-rost-v1",
        "operator": "Erklären",
        "label": "4.",
        "type": "freeText",
        "prompt": "Sie den Zusammenhang zwischen Eisenauflösung und Rostbildung. Formulieren Sie die Bildung von Eisen(II)-hydroxid aus Ionen und erläutern Sie, warum eine Rostschicht die weitere Eisenauflösung nicht zuverlässig verhindert. (5 BE)",
        "points": 5,
        "modelAnswer": "Bei der Oxidation geht Eisen als Fe²⁺ in den Wasserfilm über (1 BE). Mit OH⁻ kann es reagieren: Fe²⁺ + 2 OH⁻ → Fe(OH)₂ (2 BE). Weitere Oxidation mit Sauerstoff führt zu Eisen(III)-haltigen Rostprodukten (1 BE). Der poröse Rost schließt die Oberfläche nicht dicht ab; Wasser und Sauerstoff können weiter an Eisen gelangen (1 BE). Fe(OH)₂ ist ein Zwischenprodukt und nicht mit dem gesamten Rost gleichzusetzen.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "sauerstoff-salz-v1",
        "operator": "Beurteilen",
        "label": "5.",
        "type": "freeText",
        "prompt": "Sie die Aussage: „Streusalz ist der Stoff, der beim Rosten die Elektronen aufnimmt. Ohne Streusalz könnte die Schraube nicht rosten.“ Nutzen Sie Material 1 und 2 und unterscheiden Sie Elektronenakzeptor und Leitfähigkeit. (5 BE)",
        "points": 5,
        "modelAnswer": "Die Aussage ist in beiden Teilen falsch (1 BE). Sauerstoff ist im betrachteten Modell der Elektronenakzeptor (1 BE). Probe B rostet auch ohne zugesetztes Salz und widerlegt die behauptete Notwendigkeit von Streusalz (1 BE). Zusätzliche gelöste Ionen erhöhen die elektrische Leitfähigkeit des Wasserfilms (1 BE); dadurch wird der ionische Ladungstransport erleichtert, was den stärkeren Angriff in C begünstigt (1 BE). Na⁺ und Cl⁻ werden hier nicht als Elektronenakzeptoren der Korrosion behandelt.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true
  },
  {
    "id": "fokus-saeurekorrosion",
    "title": "6. Ein saurer Reiniger greift Stahl an (25 BE)",
    "shortTitle": "Nur Säurekorrosion",
    "image": "../../assets/saeure.png",
    "description": "Gasentwicklung und Metallverlust deuten und einen Kontrollversuch planen · 25 BE",
    "context": "Bei einer Modelluntersuchung kommt ein ungeschütztes Stahlteil mit einer sauren Reinigungslösung in Kontakt. Erklären Sie ausschließlich die Säurekorrosion unter Sauerstoffausschluss. Stahl wird als Eisen betrachtet. Die Daten dienen der schriftlichen Auswertung; die Aufgabe enthält keinen Auftrag zur Durchführung.",
    "materials": [
      {
        "title": "Material 1: Modellbedingungen",
        "type": "text",
        "content": "Identische, blanke Eisenproben werden bei gleicher Temperatur in zwei sauerstofffreie Lösungen gegeben und unter Schutzgas gehalten. Ansatz S enthält verdünnte Salzsäure, Ansatz N annähernd neutrales Wasser ohne Säurezusatz. Die Lösungen bedecken jeweils dieselbe Eisenfläche. S enthält während der gesamten Beobachtung ausreichend H₃O⁺-Ionen. Im betrachteten Modell entstehen gelöste Fe²⁺-Ionen; eine schützende Oberflächenschicht liegt nicht vor. Chlorid-Ionen werden nicht als Redoxpartner umgesetzt."
      },
      {
        "title": "Material 2: Beobachtungen – didaktisch modellierte Daten",
        "type": "table",
        "columns": [
          "Zeit",
          "Gesammeltes Gasvolumen in S",
          "Gasentwicklung in N"
        ],
        "rows": [
          [
            "0 min",
            "0 mL",
            "Keine sichtbare"
          ],
          [
            "2 min",
            "8 mL",
            "Keine sichtbare"
          ],
          [
            "4 min",
            "16 mL",
            "Keine sichtbare"
          ],
          [
            "6 min",
            "24 mL",
            "Keine sichtbare"
          ]
        ]
      },
      {
        "title": "Weitere Befunde zu Material 2",
        "type": "text",
        "content": "Die Gasvolumina werden bei gleichem Druck und gleicher Temperatur verglichen. In S entstehen Bläschen auf der Metalloberfläche. Die gereinigte und getrocknete Eisenprobe hat nach dem Versuch eine geringere Masse. Während der Beobachtung ist kein brauner Rost sichtbar. In N zeigt sich innerhalb der Beobachtungszeit keine erkennbare Veränderung."
      },
      {
        "title": "Material 3: Ladungstransport",
        "type": "text",
        "content": "Die saure Lösung enthält bewegliche Oxonium-Ionen H₃O⁺ und Chlorid-Ionen Cl⁻. Auf dem Eisenstück gibt es verschiedene Reaktionsbereiche, die durch das Metall und die gemeinsame Lösung miteinander verbunden sind. Für die Erklärung reichen die im Unterricht erarbeiteten Teilreaktionen; eine Berechnung mit Stromstärke oder Faraday-Konstante ist nicht erforderlich."
      }
    ],
    "subtasks": [
      {
        "id": "saeure-befunde-v1",
        "operator": "Beschreiben",
        "label": "1.",
        "type": "freeText",
        "prompt": "Sie die Unterschiede zwischen S und N anhand von Material 2. Ermitteln Sie die mittlere Gasbildungsrate in S während der ersten sechs Minuten. (4 BE)",
        "points": 4,
        "modelAnswer": "S zeigt Gasentwicklung, N innerhalb der Beobachtungszeit keine sichtbare Gasentwicklung (1 BE). S verliert Metallmasse, obwohl kein brauner Rost sichtbar ist; N zeigt keine erkennbare Veränderung (1 BE). Mittlere Gasbildungsrate: (24 mL − 0 mL) / 6 min (1 BE) = 4 mL/min (1 BE). Daraus folgt keine allgemeine, über den Versuch hinaus konstante Reaktionsgeschwindigkeit.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "saeure-gleichungen-v1",
        "operator": "Formulieren",
        "label": "2.",
        "type": "freeText",
        "prompt": "Sie die anodische und kathodische Teilgleichung sowie die Gesamtgleichung der Säurekorrosion von Eisen. Verwenden Sie H₃O⁺; die vereinfachte H⁺-Schreibweise ist ebenfalls zulässig. (6 BE)",
        "points": 6,
        "modelAnswer": "Anode: Fe → Fe²⁺ + 2 e⁻ (2 BE). Kathode: 2 H₃O⁺ + 2 e⁻ → H₂ + 2 H₂O (2 BE). Gesamt: Fe + 2 H₃O⁺ → Fe²⁺ + H₂ + 2 H₂O (2 BE). Gleichwertig: Kathode 2 H⁺ + 2 e⁻ → H₂; Gesamt Fe + 2 H⁺ → Fe²⁺ + H₂. Atome und Ladungen müssen jeweils ausgeglichen sein.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "saeure-lokalelement-v1",
        "operator": "Erläutern",
        "label": "3.",
        "type": "freeText",
        "prompt": "Sie das Lokalelement auf dem Eisenstück mithilfe von Material 3. Gehen Sie auf beide Reaktionsbereiche sowie Elektronenleitung und Ionenbewegung ein. (5 BE)",
        "points": 5,
        "modelAnswer": "Im anodischen Bereich werden Eisenatome oxidiert und gehen als Fe²⁺ in Lösung (1 BE). Im kathodischen Bereich nehmen H₃O⁺-Ionen Elektronen auf; Wasserstoff entsteht (1 BE). Die Elektronen gelangen innerhalb des Metalls von anodischen zu kathodischen Bereichen (1 BE). Bewegliche Ionen ermöglichen den Ladungstransport in der Lösung (1 BE). Beide Teilreaktionen sind gekoppelt und können an unterschiedlichen Stellen desselben Eisenstücks ablaufen (1 BE). Chlorid-Ionen unterstützen als gelöste Ionen die Leitfähigkeit, werden aber nicht zum Produkt einer Reduktion.",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "saeure-urteil-v1",
        "operator": "Beurteilen",
        "label": "4.",
        "type": "freeText",
        "prompt": "Sie die Aussage: „Das Stahlteil ist nicht korrodiert, weil weder Sauerstoff vorhanden war noch brauner Rost entstanden ist.“ Beziehen Sie Gasentwicklung, Metallverlust und Teilreaktionen ein. (5 BE)",
        "points": 5,
        "modelAnswer": "Die Aussage ist falsch (1 BE). Der Metallverlust zeigt, dass Eisen als Fe²⁺ in Lösung gegangen ist (1 BE). H₃O⁺-Ionen können die bei der Eisenoxidation abgegebenen Elektronen aufnehmen; O₂ ist für diese Reaktion nicht erforderlich (1 BE). Die Gasbläschen lassen sich mit der Bildung von H₂ erklären (1 BE). Korrosion bedeutet hier die chemische Zerstörung des Metalls; brauner Rost ist kein notwendiges unmittelbares Produkt der Säurekorrosion (1 BE).",
        "checking": {
          "type": "selfAssessment"
        }
      },
      {
        "id": "saeure-kontrolle-v1",
        "operator": "Entwickeln",
        "label": "5.",
        "type": "freeText",
        "prompt": "Sie einen zusätzlichen Kontrollansatz, mit dem geprüft werden kann, ob die Gasentwicklung in S die Anwesenheit des Eisenstücks voraussetzt. Nennen Sie die gezielte Änderung, zwei konstant zu haltende Bedingungen und die erwartete Beobachtung mit Begründung. (5 BE)",
        "points": 5,
        "modelAnswer": "Ein zusätzlicher Ansatz enthält dieselbe verdünnte Salzsäure, aber kein Eisenstück (1 BE). Zwei passende Bedingungen bleiben gleich, z. B. Temperatur, Säurekonzentration, Lösungsvolumen, Beobachtungsdauer oder Sauerstoffausschluss (je 1 BE, zusammen 2 BE). Es wird keine durch diese Korrosionsreaktion verursachte Wasserstoffentwicklung erwartet (1 BE), weil ohne Eisen der Elektronendonator der gekoppelten Redoxreaktion fehlt (1 BE). Gleichwertige kontrollierte Vorschläge sind anzuerkennen; nur die Eisenprobe soll gezielt verändert werden.",
        "checking": {
          "type": "selfAssessment"
        }
      }
    ],
    "focusExam": true
  }
]);
