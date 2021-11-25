
//  4. Напишите метод firstUnique который возвращает первый уникальный элемент в массиве. Пример: 

const firstUnique = [1, 2, 3, 2, 1, 3, 4, 5, 5].reduce(function(map,el){
        map[el] = (map[el]||0)+1;
        return map;
}, {});
    const filtered = Object.keys(firstUnique).filter(function(el){
      return firstUnique[el] == 1;
    })
    console.log(filtered);


