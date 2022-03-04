/********** Выводим  2 следующих сообщения после соответствующих задержек.

    Сообщение “Hello after 4 seconds” выводим через 4 секунды.
    Сообщение “Hello after 8 seconds” выводим через 8 секунд.

    В решении нужно определить всего одну функцию, содержащую встроенные функции.
    Это означает, что множество вызовов setTimeout должны будут использовать
одну и ту же функцию.

    Пример вызова:

    setTimeout(func1) => Hello after 4 seconds
setTimeout(func1) => Hello after 8 seconds *******/


function fN(str1) {
    console.log(str1);
}
setTimeout(fN,4000, 'Hello after 4 seconds','');
setTimeout(fN,8000, 'Hello after 8 seconds','');


/******* Напишите функцию mul(n,m), которая принимает два аргумента и возвращает
произведение этих аргументов. ******/

function  mul(n,m) {
    return (n * m);
}
console.log(mul(2,3));

/********** Создайте функцию и с помощью цикла найдите факториал числа 7:
Название для функции можно дать любую.
    Например при вызове функции factorial с параметром 7 в консоли должно
вывести следующее:

    factorial(7); //1*2*3*4*5*6*7 //5040 *******/

function fun(g) {
    let sum = 1;
    for( i =1;i <= g; i++){
        sum *= i;
    }
    return sum;
}
let result = fun(7);
console.log(result);


















