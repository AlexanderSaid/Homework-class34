'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-2-about-me

1. Using JavaScript, change the body tag's style so it has a font-family of 
   "Arial, sans-serif".
2. Using JavaScript, replace each of the spans (`nickname`, fav-food`, 
   `hometown`) with your own information.
3. In JavaScript, iterate through each `<li>` and change the class to 
   `list-item`.
------------------------------------------------------------------------------*/

document.body.style.fontFamily = 'Arial, sans-serif';

const nickname = document.getElementById('nickname');
nickname.textContent = 'Alex';
const favFood = document.getElementById('fav-food');
favFood.textContent = 'Chocolate';
const hometown = document.getElementById('hometown');
hometown.textContent = 'Damascus';

const li = document.querySelectorAll('li');
for (let i = 0; i < li.length; i++) {
  li[i].className = 'list-item';
}
