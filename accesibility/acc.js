// Mapping for Google Maps URLs
function openMap(locationType) {
    const locations = {
        // Essentials
        'nearest-toilet': 'https://www.google.com/maps/search/?api=1&query=toilet+near+me',
        'nearest-pharmacy': 'https://www.google.com/maps/search/?api=1&query=pharmacy+near+me',
        'nearest-hospital': 'https://www.google.com/maps/search/?api=1&query=hospital+near+me',
        'nearest-chill': 'https://www.google.com/maps/search/?api=1&query=park+near+me',
        // Travel
        'nearest-parking': 'https://www.google.com/maps/search/?api=1&query=parking+near+me',
        'nearest-metro': 'https://www.google.com/maps/search/?api=1&query=metro+station+near+me',
        'nearest-bus': 'https://www.google.com/maps/search/?api=1&query=bus+stop+near+me',
        'nearest-atm': 'https://www.google.com/maps/search/?api=1&query=atm+near+me',
        // Food & Drinks
        'nearest-cafe': 'https://www.google.com/maps/search/?api=1&query=cafe+near+me',
        'nearest-restaurant': 'https://www.google.com/maps/search/?api=1&query=restaurant+near+me',
        'nearest-water': 'https://www.google.com/maps/search/?api=1&query=drinking+water+near+me',
        'nearest-stalls': 'https://www.google.com/maps/search/?api=1&query=food+stalls+near+me',
        // Fun & Culture
        'nearest-pandal': 'https://www.google.com/maps/search/?api=1&query=durga+puja+pandal+near+me',
        'nearest-art': 'https://www.google.com/maps/search/?api=1&query=art+gallery+near+me',
        'nearest-music': 'https://www.google.com/maps/search/?api=1&query=live+music+near+me'
    };

    if (locations[locationType]) {
        window.open(locations[locationType], '_blank');
    } else {
        alert('Location type not recognized.');
    }
}

// Open a universal Maps URL for a query (Maps URLs - no API key required).
document.getElementById('traffic-open').addEventListener('click', () => {
  const q = document.getElementById('traffic-query').value.trim();
  if (!q) return alert('Type a city or address first.');
  // Official Maps URL for a search — works cross-platform.
  const url = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
  window.open(url, '_blank');
});

// If you also have a JS map on the page, open the current center in a new tab:
document.getElementById('traffic-open-map').addEventListener('click', () => {
  // If you have a google map instance 'map', use map.getCenter(); if not, fallback to default coords.
  let lat = 22.565520, lng = 88.397454; // fallback center
  try {
    if (window.map && typeof window.map.getCenter === 'function') {
      const c = window.map.getCenter();
      lat = c.lat(); lng = c.lng();
    }
  } catch(e){ /* ignore */ }
  // This URL (open in new tab) will let the user see live traffic and pan anywhere.
  const url = `https://www.google.com/maps/@${lat},${lng},12z/data=!5m1!1e1`;
  window.open(url, '_blank');
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