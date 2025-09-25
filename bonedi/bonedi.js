document.addEventListener('DOMContentLoaded', () => {
  const showBtn = document.getElementById('showForecastBtn');
  const popup = document.getElementById('forecastPopup');
  const closeBtn = document.getElementById('closePopup');
  const container = document.getElementById('pandalContainer');
  const filterBtns = document.querySelectorAll('.filter-btn');

  // popup logic
  if (showBtn && closeBtn && popup) {
    showBtn.addEventListener('click', () => popup.style.display = 'flex');
    closeBtn.addEventListener('click', () => popup.style.display = 'none');
    window.addEventListener('click', e => {
      if (e.target === popup) popup.style.display = 'none';
    });
  }

  // load JSON + geolocation
  async function loadPandals() {
    try {
      const res = await fetch('bonedi.json'); // ✅ change filename to your new JSON
      const data = await res.json();

      // no filtering needed, this is a curated list already
      const pandals = data;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          pos => {
            renderPandals(pandals, pos.coords.latitude, pos.coords.longitude);
          },
          () => renderPandals(pandals, null, null) // fallback
        );
      } else {
        renderPandals(pandals, null, null);
      }
    } catch (err) {
      container.innerHTML =
        `<p style="color:#f88;text-align:center;">Error loading data</p>`;
      console.error(err);
    }
  }

  function renderPandals(pandals, userLat, userLng) {
    container.innerHTML = "";

    // find closest if location available
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

    // render cards
    pandals.forEach((p, idx) => {
      const name = p.name || "Unnamed";
      const mapLink = p.map || "#";
      const note = p.note || "";
      const tier = (p.type || "normal").toLowerCase();

      const card = document.createElement("a");
      card.href = mapLink;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.className = `pandal-card ${tier}`;
      card.dataset.category = tier;

      if (idx === closestIndex) {
        card.classList.add("closest");
      }

      card.innerHTML = `
        <div class="card-inner">
          <div>
            <h3 class="pandal-name">${escapeHtml(name)}</h3>
            ${note ? `<p class="pandal-note">${escapeHtml(note)}</p>` : ""}
            ${idx === closestIndex ? `<span class="tag closest-tag">Closest to You</span>` : ""}
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    setupFilters();
  }

  // Haversine formula (km)
  function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // filters
  function setupFilters() {
    const cards = document.querySelectorAll('.pandal-card');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        cards.forEach(card => {
          if (filter === "all" || card.dataset.category === filter) {
            card.style.display = "";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  loadPandals();
});

// ---------- Fire Glow Particles ----------
const fireContainer = document.getElementById('fire-glow-container');
if (fireContainer) {
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
    fireContainer.appendChild(particle);
  }
}
