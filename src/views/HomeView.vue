<script setup>
import { inject } from "vue";

const isDarkTheme = inject("isDarkTheme");
</script>

<template>
  <!--seccion 2-->
  <section class="section2 p-5">
    <div id="section2" class="flex justify-center items-center">
      <div class="w-full text-center">
        <div class="">
          <div class="fotosec2">
            <img
              src="../assets/images/section2/LOGO-grande.svg"
              alt=""
              class="m-auto"
            />
          </div>
          <p class="w-6/12 m-auto text-left">
            Se centra en desarrollar un sistema automatizado que monitoree y
            controle los niveles de humedad y temperatura del suelo para mejorar
            la eficiencia del riego en la agricultura local. Utilizaremos
            Raspberry Pi 4 como base para este sistema, aprovechando su
            versatilidad y capacidades de procesamiento. Nuestro objetivo es
            crear una solución rentable y de fácil implementación que pueda
            ayudar a los agricultores locales a mejorar la calidad de sus
            cultivos y optimizar el uso del agua.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="pt-5 bg-white dark:bg-gray-900">
    <h1
      class="text-gray-900 dark:text-white mb-4 text-4xl tracking-tight font-extrabold text-center"
    >
      Agrotech Wiring
    </h1>
    <img
      :src="
        'src/assets/images/' +
        (isDarkTheme ? 'agrotech_wiring_dark.jpg' : 'Agrotech_wiring.jpg')
      "
      alt=""
      class="m-auto"
    />
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          Nuestro Equipo
        </h2>
        <p class="font-light main-color lg:mb-16 sm:text-xl">
          Conoce a nuestros talentosos integrantes
        </p>
      </div>
      <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/valery.jpg"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Vallery Flores</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10143626</span>
          </div>
        </div>
        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/jerines.jpg"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Jerines Acosta</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10153792</span>
          </div>
        </div>
        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/ayleen.jpg"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Ayleen Ubrí</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10153491</span>
          </div>
        </div>
        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/nueva2x2.JPG"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Eduardo Ramírez</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10153511</span>
          </div>
        </div>
        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/angel.jpg"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Angel Corporan</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10153850</span>
          </div>
        </div>

        <div
          class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg sm:rounded-none sm:rounded-l-lg h-32 w-32"
              src="../assets/images/our-team/Ricardo.jpg"
              alt="Vallery Avatar"
            />
          </a>
          <div class="p-5">
            <h3
              class="text-xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              <a href="#">Ricardo Suero</a>
            </h3>
            <span class="text-gray-500 dark:text-gray-400">10153902</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
