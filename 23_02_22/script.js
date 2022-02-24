/*******
Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia *******/

let userSalaries = {
    Ella: 50000,
    Sophia:40000,
    Ellie:70000
}
console.log(` ${userSalaries.Ella}, ${userSalaries.Sophia} `);

/******Создайте объект с ключами a, b и c значениями 5 , 6 и 10.Найдите сумму его элементов ********/


let object = {
    a:5,
    b:6,
    c:10
}
console.log(object.a + object.b + object.c);


/*****Сделайте рефакторинг кода, с помощью тернарного оператора.*******/

let data = true;
let number = data === true ? 3 : 5;
alert(number);

/******* Сделать alert В.В.Путин *******/

let name = prompt('Кто такой В.В.Путин?');
if (name === 'Президент'){
    alert('Верно');
}else{
    alert('Не знаете?');
}
console.log(name);