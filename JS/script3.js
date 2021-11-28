// 3. Напишите функцию обертку которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения.
// !!!ВНИМАНИЕ!!! Количество аргументов исполняемой функции не ограничено!
// Пример:
// const f1 = (cb) => {cb(1)}
// const f2 = (a, cb) => {cb(a)}
// const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

// bulkRun(
//   [
//     [f1, []],
//     [f2, [2]]
//     [f3, [3, 4]]
//   ]
// ).then(console.log)
//  // Output: [1, 2, [3, 4]]

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

// function sumOfArray(arr) {
//   return arr.flat(Infinity).reduce((a, b) => a + b, 0);
// }

// console.log(sumOfArray([1, [2], [[[3]]]])); // 6

// function sumOfArray(bulkRun) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; ++i) {
//     sum += Array.isArray([i]) + arr[i];
//   }
//   return sum;
// }
// const { promisify } = require("util");

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

// console.log(bulkRun)
// function sumOfArray(bulkRun) {
//    let result =[];
//    for (let i = 0; i < bulkRun.length; ++i) {
//      sum += Array.isArray([i]) + arr[i];
//    }
//    return sum;

//   console.log(bulkRun);
// // }

// function callMe(arr, name) {
//   let newArr = [...arr];
//   alert(newArr);
// }
// function foo(a, b, c, d) {
//   console.log(a, b, c, d);
// }
// function bulkRun(f1, f2, f3) {
//   console.log(f1, f2, f3);
// }
// // foo(...[1, 2, 3], 4);
// bulkRun([[f1, []], [f2, [2]][(f3, [3, 4])]]);

// function bulkRun(f1, f2, f3) {
//   return function (...args) {
//     f1(...args);
//   };

//   console.log("f1", f1);
//   console.log("f2", f2);
//   console.log("f3", f3);
// }
// // foo(...[1, 2, 3], 4);
// bulkRun(...[[f1, []], [f2, [2]], [(f3, [3, 4])]]).then(console.log("f1", f1));

// const doMath = function (bulkRun, callback) {
//   const result = callback(bulkRun);
//   console.log(result);
// };
// const f1 = (cb) => {
//   cb(1);
// };
// const f2 = (a, cb) => {
//   cb(a);
// };
// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };
// // doMath([f1, []], f1);
// // doMath([f2, [2]], f2);
// // doMath([(f3, [3, 4])], f3);
// bulkRun([[f1, []], [f2, [2]], [(f3, [3, 4])]]).then(console.log);

// const f1 = (cb) => {
//   cb(1);
// };

// const f2 = (a, cb) => {
//   cb(a);
// };
// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };
// console.log(f1);

// console.log(f2);
// console.log(f3);
// bulkRun([[f1, []], [f2, [2]][(f3, [3, 4])]]).then(console.log(bulkRun));
