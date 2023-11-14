<script setup>
import { inject } from "vue";

const isDarkTheme = inject("isDarkTheme");
</script>

<template>
  <!--seccion 2-->

  <div id="nosotros" class="relative overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div
        class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <div class="pt-1"></div>

        <main
          class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h1
              class="my-6 tracking-tight font-extrabold main-color text-center text-4xl"
            >
              Agrotech
            </h1>

            <p>
              Nos enfocamos en la creación de un sistema automatizado diseñado
              para supervisar y regular los niveles de humedad y temperatura del
              suelo, con el propósito de potenciar la eficiencia del riego en la
              agricultura local. Para este sistema, hemos seleccionado Raspberry
              Pi 2 como plataforma base, aprovechando su versatilidad y potentes
              capacidades de procesamiento. Nuestra meta es desarrollar una
              solución rentable y de implementación sencilla, que contribuya a
              mejorar la calidad de los cultivos de los agricultores locales, al
              mismo tiempo que optimiza el uso del agua.
            </p>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 pt-6">
      <img
        class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
        src="../assets/images/section2/LOGO-grande.svg"
        alt=""
      />
    </div>
  </div>
  <section
    id="diseño"
    class="pt-5 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600"
  >
    <h2
      class="main-color mb-4 text-4xl tracking-tight font-extrabold text-center"
    >
      Diseño electrónico
    </h2>
    <img
      v-if="isDarkTheme"
      src="../assets/images/agrotech_wiring_dark.jpg"
      alt="agrotech wiring"
      class="m-auto"
    />
    <img
      v-if="!isDarkTheme"
      src="../assets/images/Agrotech_wiring.jpg"
      alt="agrotech wiring"
      class="m-auto"
    />
  </section>
  <section class="bg-white dark:bg-gray-900" id="equipo">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold main-color">
          Nuestro equipo
        </h2>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Conoce nuestro talentoso equipo
        </p>
      </div>
      <div
        class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <!-- Participante 1 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/valery.jpg"
            alt="Vallery Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Vallery Flores</a>
          </h3>
          <p>10143626</p>
        </div>

        <!-- Participante 2 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/jerines.jpg"
            alt="Jerines Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Jerines Acosta</a>
          </h3>
          <p>10153792</p>
        </div>

        <!-- Participante 3 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/ayleen.jpg"
            alt="Ayleen Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Ayleen Ubrí</a>
          </h3>
          <p>10153491</p>
        </div>

        <!-- Participante 4 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/eduardo.jpg"
            alt="Eduardo Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Eduardo Ramírez</a>
          </h3>
          <p>10153511</p>
        </div>

        <!-- Participante 5 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/angel.jpg"
            alt="Angel Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Angel Corporan</a>
          </h3>
          <p>10153850</p>
        </div>

        <!-- Participante 6 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="../assets/images/our-team/Ricardo.jpg"
            alt="Ricardo Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Ricardo Suero</a>
          </h3>
          <p>10153902</p>
        </div>

        <!-- Participante 6 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://ui-avatars.com/api/?name=Greilin+Reinoso&background=random"
            alt="Greilin Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Greilin Reinoso</a>
          </h3>
          <p>0152074</p>
        </div>

        <!-- Participante 7 -->
        <div class="text-center text-gray-500 dark:text-gray-400">
          <img
            class="mx-auto mb-4 w-36 h-36 rounded-full"
            src="https://ui-avatars.com/api/?name=Mary+Gómez&background=random"
            alt="Mary Avatar"
          />
          <h3
            class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            <a href="#">Mary Gómez</a>
          </h3>
          <p>10154060</p>
        </div>
      </div>
    </div>
  </section>
</template>
