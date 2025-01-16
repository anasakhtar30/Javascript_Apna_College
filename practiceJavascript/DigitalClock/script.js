function updateTime(){
    let now = new Date();
    let time = now.getHours() + ':' + now.getMinutes() + ':' +
    now.getSeconds();
    document.getElementById('time').innerText = time;
}

setInterval(updateTime,1000);
updateTime();