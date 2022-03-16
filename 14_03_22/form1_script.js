let button = document.querySelector('#button');

button.onclick = (event) => {
    let userLastName = document.querySelector('#user-lastName');
    let userName = document.querySelector('#user-lastName');
    let userPatronymic = document.querySelector('#user-patronymic');
    let userDate = document.querySelector('#user-date');
    let userAddress = document.querySelector('#user-address');
    let userSerialNumber = document.querySelector('#user-serialNumber');
    let userInn = document.querySelector('#user-inn');
    let userDateOfReceipt = document.querySelector('#user-dateOfReceipt');
    let userContactNumber = document.querySelector('#user-contactNumber');
    let userMail = document.querySelector('#user-mail');
    let userNameOfBank = document.querySelector('#user-nameOfBank');
    let userFactAddress = document.querySelector('#user-factAddress');
    let notific = document.querySelector('#noti');

   /* let object = {
        lastname: userlastName,
        name: userName,
        patronymic: userPatronymic,
        date: userDate,
        address: userAddress,
        serialNumber: userSerialNumber,
        inn: userInn,
        dateOfReceipt: userDateOfReceipt,
        contactNumber: userContactNumber,
        mail: userMail,
        banks: userNameOfBank,
        factAddress: userFactAddress
    }*/

    const showNotification = (option) =>{
        setTimeout(hideNotification,2000);
        notific.classList.add('d-block');
        notific.style.width = '500px';
        notific.style.borderColor = '#darkblue';
        notific.textContent = 'Введите обязательные поля!';
    }
    const hideNotification = () => {
        notific.classList.remove('d-block');
    }
    if (userLastName === '' || userName === '' || userSerialNumber === ''|| userInn === '' || userDateOfReceipt === ''){
       return showNotification();
    }else {
        /*console.log(obj);
        window.localStorage.setItem('object',JSON.stringify(object));*/
        window.location.href = 'form2.html';
    }

    let obj = {
        lastName: userLastName.value,
        name: userName.value,
        patronymic: userPatronymic.value,
        date: userDate.value,
        address: userAddress.value,
        serialNumber: userSerialNumber.value,
        inn: userInn.value,
        dateOfReceipt: userDateOfReceipt.value,
        contactNumber: userContactNumber.value,
        mail: userMail.value,
        banks: userNameOfBank.value,
        factAddress: userFactAddress.value,
    }

    console.log(obj);
    let object2= localStorage.setItem("data", JSON.stringify(obj));
}
