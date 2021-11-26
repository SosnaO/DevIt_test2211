// Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны.
// Пример:
//const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// iterator.next(); // { value: [1,2,3], done: false }
// iterator.next(); // { value: [4,5,6], done: false }
// iterator.next(); // { value: [7,8], done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

var result = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
function chunkArray(array, i) {
  let array_ = array.splice(0, array.length + 1);
  let result = [];
  return {
    next: function () {
      result = array_.slice(0, i);
      array_ = array_.slice(i);
      return i == result.length
        ? { value: result, done: false }
        : { value: result, done: true };
    },
  };
}

var it = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);

console.log("1", it.next()); // 'yo'
console.log("2", it.next()); // 'ya'
console.log("3", it.next());
// console.log(it.next().done); // true
