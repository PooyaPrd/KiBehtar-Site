const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

AOS.init({
  duration: 1000, 
  once: true   
});

const toggle = document.getElementById('toggle');

const toggles = document.querySelectorAll('input[name="toggle"]');

toggles.forEach(toggle => {
  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      if(toggle.value == "a"){
        
      }
    }
  });
});