// ---------------- FIREBASE SETUP (TOP OF FILE) ----------------
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
  push
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyBEC_FSKEDYmMmTfDWoqVr5dxKVPlJdDKM",
  authDomain: "public-bus-navigation.firebaseapp.com",
  databaseURL: "https://public-bus-navigation-default-rtdb.firebaseio.com",
  projectId: "public-bus-navigation",
  storageBucket: "public-bus-navigation.appspot.com",
  messagingSenderId: "296270159216",
  appId: "1:296270159216:web:ffc9951fb3911aed6fc3b5"
};

// Initialize Firebase ONCE
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// --------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

  const screens = {
    login: document.getElementById("screen-login"),
    signup: document.getElementById("screen-signup"),
    home: document.getElementById("screen-home"),
    find: document.getElementById("screen-find"),
    busList: document.getElementById("screen-bus-list"),
    routeDetail: document.getElementById("screen-route-detail"),
  };

  function showScreen(key) {
    Object.values(screens).forEach(el => {
      if (el) el.classList.remove("active");
    });

    if (!screens[key]) {
      console.error("Screen not found:", key);
      return;
    }

    screens[key].classList.add("active");
  }

  /* ---------- GLOBAL BACK BUTTON ---------- */
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".back-btn");
    if (!btn) return;

    const target = btn.dataset.back;
    console.log("Back clicked →", target);

    showScreen(target);
  });


/* ---------- ROUTE DATA ---------- */

const ROUTES = [
  {
    id: "bhaktapur-mini",
    name: "Bhaktapur Mini Bus",
    corridor: "Suryabinayak – New Baneswor",
    description:
      "Kamalbinayak – Suryabinayak – Koteshwor – New Baneswor – Maitighar – Sundhara",
    distance: "15.1 km",
    fare: "Rs. 35",
    busImage:"https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b2J1c3xlbnwwfHwwfHx8MA%3D%3D",
    path: [
      [27.671, 85.429],
      [27.664, 85.432],
      [27.667, 85.347],
      [27.692, 85.337],
      [27.694, 85.318],
      [27.702, 85.311],
    ],
  },
  {
    id: "banepa-dhulikhel",
    name: "Banepa Dhulikhel Bus",
    corridor: "Dhulikhel – Banepa – Kathmandu",
    description:
      "Dhulikhel – Banepa – Sanga – Suryabinayak – Koteshwor – New Baneswor – Bir Hospital",
    distance: "28.4 km",
    fare: "Rs. 70",
    busImage:
      "https://plus.unsplash.com/premium_photo-1664302152991-d013ff125f3f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXV0b2J1c3xlbnwwfHwwfHx8MA%3D%3D",
    path: [
      [27.620, 85.556],
      [27.633, 85.521],
      [27.646, 85.455],
      [27.664, 85.432],
      [27.667, 85.347],
      [27.692, 85.337],
      [27.706, 85.315],
    ],
  },
  {
    id: "bhaktapur-express",
    name: "Bhaktapur Express",
    corridor: "Kamalbinayak – Sundhara",
    description:
      "Kamalbinayak – Suryabinayak – Koteshwor – New Baneswor – Maitighar – Sundhara",
    distance: "17.3 km",
    fare: "Rs. 45",
    busImage:
      "https://colorlib.com/wp/wp-content/uploads/sites/2/vehicle-mockup.jpg",
    path: [
      [27.671, 85.429],
      [27.664, 85.432],
      [27.667, 85.347],
      [27.692, 85.337],
      [27.694, 85.318],
      [27.702, 85.311],
    ],
  },
];

const busListContainer = document.getElementById("bus-list-container");

function renderBusList() {
  busListContainer.innerHTML = "";
  ROUTES.forEach((r) => {
    const card = document.createElement("div");
    card.className = "route-card";
    card.dataset.routeId = r.id;
    card.innerHTML = `
      <div class="route-name">${r.name}</div>
      <div class="route-desc">${r.description}</div>
      <div class="route-meta">
      <span class="view-details">View Details</span>
    </div>

    `;
    card.addEventListener("click", () => openRouteDetail(r.id));
    busListContainer.appendChild(card);
  });
}

/* ---------- LOGIN / SIGNUP ---------- */

document.getElementById("btn-login").addEventListener("click", async () => {
  const username = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (username.length < 3 || password.length < 3) {
    alert("Enter valid username and password");
    return;
  }

  try {
    const cred = await signInAnonymously(auth);
    const uid = cred.user.uid;

    await set(ref(db, `users/${uid}`), {
      username,
      createdAt: Date.now()
    });

    showScreen("home");
  } catch (e) {
    console.error(e);
    alert("Login failed");
  }
});


document.getElementById("btn-google").addEventListener("click", () => {
  showScreen("home");
});

document
  .getElementById("link-to-signup")
  .addEventListener("click", () => showScreen("signup"));

document
  .getElementById("link-to-login")
  .addEventListener("click", () => showScreen("login"));

document.getElementById("btn-register").addEventListener("click", () => {
  showScreen("home");
});

/* ---------- HOME → FIND ---------- */

document.getElementById("home-search").addEventListener("click", () => {
  showScreen("find");

  // Load Galli Map when screen becomes visible
  setTimeout(() => {
    initGalliMap();
  }, 300);
});


/* ---------- FIND → BUS LIST ---------- */
document.getElementById("btn-search").addEventListener("click", async () => {
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();

  if (!pickup || !destination) {
    alert("Please enter pickup and destination");
    return;
  }
  document.getElementById("route-main-label").textContent =
    `${pickup} – ${destination}`;

  // Ensure user exists (anonymous auto-login safety)
  let user = auth.currentUser;
  if (!user) {
    const cred = await signInAnonymously(auth);
    user = cred.user;
  }

  await push(ref(db, `searches/${user.uid}`), {
    pickup,
    destination,
    time: Date.now()
  });

  renderBusList();
  showScreen("busList");
});




/* ---------- ROUTE DETAIL (LEAFLET) ---------- */

let routeMap = null;
let routePolyline = null;

function initMapIfNeeded() {
  if (routeMap) return;

  routeMap = L.map("route-map", {
    zoomControl: false,
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
    maxZoom: 19,
  }).addTo(routeMap);
}

function openRouteDetail(routeId) {
  const r = ROUTES.find((x) => x.id === routeId);
  if (!r) return;

  document.getElementById("detail-bus-name").textContent = r.name;
  document.getElementById("detail-distance").textContent = r.distance;
  document.getElementById("detail-fare").textContent = r.fare;
  document.getElementById("detail-bus-image").src = r.busImage;

  showScreen("routeDetail");

  initMapIfNeeded();

  if (routePolyline) {
    routeMap.removeLayer(routePolyline);
  }

  routePolyline = L.polyline(r.path, { color: "#2d8f43", weight: 5 }).addTo(
    routeMap
  );
  routeMap.fitBounds(routePolyline.getBounds(), { padding: [10, 10] });
}

/* ---------- INITIAL BUS LIST ---------- */

renderBusList();

});
