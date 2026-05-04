const WORDS = [
  {
    "priority": 1,
    "word": "consider",
    "meaning": "рассматривать; считать",
    "frequency": 3,
    "note": "considered -> consider"
  },
  {
    "priority": 1,
    "word": "either",
    "meaning": "любой из двух; тоже не",
    "frequency": 3,
    "note": "Включая конструкцию either ... or."
  },
  {
    "priority": 1,
    "word": "hollow",
    "meaning": "пустой; полый",
    "frequency": 3,
    "note": ""
  },
  {
    "priority": 1,
    "word": "participant",
    "meaning": "участник",
    "frequency": 3,
    "note": "participants -> participant"
  },
  {
    "priority": 1,
    "word": "subsequent",
    "meaning": "последующий",
    "frequency": 3,
    "note": ""
  },
  {
    "priority": 1,
    "word": "suggest",
    "meaning": "предлагать; предполагать",
    "frequency": 3,
    "note": ""
  },
  {
    "priority": 2,
    "word": "against",
    "meaning": "против",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "apparent",
    "meaning": "явный; очевидный",
    "frequency": 2,
    "note": "apparently -> apparent"
  },
  {
    "priority": 2,
    "word": "approach",
    "meaning": "подходить; подход",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "attach",
    "meaning": "прикреплять; присоединять",
    "frequency": 2,
    "note": "attached -> attach"
  },
  {
    "priority": 2,
    "word": "congestion",
    "meaning": "пробка; скопление; затор",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "decrease",
    "meaning": "уменьшать; уменьшение",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "immediate",
    "meaning": "немедленный",
    "frequency": 2,
    "note": "immediately -> immediate"
  },
  {
    "priority": 2,
    "word": "increase",
    "meaning": "увеличивать; увеличение",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "leach",
    "meaning": "вымывать; выщелачивать",
    "frequency": 2,
    "note": "leached -> leach"
  },
  {
    "priority": 2,
    "word": "lead",
    "meaning": "вести; приводить к",
    "frequency": 2,
    "note": "led -> lead"
  },
  {
    "priority": 2,
    "word": "outcome",
    "meaning": "исход; результат",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "proposal",
    "meaning": "предложение",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "provide",
    "meaning": "предоставлять",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 2,
    "word": "reduce",
    "meaning": "уменьшать; сокращать",
    "frequency": 2,
    "note": "reducing -> reduce"
  },
  {
    "priority": 2,
    "word": "rely",
    "meaning": "полагаться",
    "frequency": 2,
    "note": "relied -> rely"
  },
  {
    "priority": 2,
    "word": "retain",
    "meaning": "сохранять; удерживать",
    "frequency": 2,
    "note": "retaining -> retain"
  },
  {
    "priority": 2,
    "word": "scatter",
    "meaning": "разбрасывать; рассеивать",
    "frequency": 2,
    "note": "scattered -> scatter"
  },
  {
    "priority": 2,
    "word": "significance",
    "meaning": "значимость; значение",
    "frequency": 2,
    "note": ""
  },
  {
    "priority": 3,
    "word": "abbey",
    "meaning": "аббатство",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "abundant",
    "meaning": "обильный; многочисленный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "accomplish",
    "meaning": "завершать; выполнять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "accumulate",
    "meaning": "накапливать; собирать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "accurate",
    "meaning": "точный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "accurately",
    "meaning": "точно",
    "frequency": 1,
    "note": "Можно учить вместе с accurate."
  },
  {
    "priority": 3,
    "word": "achieve",
    "meaning": "достигать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "across",
    "meaning": "через; сквозь",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "adapt",
    "meaning": "приспосабливаться; адаптировать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "admiration",
    "meaning": "восхищение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "adopt",
    "meaning": "принимать; усыновлять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "alleged",
    "meaning": "предполагаемый; заявленный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "allow",
    "meaning": "позволять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "along",
    "meaning": "вдоль",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "ambiguity",
    "meaning": "двусмысленность; неопределенность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "amendment",
    "meaning": "изменение; поправка",
    "frequency": 1,
    "note": "Особенно: поправка к конституции."
  },
  {
    "priority": 3,
    "word": "ancestor",
    "meaning": "предок",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "ancient",
    "meaning": "древний",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "annual",
    "meaning": "ежегодный",
    "frequency": 1,
    "note": "annually -> annual"
  },
  {
    "priority": 3,
    "word": "apothecary",
    "meaning": "аптекарь",
    "frequency": 1,
    "note": "apothecaries -> apothecary"
  },
  {
    "priority": 3,
    "word": "appeal",
    "meaning": "обращаться; привлекать",
    "frequency": 1,
    "note": "appeals -> appeal"
  },
  {
    "priority": 3,
    "word": "appear",
    "meaning": "появляться; казаться",
    "frequency": 1,
    "note": "appearing -> appear"
  },
  {
    "priority": 3,
    "word": "appoint",
    "meaning": "назначать",
    "frequency": 1,
    "note": "appointed -> appoint"
  },
  {
    "priority": 3,
    "word": "ascent",
    "meaning": "восхождение; подъем",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "assertion",
    "meaning": "утверждение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "assume",
    "meaning": "предполагать",
    "frequency": 1,
    "note": "assumed -> assume"
  },
  {
    "priority": 3,
    "word": "assumption",
    "meaning": "предположение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "astonishing",
    "meaning": "поразительный; невероятный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "at least",
    "meaning": "по меньшей мере",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "awareness",
    "meaning": "осведомленность; осознание",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "basic",
    "meaning": "базовый; основной",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "beak",
    "meaning": "клюв",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "behove",
    "meaning": "следует; надлежит",
    "frequency": 1,
    "note": "На фото похоже на behove / behoove."
  },
  {
    "priority": 3,
    "word": "bend",
    "meaning": "сгибать; изгиб",
    "frequency": 1,
    "note": "bent -> bend"
  },
  {
    "priority": 3,
    "word": "beneath",
    "meaning": "под; ниже",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "beyond",
    "meaning": "за пределами; вне",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "brood",
    "meaning": "выводок",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "brush",
    "meaning": "чистить; тереть",
    "frequency": 1,
    "note": "brushes -> brush"
  },
  {
    "priority": 3,
    "word": "burrow",
    "meaning": "нора; рыть нору",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "bury",
    "meaning": "хоронить; закапывать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "carve",
    "meaning": "вырезать; высекать",
    "frequency": 1,
    "note": "carves -> carve"
  },
  {
    "priority": 3,
    "word": "caution",
    "meaning": "осторожность; предупреждение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "celebrate",
    "meaning": "отмечать; праздновать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "certain",
    "meaning": "определенный; уверенный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "chamber",
    "meaning": "камера; полость; помещение",
    "frequency": 1,
    "note": "chambers -> chamber"
  },
  {
    "priority": 3,
    "word": "chant",
    "meaning": "распевать; скандировать",
    "frequency": 1,
    "note": "chanted -> chant"
  },
  {
    "priority": 3,
    "word": "chase",
    "meaning": "преследовать; погоня",
    "frequency": 1,
    "note": "chasing -> chase"
  },
  {
    "priority": 3,
    "word": "chiefly",
    "meaning": "главным образом",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "cite",
    "meaning": "цитировать; ссылаться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "civil",
    "meaning": "гражданский",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "claw",
    "meaning": "коготь; царапать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "compel",
    "meaning": "заставлять; принуждать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "compete",
    "meaning": "соревноваться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "complementary",
    "meaning": "дополнительный; взаимодополняющий",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "complexity",
    "meaning": "сложность",
    "frequency": 1,
    "note": "На фото слово было похоже на complicity, по переводу: complexity."
  },
  {
    "priority": 3,
    "word": "comprehensive",
    "meaning": "всесторонний; полный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "confidence",
    "meaning": "уверенность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "conscious",
    "meaning": "сознательный; осознанный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "consistently",
    "meaning": "постоянно; стабильно",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "constrain",
    "meaning": "ограничивать; сдерживать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "constraint",
    "meaning": "ограничение",
    "frequency": 1,
    "note": "constraints -> constraint"
  },
  {
    "priority": 3,
    "word": "consume",
    "meaning": "потреблять",
    "frequency": 1,
    "note": "consumed -> consume"
  },
  {
    "priority": 3,
    "word": "consumer",
    "meaning": "потребитель",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "contemplation",
    "meaning": "размышление; созерцание",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "contest",
    "meaning": "борьба; соревнование",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "contribute",
    "meaning": "способствовать; вносить вклад",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "contribution",
    "meaning": "вклад",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "cosmopolitan",
    "meaning": "космополитичный; многонациональный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "crowd",
    "meaning": "толпа",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "crucial",
    "meaning": "важнейший; решающий",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "curve",
    "meaning": "кривая; поворот",
    "frequency": 1,
    "note": "На фото похоже на curves."
  },
  {
    "priority": 3,
    "word": "deal",
    "meaning": "иметь дело; сделка",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "debt",
    "meaning": "долг",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "decline",
    "meaning": "снижаться; упадок",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "dense",
    "meaning": "плотный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "density",
    "meaning": "плотность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "desire",
    "meaning": "желание; желать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "devise",
    "meaning": "разрабатывать; придумывать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "devote",
    "meaning": "посвящать",
    "frequency": 1,
    "note": "devoted / devotes -> devote"
  },
  {
    "priority": 3,
    "word": "distinct",
    "meaning": "отдельный; различный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "distinctly",
    "meaning": "отчетливо; явно",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "distract",
    "meaning": "отвлекать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "doubt",
    "meaning": "сомнение; сомневаться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "draw",
    "meaning": "рисовать; притягивать",
    "frequency": 1,
    "note": "drawn -> draw"
  },
  {
    "priority": 3,
    "word": "earnest",
    "meaning": "серьезный; искренний",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "embark",
    "meaning": "приступать к чему-то",
    "frequency": 1,
    "note": "embarked -> embark"
  },
  {
    "priority": 3,
    "word": "emerge",
    "meaning": "появляться; возникать",
    "frequency": 1,
    "note": "emerged -> emerge"
  },
  {
    "priority": 3,
    "word": "emission",
    "meaning": "выброс",
    "frequency": 1,
    "note": "emissions -> emission"
  },
  {
    "priority": 3,
    "word": "employ",
    "meaning": "использовать; нанимать",
    "frequency": 1,
    "note": "employed -> employ"
  },
  {
    "priority": 3,
    "word": "encourage",
    "meaning": "побуждать; поощрять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "engage",
    "meaning": "заниматься; вовлекать",
    "frequency": 1,
    "note": "engaging -> engage"
  },
  {
    "priority": 3,
    "word": "enhance",
    "meaning": "усиливать; улучшать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "environment",
    "meaning": "окружающая среда",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "equip",
    "meaning": "оборудовать",
    "frequency": 1,
    "note": "equipped -> equip"
  },
  {
    "priority": 3,
    "word": "establish",
    "meaning": "устанавливать; основывать",
    "frequency": 1,
    "note": "established -> establish"
  },
  {
    "priority": 3,
    "word": "estimate",
    "meaning": "оценивать; предполагать",
    "frequency": 1,
    "note": "estimated -> estimate"
  },
  {
    "priority": 3,
    "word": "even though",
    "meaning": "даже если; хотя",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "evidence",
    "meaning": "доказательство",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "evolve",
    "meaning": "развиваться",
    "frequency": 1,
    "note": "evolved -> evolve"
  },
  {
    "priority": 3,
    "word": "existence",
    "meaning": "существование",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "expect",
    "meaning": "ожидать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "expense",
    "meaning": "расход; издержки",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "expert",
    "meaning": "эксперт",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "explosive",
    "meaning": "взрывной; взрывчатое вещество",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "express",
    "meaning": "выражать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "external",
    "meaning": "внешний",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "fallacy",
    "meaning": "заблуждение; ошибка рассуждения",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "favor",
    "meaning": "одобрение; предпочтение",
    "frequency": 1,
    "note": "American spelling; British: favour."
  },
  {
    "priority": 3,
    "word": "feasibility",
    "meaning": "осуществимость",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "feature",
    "meaning": "черта; особенность",
    "frequency": 1,
    "note": "features -> feature"
  },
  {
    "priority": 3,
    "word": "field",
    "meaning": "поле; область",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "firm",
    "meaning": "крепкий; твердый",
    "frequency": 1,
    "note": "firmly -> firm"
  },
  {
    "priority": 3,
    "word": "foremost",
    "meaning": "прежде всего; главный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "forever",
    "meaning": "навсегда",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "former ... latter",
    "meaning": "первый ... последний",
    "frequency": 1,
    "note": "Конструкция: the former ... the latter."
  },
  {
    "priority": 3,
    "word": "fossil",
    "meaning": "ископаемое",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "foster",
    "meaning": "способствовать; развивать",
    "frequency": 1,
    "note": "fostering -> foster"
  },
  {
    "priority": 3,
    "word": "frequent",
    "meaning": "частый",
    "frequency": 1,
    "note": "frequently -> frequent"
  },
  {
    "priority": 3,
    "word": "fuel",
    "meaning": "топливо; заправлять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "fuse",
    "meaning": "сливаться; сплавляться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "fuzz",
    "meaning": "пушок; ворс",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "gain",
    "meaning": "получать; приобретать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "gather",
    "meaning": "собирать",
    "frequency": 1,
    "note": "gathered -> gather"
  },
  {
    "priority": 3,
    "word": "generation",
    "meaning": "поколение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "harmful",
    "meaning": "вредный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "heat",
    "meaning": "тепло; температура; нагревать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "however",
    "meaning": "однако",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "in spite of",
    "meaning": "несмотря на",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "incentive",
    "meaning": "стимул",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "incredible",
    "meaning": "невероятный; чрезвычайный",
    "frequency": 1,
    "note": "incredibly -> incredible"
  },
  {
    "priority": 3,
    "word": "indeed",
    "meaning": "действительно; и правда",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "induce",
    "meaning": "вызывать; приводить к чему-то",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "inextricable",
    "meaning": "неразрывный; запутанный",
    "frequency": 1,
    "note": "inextricably -> inextricable"
  },
  {
    "priority": 3,
    "word": "ingenious",
    "meaning": "изобретательный; хитроумный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "ingenuity",
    "meaning": "изобретательность; находчивость",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "insect",
    "meaning": "насекомое",
    "frequency": 1,
    "note": "insects -> insect"
  },
  {
    "priority": 3,
    "word": "insight",
    "meaning": "понимание; проницательность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "instant",
    "meaning": "мгновенный; момент",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "instead",
    "meaning": "вместо",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "internal",
    "meaning": "внутренний",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "interruption",
    "meaning": "прерывание",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "intertwine",
    "meaning": "переплетать; сплетать",
    "frequency": 1,
    "note": "intertwined -> intertwine"
  },
  {
    "priority": 3,
    "word": "intervene",
    "meaning": "вмешиваться",
    "frequency": 1,
    "note": "intervene -> intervene"
  },
  {
    "priority": 3,
    "word": "invention",
    "meaning": "изобретение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "investigation",
    "meaning": "расследование; исследование",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "involve",
    "meaning": "включать; вовлекать",
    "frequency": 1,
    "note": "involved -> involve"
  },
  {
    "priority": 3,
    "word": "issue",
    "meaning": "проблема; вопрос",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "leap",
    "meaning": "прыгать; скачок",
    "frequency": 1,
    "note": "leaping -> leap"
  },
  {
    "priority": 3,
    "word": "lizard",
    "meaning": "ящерица",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "maintain",
    "meaning": "поддерживать; сохранять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "major",
    "meaning": "главный; крупный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "make up",
    "meaning": "составлять; выдумывать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "managed to",
    "meaning": "смочь; суметь сделать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "mankind",
    "meaning": "человечество",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "measure",
    "meaning": "мера; измерять",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "merchant",
    "meaning": "купец; торговец",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "multiple",
    "meaning": "множественный; многочисленный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "native",
    "meaning": "родной; местный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "neglect",
    "meaning": "пренебрегать",
    "frequency": 1,
    "note": "neglected -> neglect"
  },
  {
    "priority": 3,
    "word": "notion",
    "meaning": "понятие; идея",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "novelist",
    "meaning": "романист; писатель",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "novelty",
    "meaning": "новизна; новшество",
    "frequency": 1,
    "note": "novelties -> novelty"
  },
  {
    "priority": 3,
    "word": "object",
    "meaning": "возражать; объект",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "observation",
    "meaning": "наблюдение",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "obtain",
    "meaning": "получать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "occasion",
    "meaning": "случай; повод",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "occur",
    "meaning": "происходить; случаться",
    "frequency": 1,
    "note": "occurred -> occur"
  },
  {
    "priority": 3,
    "word": "offspring",
    "meaning": "потомство",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "omit",
    "meaning": "опускать; пропускать",
    "frequency": 1,
    "note": "omitted -> omit"
  },
  {
    "priority": 3,
    "word": "once",
    "meaning": "как только; однажды",
    "frequency": 1,
    "note": "На фото слово не очень разборчиво; по переводу вероятно once."
  },
  {
    "priority": 3,
    "word": "overcrowded",
    "meaning": "переполненный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "overlap",
    "meaning": "перекрываться; накладываться",
    "frequency": 1,
    "note": "overlapping -> overlap"
  },
  {
    "priority": 3,
    "word": "own",
    "meaning": "собственный; владеть",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "ownership",
    "meaning": "владение; право собственности",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pace",
    "meaning": "шаг; темп",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pale",
    "meaning": "бледный; тусклый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "participate",
    "meaning": "участвовать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "particular",
    "meaning": "конкретный; особый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "particulate",
    "meaning": "твердая частица; частица",
    "frequency": 1,
    "note": "particulates -> particulate"
  },
  {
    "priority": 3,
    "word": "passage",
    "meaning": "проход; отрывок; коридор",
    "frequency": 1,
    "note": "passages -> passage"
  },
  {
    "priority": 3,
    "word": "persist",
    "meaning": "сохраняться; упорствовать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "persuade",
    "meaning": "убеждать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pioneer",
    "meaning": "первопроходец; начинать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "plate",
    "meaning": "пластина; тарелка",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "point",
    "meaning": "точка; пункт",
    "frequency": 1,
    "note": "points -> point"
  },
  {
    "priority": 3,
    "word": "poor",
    "meaning": "бедный; плохой",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pottery",
    "meaning": "гончарное дело; керамика",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "precision",
    "meaning": "точность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "prepare",
    "meaning": "готовить; подготавливать",
    "frequency": 1,
    "note": "prepared -> prepare"
  },
  {
    "priority": 3,
    "word": "presence",
    "meaning": "присутствие",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "prevent",
    "meaning": "предотвращать; запрещать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pride",
    "meaning": "гордость",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "primarily",
    "meaning": "прежде всего",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "principally",
    "meaning": "в основном; главным образом",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "probe",
    "meaning": "исследовать; зондировать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "produce",
    "meaning": "производить",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "product",
    "meaning": "продукт; изделие",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "propel",
    "meaning": "запускать; продвигать вперед",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "propose",
    "meaning": "предлагать",
    "frequency": 1,
    "note": "proposed -> propose"
  },
  {
    "priority": 3,
    "word": "prove",
    "meaning": "доказывать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pupil",
    "meaning": "зрачок; ученик",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "purchase",
    "meaning": "покупать; покупка",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "pure",
    "meaning": "чистый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "purpose",
    "meaning": "цель",
    "frequency": 1,
    "note": "purposes -> purpose"
  },
  {
    "priority": 3,
    "word": "quantity",
    "meaning": "количество",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "quite",
    "meaning": "довольно; вполне",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "range",
    "meaning": "диапазон; радиус",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "rapidly",
    "meaning": "быстро",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "reactive",
    "meaning": "реактивный; отзывчивый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "reassessment",
    "meaning": "переоценка",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "receive",
    "meaning": "получать",
    "frequency": 1,
    "note": "received -> receive"
  },
  {
    "priority": 3,
    "word": "recognize",
    "meaning": "узнавать; признавать",
    "frequency": 1,
    "note": "recognizing -> recognize"
  },
  {
    "priority": 3,
    "word": "reinforce",
    "meaning": "укреплять; усиливать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "reject",
    "meaning": "отвергать",
    "frequency": 1,
    "note": "rejected -> reject"
  },
  {
    "priority": 3,
    "word": "relate",
    "meaning": "относиться; связываться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "relational",
    "meaning": "соотносительный; связанный отношениями",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "release",
    "meaning": "выпускать; освобождать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "renowned",
    "meaning": "известный; прославленный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "repel",
    "meaning": "отталкивать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "restrain",
    "meaning": "ограничивать; сдерживать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "restriction",
    "meaning": "ограничение; запрет",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "retard",
    "meaning": "задерживать; тормозить",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "reveal",
    "meaning": "раскрывать; показывать",
    "frequency": 1,
    "note": "reveals -> reveal"
  },
  {
    "priority": 3,
    "word": "revise",
    "meaning": "пересматривать; повторять",
    "frequency": 1,
    "note": "revised -> revise"
  },
  {
    "priority": 3,
    "word": "roughly",
    "meaning": "примерно; грубо",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "rush",
    "meaning": "бросаться; спешить",
    "frequency": 1,
    "note": "rushed -> rush"
  },
  {
    "priority": 3,
    "word": "sabre",
    "meaning": "сабля",
    "frequency": 1,
    "note": "British spelling; American: saber."
  },
  {
    "priority": 3,
    "word": "scarce",
    "meaning": "редкий; скудный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "scope",
    "meaning": "масштаб; размах",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "seem to be",
    "meaning": "казаться; похоже быть",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "select",
    "meaning": "выбирать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "self-evident",
    "meaning": "самоочевидный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "self-sustaining",
    "meaning": "самоподдерживающийся",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "settle",
    "meaning": "поселиться; урегулировать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "several",
    "meaning": "несколько",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "severe",
    "meaning": "суровый; сильный; серьезный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "shadow",
    "meaning": "тень",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "shed",
    "meaning": "сбрасывать; сарай",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "sheer",
    "meaning": "полный; настоящий; явный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "shelter",
    "meaning": "убежище; укрытие",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "shift",
    "meaning": "смена; перемещать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "significant",
    "meaning": "значительный; важный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "site",
    "meaning": "место; участок",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "slope",
    "meaning": "склон; наклон",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "soil",
    "meaning": "почва",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "sophistication",
    "meaning": "сложность; изощренность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "source",
    "meaning": "источник",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "species",
    "meaning": "вид; виды",
    "frequency": 1,
    "note": "Единственное и множественное число совпадают."
  },
  {
    "priority": 3,
    "word": "specifically",
    "meaning": "именно; специально",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "spite",
    "meaning": "злоба; несмотря на",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "stale",
    "meaning": "залежавшийся; несвежий",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "still",
    "meaning": "все еще; неподвижный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "stretch",
    "meaning": "растягивать; участок",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "strictly",
    "meaning": "строго",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "struggle",
    "meaning": "бороться; борьба",
    "frequency": 1,
    "note": "struggled -> struggle"
  },
  {
    "priority": 3,
    "word": "subtle",
    "meaning": "тонкий; едва заметный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "sudden",
    "meaning": "внезапный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "surface",
    "meaning": "поверхность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "surround",
    "meaning": "окружать",
    "frequency": 1,
    "note": "surrounded -> surround"
  },
  {
    "priority": 3,
    "word": "sustain",
    "meaning": "поддерживать",
    "frequency": 1,
    "note": "sustaining -> sustain"
  },
  {
    "priority": 3,
    "word": "take away",
    "meaning": "забирать; убирать",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "take for granted",
    "meaning": "принимать как должное",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "target",
    "meaning": "цель; нацеливаться",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "temperate",
    "meaning": "умеренный",
    "frequency": 1,
    "note": "Например: temperate climate."
  },
  {
    "priority": 3,
    "word": "the more ... the more",
    "meaning": "чем больше ..., тем больше ...",
    "frequency": 1,
    "note": "Конструкция сравнения."
  },
  {
    "priority": 3,
    "word": "thus",
    "meaning": "таким образом; следовательно",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "tie",
    "meaning": "связывать; связь",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "undergo",
    "meaning": "претерпевать; проходить через",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "underneath",
    "meaning": "внизу; под",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "universe",
    "meaning": "вселенная",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "unnecessary",
    "meaning": "ненужный; лишний",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "unparalleled",
    "meaning": "непревзойденный; не имеющий равных",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "until",
    "meaning": "до; до тех пор пока",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "upheaval",
    "meaning": "потрясение; переворот",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "urgency",
    "meaning": "срочность",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "used to",
    "meaning": "раньше обычно; привыкший к",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "useful",
    "meaning": "полезный",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "utilize",
    "meaning": "использовать",
    "frequency": 1,
    "note": "utilized -> utilize"
  },
  {
    "priority": 3,
    "word": "variety",
    "meaning": "разнообразие",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "vicious",
    "meaning": "жестокий; злой",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "wealthy",
    "meaning": "богатый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "wheel",
    "meaning": "колесо",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "whether",
    "meaning": "ли; является ли",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "whilst",
    "meaning": "пока; в то время как",
    "frequency": 1,
    "note": "British: whilst; common form: while."
  },
  {
    "priority": 3,
    "word": "whole",
    "meaning": "целый; весь",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "widely",
    "meaning": "широко",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "winged",
    "meaning": "крылатый",
    "frequency": 1,
    "note": ""
  },
  {
    "priority": 3,
    "word": "within",
    "meaning": "внутри; в пределах",
    "frequency": 1,
    "note": ""
  }
];

