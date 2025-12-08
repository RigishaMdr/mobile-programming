import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  onValue,
  update,
  remove
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

/* ---------- FIREBASE CONFIG ---------- */
const firebaseConfig = {
  apiKey: "AIzaSyBEC_FSKEDYmMmTfDWoqVr5dxKVPlJdDKM",
  authDomain: "public-bus-navigation.firebaseapp.com",
  databaseURL: "https://public-bus-navigation-default-rtdb.firebaseio.com",
  projectId: "public-bus-navigation",
  storageBucket: "public-bus-navigation.appspot.com",
  messagingSenderId: "296270159216",
  appId: "1:296270159216:web:ffc9951fb3911aed6fc3b5"
};

/* ---------- INITIALIZE ---------- */
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const contactsRef = ref(db, "contacts");
/* ---------- CREATE ---------- */
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const id = Date.now();
  set(ref(db, "contacts/" + id), {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    message: message.value
  }).then(() => {
    document.getElementById("status").innerHTML =
      `<div class="success">Message sent successfully!</div>`;
    e.target.reset();
  });
});
/* ---------- READ ---------- */
onValue(contactsRef, snapshot => {
  const table = document.getElementById("contactTable");
  table.innerHTML = "";
  snapshot.forEach(child => {
    const d = child.val();
    const k = child.key;
    table.innerHTML += `
      <tr>
        <td>${d.firstName} ${d.lastName}</td>
        <td>${d.email}</td>
        <td>${d.message}</td>
        <td class="actions">
          <button class="action-btn edit" onclick="editData('${k}')">Edit</button>
          <button class="action-btn delete" onclick="deleteData('${k}')">Delete</button>
        </td>
      </tr>`;
  });
});
/* ---------- UPDATE ---------- */
window.editData = id => {
  const newMsg = prompt("Update message:");
  if (newMsg) {
    update(ref(db, "contacts/" + id), { message: newMsg });
  }
};
/* ---------- DELETE ---------- */
window.deleteData = id => {
  if (confirm("Delete this message?")) {
    remove(ref(db, "contacts/" + id));
  }
};
