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
function reliableMultiply(a, b) {
  try {
    return primitiveMultiply(a, b);
  } catch (e) {
    console.log(e, e.constructor.name);
    if (e.constructor.name == "ErrorException") {
      ErrorException(); 
    } else if (e.constructor.name == "NotificationException") {
      console.log("я тут");
      return reliableMultiply(a, b);
    }
  }

}
console.log(reliableMultiply(8, 8));
