// script.js
function getRandomInt(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
  }
  
  function createStarField(count = 100) {
    const container = document.body;
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.classList.add('star', 'animate-starfield');
      star.style.top = `${getRandomInt(0, window.innerHeight)}px`;
      star.style.left = `${getRandomInt(0, window.innerWidth)}px`;
      star.style.animationDelay = `${Math.random() * 2}s`;
      container.appendChild(star);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    createStarField();
  });



  document.addEventListener("DOMContentLoaded", () => {
    const wrappers = document.querySelectorAll(".icon-wrapper");
    const interval = 2000;
    const delay = 100;
  
    function rippleCycle() {
      wrappers.forEach((wrapper, i) => {
        setTimeout(() => {
          wrapper.classList.add("active");
          const img = wrapper.querySelector("img");
          img.src = img.src.replace("/white", "/original");
  
          setTimeout(() => {
            wrapper.classList.remove("active");
            img.src = img.src.replace("/original", "/white");
          }, delay * wrappers.length); // fade out after full ripple
        }, i * delay); // stagger the ripple
      });
    }
  
    setInterval(rippleCycle, interval);
  });
  