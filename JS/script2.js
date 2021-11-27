// Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны.
// Пример:
//const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
// iterator.next(); // { value: [1,2,3], done: false }
// iterator.next(); // { value: [4,5,6], done: false }
// iterator.next(); // { value: [7,8], done: false }
// iterator.next() // { value: undefined, done: true }

function chunkArray(array, i) {
  let array_ = array.splice(0, array.length + 1);
  let result = [];
  return {
    next: function () {
      result = array_.slice(0, i);
      array_ = array_.slice(i);
      return i === result.length
        ? { value: result, done: false }
        : { value: result, done: true };
    },
  };
}
const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
