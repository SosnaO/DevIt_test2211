// 1. Напишите функцию nodeChildCount которая получает на вход объект типа Node и возвращает число всех вложенных нодов,
// аргумент deep указывать глубину подсчета если не указан то бесконечно.
//     Пример:

// const div = document.createElement("div");
// const p = document.createElement("p");
// const span = document.createElement("span");
// p.appendChild(span);
// div.appendChild(p);

var nodeChildCount = function (node, deep = -1) {
  var result = 0;

  for (var i = 0; i < node.childNodes.length; i++) {
    result = result + 1;
    let elem = node.childNodes[i];
    if (elem.childNodes.length > 0) {
      deep = deep - 1;
      if (deep > 0) {
        result = result + nodeChildCount(elem, deep);
      } else if (deep < -1) {
        result = result + nodeChildCount(elem);
      }
    }
  }
  return result;
};
const div = document.createElement("div");
const p = document.createElement("p");
const span = document.createElement("span");
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div));
