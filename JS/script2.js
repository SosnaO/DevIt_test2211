
// 2.  Напишите функцию chunkArray которая разбивает массив на подмассивы на заданное количество элементов. Пример:
 var result = chunkArray([1,2,3,4,5,6,7,8], 3);
function chunkArray(array, i) {
    let result=[]
    while(array.length) result.push(array.splice(0,i));
    console.log(result);
    return result
}
