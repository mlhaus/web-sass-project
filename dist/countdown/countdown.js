const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const day_time = document.getElementById("day-time");
const party_title = document.getElementById("party-title");
const body = document.getElementsByTagName("body")[0];

let holidayParties = [
    {
        title: "New Years",
        date: "January 1",
        time: "00:00:00",
        bgImage: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
    },
    {
        title: "4th of July",
        date: "July 4",
        time: "12:00:00",
        bgImage: "https://images.unsplash.com/photo-1436124026657-36828b43c7ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8NHRoJTIwb2YlMjBqdWx5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1170&q=60"
    },
    {
        title: "Halloween",
        date: "October 31",
        time: "20:00:00",
        bgImage: "https://images.unsplash.com/photo-1602865048633-c341342b2334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
        title: "Ugly Christmas Sweater",
        date: "December 15",
        time: "18:30:00",
        bgImage: "https://images.unsplash.com/photo-1607575664476-c7772f6d8a42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    }
];

let currentYear = new Date().getFullYear();
let nextParty;
let diff = 0;
let currentTime = new Date();
let smallestDiff = Number.MAX_VALUE;
for(let i = 0; i < holidayParties.length; i++) {
    let tempParty = new Date(`${holidayParties[i].date} ${currentYear} ${holidayParties[i].time}`);
    let dec31 = new Date(`December 31 ${currentYear - 1} 23:59:00`);
    if(tempParty > dec31 && tempParty < new Date()) {
        tempParty = new Date(`${holidayParties[i].date} ${currentYear + 1} ${holidayParties[i].time}`);
    }
    diff = tempParty - currentTime;
    if(diff < smallestDiff) {
        smallestDiff = diff;
        nextParty = holidayParties[i];
    }
}

let nextPartyDate = new Date(`${nextParty.date} ${currentYear} ${nextParty.time}`);

if(nextPartyDate < currentTime) {
    nextPartyDate = new Date(`${nextParty.date} ${++currentYear} ${nextParty.time}`);
}

day.textContent = nextPartyDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
day_time.textContent = nextPartyDate.toLocaleTimeString('en-us', { hour: "numeric", minute: "numeric"});
party_title.textContent = `Marc's ${nextParty.title} Party`;
body.style.backgroundImage = `url(${nextParty.bgImage})`;
document.title = `Marc's ${nextParty.title} Party`;
setInterval(function() {
    currentTime = new Date();
    diff = nextPartyDate - currentTime;
    let msPerSecond = 1000;
    let secPerMinute = msPerSecond * 60;
    let minPerHour = secPerMinute * 60;
    let hourInDay = minPerHour * 24;

    let d = Math.floor(diff / hourInDay);
    let h = Math.floor(diff / minPerHour) % 24;
    let m = Math.floor(diff / secPerMinute) % 60;
    let s = Math.floor(diff / msPerSecond) % 60;
    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;
}, 1000);