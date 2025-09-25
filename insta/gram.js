document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('showForecastBtn');
  const popup = document.getElementById('forecastPopup');
  const closeBtn = document.getElementById('closePopup');
  const container = document.getElementById('pandalContainer');

  // --- Popup logic ---
  showBtn.addEventListener('click', () => popup.style.display = 'flex');
  closeBtn.addEventListener('click', () => popup.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === popup) popup.style.display = 'none';
  });

  // --- Load JSON and render pandals ---
  async function loadPandals() {
    try {
      const res = await fetch('./gram.json');
      const pandals = await res.json();

      // Get user location if available
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => renderPandals(pandals, pos.coords.latitude, pos.coords.longitude),
          () => renderPandals(pandals, null, null)
        );
      } else {
        renderPandals(pandals, null, null);
      }
    } catch (err) {
      container.innerHTML = `<p style="color:#f88;text-align:center;">Error loading data</p>`;
      console.error(err);
    }
  }

  function renderPandals(pandals, userLat, userLng) {
    container.innerHTML = "";

    // --- Find closest pandal ---
    let closestIndex = -1;
    if (userLat && userLng) {
      let minDist = Infinity;
      pandals.forEach((p, i) => {
        if (p.lat && p.lng) {
          const d = haversine(userLat, userLng, p.lat, p.lng);
          if (d < minDist) {
            minDist = d;
            closestIndex = i;
          }
        }
      });
    }

    // --- Render cards ---
    pandals.forEach((p, idx) => {
      const card = document.createElement("a");
      card.href = p.maps || "#";
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.classList.add("pandal-card");



      const content = document.createElement("div");
      content.classList.add("pandal-content");

      const name = document.createElement("div");
      name.classList.add("pandal-name");
      name.textContent = p.name;

      const theme = document.createElement("div");
      theme.classList.add("pandal-theme");
      theme.textContent = p.theme;

      content.appendChild(name);
      content.appendChild(theme);

      // Tip (expandable)
      if (p.tip) {
        const tip = document.createElement("div");
        tip.classList.add("pandal-tip", "expandable");
        tip.textContent = p.tip;
        content.appendChild(tip);

        card.addEventListener("click", () => card.classList.toggle("expanded"));
      }

      // Closest tag
      if (idx === closestIndex) {
        const tag = document.createElement("span");
        tag.classList.add("tag", "closest-tag");
        tag.textContent = "Closest to You";
        content.appendChild(tag);
      }

      card.appendChild(content);
      container.appendChild(card);
    });
  }

  // --- Haversine formula (distance in km) ---
  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371; // km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  loadPandals();
});

// ---------- Fire Glow Particles ----------
const particleContainer = document.getElementById('fire-glow-container');
const numParticles = 25;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('fire-glow');
  particle.style.left = Math.random() * 100 + 'vw';
  particle.style.top = Math.random() * 100 + 'vh';
  particle.style.animationDuration = 4 + Math.random() * 4 + 's';
  const size = 4 + Math.random() * 6;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  particleContainer.appendChild(particle);
}
