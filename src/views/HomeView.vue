<script setup>
import { inject } from "vue";

const isDarkTheme = inject("isDarkTheme");
</script>

<template>
  <div class="principal">
    <section class="md:h-screen h-auto" id="about-us">
      <h2 class="text-4xl mb-5"><b>¿Qué es WeatherPulse?</b></h2>
      <br />
      <p>
        Hemos creado una experiencia única para que puedas monitorear con
        precisión la
        <b>presión atmosférica, la temperatura y la humedad en tiempo real.</b>
      </p>
      <br />
      <p>
        Imagina tener el control completo de tu entorno, desde la comodidad de
        tu hogar u oficina.
        <b>Weather Pulse te proporciona datos meteorológicos detallados</b> que
        te permitirán anticipar cambios climáticos
      </p>
    </section>
  </div>

  <section id="electronic-design">
    <br />
    <h2 class="text-4xl text-center my-5 h-full text-white">
      Diseño electrónico
    </h2>
    <br />
    <img src="@/assets/images/weather_pulse_transparent.png" alt="Diseño" />
  </section>
  <div class="secundario">
    <section id="ourTeam">
      <div
        class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6"
      >
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold dark:text-white"
          >
            Equipo
          </h2>
          <br />
          <p class="font-light sm:text-xl text-center">
            Un equipo dedicado al desarrollo de un proyecto innovador
          </p>
        </div>
        <div
          class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <!-- Eduardo -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/eduardo.jpg"
              alt="Eduardo Ramon"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Eduardo Ramon</a>
            </h3>
            <p class="text-center">10153511</p>
          </div>

          <!-- Ricardo -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/ricardo.jpg"
              alt="Ricardo Suero"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Ricardo Suero</a>
            </h3>
            <p class="text-center">10153902</p>
          </div>

          <!-- Vallery -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/vallery.jpg"
              alt="Vallery Flores"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Vallery Flores</a>
            </h3>
            <p class="text-center">10143626</p>
          </div>

          <!-- Mary -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/mary.jpeg"
              alt="Mary Gómez"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Mary Gómez</a>
            </h3>
            <p class="text-center">10154060</p>
          </div>

          <!-- Jerines -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/jerines.jpeg"
              alt="Jerines Acosta"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Jerines Acosta</a>
            </h3>
            <p class="text-center">10153792</p>
          </div>

          <!-- Ayleen -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/ayleen.jpg"
              alt="Ayleen Ubrí"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Ayleen Ubrí</a>
            </h3>
            <p class="text-center">10153491</p>
          </div>

          <!-- Greilin -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/greilin.jpeg"
              alt="Greilin Reinoso"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Greilin Reinoso</a>
            </h3>
            <p class="text-center">0152074</p>
          </div>

          <!-- Angel -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/angel.jpg"
              alt="Angel Corporan"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Angel Corporan</a>
            </h3>
            <p class="text-center">10153850</p>
          </div>

          <!-- Jonathan -->
          <div class="text-center text-gray-500 dark:text-gray-400">
            <img
              class="mx-auto mb-4 h-[100px]"
              src="@/assets/images/our-team/jonathan.png"
              alt="Jonathan Del Rosario"
            />
            <h3 class="mb-1 text-2xl font-bold tracking-tight dark:text-white">
              <a href="#">Jonathan Del Rosario</a>
            </h3>
            <p class="text-center">10153866</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