const STORAGE_KEY = "englishWordsLearned:v1";
const CUSTOM_WORDS_KEY = "englishWordsCustom:v1";
const EDITED_WORDS_KEY = "englishWordsEdited:v1";
const DELETED_WORDS_KEY = "englishWordsDeleted:v1";

function readStorage(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn("Не удалось сохранить данные", error);
  }
}

function loadLearned() {
  const saved = readStorage(STORAGE_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

function loadCustomWords() {
  const saved = readStorage(CUSTOM_WORDS_KEY, []);
  if (!Array.isArray(saved)) return [];
  return saved.map((item, index) => ({
    id: item.id || `custom:${index}:${item.word}`,
    ...item,
    source: "custom",
  }));
}

function loadEditedWords() {
  const saved = readStorage(EDITED_WORDS_KEY, {});
  return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
}

function loadDeletedWords() {
  const saved = readStorage(DELETED_WORDS_KEY, []);
  return Array.isArray(saved) ? saved : [];
}

let learned = new Set(loadLearned());
let customWords = loadCustomWords();
let editedWords = loadEditedWords();
let deletedWords = new Set(loadDeletedWords());
let allWords = buildWords();
let cardWords = [...allWords];
let cardIndex = 0;
let isFlipped = false;
let editingTarget = null;

const byId = (id) => document.getElementById(id);
const totalCount = byId("totalCount");
const priorityOneCount = byId("priorityOneCount");
const priorityTwoCount = byId("priorityTwoCount");
const priorityThreeCount = byId("priorityThreeCount");
const learnedCount = byId("learnedCount");
const wordGrid = byId("wordGrid");
const searchInput = byId("searchInput");
const listPriorityFilter = byId("listPriorityFilter");
const cardPriorityFilter = byId("cardPriorityFilter");
const hideLearned = byId("hideLearned");
const groupButtons = byId("groupButtons");
const flashcard = byId("flashcard");
const cardMeta = byId("cardMeta");
const cardWord = byId("cardWord");
const cardMeaning = byId("cardMeaning");
const cardNote = byId("cardNote");
const cardProgress = byId("cardProgress");
const learnedButton = byId("learnedButton");
const toggleAddForm = byId("toggleAddForm");
const addWordPanel = byId("addWordPanel");
const addWordForm = byId("addWordForm");
const cancelAddWord = byId("cancelAddWord");
const formMessage = byId("formMessage");
const formEyebrow = byId("formEyebrow");
const formTitle = byId("formTitle");
const formDescription = byId("formDescription");
const saveWordButton = byId("saveWordButton");
const editCardButton = byId("editCardButton");
const deleteCardButton = byId("deleteCardButton");
const undoToast = byId("undoToast");
const undoToastText = byId("undoToastText");
const undoToastButton = byId("undoToastButton");
const undoToastClose = byId("undoToastClose");
const undoToastTimer = byId("undoToastTimer");

let undoTimeoutId = null;
let undoAction = null;

const GROUP_DEFS = [
  {
    id: "animals",
    label: "Животные",
    matchers: [
      /\b(animal|animals|bird|birds|beak|claw|lizard|insect|insects|brood|offspring|winged|scatter|nest|predator|prey|species)\b/i,
      /(животн|птиц|насеком|ящериц|клюв|когот|выводок|потомств|крылат)/i,
    ],
  },
  {
    id: "travel",
    label: "Путешествия",
    matchers: [
      /\b(trip|travel|journey|tourist|tourism|flight|airport|hotel|passport|visa|route|map|luggage|baggage)\b/i,
      /(путешеств|турист|отпуск|рейс|аэропорт|отель|виза|паспорт|маршрут|багаж)/i,
    ],
  },
  {
    id: "food",
    label: "Еда",
    matchers: [
      /\b(food|meal|eat|drink|restaurant|cafe|coffee|tea|bread|cheese|wine|honey|fruit|vegetable|cook|recipe)\b/i,
      /(еда|пищ|кухн|ресторан|кафе|кофе|чай|хлеб|сыр|вино|мёд|мед|фрукт|овощ|готовить|рецепт)/i,
    ],
  },
  {
    id: "nature",
    label: "Природа",
    matchers: [
      /\b(forest|mountain|river|lake|sea|ocean|climate|weather|rain|snow|wind|soil|earth|environment|ecology|emission|pollution)\b/i,
      /(лес|гора|река|озеро|море|океан|климат|погод|дожд|снег|ветер|почв|природ|эколог|выброс|загрязн)/i,
    ],
  },
  {
    id: "science",
    label: "Наука",
    matchers: [
      /\b(science|research|study|experiment|data|analysis|statistics|hypothesis|theory|evidence|proof|measure|estimate|model)\b/i,
      /(наук|исследован|эксперимент|данн|анализ|статистик|гипотез|теор|доказат|измер|оценк|модел)/i,
    ],
  },
  {
    id: "business",
    label: "Бизнес",
    matchers: [
      /\b(business|company|market|customer|client|profit|loss|price|cost|budget|contract|deal|proposal|invest|trade)\b/i,
      /(бизнес|компани|рынок|клиент|прибыл|убыт|цен|стоим|бюджет|контракт|сделк|предложен|инвест|торгов)/i,
    ],
  },
  {
    id: "emotions",
    label: "Эмоции",
    matchers: [
      /\b(feel|feeling|emotion|happy|sad|angry|fear|anxiety|stress|confidence|pride|admiration)\b/i,
      /(чувств|эмоци|радост|груст|злост|страх|тревог|стресс|уверен|горд|восхищ)/i,
    ],
  },
];

let selectedGroup = "all";

function saveLearned() {
  writeStorage(STORAGE_KEY, [...learned]);
}

function saveCustomWords() {
  writeStorage(CUSTOM_WORDS_KEY, customWords);
}

function saveEditedWords() {
  writeStorage(EDITED_WORDS_KEY, editedWords);
}

function saveDeletedWords() {
  writeStorage(DELETED_WORDS_KEY, [...deletedWords]);
}

function buildWords() {
  const baseWords = WORDS.map((item) => {
    const baseKey = item.word;
    return enrichWord({
      ...item,
      ...(editedWords[baseKey] || {}),
      source: "base",
      baseKey,
    });
  }).filter((item) => !deletedWords.has(item.baseKey));

  const aliveCustomWords = customWords
    .filter((item) => !deletedWords.has(wordKey(item)))
    .map((item) => enrichWord({ ...item }));

  return [...baseWords, ...aliveCustomWords].sort((a, b) => {
    if (a.priority !== b.priority) return a.priority - b.priority;
    return a.word.localeCompare(b.word, "en", { sensitivity: "base" });
  });
}

function deriveWordGroups(item) {
  const haystack = `${item.word} ${item.meaning} ${item.note || ""}`.toLowerCase();
  const groups = new Set();
  GROUP_DEFS.forEach((group) => {
    const hit = group.matchers.some((regex) => regex.test(haystack));
    if (hit) groups.add(group.id);
  });
  return [...groups];
}

function enrichWord(item) {
  return {
    ...item,
    groups: deriveWordGroups(item),
  };
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function wordKey(item) {
  if (item.source === "base") return item.baseKey;
  return item.id || item.word;
}

function updateStats() {
  if (totalCount) totalCount.textContent = allWords.length;
  if (priorityOneCount) priorityOneCount.textContent = allWords.filter((item) => item.priority === 1).length;
  if (priorityTwoCount) priorityTwoCount.textContent = allWords.filter((item) => item.priority === 2).length;
  if (priorityThreeCount) priorityThreeCount.textContent = allWords.filter((item) => item.priority === 3).length;
  if (learnedCount) learnedCount.textContent = learned.size;
}

function matchesSearch(item, query) {
  const text = `${item.word} ${item.meaning} ${item.note}`.toLowerCase();
  return text.includes(query.toLowerCase().trim());
}

function renderGroupButtons() {
  if (!groupButtons) return;
  const counts = new Map();
  allWords.forEach((item) => {
    (item.groups || []).forEach((groupId) => {
      counts.set(groupId, (counts.get(groupId) || 0) + 1);
    });
  });

  const chips = [
    { id: "all", label: "Все", count: allWords.length },
    ...GROUP_DEFS.map((group) => ({
      id: group.id,
      label: group.label,
      count: counts.get(group.id) || 0,
    })).filter((group) => group.count > 0),
  ];

  groupButtons.innerHTML = chips.map((chip) => `
    <button class="group-chip ${chip.id === selectedGroup ? "active" : ""}" type="button" data-group="${chip.id}">
      ${escapeHTML(chip.label)} · ${chip.count}
    </button>
  `).join("");
}

function renderList() {
  if (!wordGrid) return;
  const query = searchInput ? searchInput.value : "";
  const priority = listPriorityFilter ? listPriorityFilter.value : "all";
  const filtered = allWords.filter((item) => {
    const priorityOk = priority === "all" || String(item.priority) === priority;
    const searchOk = !query || matchesSearch(item, query);
    const learnedOk = !hideLearned || !hideLearned.checked || !learned.has(wordKey(item));
    const groupOk = selectedGroup === "all" || (item.groups || []).includes(selectedGroup);
    return priorityOk && searchOk && learnedOk && groupOk;
  });

  if (!filtered.length) {
    wordGrid.innerHTML = '<div class="empty-state">Ничего не найдено. Попробуй другой поиск или фильтр.</div>';
    return;
  }

  wordGrid.innerHTML = filtered.map((item) => {
    const key = wordKey(item);
    const isLearned = learned.has(key);
    const groupPills = (item.groups || []).map((groupId) => {
      const meta = GROUP_DEFS.find((group) => group.id === groupId);
      return `<span class="word-group-pill">${escapeHTML(meta ? meta.label : groupId)}</span>`;
    }).join("");
    return `
      <article class="word-card ${isLearned ? "learned" : ""}">
        <div class="word-topline">
          <h3>${escapeHTML(item.word)}</h3>
          <span class="badge priority-${item.priority}">${item.priority}</span>
        </div>
        <p class="meaning">${escapeHTML(item.meaning)}</p>
        <p class="note">${item.note ? escapeHTML(item.note) : "&nbsp;"}</p>
        ${groupPills ? `<div class="word-groups">${groupPills}</div>` : ""}
        <div class="word-actions">
          <span class="frequency">Частота: ${item.frequency}</span>
          <div class="word-action-buttons">
            <button class="learn-toggle ${isLearned ? "active" : ""}" data-word="${escapeHTML(key)}">
              ${isLearned ? "Выучено" : "Отметить"}
            </button>
            <button class="learn-toggle delete-word" data-word="${escapeHTML(key)}">Удалить</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function filterCardWords() {
  const priority = cardPriorityFilter ? cardPriorityFilter.value : "all";
  cardWords = allWords.filter((item) => priority === "all" || String(item.priority) === priority);
  cardIndex = 0;
  isFlipped = false;
  renderCard();
}

function renderCard() {
  if (!flashcard) return;
  flashcard.classList.toggle("flipped", isFlipped);
  if (!cardWords.length) {
    cardMeta.textContent = "Нет слов";
    cardWord.textContent = "Пусто";
    cardMeaning.textContent = "Выбери другой фильтр";
    cardNote.textContent = "";
    cardProgress.textContent = "0 / 0";
    learnedButton.textContent = "Отметить выученным";
    return;
  }

  const item = cardWords[cardIndex];
  const isLearned = learned.has(wordKey(item));
  cardMeta.textContent = `Приоритет ${item.priority} · частота ${item.frequency}`;
  cardWord.textContent = item.word;
  cardMeaning.textContent = item.meaning;
  cardNote.textContent = item.note || "";
  cardProgress.textContent = `${cardIndex + 1} / ${cardWords.length}`;
  learnedButton.textContent = isLearned ? "Уже выучено" : "Отметить выученным";
}

function moveCard(step) {
  if (!cardWords.length) return;
  cardIndex = (cardIndex + step + cardWords.length) % cardWords.length;
  isFlipped = false;
  renderCard();
}

function shuffleCards() {
  for (let i = cardWords.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardWords[i], cardWords[j]] = [cardWords[j], cardWords[i]];
  }
  cardIndex = 0;
  isFlipped = false;
  renderCard();
}

function toggleLearned(word) {
  if (learned.has(word)) {
    learned.delete(word);
  } else {
    learned.add(word);
  }
  saveLearned();
  updateStats();
  renderList();
  renderCard();
}

function normalizeWord(value) {
  return value.trim().replace(/\s+/g, " ");
}

function getPriorityByFrequency(frequency) {
  if (frequency >= 3) return 1;
  if (frequency === 2) return 2;
  return 3;
}

function refreshAfterWordChange(message) {
  allWords = buildWords();
  formMessage.textContent = message;
  updateStats();
  renderGroupButtons();
  renderList();
  filterCardWords();
}

function closeUndoToast() {
  if (!undoToast) return;
  if (undoTimeoutId) {
    window.clearTimeout(undoTimeoutId);
    undoTimeoutId = null;
  }
  undoToast.classList.add("closing");
  window.setTimeout(() => {
    undoToast.hidden = true;
    undoToast.classList.remove("closing");
    undoAction = null;
  }, 180);
}

function showUndoToast(message, action) {
  if (!undoToast || !undoToastText || !undoToastTimer) return;
  if (undoTimeoutId) window.clearTimeout(undoTimeoutId);
  undoAction = action;
  undoToastText.textContent = message;
  undoToast.hidden = false;
  undoToast.classList.remove("closing");
  // restart timer animation
  undoToastTimer.classList.remove("animate");
  void undoToastTimer.offsetWidth;
  undoToastTimer.classList.add("animate");
  undoTimeoutId = window.setTimeout(() => closeUndoToast(), 5000);
}

function resetWordForm() {
  editingTarget = null;
  if (addWordForm) addWordForm.reset();
  if (formEyebrow) formEyebrow.textContent = "Новое слово";
  if (formTitle) formTitle.textContent = "Добавить в словарь";
  if (formDescription) {
    formDescription.textContent = "Слово сразу появится в списке и карточках. Оно сохранится в этом браузере.";
  }
  if (saveWordButton) saveWordButton.textContent = "Сохранить слово";
  if (formMessage) formMessage.textContent = "";
}

function addCustomWord(event) {
  event.preventDefault();
  if (!addWordForm || !formMessage) return;
  const wordInput = byId("newWord");
  const meaningInput = byId("newMeaning");
  const noteInput = byId("newNote");
  if (!wordInput || !meaningInput || !noteInput) return;

  const word = normalizeWord(wordInput.value);
  const meaning = meaningInput.value.trim();
  const note = noteInput.value.trim();

  if (!word || !meaning) {
    formMessage.textContent = "Заполни слово и перевод.";
    return;
  }

  if (editingTarget) {
    const duplicate = allWords.some((item) => {
      const sameWord = item.word.toLowerCase() === word.toLowerCase();
      const sameItem = wordKey(item) === editingTarget.key;
      return sameWord && !sameItem;
    });
    if (duplicate) {
      formMessage.textContent = "Такое слово уже есть в словаре.";
      return;
    }

    if (editingTarget.source === "base") {
      const current = allWords.find((item) => wordKey(item) === editingTarget.key);
      const frequency = Math.max(1, current?.frequency || 1);
      const priority = getPriorityByFrequency(frequency);
      editedWords[editingTarget.baseKey] = { priority, word, meaning, frequency, note };
      saveEditedWords();
    } else {
      customWords = customWords.map((item) => (
        wordKey(item) === editingTarget.key
          ? {
            ...item,
            word,
            meaning,
            note,
            frequency: Math.max(1, item.frequency || 1),
            priority: getPriorityByFrequency(Math.max(1, item.frequency || 1)),
          }
          : item
      ));
      saveCustomWords();
    }
    resetWordForm();
    refreshAfterWordChange("Карточка обновлена.");
    return;
  }

  const duplicateWord = allWords.find((item) => item.word.toLowerCase() === word.toLowerCase());
  if (duplicateWord) {
    if (duplicateWord.source === "base") {
      const nextFrequency = Math.max(1, Number(duplicateWord.frequency) || 1) + 1;
      const nextPriority = getPriorityByFrequency(nextFrequency);
      editedWords[duplicateWord.baseKey] = {
        priority: nextPriority,
        frequency: nextFrequency,
        word: duplicateWord.word,
        meaning,
        note,
      };
      saveEditedWords();
    } else {
      customWords = customWords.map((item) => {
        if (wordKey(item) !== wordKey(duplicateWord)) return item;
        const nextFrequency = Math.max(1, Number(item.frequency) || 1) + 1;
        return {
          ...item,
          meaning,
          note,
          frequency: nextFrequency,
          priority: getPriorityByFrequency(nextFrequency),
        };
      });
      saveCustomWords();
    }
    resetWordForm();
    refreshAfterWordChange("Слово уже было в словаре: частота увеличена, приоритет пересчитан автоматически.");
    return;
  }

  customWords.push({
    id: `custom:${Date.now()}:${word}`,
    source: "custom",
    priority: 3,
    word,
    meaning,
    frequency: 1,
    note,
  });
  saveCustomWords();
  resetWordForm();
  refreshAfterWordChange("Слово добавлено.");
}

function toggleAddWordPanel(forceOpen) {
  if (!addWordPanel || !toggleAddForm) return;
  const shouldOpen = typeof forceOpen === "boolean" ? forceOpen : addWordPanel.hidden;
  if (shouldOpen && addWordPanel.hidden) resetWordForm();
  addWordPanel.hidden = !shouldOpen;
  toggleAddForm.textContent = shouldOpen ? "Закрыть добавление" : "+ Добавить слово";
  if (!shouldOpen) resetWordForm();
  if (shouldOpen) {
    const wordInput = byId("newWord");
    if (wordInput) wordInput.focus();
  }
}

function editCurrentCard() {
  if (!cardWords.length) return;
  if (!addWordPanel || !toggleAddForm) return;
  const item = cardWords[cardIndex];
  editingTarget = {
    key: wordKey(item),
    source: item.source,
    baseKey: item.baseKey,
  };

  addWordPanel.hidden = false;
  toggleAddForm.textContent = "Закрыть добавление";
  formEyebrow.textContent = "Редактирование";
  formTitle.textContent = "Редактировать карточку";
  formDescription.textContent = "Измени слово, перевод и комментарий. Приоритет рассчитывается автоматически от частоты.";
  saveWordButton.textContent = "Сохранить изменения";
  formMessage.textContent = "";
  byId("newWord").value = item.word;
  byId("newMeaning").value = item.meaning;
  byId("newNote").value = item.note || "";
  addWordPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  byId("newWord").focus();
}

function deleteWordByKey(key) {
  const item = allWords.find((entry) => wordKey(entry) === key);
  if (!item) return;

  const confirmed = window.confirm(`Удалить слово "${item.word}" из словаря?`);
  if (!confirmed) return;

  const wasLearned = learned.has(key);
  const previousEdited = item.source === "base" ? editedWords[item.baseKey] : null;
  const deletedCustom = item.source === "custom" ? { ...item } : null;

  if (item.source === "base") {
    deletedWords.add(item.baseKey);
    delete editedWords[item.baseKey];
    saveEditedWords();
    saveDeletedWords();
  } else {
    customWords = customWords.filter((entry) => wordKey(entry) !== key);
    saveCustomWords();
  }

  learned.delete(key);
  saveLearned();
  refreshAfterWordChange(`Слово "${item.word}" удалено.`);
  showUndoToast(`"${item.word}" удалено`, () => {
    if (item.source === "base") {
      deletedWords.delete(item.baseKey);
      if (previousEdited) editedWords[item.baseKey] = previousEdited;
      saveEditedWords();
      saveDeletedWords();
    } else if (deletedCustom) {
      const exists = customWords.some((entry) => wordKey(entry) === wordKey(deletedCustom));
      if (!exists) {
        customWords.push(deletedCustom);
        saveCustomWords();
      }
    }
    if (wasLearned) {
      learned.add(key);
      saveLearned();
    }
    refreshAfterWordChange(`Удаление "${item.word}" отменено.`);
  });
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".panel").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    const target = byId(`${button.dataset.view}View`);
    if (target) target.classList.add("active");
  });
});

if (wordGrid) {
  wordGrid.addEventListener("click", (event) => {
    const deleteButton = event.target.closest(".delete-word");
    if (deleteButton) {
      deleteWordByKey(deleteButton.dataset.word);
      return;
    }
    const button = event.target.closest(".learn-toggle");
    if (button) toggleLearned(button.dataset.word);
  });
}

if (groupButtons) {
  groupButtons.addEventListener("click", (event) => {
    const chip = event.target.closest(".group-chip");
    if (!chip) return;
    selectedGroup = chip.dataset.group || "all";
    renderGroupButtons();
    renderList();
  });
}

if (toggleAddForm) toggleAddForm.addEventListener("click", () => toggleAddWordPanel());
if (cancelAddWord) cancelAddWord.addEventListener("click", () => toggleAddWordPanel(false));
if (addWordForm) addWordForm.addEventListener("submit", addCustomWord);
if (editCardButton) editCardButton.addEventListener("click", editCurrentCard);
if (deleteCardButton) {
  deleteCardButton.addEventListener("click", () => {
    if (!cardWords.length) return;
    deleteWordByKey(wordKey(cardWords[cardIndex]));
  });
}
if (undoToastButton) {
  undoToastButton.addEventListener("click", () => {
    if (undoAction) undoAction();
    closeUndoToast();
  });
}
if (undoToastClose) undoToastClose.addEventListener("click", closeUndoToast);

if (searchInput) searchInput.addEventListener("input", renderList);
if (listPriorityFilter) listPriorityFilter.addEventListener("change", renderList);
if (hideLearned) hideLearned.addEventListener("change", renderList);
if (cardPriorityFilter) cardPriorityFilter.addEventListener("change", filterCardWords);

const shuffleButton = byId("shuffleButton");
if (shuffleButton) shuffleButton.addEventListener("click", shuffleCards);

const prevCard = byId("prevCard");
if (prevCard) prevCard.addEventListener("click", () => moveCard(-1));

const nextCard = byId("nextCard");
if (nextCard) nextCard.addEventListener("click", () => moveCard(1));

const againButton = byId("againButton");
if (againButton) againButton.addEventListener("click", () => moveCard(1));

if (learnedButton) {
  learnedButton.addEventListener("click", () => {
    if (!cardWords.length) return;
    toggleLearned(wordKey(cardWords[cardIndex]));
    moveCard(1);
  });
}

if (flashcard) {
  flashcard.addEventListener("click", () => {
    isFlipped = !isFlipped;
    renderCard();
  });
  flashcard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      isFlipped = !isFlipped;
      renderCard();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") moveCard(-1);
  if (event.key === "ArrowRight") moveCard(1);
});

updateStats();
renderGroupButtons();
renderList();
filterCardWords();
