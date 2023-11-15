import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./index.css";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCh8OfGoL4POUls8l0j49wLMwMpFzsY4g0",

  authDomain: "agrotech-8cf3f.firebaseapp.com",

  databaseURL: "https://agrotech-8cf3f-default-rtdb.firebaseio.com",

  projectId: "agrotech-8cf3f",

  storageBucket: "agrotech-8cf3f.appspot.com",

  messagingSenderId: "790530689672",

  appId: "1:790530689672:web:cf72fa3e32d45e66822d3d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
// Agrega la función formatTimestamp
const formatTimestamp = (timestamp) => {
  if (timestamp && timestamp.seconds) {
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleString("en-US", { timeZone: "America/Santo_Domingo" });
  }
  return "No disponible";
};
const db = getFirestore(firebaseApp);
// Use Pinia for state management
app.use(createPinia());

// Use Vue Router
app.use(router);

// Get the Firestore instance
export { db, formatTimestamp, firebaseApp };
// Mount the app to the DOM
app.mount("#app");
