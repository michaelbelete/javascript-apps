const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');

function getDate() {
    const dateNow = new Date()

    const nowHour = dateNow.getHours()

    const nowMinute = dateNow.getMinutes()

    const nowSecond = dateNow.getSeconds()

    const hourDegrees = ((nowHour / 12) * 360) + ((nowMinute / 60) * 30) + 90;
    const minuteDegrees = ((nowMinute / 60) * 360) + ((nowSecond / 60) * 6) + 90;
    const secondDegrees = ((nowSecond / 60) * 360) + 90;


    hour.style.transform = `rotate(${hourDegrees}deg)`;
    minute.style.transform = `rotate(${minuteDegrees}deg)`;
    second.style.transform = `rotate(${secondDegrees}deg)`;

}

setInterval(getDate, 1000);

getDate();