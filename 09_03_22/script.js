let btn = document.querySelector('#open-modal');
let modal = document.querySelector('#modal');

const showNotification = (settings) =>{
    modal.textContent = settings.html;
    modal.classList.add(settings.className);
    modal.classList.add('block');
    setTimeout(hideNotification,1500);
}
const changeStyle = () => {
    modal.style.backgroundColor = '#cfe2ff';
    modal.style.borderColor = '#b6d4fe';
    modal.style.color = '#084298';
    modal.style.width = '600px';
}

btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html:'A simple primary alert—check it out!', className:'welcome'});
});
const hideNotification = () =>{
    modal.classList.remove('block');
}
/********* Grey **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#e2e3e5';
    modal.style.borderColor = '#d3d6d8';
    modal.style.color = '#41464b';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple secondary alert—check it out!', className: 'welcome'});
});


/********* Blue **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#d1e7dd';
    modal.style.borderColor = '#badbcc';
    modal.style.color = '#0f5132';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple success alert—check it out!', className: 'welcome'});
});
*/

/********* Pink **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#f8d7da'
    modal.style.borderColor = '#f5c2c7';
    modal.style.color = '#842029';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple danger alert—check it out!', className: 'welcome'});
});*/

/********* Yellow **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#fff3cd'
    modal.style.borderColor = '#ffecb5';
    modal.style.color = '#664d03';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple warning alert—check it out!', className: 'welcome'});
});*/

/********* Blue **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#cff4fc'
    modal.style.borderColor = '#b6effb';
    modal.style.color = '#055160';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple info alert—check it out!', className: 'welcome'});
});*/

/********* White **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#fefefe'
    modal.style.borderColor = '#fdfdfe';
    modal.style.color = '#636464';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple light alert—check it out!', className: 'welcome'});
});*/

/********* Dark **********/
/*const changeStyle = () => {
    modal.style.backgroundColor = '#d3d3d4'
    modal.style.borderColor = '#bcbebf';
    modal.style.color = '#141619';
    modal.style.width = '600px';
}
btn.addEventListener('click',() => {
    changeStyle();
    showNotification({html: 'A simple dark alert—check it out!', className: 'welcome'});
});*/