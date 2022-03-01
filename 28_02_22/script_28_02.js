/******* Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!» *********/


function hello() {
    return 'Привет, JavaScript!'
}
console.log(hello())


/*********** Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром **************/


function cube( num = 5) {
  return num*num*num;   // return num ** 3;
}
console.log(cube());




/****************** Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость» ******************/



/*function getName () {
    let name = prompt ('Имя')
    if( name === '' ){
        alert ('Привет, гость');
    }else {
        alert ('Привет, ' + name );
    }
    return
}
getName();*/



function getName(name='гость'){
    console.log(`Привет ${name}`);
}
const name = 'Василий';
getName(name);
//если в getName ничего не указали,то будет "Привет,нрсть"...если указали name,то будет "Привет Василий"










/************* На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
    example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4] *************/

let massiv = [];
function example(massiv1) {
    for (let a = 0; a < massiv1.length; a++){
         let summ = massiv1[a] + massiv1[a];
        massiv.push(summ);
    }
    return massiv
}
example([1, 2, 3]);
example([4,1,1,1,4]);
example([2,2,2,2,2,2]);
console.log(massiv);










