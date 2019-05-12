/* eslint-disable max-len */
export const root = "https://data.irozhlas.cz/eu-kviz-median/";

export const questions = [
  "Je podle Vás členství v EU prospěšné <b>pro Česko jako celek?</b>",
  "Je podle Vás členství v EU prospěšné <b>pro Vás osobně?</b>",
  "Je podle Vás členství v EU prospěšné <b>pro život v Česku za 20 let?</b>",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k <b>lepšímu právnímu státu</b> (lepší zákony, vymahatelnost práva, spravedlivost soudů, apod.)?",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k <b>lepšímu stavu politiky v ČR</b> (méně korupce, lepší politická kultura, apod.)?",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k <b>přibližování mezd západním zemím?</b>",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k <b>vyššímu růstu české ekonomiky?</b>",
  "Platí pro Vás osobně, že díky Evropské unii <b>máte větší šance najít si práci?</b>",
  "Do jaké míry je pro vás téma fungování EU a její vliv na Česko důležité?<br><small>(0 = nedůležité, 10 = důležité)</small>",
  "Myslíte si, že by se mělo o setrvání Česka v EU hlasovat v referendu?",
  "Hlasoval byste v případném referendu <b>pro setrvání Česka v EU?</b>",
  "Souhlasíte s tím, aby byla za měnu České republiky přijata společná evropská měna?",
  "Souhlasíte s tvrzením, že <b>EU příliš zasahuje do vnitřních záležitostí ČR</b>? (Má příliš velký vliv na českou politiku a omezuje Česko evropskými zákony a regulací.)",
  "Souhlasíte s tvrzením, že z <b>evropské integrace těží velké státy, které rozhodují na úkor malých států (jako Česká republika)</b>, jejichž zájmy neberou v potaz?",
  "Souhlasíte s tvrzením, že <b>EU udělala hodně pro to, aby se v ČR zvýšila životní úroveň a přiblížila se tak životní úrovni v zemích Západní Evropy?</b>",
  "Souhlasíte s tvrzením, že <b>EU nutí Českou republiku přijímat zbytečné a neefektivní zákony?</b>",
  "Souhlasíte s tím, že <b>silný vůdce je důležitý pro Českou republiku, i když nebude vždy jednat v souladu se zavedenými pravidly?</b>",
  "Souhlasíte s tím, že <b>obyčejný člověk by v politice reprezentoval mé zájmy lépe nežli profesionální politik?</b>",
  "Souhlasíte s tím, že <b>imigranti mohou ohrožovat českou ekonomiku a sociální stát?</b>",
  "V politice lidé někdy hovoří o pravici a levici. Kam byste se sám/sama zařadil(a) na této stupnici?<br><small>(0 = levice, 11 = pravice)</small>",
];

const defaultChoices = ["Určitě ano", "Spíše ano", "Nevím", "Spíše ne", "Určitě ne"];

