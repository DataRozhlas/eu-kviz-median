export const questions = [
  "Někteří lidé považují členství Česka v Evropské unii za prospěšné, jiní za škodlivé. Nakolik je podle Vás členství prospěšné či škodlivé pro Česko jako celek?",
  "Souhlasíte, nebo nesouhlasíte s tím, aby byla za měnu České republiky přijata společná evropská měna?",
];

const defaultChoices = [
  "Rozhodně souhlasím",
  "Spíše souhlasím",
  "Nevím",
  "Spíše nesouhlasím",
  "Rozhodně nesouhlasím",
];

export const choices = {
  0: ["Rozhodně prospěšné", "Spíše prospěšné", "Nevím", "Spíše škodlivé", "Rozhodně škodlivé"],
  1: defaultChoices,
};

export default questions;
