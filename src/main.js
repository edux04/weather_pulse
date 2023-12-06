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
  apiKey: "AIzaSyC8PMMK7bWiJKrmn4oeBETYTXIOo_Whjzk",

  authDomain: "weatherpulse-72fd9.firebaseapp.com",

  projectId: "weatherpulse-72fd9",

  storageBucket: "weatherpulse-72fd9.appspot.com",

  messagingSenderId: "736695199273",

  appId: "1:736695199273:web:39815e6e163ca6b0119e38",
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