export const choices = {
  0: defaultChoices,
  1: defaultChoices,
  2: defaultChoices,
  3: defaultChoices,
  4: defaultChoices,
  5: defaultChoices,
  6: defaultChoices,
  7: defaultChoices,
  8: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  9: defaultChoices,
  10: defaultChoices,
  11: defaultChoices,
  12: defaultChoices,
  13: defaultChoices,
  14: defaultChoices,
  15: defaultChoices,
  16: defaultChoices,
  17: defaultChoices,
  18: defaultChoices,
  19: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

export const voterCategories = [
  ["Obránce", "17 %", "Specificky protievropský a protiglobalizační bojovník. Politicky aktivní, aktivně prosazuje czexit. Populista, autoritář. Netrpí chudobou."],
  ["Protisystémový pesimista", "8 %", "Pasivní a naštvaný autoritář s nízkými kapitály. Nedůvěřuje národním ani evropským institucím kromě prezidenta. Bojí se migrace. Nepřiznává unii žádné výhody."],
  ["Městský liberál", "12 %", "Má vysoký sociální, kulturní i lidský kapitál, není chudý. Vnímá prospěch z globalizace a nebojí se migrace. Má velmi liberální a prozápadní postoje."],
  ["Profitář", "18 %", "Mladší, populista. Z členství v unii má prospěch. Detaily fungování EU neřeší, jako instituci jí moc nedůvěřuje. Dopadá na něj strach z migrace. Nechce euro."],
  ["Vyloučený", "16 %", "Solidární chudí, často samoživitelky či lidé z chudších regionů s exekucemi. Ani protievropští, ani autoritářští. Necítí prospěch z unie, politika je nezajímá."],
  ["Skeptický reformista", "18 %", "Vzdělaný skeptik s vysokými kapitály. Je proevropský, ale nedůvěřuje fungování unie. Bojí se vlivu dotací na korupci a politiku. Výrazně se o téma zajímá."],
  ["Dočasný pragmatik", "11 %", "Starší, pragmatik. Vnímá prospěch členství pro ČR a mladé lidi, sám ho příliš nevyužije. V budoucnu vidí spíš nevýhody členství, migraci místo dotací."],
];

// 0 = all, then by voterCategories, ie id+1
export const graphData = [
  [20, 51, 32, 41, 54, 54, 43, 32, 36, 47, 58, 44, 44, 50, 50, 34, 46, 31, 46, 68, 57, 69, 40, 45, 78],
  [4, 87, 80, 2, 20, 12, 3, 8, 52, 40, 63, 47, 60, 71, 31, 6, 28, 39, 64, 66, 51, 96, 4, 10, 65],
  [0, 76, 94, 5, 7, 6, 5, 5, 88, 33, 55, 61, 74, 84, 14, 6, 23, 24, 70, 47, 39, 91, 5, 6, 41],
  [72, 15, 5, 86, 85, 90, 89, 69, 6, 69, 76, 32, 19, 18, 74, 79, 60, 26, 21, 75, 66, 15, 82, 87, 93],
  [10, 52, 11, 62, 81, 85, 70, 44, 31, 44, 49, 44, 56, 65, 55, 48, 62, 34, 49, 75, 71, 69, 72, 69, 94],
  [17, 61, 39, 22, 27, 23, 23, 23, 45, 29, 37, 49, 38, 49, 46, 34, 45, 26, 49, 61, 53, 66, 27, 32, 63],
  [12, 24, 7, 62, 82, 85, 63, 39, 18, 63, 70, 32, 19, 17, 60, 40, 48, 22, 25, 74, 59, 60, 48, 53, 88],
  [30, 55, 15, 40, 61, 62, 32, 29, 32, 41, 59, 55, 56, 54, 58, 20, 49, 43, 52, 70, 55, 87, 29, 50, 93],
];

export const graphPrefData = [
  [21, 4, 5, 10, 4, 7, 10, 4, 5, 5, 27],
  [29, 4, 9, 5, 1, 14, 4, 1, 3, 5, 26],
  [19, 1, 12, 4, 0, 23, 1, 2, 3, 1, 35],
  [17, 1, 0, 18, 14, 0, 19, 7, 10, 6, 8],
  [27, 7, 5, 9, 2, 5, 7, 4, 5, 3, 27],
  [16, 3, 6, 3, 5, 5, 8, 3, 1, 7, 44],
  [14, 5, 5, 17, 3, 2, 16, 4, 5, 4, 26],
  [27, 5, 3, 7, 3, 7, 9, 4, 4, 6, 25],
];

export const graphMeta = [
  [
    "Vztah k EU",
    ["Pro přijetí eura", "Czexit – pro referendum", "Czexit – pro odchod", "Prospěch osobní", "Prospěch pro region", "Prospěch pro ČR", "Prospěch pro ČR za 20 let"],
    [0, 7],
  ],
  [
    "Postoje a kapitál",
    ["Profit z globalizace", "Obavy z migrace", "Vyšší kulturní kapitál", "Vyšší sociální kapitál", "Chudoba", "Autoritářství", "Náchylnost k populismu", "Nadějná budoucnost společnosti"],
    [7, 15],
  ],
  [
    "Důvěra institucím",
    ["Evropská unie", "Demokracie v ČR", "Vláda ČR", "Prezident ČR ", "Zastupitelstvo obce", "Zastupitelstvo kraje"],
    [15, 21],
  ],
  [
    "Vliv EU na ČR",
    ["EU příliš zasahuje do věcí ČR", "EU zvyšuje vymahatelnost práva", "Evropská integrace se má prohlubovat", "Výhodou EU je studium/práce v zahraničí"],
    [21, 25],
  ],
];

export const calcData = [
  ["Strach z imigrace", 5, ["malý", "velký"]],
  ["Lidé jako já na globalizaci", 5, ["tratí", "vydělávají"]],
  ["Konzumace komerční TV a alternativních médií", 5, ["malá", "velká"]],
  ["Příjem a majetek", 2, ["nízký", "vysoký"]],
  ["Kvalita života v obci bydliště", 3, ["nízká", "vysoká"], "Vychází z 13 ukazatelů o obci, kde respondent bydlí. Mimo jiné nezaměstnanost, exekuce, dostupnost zdravotnictví a školství, kriminalita, kvalita ovzduší, apod."],
  ["Kulturní a lidský kapitál", 2, ["nízký", "vysoký"], "Souvisí s orientací a adaptabilitou v moderní společnosti. Určujeme ze vzdělání respondenta, počtu knih v domácnosti, znalosti cizích jazyků a ICT."],
];

function rd(val) {
  return `${Math.round(val * 100)} %`;
}

export const calcResults = [
  [
    "Spokojenost s fungováním EU",
    values => rd(1 / (1 + Math.exp(-((-0.16 * 1) + (-0.69 * values[0]) + (0.52 * values[1]) + (-0.09 * values[2]) + (-0.15 * (values[3] === 1 ? 2 : 1)) + (0.19 * values[4]) + (0.07 * values[5]))))),
  ],
  [
    "Osobní prospěšnost členství v EU",
    values => rd(1 / (1 + Math.exp(-((1.32 * 1) + (-0.95 * values[0]) + (1.09 * values[1]) + (-0.35 * values[2]) + (-0.06 * (values[3] === 1 ? 2 : 1)) + (0.29 * values[4]) + (0.06 * values[5]))))),
  ],
  [
    "Prospěšnost členství pro Česko",
    values => rd(1 / (1 + Math.exp(-((2.44 * 1) + (-0.90 * values[0]) + (0.60 * values[1]) + (-0.30 * values[2]) + (0.13 * (values[3] === 1 ? 2 : 1)) + (0.06 * values[4]) + (0.18 * values[5]))))),
  ],
  [
    "Prospěšnost členství pro Česko za 20 let",
    values => rd(1 / (1 + Math.exp(-((0.28 * 1) + (-0.58 * values[0]) + (0.77 * values[1]) + (-0.32 * values[2]) + (-0.36 * (values[3] === 1 ? 2 : 1)) + (0.15 * values[4]) + (0.27 * values[5]))))),
  ],
  [
    "Pro přijetí eura",
    values => rd(1 / (1 + Math.exp(-((-0.38 * 1) + (-0.56 * values[0]) + (0.35 * values[1]) + (-0.20 * values[2]) + (-1.15 * (values[3] === 1 ? 2 : 1)) + (-0.24 * values[4]) + (0.44 * values[5]))))),
  ],
  [
    "Pro setrvání v EU v referendu",
    values => rd(1 / (1 + Math.exp(-((2.13 * 1) + (-0.81 * values[0]) + (0.71 * values[1]) + (-0.24 * values[2]) + (-0.01 * (values[3] === 1 ? 2 : 1)) + (-0.27 * values[4]) + (0.32 * values[5]))))),
  ],
];

export const grafColor = ["#EA614A", "#ECA038", "#A38456", "#008836", "#20649B", "#6B96CA", "#A87A93", "#D19C95"];

export const grafSocDemoData = {
  cz: [35.5, 35.1, 47.4, 27.1, 20.1, 44.8, 23.0, 51.4, 23.0, 37.7, 46.9, 29.2, 39.1, 26.8, 30.7, 49.3, 28.0, 51.0],
  sk: [46.9, 48.5, 54.7, 43.5, 38.2, 55.6, 42.9, 66.4, 34.8, 51.1, 43.1, 52.4, 45.3, 55.8, 45.4, 58.2, 31.0, 51.0],
  hu: [47.4, 49.4, 50.1, 49.9, 49.6, 47.4, 44.6, 49.5, 39.4, 55.6, 40.2, 52.0, 47.7, 64.1, 48.6, 49.5, 49.0, 64.1],
  pl: [40.1, 45.9, 46.1, 39.7, 30.4, 51.0, 32.6, 80.8, 44.3, 44.6, 36.7, 39.9, 55.7, 54.8, 45.1, 42.6, 36.0, 50.0],
  cat: ["muž", "žena", "pod 30", "nad 60", "ZŠ, neúplné SŠ", "VŠ a VOŠ", "nízký", "vysoký", "nízký", "vysoký", "venkov", "maloměsto", "velkoměsto", "levice", "střed", "pravice", "nízká", "vysoká"],
};

export const grafAsociace = {
  cz: [51.6, 41.6, 39.3, 37.8, 33.6, 27.6, 23.3, 22.7, 20.4, 18.6, 17.4, 16.2, 9.8, 9.2],
  sk: [57.4, 32.7, 20.6, 26.9, 31.7, 25.1, 32.5, 25.1, 48.3, 14.2, 27.3, 23.3, 11.7, 13.4],
  hu: [43.1, 15.0, 23.4, 10.7, 19.5, 16.7, 19.1, 19.4, 12.3, 8.9, 20.6, 16.3, 8.2, 7.0],
  pl: [56.8, 18.0, 17.0, 12.0, 25.5, 10.2, 25.1, 25.6, 24.1, 11.4, 22.3, 17.0, 8.6, 3.7],
  cat: ["cestování, studium, práce v zahraničí", "byrokracie", "nedostatečná ochrana hranic", "ztráta peněz", "mír", "kriminalita", "vliv ve světě", "demokracie", "euro", "ztráta kulturní identity", "kulturní diverzita", "hospodářská prosperita", "sociální ochrana", "nezaměstnanost"],
};

export const grafDuvera = {
  cz: [60.8, 56.1, 57.2, 57.9, 50.0, 37.0, 36.1, 33.0, 46.3, 26.2, 27.9, 35.3],
  sk: [61.3, 57.2, 67.9, 69.5, 70.0, 47.1, 47.0, 47.5, 52.6, 36.5, 41.4, 47.7],
  hu: [59.8, 57.7, 49.0, 51.8, 61.3, 46.6, 45.1, 49.8, 51.4, 41.1, 42.9, 48.5],
  pl: [56.5, 60.9, 53.8, 50.2, 56.7, 46.0, 53.0, 53.2, 63.4, 37.7, 44.1, 43.1],
  cat: [2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
};

export default questions;
