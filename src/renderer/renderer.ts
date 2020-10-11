function  connect(){
    console.log("connect!");
}

function start(){
    console.log("start!");
}

function stop(){
    console.log("stop!");
}

window.onload = function (event) {
    document.getElementById('connect').onclick = connect;
    document.getElementById('start').onclick = start;
    document.getElementById('stop').onclick = stop;
};
