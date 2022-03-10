let start = document.getElementById('btn-start');
let stop = document.getElementById('btn-stop');
let restart = document.getElementById('btn-restart');
let result = document.getElementById('result');

let intervalId;
let count = 0;

function startFn(){
    intervalId = setInterval(function () {
        result.textContent = count;
        count++
    },1000)
}

start.onclick = startFn;

stop.onclick = () =>{
    clearInterval(intervalId)
}

restart.onclick = () => {
    result.textContent = count = 0;
}


