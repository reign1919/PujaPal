// Just a minimal touch – can be expanded later
document.querySelectorAll(".tour-btn").forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.filter = "brightness(1.15)";
  });
  btn.addEventListener("mouseout", () => {
    btn.style.filter = "brightness(1)";
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