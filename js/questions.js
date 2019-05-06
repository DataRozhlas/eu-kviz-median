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
  "Souhlasíte s tvrzením, že EU udělala hodně pro to, aby se v ČR zvýšila životní úroveň a přiblížila se tak životní úrovni v zemích Západní Evropy?",
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
  "Rezignovaný pesimista",
  "Městský liberál",
  "Užitkář",
  "Vyloučený",
  "Skeptický reformista",
  "Tuzemský pragmatik",
];

export default questions;
