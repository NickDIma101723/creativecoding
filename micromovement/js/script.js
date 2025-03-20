const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');
const sound1 = document.getElementById('.sound1');
const sound2 = document.getElementById('.sound2');

square1.addEventListener('mouseover', () => {
    sound1.currentTime = 0; // Reset to start
    sound1.play();
  });
  
  square1.addEventListener('mouseout', () => {
    sound1.pause();
    sound1.currentTime = 0; // Reset for next hover
  });
  
  square2.addEventListener('mouseover', () => {
    sound2.currentTime = 0; // Reset to start
    sound2.play();
  });
  
  square2.addEventListener('mouseout', () => {
    sound2.pause();
    sound2.currentTime = 0; // Reset for next hover
  });