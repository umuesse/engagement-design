import type { FrameworkArticleContent } from "../types";

export const ramp: FrameworkArticleContent = {
  slug: "ramp",
  tag: "Motivationspsychologie",
  title: "RAMP (Drive)",
  lead: "Daniel Pink erweitert in Drive die Motivationsdebatte für Wissenarbeit: Wann helfen externe Anreize — und wann schaden sie? RAMP (Relatedness, Autonomy, Mastery, Purpose) baut auf der Self-Determination Theory auf und macht Sinn als vierte Gestaltungsdimension explizit.",
  metaDescription:
    "Pink Drive und RAMP für Studierende: Gabelstapler-Metapher, Purpose neben SDT, Risiken extrinsischer Belohnungen, Praxis-Toolkits, Vergleich SDT vs. Drive.",
  diagramIds: ["ramp"],
  keyTerms: [
    {
      term: "Gabelstapler- vs. Kerzen-Problem",
      definition:
        "Metapher: Mechanische Aufgaben vs. insight-Kerzenaufgabe — versprochene Belohnung verschlechterte dort die Lösungsleistung (Glucksberg, 1962).",
    },
    {
      term: "Relatedness (Verbundenheit)",
      definition:
        "Zugehörigkeit und Beziehung — entspricht dem SDT-Grundbedürfnis soziale Eingebundenheit; bleibt in RAMP und SDT gleichermaßen zentral.",
    },
    {
      term: "Autonomy (Autonomie)",
      definition:
        "Selbststeuerung über Aufgabe, Zeit, Methode und Team — parallel zum SDT-Grundbedürfnis Autonomie.",
    },
    {
      term: "Mastery (Meisterschaft)",
      definition:
        "Wirksam werden an passenden Herausforderungen — entspricht dem SDT-Grundbedürfnis Kompetenz.",
    },
    {
      term: "Purpose (Sinn)",
      definition:
        "Beitrag zu einem größeren, bedeutsamen Ziel — ergänzt SDT, ersetzt Relatedness nicht; in Pink oft stärker betont als in klassischen SDT-Übersichten.",
    },
  ],
  references: [
    {
      id: "pink-2011",
      apa: "Pink, D. H. (2011). <em>Drive: Was Sie wirklich motiviert</em> (2. Aufl.). ecowin Verlag. (Originalwerk 2009)",
      href: "https://www.danielpink.com/books/drive/",
      accessLabel: "Autor-Seite (Englisch)",
    },
    {
      id: "pink-2009",
      apa: "Pink, D. H. (2009). <em>Drive: The surprising truth about what motivates us</em>. Riverhead Books.",
      href: "https://www.danielpink.com/books/drive/",
      accessLabel: "Autor-Seite",
    },
    {
      id: "ryan-deci-2000",
      apa: "Ryan, R. M., & Deci, E. L. (2000). Self-determination theory and the facilitation of intrinsic motivation, social development, and well-being. <em>American Psychologist</em>, <em>55</em>(1), 68–78. https://doi.org/10.1037/0003-066X.55.1.68",
      href: "https://selfdeterminationtheory.org/SDT/documents/2000_RyanDeci_SDT.pdf",
      accessLabel: "PDF (SDT)",
    },
    {
      id: "deci-1999",
      apa: "Deci, E. L., Koestner, R., & Ryan, R. M. (1999). A meta-analytic review of experiments examining the effects of extrinsic rewards on intrinsic motivation. <em>Psychological Bulletin</em>, <em>125</em>(6), 627–668. https://doi.org/10.1037/0033-2909.125.6.627",
      href: "https://selfdeterminationtheory.org/SDT/documents/1999_DeciKoestnerRyan_Metal.pdf",
      accessLabel: "PDF (Meta-Analyse)",
    },
    {
      id: "duncker-1945",
      apa: "Duncker, K. (1945). On problem-solving. <em>Psychological Monographs</em>, <em>58</em>(5), Whole No. 270.",
      accessLabel: "Klassische Kerzenaufgabe (Literatur)",
    },
    {
      id: "glucksberg-1962",
      apa: "Glucksberg, S. (1962). The influence of strength of drive on functional fixedness and perceptual recognition. <em>Journal of Experimental Psychology</em>, <em>63</em>(1), 36–41. https://doi.org/10.1037/h0044683",
      accessLabel: "DOI",
    },
  ],
  blocks: [],
  sections: [
    {
      blocks: [
        { type: "h2", text: "Gabelstapler-Metapher: Wann helfen Anreize?" },
        {
          type: "p",
          text: 'Deci und Ryan liefern in der <a href="/frameworks/sdt">SDT</a> das <em>Warum</em> und <em>Wie</em> der Motivationsqualität — Pink ergänzt die Frage <em>Wann</em> externe Anreize überhaupt passen (<a href="#ref-pink-2011">Pink, 2011</a>). Seine Gabelstapler-Metapher: Bei <strong>mechanischen, algorithmischen</strong> Aufgaben (klare Regeln, eine richtige Vorgehensweise) können Belohnungen und Ziele die Leistung unterstützen. Bei <strong>kognitiv-kreativen</strong> Aufgaben — Probleme neu sehen, Zusammenhänge finden — wirken dieselben Anreize oft eher störend.',
        },
        {
          type: "p",
          text: 'Ein Standardbeispiel ist Dunckers <strong>Kerzenaufgabe</strong> (<a href="#ref-duncker-1945">Duncker, 1945</a>): Proband:innen sollen eine <strong>brennende Kerze</strong> so an einer <strong>senkrecht hängenden Korkplatte</strong> befestigen, dass <strong>kein Wachs auf den Boden tropft</strong>. Zur Verfügung stehen die Kerze, eine <strong>Schachtel Streichhölzer</strong> und eine <strong>Schachtel Reißnägel</strong>. Es geht um ein kognitives <em>Insight</em>-Problem — nicht um mechanisches Abspulen fester Schritte.',
        },
        {
          type: "p",
          text: '<strong>Lösung (kurz):</strong> Reißnägel aus der Schachtel nehmen, die Kerze in die leere Schachtel stellen, die Schachtel mit Reißnägeln an der Korkplatte befestigen und die Kerze mit den Streichhölzern anzünden.',
        },
        {
          type: "p",
          text: 'Entscheidend ist oft <strong>funktionale Fixiertheit</strong>: Viele sehen die Schachtel nur als Behälter für Nägel, nicht als nutzbares Teil der Konstruktion — deshalb fällt die Umstrukturierung schwer. Genau bei solchen Insight-Aufgaben zeigt Glucksberg (<a href="#ref-glucksberg-1962">1962</a>), dass versprochene Geldbelohnung die Leistung eher <strong>verschlechtert</strong> als verbessert.',
        },
        {
          type: "p",
          text: 'Im Experiment fand die <strong>Belohnungsgruppe</strong> die Lösung <strong>seltener</strong> und war im Mittel <strong>langsamer</strong> als die Gruppe ohne extrinsischen Anreiz — ein Befund, den Pink für kognitiv-kreative Arbeit überträgt.',
        },
        {
          type: "p",
          text: 'Vermutlich lenkt die Belohnung die Aufmerksamkeit von der flexiblen Umstrukturierung ab — ein <strong>Leistungsbefund</strong>, nicht dasselbe wie SDT-Korrumpierung (inneres Interesse). Für Engagement Design: Anreize zuerst nach <strong>Aufgabentyp</strong> sortieren — nicht pauschal „mehr Belohnung“.',
        },
        {
          type: "callout",
          title: "Merksatz",
          paragraphs: [
            "Routine und klare Algorithmen: extrinsische Ziele können stabilisieren. Komplexität und Kreativität: eher Autonomie, Meisterschaft und Sinn statt Carrot-and-Stick.",
          ],
        },
      ],
    },
    {
      diagramIds: ["ramp"],
      blocksBeforeDiagram: [
        { type: "h2", text: "Sinn als vierte Dimension — SDT und RAMP" },
        {
          type: "p",
          text: 'Die <a href="/frameworks/sdt">SDT</a> nennt drei universelle Grundbedürfnisse: Autonomie, Kompetenz und soziale Eingebundenheit (<a href="#ref-ryan-deci-2000">Ryan &amp; Deci, 2000</a>). Pink betont in RAMP zusätzlich <strong>Purpose (Sinn)</strong>: das Erleben, zu etwas Größerem beizutragen — <strong>ergänzend</strong>, nicht als Ersatz für SDT.',
        },
        {
          type: "p",
          text: 'Vier Säulen im Überblick (<a href="#ref-pink-2011">Pink, 2011</a>): <strong>Relatedness (Verbundenheit)</strong> — Zugehörigkeit und Beziehung; RAMP ersetzt sie nicht durch Sinn. <strong>Autonomy (Autonomie)</strong> — parallel zur SDT-<strong>Autonomie</strong>: selbstgesteuert handeln, wenn Wahlmöglichkeiten echt und nachvollziehbar sind. <strong>Mastery (Meisterschaft)</strong> — entspricht der SDT-<strong>Kompetenz</strong>, wirksam werden an passenden Herausforderungen. <strong>Purpose (Sinn)</strong> — narrative und gesellschaftliche Bedeutung: Warum lohnt sich die Anstrengung über den unmittelbaren Output hinaus?',
        },
        {
          type: "p",
          text: "Empirisch ist Sinn schwer isoliert zu messen; Pink verweist u. a. auf Pro-Bono-Arbeit und mission-getriebene Organisationen als Hinweise, dass Menschen oft mehr Engagement zeigen, wenn sie Wirkung erkennen. Kritisch bleibt: „Sinn“ darf nicht zur Rechtfertigung von Druck oder unethischen Rollen missbraucht werden — extreme Kontrollsettings in der Forschungsgeschichte (etwa Gefängnis-Simulationen) warnen, wie schnell Ethik unter reiner Anreizlogik leidet.",
        },
      ],
      blocks: [
        {
          type: "callout",
          title: "Merksatz für Gestaltung",
          paragraphs: [
            "Vier Fragen: Verbundenheit spürbar? Autonomie möglich? Meisterschaft (Kompetenz) förderlich? Sinn (Wofür) verständlich?",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "h2", text: "Vier Gefahren extrinsischer Belohnungen" },
        {
          type: "p",
          text: 'Pink fasst Risiken zusammen, die auch in der SDT-Literatur anklingen (<a href="#ref-deci-1999">Deci et al., 1999</a>):',
        },
        {
          type: "ul",
          items: [
            "<strong>Korrumpierung:</strong> Belohnungen können inneres Interesse verdrängen — das Handeln dient der Auszeichnung, nicht mehr der Aufgabe.",
            '<strong>Leistungsabfall:</strong> Bei insight-/kreativen Aufgaben (z. B. Kerzenaufgabe, siehe oben) können versprochene Belohnungen seltener und langsamere Lösungen bedeuten (<a href="#ref-glucksberg-1962">Glucksberg, 1962</a>) — unabhängig vom SDT-Korrumpierungseffekt.',
            "<strong>Ethische Verengung:</strong> Kurzfristige Kennzahlen und starke Anreize können zu Ausweichen, Schönrechnen oder moralischem Blindflug beitragen — Verantwortung braucht klare Guardrails.",
            "<strong>Sucht nach dem nächsten Carrot:</strong> Wenn nur externe Anreize wechseln, fehlt nachhaltige Motivation — es entsteht ein Teufelskreis aus „Was bekomme ich dafür?“",
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "h2", text: "Praxis-Toolkits für Engagement Design" },
        {
          type: "p",
          text: "Pink und SDT lassen sich in konkrete Hebel übersetzen — ohne Mechanik-Katalog, aber als Checkliste für Touchpoints im Lern- und Projektkontext:",
        },
        {
          type: "table",
          caption: "Gestaltungshebel nach RAMP (Auswahl)",
          headers: ["Dimension", "Beispiel-Hebel", "Frage an euer Design"],
          rows: [
            [
              "<strong>Autonomie</strong>",
              "Aufgabe, Zeit, Technik, Team (4 T’s)",
              "Können Lernende <em>was</em>, <em>wann</em>, <em>wie</em> und <em>mit wem</em> wählen — oder nur abarbeiten?",
            ],
            [
              "<strong>Meisterschaft</strong> (= SDT Kompetenz)",
              "Flow-Zone, Feedback, Iteration",
              "Ist die Herausforderung knapp über dem Skill-Niveau — mit sichtbarem Fortschritt?",
            ],
            [
              "<strong>Verbundenheit</strong> (Relatedness)",
              "Peer-Review, gemeinsame Reflexion, psychologische Sicherheit",
              "Entsteht echte Zugehörigkeit — nicht nur Parallelarbeit?",
            ],
            [
              "<strong>Sinn</strong> (Purpose)",
              "Narrativ, sichtbare Wirkung, Bezug zu Nutzer:innen oder Gesellschaft",
              "Ist das „Wofür“ verständlich — jenseits von Noten und Deadlines?",
            ],
          ],
        },
      ],
    },
    {
      blocks: [
        { type: "h2", text: "SDT und Drive im Vergleich" },
        {
          type: "table",
          caption: "Komplementäre Perspektiven — nicht entweder/or",
          headers: ["", "SDT (Deci & Ryan)", "Drive / RAMP (Pink)"],
          rows: [
            [
              "<strong>Fokus</strong>",
              "Wissenschaftliches Modell: Motivations<em>qualität</em>, Internalisierung, Grundbedürfnisse",
              "Popularisierung für Wissenarbeit: <em>Wann</em> Anreize, praktische Sprache für Teams",
            ],
            [
              "<strong>Schlüsselfaktoren</strong>",
              "Autonomie, <strong>Kompetenz</strong>, soziale Eingebundenheit",
              "Autonomy, <strong>Mastery</strong> (= Kompetenz), Relatedness, <strong>Purpose</strong> (Sinn)",
            ],
            [
              "<strong>Kernfrage</strong>",
              "Welcher Regulierungstyp? Welches Bedürfnis wird gestärkt oder untergraben?",
              "Passt die Aufgabe zu Carrot-and-Stick oder braucht sie intrinsische Treiber? Wo fehlt Sinn trotz Anreizen?",
            ],
            [
              "<strong>Praxis</strong>",
              "Kontinuum, Korrumpierungseffekt, Bedürfnisorientierung",
              "4 T’s Autonomie, Flow/Feedback, Narrative Wirkung, Risiken von Carrot-and-Stick",
            ],
          ],
        },
        { type: "h2", text: "Relevanz für Engagement Design" },
        {
          type: "p",
          text: "Nutzt SDT für Tiefe und Evidenz, RAMP für schnelle Team-Sprache und die explizite Sinnfrage. Sortiert Touchpoints nach Aufgabentyp (Gabelstapler vs. Kerze), prüft Bedürfnisse und Purpose — dann entstehen Erlebnisse, die freiwillig getragen werden, statt nur kurzfristig aktiviert zu werden.",
        },
      ],
    },
  ],
};
