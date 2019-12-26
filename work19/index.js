let ws
function connect() {
    let server = document.getElementById('server').value
    ws = new WebSocket(server);
    ws.onopen = function () {
        document.getElementById('conn').disable='disable';
        document.getElementById('disconn').disable='';
        let nickname=document.getElementById('nickname').value
        if(nickname){
            ws.send('nickname'+nickname)
        }

    }
    ws.onclose = function () {
        document.getElementById('conn').disable='';
        document.getElementById('disconn').disable='disable';
    }
    ws.onclose = function () {
        let board = document.getElementById('board')
        let mewmsg = document.createElement('div')
        
    }
}