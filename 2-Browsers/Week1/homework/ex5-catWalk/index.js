'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-5-the-cat-walk

1. Create a variable to store a reference to the `<img>` element.
2. Change the style of the `<img>` to have a `left` of `0px`, so that it starts 
   at the left hand of the screen.
3. Complete the function called catWalk() to move the cat 10 pixels to the right
   of where it started, by changing the `left` style property.
4. Call that function every 50 milliseconds. Your cat should now be moving 
   across the screen from left to right. Hurrah!
5. When the cat reaches the right-hand of the screen, restart them at the left 
   hand side (`0px`). So they should keep walking from left to right across the 
   screen, forever and ever.
6. When the cat reaches the middle of the screen, replace the img with an image 
   of a cat dancing (use this URL given below), keep it dancing for 5 seconds, 
   and then replace the img with the original image and have it 
   continue the walk.

   Dancing cat URL:

   https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif
-----------------------------------------------------------------------------*/
function catWalk() {
  document.body.style.overflow = 'hidden';
  const img = document.querySelector('img');
  const walkingCatImg = {
    src: 'http://www.anniemation.com/clip_art/images/cat-walk.gif',
    alt: 'Cat walking',
  };
  const dancingCatImg = {
    src: 'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif',
    alt: 'Cat dancing',
  };
  const center = window.innerWidth / 2;
  const imgCenter = img.width / 2;
  let leftX = -img.width;
  img.style.left = `${leftX}px`;
  setInterval(() => {
    function walkingCat() {
      if (leftX < innerWidth) {
        if (img.src === walkingCatImg.src) {
          leftX += 10;
        }
      } else {
        leftX = -img.width;
      }
      img.style.left = `${leftX}px`;
    }
    if (center - (leftX + imgCenter) < 10 && leftX + imgCenter - center < 10) {
      img.src = dancingCatImg.src;
      img.alt = dancingCatImg.alt;
      setTimeout(() => {
        img.src = walkingCatImg.src;
        img.alt = walkingCatImg.alt;
      }, 5000);
      leftX += 10;
    } else {
      setTimeout(walkingCat, 10);
    }
  }, 50);
}
window.onload = catWalk;
