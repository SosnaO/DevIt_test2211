Задание
1. Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
аргумент deep указывать глубину подсчета если не указан то бесконечно.
Пример:
const div = document.createElement('div')
const p = document.createElement('p')
const span = document.createElement('span')
p.appendChild(span)
div.appendChild(p)

nodeChildCount(div) // 2
nodeChildCount(div, 1) // 1
nodeChildCount(div, 2) // 2




2. Напишите функцию генератор chunkArray которая возвращает итератор возвращающий части массива указанной длинны. 
Пример:
const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
iterator.next() // { value: [1,2,3], done: false }
iterator.next() // { value: [4,5,6], done: false }
iterator.next() // { value: [7,8], done: false }
iterator.next() // { value: undefined, done: true }

3. Напишите функцию обертку которая на вход принимает массив функций и их параметров, а возвращает массив результатов их выполнения. 
!!!ВНИМАНИЕ!!! Количество аргументов исполняемой функции не ограничено!
Пример:
const f1 = (cb) => {cb(1)}
const f2 = (a, cb) => {cb(a)}
const f3 = (a, b, cb) => {setTimeout(() => cb([a, b]), 1000)}

bulkRun(
  [
    [f1, []],
    [f2, [2]]
    [f3, [3, 4]]
  ]
).then(console.log)
 // Output: [1, 2, [3, 4]]

4. Сделать функцию mapper которая на вход принимает набор правил для преобразования данных.
Формат правила:
[<поле которое преобразовуем>, <новое название поля>[, <функция для преобразования значения>]]
Пример:
let testData3 = [{"name":"Vasya","email":"vasya@example.com","age":20,"skills":{"php":0,"js":-1,"madness":10,"rage":10}},{"name":"Dima","email":"dima@example.com","age":34,"skills":{"php":5,"js":7,"madness":3,"rage":2}},{"name":"Colya","email":"colya@example.com","age":46,"skills":{"php":8,"js":-2,"madness":1,"rage":4}},{"name":"Misha","email":"misha@example.com","age":16,"skills":{"php":6,"js":6,"madness":5,"rage":2}},{"name":"Ashan","email":"ashan@example.com","age":99,"skills":{"php":0,"js":10,"madness":10,"rage":1}},{"name":"Rafshan","email":"rafshan@example.com","age":11,"skills":{"php":0,"js":0,"madness":0,"rage":10}}]

const mapRules = [
  ["name", "n", (value) => value.toLowerCase()],
  ["age", "a"]
]

testData3.map(mapper(mapRules)) // [{"n":"vasya","a":20},{"n":"dima","a":34},{"n":"colya","a":46},{"n":"misha","a":16},{"n":"ashan","a":99},{"n":"rafshan","a":11}]


5. Есть функция primitiveMultiply, которая умножает числа, но случайным образом может выбрасывать исключения типа: NotificationException, ErrorException. Задача написать функцию обертку которая будет повторять вычисление при исключении NotificationException, но прекращать работу при исключениях ErrorException
Пример:
function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if(rand > 0.85) {
    throw new ErrorException()
  } else {
    throw new NotificationException()
  }
}

function reliableMultiply(a, b) {
  // Ваш код
}
console.log(reliableMultiply(8, 8));

6. Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение, 
  после чего все нечетные значения в матрице будет умножать на это число.

Исходная матрица:
[
 [5, 3, 6], 
 [7, 11, 2],
 [15, 9, 4]
]

Результат выполнения функции:
[
 [10, 6, 6],
 [14, 22, 2],
 [30, 18, 4]
]
