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
    const awards = document.querySelectorAll(".award-wrapper");
    const techs = document.querySelectorAll(".tech-wrapper");
    const delay = 100;
    const interval = 1000;
    let isAwardTurn = true;
  
    function ripple(group) {
      group.forEach((el, i) => {
        setTimeout(() => {
          el.classList.add("active");
  
          // Only attempt image manipulation if an <img> exists
          const img = el.querySelector("img");
          if (img && img.src.includes("/white")) {
            img.src = img.src.replace("/white", "/original");
          }
  
          setTimeout(() => {
            el.classList.remove("active");
  
            if (img && img.src.includes("/original")) {
              img.src = img.src.replace("/original", "/white");
            }
          }, delay * group.length);
        }, i * delay);
      });
    }
  
    function rippleCycle() {
      ripple(isAwardTurn ? awards : techs);
      isAwardTurn = !isAwardTurn;
    }
  
    setInterval(rippleCycle, interval);
  });
  