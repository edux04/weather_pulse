<script setup>
import { ref, onMounted, watchEffect, onUnmounted } from "vue";
import { getDocs, collection } from "firebase/firestore";
import { db, formatTimestamp } from "@/main";

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
  const intervalId = setInterval(fetchData, 10000);

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
      Última actualización: {{ lastUpdated }}
    </p>
    <div class="flex justify-around pt-6">
      <div class="card">
        <div class="text-center">
          <h5 class="card-header">DHT11</h5>
          <div
            class="h-[472px] w-[370px] bg-white rounded-3xl text-gray-900 dark:text-white dark:bg-gray-900 overflow-auto"
          >
            <!-- Display DHT11 data in a scrollable list -->
            <ul>
              <li v-for="data in dht11Data" :key="data.timestamp">
                <div class="data-item">
                  <p>Temperature: {{ data.temperature }}°C</p>
                  <p>Humidity: {{ data.humidity }}%</p>
                  <!-- Add more properties as needed -->
                  <p>{{ formatTimestamp(data.timestamp) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="text-center">
          <h5 class="card-header">Moisture Sensor</h5>
          <div
            class="h-[472px] w-[370px] bg-white text-gray-900 dark:text-white rounded-3xl dark:bg-gray-900 overflow-auto"
          >
            <!-- Display Moisture Sensor data in a scrollable list -->
            <ul>
              <li v-for="data in moistureData" :key="data.timestamp">
                <div class="data-item">
                  <!-- Display properties for Moisture Sensor data -->
                  <p>Estado: {{ data.estado }}</p>
                  <p>{{ formatTimestamp(data.timestamp) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="text-center">
          <h5 class="card-header">Bomba</h5>
          <div
            class="h-[472px] w-[370px] bg-white rounded-3xl text-gray-900 dark:text-white dark:bg-gray-900 overflow-auto"
          >
            <!-- Display Bomba data in a scrollable list -->
            <ul>
              <li v-for="data in bombaData" :key="data.timestamp">
                <div class="data-item">
                  <!-- Display properties for Bomba data -->
                  <p>Estado: {{ data.estado }}</p>
                  <p>{{ formatTimestamp(data.timestamp) }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.data-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
