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
    const wrappers = document.querySelectorAll('.icon-wrapper');
    let current = 0;
  
    function cycleIcons() {
      wrappers.forEach(wrapper => {
        wrapper.classList.remove("active");
        const img = wrapper.querySelector("img");
        img.src = img.src.replace("/original", "/white");
      });
  
      const currentWrapper = wrappers[current];
      currentWrapper.classList.add("active");
      const currentImg = currentWrapper.querySelector("img");
      currentImg.src = currentImg.src.replace("/white", "/original");
  
      current = (current + 1) % wrappers.length;
    }
  
    setInterval(cycleIcons, 900);
  });
  