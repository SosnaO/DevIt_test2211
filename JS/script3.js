// 3. Напишите функцию обертку которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения.
// !!!ВНИМАНИЕ!!! Количество аргументов исполняемой функции не ограничено!
// Пример:

// const bulkRun = async (arr) =>
//   Promise.all(
//     arr.map(([func, args]) => new Promise((cb) => func(...args, cb)))
//   );

// const f1 = (cb) => {
//   cb(1);
// };
// const f2 = (a, cb) => {
//   cb(a);
// };
// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };

// bulkRun([[f1, []], [f2, [2]][(f3, [3, 4])]]).then(console.log);
// Output: [1, 2, [3, 4]]

function bulkRun(array) {
  let promises = array.map((e) => e[0](...e[1]));
  return Promise.all(promises);
}

const f1 = () => 1;
const f2 = (a) => a;
const f3 = (...args) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000, args);
  });

bulkRun([
  [f1, []],
  [f2, [2]],
  [f3, [3, 4]],
]).then(console.log); // Output: [1, 2, [3, 4]]
