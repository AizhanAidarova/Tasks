/************ Дан массив с элементами [2, 3, 4, 5, 6, 7].
    С помощью цикла for найдите произведение элементов этого массива.
    Общий результат сохранить в объекте с соответствующим свойством.
    Например: 2 * 3 = 6 -> 6 * 4 и.т.д. *******/

let massiv = [2, 3, 4, 5, 6, 7];
let sum = 1;
for( let i = 0; i < massiv.length; i++){
    result1 = sum *= massiv[i];
}
let obj1 = {
    sum: result1
};
console.log(obj1);
console.log(sum);

let result2 = massiv.reduce((sum,value) => {
    return sum * value;
},1)
let obj2 = {
    sum: result2
};
console.log(obj2);
console.log(result2);

/****** Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a'] ******/


const fN = ( size,value) => {
    return new Array(size).fill(value);
};

console.log(fN(3, 'a'));

/****** Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1]; *****/

function myFN(){
    const data = [1,2,3];
    data.reverse();
    console.log(data);
}
myFN();
//console.log(myFN());



