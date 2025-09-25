// Scroll highlight & subtle festive animations
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.dpj-section');

  function highlightSection() {
    const scrollY = window.scrollY;
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if(rect.top <= window.innerHeight*0.3 && rect.bottom >= window.innerHeight*0.2){
        sec.querySelector('.section-title').style.color = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent3');
      } else {
        sec.querySelector('.section-title').style.color = getComputedStyle(document.documentElement)
          .getPropertyValue('--accent1');
      }
    });
  }

  window.addEventListener('scroll', highlightSection);

  // subtle floating animation for cards
  const cards = document.querySelectorAll('.dpj-card');
  cards.forEach(card => {
    let delay = Math.random() * 2;
    card.style.animation = `float 4s ease-in-out ${delay}s infinite`;
  });
});

// ---------- Fire Glow Particles ----------
const container = document.getElementById('fire-glow-container');
const numParticles = 25;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('fire-glow');
  // Random initial positions
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  // Random animation duration
  particle.style.animationDuration = 4 + Math.random() * 4 + 's';
  // Random size
  let size = 4 + Math.random() * 6;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  container.appendChild(particle);
}

