
let noti = document.querySelector('.notification');

function showNotification(option) {
    noti.classList.add=option.className;
    noti.textContent = option.html;

}
setTimeout(showNotification, 1500,{html:'Hello',className:'welcome'});


setTimeout(function(){
    document.getElementById('notification-id').style.display = 'none';
}, 1500);

