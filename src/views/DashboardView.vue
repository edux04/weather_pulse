<script setup>
import { ref, onMounted, watchEffect, onUnmounted } from "vue";
import { getDocs, collection } from "firebase/firestore";
import { db, formatTimestamp } from "@/main";
import {
  faTemperatureThreeQuarters,
  faDroplet,
  faCheck,
  faDropletSlash,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* add icons to the library */
library.add(
  faTemperatureThreeQuarters,
  faDroplet,
  faClock,
  faDropletSlash,
  faCheck
);

const dht11Data = ref([]);
const moistureData = ref([]); // Agrega esta línea
const bombaData = ref([]); // Agrega esta línea
const lastUpdated = ref("Nunca");

const fetchData = async () => {
  const dht11Collection = collection(db, "dht11_data");
  const dht11Snapshot = await getDocs(dht11Collection);
  dht11Data.value = dht11Snapshot.docs.map((doc) => doc.data());

  const moistureCollection = collection(db, "moisture_sensor");
  const moistureSnapshot = await getDocs(moistureCollection);
  moistureData.value = moistureSnapshot.docs.map((doc) => doc.data());

  const bombaCollection = collection(db, "bomba");
  const bombaSnapshot = await getDocs(bombaCollection);
  bombaData.value = bombaSnapshot.docs.map((doc) => doc.data());

  // Actualizar la fecha y hora de la última actualización
  lastUpdated.value = new Date().toLocaleString("en-US", {
    timeZone: "America/Santo_Domingo",
  });
};

onMounted(fetchData);

watchEffect(() => {
  const intervalId = setInterval(fetchData, 180000);

  onUnmounted(() => clearInterval(intervalId));
});
</script>
<template>
  <section id="section1" class="section1 pt-6">
    <h2
      class="main-color mb-4 text-4xl tracking-tight font-extrabold text-center"
    >
      Dashboard
    </h2>
    <p class="text-white text-center">
      <font-awesome-icon icon="fa-solid fa-clock" /> Última actualización:
      {{ lastUpdated }}
    </p>
    <div class="flex flex-wrap mt-6">
      <div class="card w-full lg:w-4/12 text-center">
        <h5 class="card-header">DHT11</h5>
        <div
          class="lg:h-[472px] h-[300px] w-[400px] m-auto bg-white rounded-3xl text-gray-900 dark:text-white dark:bg-gray-900 overflow-auto"
        >
          <!-- Display DHT11 data in a scrollable list -->
          <ul>
            <li
              v-for="data in dht11Data"
              :key="data.timestamp"
              class="flex justify-center"
            >
              <div class="data-item">
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-temperature-three-quarters"
                  />
                  Temperatura: {{ data.temperature }}°C
                </p>
                <p>
                  <font-awesome-icon
                    icon="fa-solid fa-droplet"
                    class="text-blue-600"
                  />Humedad: {{ data.humidity }}%
                </p>
                <!-- Add more properties as needed -->
                <p>
                  <font-awesome-icon icon="fa-solid fa-clock" />
                  {{ formatTimestamp(data.timestamp) }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="card w-full lg:w-4/12 text-center">
        <h5 class="card-header">HW-080</h5>
        <div
          class="lg:h-[472px] h-[300px] w-[400px] m-auto bg-white text-gray-900 dark:text-white rounded-3xl dark:bg-gray-900 overflow-auto"
        >
          <!-- Display Moisture Sensor data in a scrollable list -->
          <ul>
            <li
              v-for="data in moistureData"
              :key="data.timestamp"
              class="flex justify-center"
            >
              <div class="data-item">
                <!-- Display properties for Moisture Sensor data -->
                <p>
                  <font-awesome-icon
                    class="text-blue-600"
                    v-if="data.estado == 'No se detectó agua'"
                    icon="fa-solid fa-droplet-slash"
                  />
                  <font-awesome-icon
                    class="text-blue-600"
                    v-if="data.estado == 'Se detectó agua'"
                    icon="fa-solid fa-droplet"
                  />
                  {{ data.estado }}
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

      <div class="card w-full lg:w-4/12 text-center">
        <h5 class="card-header">Bomba</h5>
        <div
          class="lg:h-[472px] h-[300px] w-[400px] m-auto bg-white rounded-3xl text-gray-900 dark:text-white dark:bg-gray-900 overflow-auto"
        >
          <!-- Display Bomba data in a scrollable list -->
          <ul>
            <li
              v-for="data in bombaData"
              :key="data.timestamp"
              class="flex justify-center"
            >
              <div class="data-item">
                <!-- Display properties for Bomba data -->
                <p>
                  <font-awesome-icon
                    v-if="data.estado == 'Encendida'"
                    icon="fa-solid fa-check"
                  />
                  {{ data.estado }}
                </p>
                <p>
                  <font-awesome-icon icon="fa-solid fa-clock" />{{
                    formatTimestamp(data.timestamp)
                  }}
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
}
.data-item {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: left;
}
</style>
