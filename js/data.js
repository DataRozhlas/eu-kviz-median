/* eslint-disable max-len */
export const questions = [
  "Někteří lidé považují členství Česka v Evropské unii za prospěšné, jiní za škodlivé. Je podle Vás členství prospěšné pro Česko jako celek?",
  "Souhlasíte, aby byla za měnu České republiky přijata společná evropská měna?",
  "Podpořil byste v případném referendu setrvání Česka v EU?",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k lepšímu právnímu státu – lepší zákony, vymahatelnost práva, spravedlivost soudů, apod.",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k lepšímu stavu politiky v ČR – méně korupce, lepší politická kultura, apod.",
  "Souhlasíte s tvrzením, že členství Česka v EU vede k přibližování tuzemských mezd ke mzdám v západních zemích?",
  "Souhlasíte s tvrzením, že z evropské integrace těží velké státy, které rozhodují na úkor malých států (jako Česká republika), jejichž zájmy neberou v potaz?",
  "Někteří lidé považují členství Česka v Evropské unii za prospěšné, jiní za škodlivé. Je pro Vás osobně členství v EU prospěšné?",
  "Souhlasíte s tím, že členství Česka v EU vede k vyššímu růstu české ekonomiky?",
  "Souhlasíte s tvrzením, že EU udělala hodně pro to, aby se v ČR zvýšila životní úroveň a přiblížila se tak životní úrovni v zemích západní Evropy?",
  "Členství v EU může přinášet různé výhody nebo omezení. Platí pro vás osobně, že díky členství v EU máte větší šance najít si práci?",
  "Souhlasíte s tvrzením, že EU nutí Českou republiku přijímat zbytečné a neefektivní zákony?",
  "Někteří lidé považují členství Česka v Evropské unii za prospěšné, jiní za škodlivé. Souhlasíte s tvrzením, že členství v EU je prospěšné pro život v Česku za 20 let?",
  "Jak důležité pro vás je téma fungování Evropské unie a její vliv na Česko?<br><small>(0 = nedůležité, 10 = důležité)</small>",
  "V politice lidé někdy hovoří o pravici a levici. Kam byste se sám/sama zařadil(a) na této stupnici?<br><small>(0 = levice, 11 = pravice)</small>",
  "Souhlasíte s tvrzením, že silný vůdce je důležitý pro Českou republiku, i když nebude vždy jednat v souladu se zavedenými pravidly?",
  "Myslíte si, že by se mělo o setrvání Česka v EU hlasovat v referendu?",
  "Souhlasíte s tvrzením, že imigranti mohou ohrožovat českou ekonomiku a sociální stát?",
  "Souhlasíte s tvrzením, že EU příliš zasahuje do vnitřních záležitostí ČR. Má příliš velký vliv na českou politiku a omezuje Česko evropskými zákony a regulací?",
  "Souhlasíte s tvrzením, že obyčejný člověk by v politice reprezentoval vaše zájmy lépe než profesionální politik?",
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
  8: defaultChoices,
  9: defaultChoices,
  10: defaultChoices,
  11: defaultChoices,
  12: defaultChoices,
  13: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  14: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  15: defaultChoices,
  16: defaultChoices,
  17: defaultChoices,
  18: defaultChoices,
  19: defaultChoices,
};

export const voterCategories = [
  "Obránce",
  "Protisystémový pesimista",
  "Městský liberál",
  "Profitář",
  "Vyloučený",
  "Skeptický reformista",
  "Dočasný pragmatik",
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

export default questions;
