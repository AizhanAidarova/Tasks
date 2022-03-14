let button = document.querySelector('#button');

button.onclick = () => {
    let userlastName = document.querySelector('#user-lastName').value;
    let userName = document.querySelector('#user-lastName').value;
    let userPatronymic = document.querySelector('#user-patronymic').value;
    let userDate = document.querySelector('#user-date').value;
    let userAddress = document.querySelector('#user-address').value;
    let userSerialNumber = document.querySelector('#user-serialNumber').value;
    let userInn = document.querySelector('#user-inn').value;
    let userDateOfReceipt = document.querySelector('#user-dateOfReceipt').value;
    let userContactNumber = document.querySelector('#user-contactNumber').value;
    let userMail = document.querySelector('#user-mail').value;
    let userNameOfBank = document.querySelector('#user-nameOfBank').value;
    let userFactAddress = document.querySelector('#user-factAddress').value;
    let notific = document.querySelector('#noti');

    let object = {
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
    }
    console.log(object)
    const showNotification = (options) => {
        setTimeout(hideNotification,2000);
        notific.classList.add('d-block');
        notific.style.width = '500px';
        notific.style.borderColor = '#darkblue';
        notific.textContent = 'Введите обязательные поля!';
    }
    const hideNotification = () => {
        notific.classList.remove('d-block');
    }
    if (userlastName == '' || userName == '' || userSerialNumber == ''|| userInn =='' || userDateOfReceipt == ''){
        showNotification()
    }else {
        window.location.href = 'form2.html';
    }

}