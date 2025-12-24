// Modal controls
const modal = document.getElementById("mapModal");
const mapBtn = document.getElementById("mapBtn");
const closeBtn = document.querySelector(".close");
const confirmBtn = document.getElementById("closeMapBtn");

// Initialize Leaflet map (before opening modal)
const map = L.map("map", { zoomControl: true }).setView([6.9271, 79.8612], 7);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);
let marker = L.marker([6.9271, 79.8612]).addTo(map);

// Modal open/close
mapBtn.onclick = () => {
  modal.style.display = "block";
  setTimeout(() => {
    map.invalidateSize();
    map.setView(marker.getLatLng(), map.getZoom());
  }, 300);
};

closeBtn.onclick = () => (modal.style.display = "none");
confirmBtn.onclick = () => (modal.style.display = "none");

window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

// Map click event
map.on("click", (e) => {
  const { lat, lng } = e.latlng;
  marker.setLatLng([lat, lng]);
  document.getElementById("latitude").value = lat.toFixed(4);
  document.getElementById("longitude").value = lng.toFixed(4);
});

// Fetch button
document.getElementById("fetchBtn").addEventListener("click", () => {
  const lat = document.getElementById("latitude").value;
  const lon = document.getElementById("longitude").value;
  if (lat && lon) fetchWeather(lat, lon);
});

// Fetch weather data
async function fetchWeather(lat, lon) {
  const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m`;
  const locationURL = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;

  try {
    const [weatherRes, locationRes] = await Promise.all([
      fetch(weatherURL),
      fetch(locationURL, {
        headers: {
          "User-Agent": "weather-map-app/1.0 (contact@example.com)",
          "Accept-Language": "en",
        },
      }),
    ]);

    const weatherData = await weatherRes.json();
    const locationData = await locationRes.json();

    const locName =
      locationData.display_name ||
      locationData.address?.city ||
      locationData.address?.town ||
      locationData.address?.village ||
      locationData.address?.state ||
      "Unknown Area";

    document.getElementById("location-name").textContent = locName;
    document.getElementById("lat").textContent = weatherData.latitude.toFixed(2);
    document.getElementById("lon").textContent = weatherData.longitude.toFixed(2);

    const nowTemp = weatherData.hourly.temperature_2m[0];
    const nowTime = weatherData.hourly.time[0];
    document.getElementById("current-temp").textContent = `${nowTemp} °C`;
    document.getElementById("current-time").textContent = formatTime(nowTime);

    renderChart(weatherData.hourly.time, weatherData.hourly.temperature_2m);
  } catch (err) {
    console.error("Error fetching data:", err);
    document.getElementById("location-name").textContent = "No nearby city found";
  }
}

function formatTime(isoTime) {
  const date = new Date(isoTime);
  return date.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  });
}

function renderChart(times, temps) {
  const ctx = document.getElementById("tempChart").getContext("2d");
  if (window.tempChart) window.tempChart.destroy();

  const labels = times.slice(0, 24).map((t) => {
    const d = new Date(t);
    return `${d.getHours()}:00`;
  });

  window.tempChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Temperature (°C)",
          data: temps.slice(0, 24),
          borderColor: "#fff",
          borderWidth: 2,
          tension: 0.3,
          pointRadius: 2,
          pointBackgroundColor: "#fff",
        },
      ],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { color: "#fff" } },
        y: { ticks: { color: "#fff" } },
      },
    },
  });
}

// Default location (Colombo)
fetchWeather(6.9271, 79.8612);

// Dark Mode Toggle Logic
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Check if dark mode is saved in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
}

// Toggle dark mode when the button is clicked
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save dark mode state to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.removeItem('darkMode');
  }
});
