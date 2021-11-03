'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const div = document.createElement('div');
  div.style.fontSize = '12vw';
  div.style.margin = '30vh auto';
  div.style.textAlign = 'center';
  const time = document.createElement('time');
  time.style.fontFamily = 'Times new Roman';
  time.style.color = '#080b63';
  document.body.appendChild(div).appendChild(time);
  const upToDateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    time.textContent = currentTime;
    console.log(currentTime);
  };
  setInterval(upToDateTime, 1000);
}

window.onload = addCurrentTime;
