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

