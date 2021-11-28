// 4. Сделать функцию mapper которая на вход принимает набор правил для преобразования данных.
// Формат правила:
// [<поле которое преобразовуем>, <новое название поля>[, <функция для преобразования значения>]]
// Пример:
let testData3 = [
  {
    name: "Vasya",
    email: "vasya@example.com",
    age: 20,
    skills: { php: 0, js: -1, madness: 10, rage: 10 },
  },
  {
    name: "Dima",
    email: "dima@example.com",
    age: 34,
    skills: { php: 5, js: 7, madness: 3, rage: 2 },
  },
  {
    name: "Colya",
    email: "colya@example.com",
    age: 46,
    skills: { php: 8, js: -2, madness: 1, rage: 4 },
  },
  {
    name: "Misha",
    email: "misha@example.com",
    age: 16,
    skills: { php: 6, js: 6, madness: 5, rage: 2 },
  },
  {
    name: "Ashan",
    email: "ashan@example.com",
    age: 99,
    skills: { php: 0, js: 10, madness: 10, rage: 1 },
  },
  {
    name: "Rafshan",
    email: "rafshan@example.com",
    age: 11,
    skills: { php: 0, js: 0, madness: 0, rage: 10 },
  },
];

const mapRules = [
  ["name", "n", (value) => value.toLocaleLowerCase()],
  ["age", "a"],
];

const mapper = function (currentValue, index, array) {
  Rulles = this;
  element = currentValue;
  newelement = {};

  for (let i = 0; i < Rulles.length; i++) {
    rulle = Rulles[i];
    if (rulle.length > 0) {
      attrname = rulle[0];
      if (attrname in element) {
        let value = element[attrname];
        if (rulle.length > 1) {
          let newattrname = rulle[1];
          if (rulle.length >= 2) {
            fun = rulle[2];

            try {
              let value = element[attrname];
              eval(fun);
              value = new Function(fun)(value);

              (value) => value.toLowerCase();
            } catch (error) {
              console.error(error, fun);
            }
          }
          newelement[newattrname] = value;
        }
      }
    }
  }
  currentValue = newelement;
  return newelement;
};

t = testData3.map(mapper, mapRules);
console.log(t);
function tes(element, index, array) {
  console.log(this);
}
