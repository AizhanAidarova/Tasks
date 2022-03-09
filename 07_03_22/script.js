
/*
let noti = document.querySelector('.notification');

function showNotification(option) {
    noti.classList.add=option.className;
    noti.textContent = option.html;

}
setTimeout(showNotification, 1500,{html:'Hello',className:'welcome'});


setTimeout(function(){
    document.getElementById('notification-id').style.display = 'none';
}, 1500);
*/


let openBtn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal')

const showNotification = (options) => {
    modal.textContent = options.html;
    modal.classList.add (options.className);
    modal.classList.add('d-block');
    setTimeout(hideNotification,1500);
}
const hideNotification = () => {
    modal.classList.remove('d-block');
}
const changeStyle = () => {
    openBtn.style.width = '500px';
    openBtn.style.backgroundColor = 'salmon';
}
openBtn.addEventListener('click',() => {
    //changeStyle();
    showNotification({html:'Hello', className:'welcome'});
});

















