const cards = document.querySelectorAll('.restaurant-card, .cafe-card');




cards.forEach(card => {
  // Populate expanded info from data attributes
  const noteEl = card.querySelector('.full-note');
  const specEl = card.querySelector('.full-speciality');
  const mapEl = card.querySelector('.full-map');

  noteEl.textContent = card.dataset.note;
  specEl.textContent = "Specialities: " + card.dataset.speciality;
  mapEl.href = card.dataset.map;

  card.addEventListener('click', () => {
    // Collapse other cards
    cards.forEach(c => {
      if(c !== card) c.classList.remove('active');
    });
    // Toggle current card
    card.classList.toggle('active');
    card.scrollIntoView({behavior:"smooth", block:"center"});
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