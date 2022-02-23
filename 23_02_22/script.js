/*******
Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia *******/

let userSalaries = {
    'Ella': '50 тыс.',
    'Sophia':'40 тыс.',
    'Ellie':'70 тыс.'
}
console.log(userSalaries['Ella']);
console.log(userSalaries['Sophia']);

/******Создайте объект с ключами a, b и c значениями 5 , 6 и 10.Найдите сумму его элементов ********/


let object = {
    a:5,
    b:6,
    c:10
}
let result = (object.a + object.b + object.c);
console.log(result);


/*****Сделайте рефакторинг кода, с помощью тернарного оператора.*******/

let number = true;
let access = number === true ? 3 : 5;
alert(access);

/******* Сделать alert В.В.Путин *******/

let name = prompt('Кто такой В.В.Путин?');
if (name === 'Президент'){
    alert('Верно');
}else{
    alert('Не знаете?');
}
console.log(name);