// ---------- Rotating Loading Texts ----------
const texts = [
  "Polishing the dhaaks...",
  "Untangling the fairy lights...",
  "Stirring the bhog khichuri...",
  "Checking metro routes...",
  "Counting the dhunuchi steps...",
  "Fixing the idol's crown...",
  "Saving your spot in the pandal queue...",
  "Lining up South Kolkata’s biggest hops..."
];

let index = 0;
const textElement = document.getElementById("loading-text");
setInterval(() => {
  index = (index + 1) % texts.length;
  textElement.textContent = texts[index];
}, 2000);

// ---------- Show Logo After Loading ----------
setTimeout(() => {
  const loader = document.getElementById('loader-screen');
  const logoScreen = document.getElementById('logo-screen');
  loader.classList.add('hidden');
  logoScreen.classList.remove('hidden');

  // Redirect after logo animation
  setTimeout(() => {
    window.location.href = "/PujaPal/landingmain/landing.html";
  }, 2500);
}, 4000);

// ---------- Fire Glow Particles ----------
const container = document.getElementById('fire-glow-container');
const numParticles = 25;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('fire-glow');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  particle.style.animationDuration = 4 + Math.random() * 4 + 's';
  let size = 4 + Math.random() * 6;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  container.appendChild(particle);
}
