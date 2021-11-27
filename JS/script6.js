// 6. Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение,
//   после чего все нечетные значения в матрице будет умножать на это число.

// Исходная матрица:
// [
//  [5, 3, 6],
//  [7, 11, 2],
//  [15, 9, 4]
// ]

// Результат выполнения функции:
// [
//  [10, 6, 6],
//  [14, 22, 2],
//  [30, 18, 4]

// ]

var arr = [
  [5, 3, 6],
  [7, 11, 2],
  [15, 9, 4],
];
function oddNumbers(arr) {
  let out_array = [];
  let result = [];
  arr.forEach(function (i) {
    Array.prototype.push.apply(out_array, i);
  });
  const min = Math.min.apply(null, out_array);
  for (let x = 0; x < arr.length; x++) {
    array1 = arr[x].slice();
    result.push(array1);
    for (let i = 0; i < array1.length; i++) {
      let item = array1[i];
      if (item % 2) {
        array1[i] = item * min;
      }
    }
  }
  console.log(result);
}
oddNumbers(arr);
