/*
Создайте массив с числами. Перебирая элементы созданного массива с помощью
цикла выведите только те элементы массива, которые больше нуля и меньше 10.
*/


let number = [1,22,3,43,35,6,47,28,9,10];
for(let i = 0;i < number.length; i++){
    if(number[i] > 10){
        continue;
    }
    console.log(number[i]);
}



/*У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/


let element = [1,2,5,6,88,5];
let sum = 0;
for(let a = 0; a < element.length; a++){
    sum += element[a];
}
console.log(sum);



/*
Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.
    */

let count = [1,2,3,4,5,6,7,8,9,10];
let allSumm = [];
let summa = 0;
for (let a = 0; a < count.length; a++){
    summa = count[a]*count[a];
    allSumm.push(summa);
    console.log(summa);
}
let total = 0;
for( b = 0; b < allSumm.length; b++){
    total += allSumm[b];
}
console.log(total);










