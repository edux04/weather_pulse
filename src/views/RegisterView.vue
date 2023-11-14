<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref(null); // Nuevo estado para almacenar el mensaje de error
const router = useRouter();

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("user created");
      router.push("/dashboard");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Dirección de correo electrónico no válida");
          break;
        case "auth/email-already-in-use":
          setError("La dirección de correo electrónico ya está en uso");
          break;
        case "auth/weak-password":
          setError("La contraseña es débil, debe tener al menos 6 caracteres");
          break;
        default:
          setError("Error desconocido durante el registro");
      }
    });
};

const setError = (errorMessage) => {
  error.value = errorMessage;
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900 h-screen">
    <div class="flex flex-col items-center justify-center mx-auto pt-6">
      <RouterLink
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        to="/"
        ><img class="w-[200px]" src="../assets/logo.svg" alt="logo"
      /></RouterLink>

      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Registrate
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Correo</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Escribe tu correo electrónico"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Constraña</label
              >
              <input
                v-model="password"
                type="password"
                name="password"
                id="password"
                placeholder="Escriba su contraseña"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <!-- Mostrar el mensaje de error si existe -->
            <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
            <div class="flex justify-center">
              <button class="primary-button" @click="register()">
                Registrarme
                <!-- Add the style and icon you want using the Array format -->
                <font-awesome-icon icon="fa-solid fa-right-to-bracket" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
