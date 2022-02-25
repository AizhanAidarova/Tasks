let name = prompt('Кто пришел?');
if (name === 'Admin'){
    let password = prompt('Пароль');
    if(password === 'Lord'){
        alert('С возвращением!');
    }else if(password == null){
        alert('Вы нажали отмена');
    }else{
        alert('Неверный пароль');
    }
}
else if (name == null){
    alert('Вы нажали отмена');
}else{
    alert('Что за незнакомый аккаунт?');
}
console.log(name);
