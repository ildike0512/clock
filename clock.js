'use strict';

function currentTime() {
    const date = new Date();
    let hour = date.getUTCHours();
    let min = date.getUTCMinutes();
    let sec = date.getUTCSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.querySelector('#clock').innerHTML =  hour + ":" + min + ":" + sec;
    let t = setTimeout(function(){currentTime()}, 1000);
}

function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}

currentTime();

  