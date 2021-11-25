
// 5. Напишите метод arrayToObject который возвращать объект(использовать рекурсию). Пример:

var arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];
function arrayToObject(arr) {
        if (Array.isArray(arr)) {
            var result = {};
            } else {
         return arr;
        }
        for (let i = 0; i <= arr.length; i++){
          let el = arr[i];
          if (Array.isArray(el)) {
             result[el[0]]=arrayToObject(el[1])
        }
    }
         return result;
}
console.log(arrayToObject(arr)) 

