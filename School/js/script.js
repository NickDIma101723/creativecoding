document.addEventListener('DOMContentLoaded', function() {

    setTimeout(() => {
        document.getElementById('hero-title').style.opacity = '1';
        document.getElementById('hero-title').style.transform = 'translateY(0) rotate(-2deg)';
    }, 200);
    
    setTimeout(() => {
        document.getElementById('hero-subtitle').style.opacity = '1';
        document.getElementById('hero-subtitle').style.transform = 'translateY(0)';
    }, 400);
    
    setTimeout(() => {
        document.getElementById('hero-text').style.opacity = '1';
        document.getElementById('hero-text').style.transform = 'translateY(0)';
    }, 600);
    
    setTimeout(() => {
        document.getElementById('hero-button').style.opacity = '1';
        document.getElementById('hero-button').style.transform = 'translateY(0)';
    }, 800);
});

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const closeBtn = document.createElement("span");

closeBtn.classList.add("close-btn");
closeBtn.innerHTML = "&times;"; 
menu.appendChild(closeBtn);

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("open"); 
});