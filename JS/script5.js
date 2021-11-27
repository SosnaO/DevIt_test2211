// 5. Есть функция primitiveMultiply, которая умножает числа, но случайным образом может выбрасывать исключения типа: NotificationException, ErrorException.
// Задача написать функцию обертку которая будет повторять вычисление при исключении NotificationException, но прекращать работу при исключениях ErrorException
// Пример:
// function NotificationException() {}
// function ErrorException() {}
// function primitiveMultiply(a, b) {
//   const rand = Math.random();
//   if (rand < 0.5) {
//     return a * b;
//   } else if(rand > 0.85) {
//     throw new ErrorException()
//   } else {
//     throw new NotificationException()
//   }
// }

// function reliableMultiply(a, b) {
//   // Ваш код
// }
// console.log(reliableMultiply(8, 8));

function NotificationException() {}
function ErrorException() {}
function primitiveMultiply(a, b) {
  const rand = Math.random();
  if (rand < 0.5) {
    return a * b;
  } else if (rand > 0.85) {
    throw new ErrorException();
  } else {
    throw new NotificationException();
  }
}
console.log(primitiveMultiply(8, 8));

function reliableMultiply(a, b) {
  try {
    throw NotificationException(); // создание исключения
  } catch (e) {
    // инструкции для обработки ошибок
    ErrorException(); // передать объект исключения обработчику ошибок
  }

  // try {
  //   NotificationException();

  // } catch {
  //   ErrorException();
  // }
}
console.log(reliableMultiply(8, 8));
