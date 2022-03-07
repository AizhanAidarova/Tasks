/**** Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 99. Программа должна подсчитать, сколько чисел было введено с клавиатуры
(не считая значения 99) и вывести эту информацию на экран.

    ввод: 59, 74, 48, 70, 99 ⇒ вывод: кол-во чисел - 4 *****/

let button_start = document.getElementById('btn-start');
let button_result = document.getElementById('btn-result');
let prm;
let res = 0;
let fN = () => {
    prm = prompt('Введите число');
    while (prm != 99) {
        res ++;
        prm = prompt('Введите число');
    }return res
}
button_start.onclick = fN;
button_result.onclick = () => {
    alert(`количество чисел - ${res}`);
}



/******** Составьте программу, которая принимает с клавиатуры числа, пока не будет введено
значение 999. Программа должна подсчитать, сколько чисел было введено с клавиатуры,
    чему равна сумма этих чисел (не считая значения 999), и вывести эту информацию
на экран.

    ввод: 89, 174, 27, 999 ⇒ вывод: кол-во чисел - 3; сумма = 290 ********/


let button_start2 = document.getElementById('btn-start2');
let button_result2 = document.getElementById('btn-result2');
let i = 0;
let sum = 0;
let prm2;
let fN2 = () => {
    prm2 =prompt('Введите число');
    while (prm2 != 999) {
        sum = sum + Number(prm2)
        i++
        prm2 =prompt('Введите число')
    }
}
button_start2.onclick = fN2;
button_result2.onclick = () => {
    alert(`количество чисел - ${i}`);
    alert (`Сумма введённых чисел = ${sum}`);
}


/***** Составьте программу, которая принимает с клавиатуры два целых числа, первое из которых - год рождения ученика,
    а второе – нынешний (текущий) год.
    Программа должна вывести на экран возраст ученика (в целых годах).

ввод: 2006, 2018 ⇒ вывод: вам 12 лет) ******/

let date = new Date;
let getDate = () => {
    let year = prompt('Введите год рождения');
    let fullyear = date.getFullYear() - Number(year)
    return (fullyear)
}
alert(`Тебе ${getDate()} лет`)