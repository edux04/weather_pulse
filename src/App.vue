<script setup>
import { RouterLink, RouterView, useRouter } from "vue-router";
import { onMounted, provide, ref, onBeforeUnmount } from "vue";
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

const isScrolled = ref(false);
const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
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
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
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
  <nav
    class="w-full top-0 start-0 bg-transparent fixed z-10 text-white"
    :class="{ scrolled: isScrolled }"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <RouterLink
        class="flex items-center space-x-3 rtl:space-x-reverse"
        to="/"
      >
        <img
          src="./assets/images/logo_small.png"
          class="h-12"
          alt="Agrotech Logo"
        />
      </RouterLink>
      <section class="md:hidden flex">
        <button class="btn p-1 mr-2" v-if="isLoggedIn" @click="logOut()">
          Salir
        </button>
        <RouterLink class="btn p-1 mr-2" to="/login" v-if="!isLoggedIn">
          Accede
          <font-awesome-icon icon="fa-solid fa-user" />
        </RouterLink>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 bg-white justify-center text-sm rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      </section>
      <div
        class="hidden w-full md:block md:w-auto md:bg-transparent bg-white rounded md:text-white text-stone-950"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li class="self-center">
            <RouterLink
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              to="/dashboard"
              v-if="isLoggedIn"
            >
              Dashboard
            </RouterLink>
          </li>
          <li class="self-center">
            <RouterLink
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              to="/#about-us"
            >
              ¿Qué es WeatherPulse?
            </RouterLink>
          </li>

          <li class="self-center">
            <RouterLink
              class="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0"
              to="/#ourTeam"
            >
              Equipo
            </RouterLink>
          </li>

          <button
            class="btn p-2 hidden md:block"
            v-if="isLoggedIn"
            @click="logOut()"
          >
            Salir
          </button>
          <RouterLink
            class="btn p-2 hidden md:block"
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
<style scoped>
/* Add styles for the scrolled state */
nav.scrolled {
  background-image: linear-gradient(
    0deg,
    rgba(3, 0, 35, 0.5) 50.68359375%,
    /* Adjust the alpha value (0.5 in this case) for transparency */
      rgba(1, 75, 144, 0.5) 100%
      /* Adjust the alpha value (0.5 in this case) for transparency */
  );
}
</style>
