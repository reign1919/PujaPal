const contacts = [
  { name: "Police", number: "100" },
  { name: "Fire Brigade", number: "101" },
  { name: "Ambulance", number: "102" },
  { name: "Kolkata Traffic", number: "1073" },
  { name: "Women Helpline", number: "1091" },
  { name: "Disaster Management", number: "108" }
];
const contactsContainer = document.getElementById('contacts-container');

let selectedCard = null;

contacts.forEach(contact => {
  const card = document.createElement('div');
  card.className = "contact-card";
  card.innerHTML = `
    <div class="contact-name">${contact.name}</div>
    <div class="contact-number">${contact.number}</div>
    <button class="call-btn">Call</button>
  `;
  
  const callBtn = card.querySelector('.call-btn');
  callBtn.style.display = 'none'; // hide initially
  
  // Handle card tap
  card.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent body click
    
    // Deselect previous
    if (selectedCard && selectedCard !== card) {
      selectedCard.classList.remove('selected');
      selectedCard.querySelector('.call-btn').style.display = 'none';
    }
    
    // Toggle selection
    const isSelected = card.classList.toggle('selected');
    selectedCard = isSelected ? card : null;
    
    // Show/hide call button
    callBtn.style.display = isSelected ? 'block' : 'none';
  });
  
  // Call button click
  callBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    window.location.href = `tel:${contact.number}`;
  });
  
  contactsContainer.appendChild(card);
});

// Deselect if click outside
document.body.addEventListener('click', () => {
  if (selectedCard) {
    selectedCard.classList.remove('selected');
    selectedCard.querySelector('.call-btn').style.display = 'none';
    selectedCard = null;
  }
});

// ---------- Fire Glow Particles ----------
const fireContainer = document.getElementById('fire-glow-container');
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
  fireContainer.appendChild(particle);
}
