<script setup>
import { ref, onMounted, watchEffect } from "vue";
import {
  getDocs,
  collection,
  doc,
  orderBy,
  query,
  limit,
  getDoc, // Asegúrate de importar getDoc
  updateDoc,
} from "firebase/firestore";
import { db, formatTimestamp } from "@/main";
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faMountain,
  faCheck,
  faCloudRain,
  faDropletSlash,
  faGaugeHigh,
  faClock,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(
  faTemperatureThreeQuarters,
  faDroplet,
  faMountain,
  faClock,
  faCloudRain,
  faGaugeHigh,
  faDropletSlash,
  faCheck,
  faX
);
const simulateRainDisabled = ref(false);
const weatherData = ref([]);
const rainStatuses = ref([]);
const lastRainStatus = ref(false);
const lastUpdated = ref("Nunca");
const waterPumpStatus = ref(false);
// Add a ref for the rain sound
const rainSound = ref(null);

const fetchData = async () => {
  const weatherCollection = collection(db, "weather_information");
  const weatherSnapshot = await getDocs(weatherCollection);
  weatherData.value = weatherSnapshot.docs.map((doc) => doc.data());

  // Get all documents from "rain_statuses" ordered by timestamp in descending order
  const rainStatusQuery = query(
    collection(db, "rain_statuses"),
    orderBy("timestamp", "desc"),
    limit(30) // Ajusta el límite según sea necesario
  );

  const rainStatusSnapshot = await getDocs(rainStatusQuery);

  if (!rainStatusSnapshot.empty) {
    const newRainStatuses = rainStatusSnapshot.docs.map((doc) => doc.data());
    rainStatuses.value.push(...newRainStatuses);

    // Obtener el documento más reciente
    lastRainStatus.value = newRainStatuses[0].status;
  } else {
    console.log("No se encontraron nuevos documentos de estado de lluvia.");
  }

  // Update water pump status from Firestore
  const waterPumpDocRef = doc(db, "water_pump_status", "status");
  const waterPumpDoc = await getDoc(waterPumpDocRef);
  const waterPumpData = waterPumpDoc.data();
  waterPumpStatus.value = waterPumpData?.is_on || false;

  lastUpdated.value = new Date().toLocaleString("en-US", {
    timeZone: "America/Santo_Domingo",
  });
};

onMounted(fetchData);
const audio = new Audio("/src/assets/sounds/rain.mp3"); // replace with the correct path
watchEffect(() => {
  setInterval(fetchData, 60000);
  if (lastRainStatus.value) {
    // If lastRainStatus is true, play the rain sound in a loop
    audio.loop = true;
    audio.play();
  } else {
    // If lastRainStatus is false, pause and reset the rain sound
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.loop = false; // Disable looping
  }
});

const toggleWaterPump = async () => {
  simulateRainDisabled.value = true;
  // Obtener la referencia al documento water_pump_status
  const waterPumpDocRef = doc(db, "water_pump_status", "status");

  // Obtener el estado actual del documento
  const waterPumpDoc = await getDoc(waterPumpDocRef);
  const currentData = waterPumpDoc.data();

  // Actualizar el campo is_on con el valor opuesto
  await updateDoc(waterPumpDocRef, { is_on: !currentData.is_on });
  setTimeout(() => {
    simulateRainDisabled.value = false;
  }, 10000);
};
</script>

<template>
  <section
    id="dashboard"
    class="section1 pt-40 md:h-screen"
    :class="lastRainStatus ? 'raining' : ''"
  >
    <h1
      class="text-white mb-4 text-4xl tracking-tight font-extrabold text-center"
    >
      Dashboard
    </h1>

    <h2 class="text-center text-white">
      Conoce el clima de hoy en tu ciudad
      <b>Santo Domingo, República Dominicana</b>
    </h2>
    <p class="text-white font-bold text-center">
      <font-awesome-icon icon="fa-solid fa-clock" /> Última actualización:
      {{ lastUpdated }}
    </p>
    <div class="text-center my-4">
      <button
        @click="toggleWaterPump"
        class="main-color text-white border rounded p-1 text-center"
        :disabled="simulateRainDisabled"
      >
        Simular lluvia <font-awesome-icon icon="fa-solid fa-cloud-rain" />
      </button>
    </div>

    <div class="flex flex-wrap mt-6">
      <div class="card w-full lg:w-6/12 text-center">
        <h5 class="card-header shadow-lg">Sensor atmosférico (BMP-280)</h5>
        <div
          class="lg:h-[472px] h-[300px] w-[400px] m-auto rounded-3xl card-body overflow-auto shadow-lg"
        >
          <!-- Display DHT11 data in a scrollable list -->
          <ul class="mt-2">
            <li
              v-for="data in weatherData"
              :key="data.timestamp"
              class="flex justify-center"
            >
              <div class="data-item">
                <p>
                  <font-awesome-icon
                    class="mr-2 text-blue-600"
                    icon="fa-solid fa-temperature-three-quarters"
                  />
                  Temperatura: {{ data.temperature.toFixed(1) }}°C
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-gauge-high"
                    class="mr-2"
                  />Presión: {{ data.pressure.toFixed(1) }} hPa
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-mountain"
                    class="text-green-600 mr-2"
                  />Altitud: {{ data.altitude.toFixed(2) }} meters
                </p>
                <p>
                  <font-awesome-icon icon="fa-solid fa-clock" />
                  {{ formatTimestamp(data.timestamp) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <!-- Add this section for the Rain Sensor -->
      <div class="card w-full lg:w-6/12 text-center md:mt-0 mt-6">
        <h5 class="card-header">Sensor de lluvia (MH-RD)</h5>
        <div
          class="lg:h-[472px] h-[300px] w-[400px] m-auto text-white rounded-3xl card-body overflow-auto"
        >
          <!-- Display Rain Sensor data in a scrollable list -->
          <ul class="mt-2">
            <li
              v-for="data in rainStatuses"
              :key="data.timestamp"
              class="flex justify-center"
            >
              <div class="data-item">
                <p>
                  <font-awesome-icon
                    class="text-blue-600"
                    v-if="data.status == false"
                    icon="fa-solid fa-droplet-slash"
                  />
                  <font-awesome-icon
                    class="text-blue-600"
                    v-if="data.status == true"
                    icon="fa-solid fa-cloud-rain"
                  />
                  {{ data.status ? "Lloviendo" : "Sin lluvia" }}
                </p>
                <p>
                  <font-awesome-icon icon="fa-solid fa-clock" />
                  {{ formatTimestamp(data.timestamp) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
li {
  border-bottom: 1px solid #ccc;
  color: #fff;
}
.data-item {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: left;
}

@keyframes animate {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(360deg);
  }
}

#dashboard.raining::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(@/assets/images/rain.png);
  animation: rain 0.4s linear infinite;
}

@keyframes rain {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 20% 100%;
  }
}
</style>
