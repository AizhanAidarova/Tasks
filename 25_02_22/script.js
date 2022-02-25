let name = prompt('Кто пришел?');
if (name === 'Admin'){
    let password = prompt('Пароль');
    if(password === 'Lord'){
        alert('С возвращением!');
    }else if(password == null){
        alert('Упс,случайно нажал отмену');
    }else{
        alert('Кто-то забыл пароль');
    }
}
else if (name == null){
    alert('Упс,случайно нажал отмену');
}else{
    alert('Что за незнакомый аккаунт?');
}
console.log(name);
