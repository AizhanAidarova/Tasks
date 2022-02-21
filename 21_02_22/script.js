/**************************************** И (&&) ***************************************/

/**** 1) true + true = true ****/

let test1 = 100;
let test2 = 101;
let result =  test1 >= 100 && test2 ===101;
console.log(result);

/**** 2) false + false = false ****/

let text1 = 'Hello';
let age = 22;
let result2 = text1 === 'hello' && age >= 23 ;
console.log(result2);

/**** 3) false + true = false ****/

let name = 'Aizhan';
let surname = 'Aidarova';
let result3 = name === surname && name == 'Aizhan';
console.log(result3);

/**** 4)true + false = false ****/

let num = 27;
let num2 = 33;
let result4 = num > 22 && num2 < 22;
console.log(result4);

/**************************************** Или (||) ***************************************/

/**** 1)true + false = true ****/

let year = 1994;
let year2= 2000;
let result5 = year < 2000 || year2 >1994;
console.log(result5);

/**** 2) false + false = false ****/

let dog1 = 'fluffy';
let dog2 = 'puffy';
let result6 = dog1 === 'fluFFy' || dog2 === dog1;
console.log(result6);

/**** 3) false + true = true ****/

let metr = 5;
let killometr = 10;
let result7 = metr === 10 || killometr >=10;
console.log(result7);

/**** 1) true + true = true ****/

let coin = 23;
let cash = 100;
let result8 = coin >= 23 || cash <= 100;
console.log(result8);


/******* Переделайте приведенный код так, чтобы в нем использовались операци +=, -=, *=, /=, ++, --. *******/

let num1 = 1;
num1 += 12;
alert(num1);

let num3 = 1;
num3 -= 14;
alert(num3);

let num4 = 1;
num4 *= 5;
alert (num4);

let num5 = 1;
num5 /=7;
alert(num5);

let num6 = 1;
++num6;
alert(num6);

let num7 = 1;
--num7;
alert(num7);


/*****Переделайте этот код так, чтобы в нем использовались операции ++ и --.
 Количество строк кода при этом не должно измениться.********/

let num8 = 10;
++num8;
alert(num8);


let num9 = 10;
++num9;
alert(num9);

let num10 = 10;
num10--;
alert(num10);

