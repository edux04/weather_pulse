<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref(null); // Nuevo estado para almacenar el mensaje de error
const router = useRouter();

const singin = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("user login");
      router.push("/dashboard");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          setError("Correo electrónico inválido");
          break;
        case "auth/user-disabled":
          setError("Cuenta deshabilitada");
          break;
        case "auth/user-not-found":
          setError("Usuario no encontrado");
          break;
        case "auth/wrong-password":
          setError("Contraseña incorrecta");
          break;
        default:
          setError("Usuario o contraseña incorrecta");
      }
    });
};

const setError = (errorMessage) => {
  error.value = errorMessage;
};
</script>

<template>
  <section class="bg-gray-900 h-screen pt-40">
    <div class="flex flex-col items-center justify-center mx-auto pt-6">
      <RouterLink
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        to="/"
        ><img
          class="w-[200px]"
          src="@/assets/images/logo_small.png"
          alt="logo"
      /></RouterLink>

      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Accede a tu cuenta
          </h1>
          <section class="space-y-4 md:space-y-6">
            <!-- Mostrar el mensaje de error si existe -->
            <div v-if="error" class="text-red-500 text-sm">{{ error }}</div>
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
            <div class="flex justify-center">
              <button class="primary-button" @click="singin()">Acceder</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>
