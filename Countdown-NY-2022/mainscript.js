
"use strict"

const countDate = new Date('jan 1, 2021 00:00:00').getTime();

function newYear() {
    const nowDate = new Date().getTime();
    gap = countDate - nowDate;
    if(gap <= 0) {
        let text = document.getElementById('text');
        text.innerText = " С Новым Годом! ";
        // document.getElementById('day').textContent = "LOL";
        // document.getElementById('hour').textContent = "KEK";
        // document.getElementById('minute').textContent = "Azaza";
        // document.getElementById('second').textContent = "Чебурек";
    }
    else {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);
    document.getElementById('day').textContent = d;
    document.getElementById('hour').textContent = h;
    document.getElementById('minute').textContent = m;
    document.getElementById('second').textContent = s;
    }
}

setInterval(newYear, 1);
