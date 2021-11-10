'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const timeContainer = document.createElement('div');
  timeContainer.style.fontSize = '12vw';
  timeContainer.style.margin = '30vh auto';
  timeContainer.style.maxWidth = '60%';
  timeContainer.style.textAlign = 'center';
  timeContainer.style.padding = '50px 10px';
  timeContainer.style.backgroundColor = 'rgba(148, 221, 247, 50%)';
  timeContainer.style.border = '1px solid #080b63';
  timeContainer.style.borderRadius = '15px 50px';
  const time = document.createElement('time');
  time.style.fontFamily = 'Times new Roman';
  time.style.color = '#080b63';
  document.body.appendChild(timeContainer).appendChild(time);
  const upToDateTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    time.textContent = currentTime;
    console.log(currentTime);
  };
  setInterval(upToDateTime, 1000);
}

window.onload = addCurrentTime;
