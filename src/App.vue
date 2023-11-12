<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, provide, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initFlowbite } from "flowbite";
import { faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* add icons to the library */
library.add(faMoon, faSun, faUser);

const isLoggedIn = ref(false);
const router = useRouter();
let auth;

onMounted(() => {
  initFlowbite();
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const logOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

const isDarkTheme = ref(
  localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  updateThemeClass(isDarkTheme.value);
};

const updateThemeClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};
provide("isDarkTheme", isDarkTheme);
</script>

<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink
        class="flex items-center space-x-3 rtl:space-x-reverse"
        to="/"
      >
        <img src="./assets/logo-2.svg" class="h-8" alt="Agrotech Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap main-color"
          >Agrotech</span
        ></RouterLink
      >

      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <RouterLink
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/"
            >
              Inicio</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/dashboard"
              v-if="isLoggedIn"
            >
              Dashboard</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/"
            >
              ¿Qué es AgroTech?</RouterLink
            >
          </li>
          <li>
            <RouterLink
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              to="/"
            >
              Equipo</RouterLink
            >
          </li>

          <button id="theme-toggle" @click="toggleTheme">
            <font-awesome-icon
              class="text-yellow-300 h-6 w-6"
              icon="fa fa-sun "
              :class="{ hidden: isDarkTheme }"
            />
            <font-awesome-icon
              class="text-stone-800 h-6 w-6"
              icon="fa fa-moon"
              :class="{ hidden: !isDarkTheme }"
            />
          </button>

          <button class="primary-button" v-if="isLoggedIn" @click="logOut()">
            Log out
          </button>

          <RouterLink
            class="primary-button block text-gray-900 rounded dark:text-white"
            to="/login"
            v-if="!isLoggedIn"
          >
            Accede
            <font-awesome-icon icon="fa-solid fa-user" />
          </RouterLink>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>
