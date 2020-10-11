import WebSocket from 'ws';

function  connect(){
    const client = new WebSocket('ws://localhost:8080');
    client.addEventListener('open', event => {
        const input: HTMLInputElement =<HTMLInputElement>document.getElementById('send');
        const value: string = input.value;
        client.send(value);
        client.close();
    });
}

function start(){
    const server = new WebSocket.Server({port:8080});
    server.on('connection', conn => {
        conn.on('message', message => {
          document.getElementById("receive").innerText='received:' + message;
        });

        conn.on('close', () => {
        });
    });
}

// function stop(){
//     console.log("stop!");
// }

window.onload = function (event) {
    document.getElementById('connect').onclick = connect;
    document.getElementById('start').onclick = start;
//    document.getElementById('stop').onclick = stop;
};
