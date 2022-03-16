let button = document.querySelector('#button');

button.onclick = (event) =>{

    let company = document.querySelector('#company');
    let position = document.querySelector('#position');
    let earn = document.querySelector('#earn');
    let earn3Month = document.querySelector('#earn3Month');
    let thing = document.querySelector('#thing');
    let price = document.querySelector('#price');
    let amount = document.querySelector('#amount');
    let total = document.querySelector('#total');
    let credit = document.querySelector('#credit');
    let credit3m = document.querySelector('#credit3m');
    let address = document.querySelector('#address');
    let notific = document.querySelector('#noti');


    const showNotification = () => {
        setTimeout(hideNotification,2000);
        notific.classList.add('d-block');
        notific.style.width = '500px';
        notific.style.borderColor = '#darkblue';
        notific.textContent = 'Введите обязательные поля!';
    }
    const hideNotification = () => {
        notific.classList.remove('d-block');
    }

    if (company == '' || position == '' || earn == ''|| earn3Month ==''){
        showNotification()
    }else{
        /*console.log(object2);
        window.localStorage.setItem('object2',JSON.stringify(object2));*/
    }
    let object2 = {
        form2:{
            name:company.value,
            position:position.value,
            earn:earn.value,
            earn3Month:earn3Month.value,
            thing:thing.value,
            price:price.value,
            amount:amount.value,
            total:total.value,
            credit:credit.value,
            credit3m:credit3m.value,
            address:address.value,
        },
        form1:{
            name: JSON.parse(localStorage.getItem('data'))
        }
    }
    console.log(object2);

}
