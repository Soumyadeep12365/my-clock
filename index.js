let a;
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString(undefined, options);
    time = a.getHours() + ':' + (a.getMinutes()<10?'0':'') + a.getMinutes() + ':' + (a.getSeconds()<10?'0':'') + a.getSeconds();
    document.getElementById('time').innerHTML = " <br><br> " + time + " <br><br> " + date;
}, 1000);