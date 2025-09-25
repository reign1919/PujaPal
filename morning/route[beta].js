// route.js

document.addEventListener('DOMContentLoaded', () => {
  let selectable = false; // Route mode state
  let selectedCards = [];
  let selectedPandals = [];

  // Create PLAN ROUTE button if missing
  let planRouteBtn = document.getElementById("planRouteBtn");
  if (!planRouteBtn) {
    planRouteBtn = document.createElement("button");
    planRouteBtn.textContent = "PLAN ROUTE";
    planRouteBtn.className = "cta";
    planRouteBtn.style.margin = "18px auto";
    planRouteBtn.style.display = "block";
    planRouteBtn.id = "planRouteBtn";
    document.body.insertBefore(planRouteBtn, document.querySelector("#pandalContainer"));
  }

  // Create PLAN button if missing
  let launchRouteBtn = document.getElementById("launchRouteBtn");
  if (!launchRouteBtn) {
    launchRouteBtn = document.createElement("button");
    launchRouteBtn.textContent = "PLAN";
    launchRouteBtn.className = "cta";
    launchRouteBtn.style.display = "none";
    launchRouteBtn.id = "launchRouteBtn";
    document.body.insertBefore(launchRouteBtn, document.querySelector("footer"));
  }

  // Disable navigation and enable selection for route mode
  function enableSelectableMode() {
    selectable = true;
    selectedCards = [];
    selectedPandals = [];
    launchRouteBtn.style.display = "block";

    document.querySelectorAll('.pandal-card').forEach((card, idx) => {
      // Store real link for restore
      card.dataset.realHref = card.getAttribute('href');
      card.setAttribute('href', '#');
      card.classList.add("route-selectable");
      card.style.pointerEvents = "auto";
      // Remove existing click listeners (by clone), then add selection-only
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
      newCard.addEventListener('click', function(e) {
        e.preventDefault(); // Block navigation
        selectCard(idx);
      });
    });
  }

  // Restore navigation and clear all highlights
  function clearSelections() {
    selectable = false;
    selectedCards = [];
    selectedPandals = [];
    document.querySelectorAll('.pandal-card').forEach(card => {
      card.classList.remove("selected-start", "selected-stop", "selected-middle", "route-selectable");
      card.style.pointerEvents = "";
      // Restore original link
      if (card.dataset.realHref) card.setAttribute('href', card.dataset.realHref);
      // Remove all event listeners (by clone)
      const newCard = card.cloneNode(true);
      card.parentNode.replaceChild(newCard, card);
    });
    launchRouteBtn.style.display = "none";
  }

  // Handle selection toggling
  function selectCard(idx) {
    if (!selectable) return;
    const card = document.querySelectorAll('.pandal-card')[idx];
    const cardIndex = selectedCards.indexOf(idx);
    if (cardIndex !== -1) {
      selectedCards.splice(cardIndex, 1);
      selectedPandals.splice(cardIndex, 1);
    } else {
      selectedCards.push(idx);
      const data = getCardData(card);
      selectedPandals.push(data);
    }
    updateCardStyles();
  }

  function updateCardStyles() {
    document.querySelectorAll('.pandal-card').forEach((card, idx) => {
      card.classList.remove("selected-start", "selected-stop", "selected-middle");
      if (selectedCards.length > 0 && selectedCards[0] === idx)
        card.classList.add("selected-start");
      else if (selectedCards.length > 1 && selectedCards[selectedCards.length - 1] === idx)
        card.classList.add("selected-stop");
      else if (selectedCards.includes(idx))
        card.classList.add("selected-middle");
    });
  }

  // Get data from card (relies on window.thisPandals)
  function getCardData(card) {
    const name = card.querySelector('.pandal-name').textContent.trim();
    const fromJson = window.thisPandals
      ? window.thisPandals.find(p => p["Pandal Name"] === name)
      : null;
    return fromJson || null;
  }

  // Extract coordinates from Google Maps URL (IMPROVED VERSION)
  function extractCoordinatesFromUrl(mapsUrl) {
    if (!mapsUrl) return null;
    
    try {
      console.log('Extracting from URL:', mapsUrl);
      
      // Method 1: Look for @lat,lng pattern (most common in Google Maps URLs)
      const atPattern = /@(-?\d+\.\d+),(-?\d+\.\d+)/;
      const atMatch = mapsUrl.match(atPattern);
      if (atMatch) {
        const lat = parseFloat(atMatch[1]);
        const lng = parseFloat(atMatch[2]);
        console.log('Found coordinates via @ pattern:', lat, lng);
        return { lat, lng };
      }
      
      // Method 2: Look for place ID format with coordinates !3dlat!4dlng
      const placePattern = /!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/;
      const placeMatch = mapsUrl.match(placePattern);
      if (placeMatch) {
        const lat = parseFloat(placeMatch[1]);
        const lng = parseFloat(placeMatch[2]);
        console.log('Found coordinates via !3d!4d pattern:', lat, lng);
        return { lat, lng };
      }
      
      // Method 3: Look for query parameters
      const urlParams = new URLSearchParams(mapsUrl.split('?')[1]);
      const llParam = urlParams.get('ll');
      if (llParam) {
        const [lat, lng] = llParam.split(',').map(parseFloat);
        console.log('Found coordinates via ll parameter:', lat, lng);
        return { lat, lng };
      }
      
      console.log('No coordinates found in URL');
      return null;
    } catch (error) {
      console.error('Error extracting coordinates:', error);
      return null;
    }
  }

  // Build CLEAN Google Maps directions URL
  function buildGoogleMapsRoute(selectedPandals) {
    if (selectedPandals.length < 2) return null;
    
    // Base Google Maps directions URL
    let url = "https://www.google.com/maps/dir/";
    
    const coordinates = [];
    
    // Extract coordinates from each pandal's map URL
    for (const pandal of selectedPandals) {
      if (pandal && pandal.Maps) {
        const coords = extractCoordinatesFromUrl(pandal.Maps);
        if (coords) {
          coordinates.push(coords);
          // Add to URL in clean format: /lat,lng/
          url += `${coords.lat},${coords.lng}/`;
        } else {
          console.warn('Could not extract coordinates for:', pandal["Pandal Name"]);
        }
      }
    }
    
    // Validate we have enough coordinates
    if (coordinates.length < 2) {
      alert("Could not extract valid coordinates from the selected pandals. Please try different pandals.");
      return null;
    }
    
    console.log('Final route URL:', url);
    return url;
  }

  // MAIN: Wire up the workflow
  planRouteBtn.addEventListener('click', () => {
    if (selectable) {
      clearSelections();
      planRouteBtn.textContent = "PLAN ROUTE";
    } else {
      enableSelectableMode();
      planRouteBtn.textContent = "CANCEL ROUTE";
    }
  });

  launchRouteBtn.addEventListener('click', () => {
    if (selectedPandals.length < 2) {
      alert("Please select at least two pandals to plan a route.");
      return;
    }
    
    // Validate that we can extract coordinates from selected pandals
    const pandalsWithValidCoords = selectedPandals.filter(p => {
      if (!p || !p.Maps) return false;
      const coords = extractCoordinatesFromUrl(p.Maps);
      return coords !== null;
    });
    
    if (pandalsWithValidCoords.length < 2) {
      alert("Could not extract valid coordinates from the selected pandals. Please select different pandals.");
      return;
    }
    
    const routeUrl = buildGoogleMapsRoute(selectedPandals);
    if (routeUrl) {
      // Open in new tab with clean URL
      window.open(routeUrl, '_blank');
    }
    clearSelections();
    planRouteBtn.textContent = "PLAN ROUTE";
  });

  // Inject minimal selection CSS
  const style = document.createElement("style");
  style.textContent = `
    .route-selectable { box-shadow: 0 0 2px #09f8, 0 0 4px #fff2; cursor:pointer !important; }
    .selected-start { box-shadow: 0 0 20px #0f5b08, 0 0 8px #36ff2f; border: 2.5px solid #19f80d !important; background:linear-gradient(90deg,#d6ffcb 50%,#f0fff6 100%);}
    .selected-stop { box-shadow: 0 0 20px #e00e2a, 0 0 8px #ffc8d9; border: 2.5px solid #f80d1f !important; background:linear-gradient(90deg,#fff4f6 60%,#ffdce6 100%);}
    .selected-middle { box-shadow: 0 0 16px #0e4ae0, 0 0 8px #97caff; border: 2.5px solid #0dadf8 !important; background:linear-gradient(90deg,#f6faff 80%,#cce8ff 100%);}
  `;
  document.head.appendChild(style);
});