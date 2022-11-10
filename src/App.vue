<template>
  <div id="app" fixed>
    <div id=" nav" class="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-2">
      <nav class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center">
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="font-bold text-gray-400 md:text-2xl hover:text-orange-100"
            >Discover Apps
          </router-link>
          <!-- Mobile menu button -->
          <div @click="toggleNav" class="flex-end md:hidden">
            <button
              type="button"
              class="text-white hover:text-gray-1000 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <!-- <li>
            <router-link
              class="font-bold text-gray-400 text-xs hover:text-orange-100"
              to="/"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              class="font-bold text-gray-400 text-xs hover:text-orange-100"
              to="/about"
              >About
            </router-link>
          </li>
          <li>
            <router-link
              class="font-bold text-gray-400 text-xs hover:text-orange-100"
              to="/Services"
              >Services
            </router-link>
          </li> -->
          <li class="pt-2">
            <button
              type="button"
              class="text-white border rounded-full text-sm px-7 py-2 mr-1 mb-2 text-center transform hover:scale-110 transition ease-out duration-500 w-28 hover:text-red-500"
            >
              <router-link class="hover:text-white" :to="{ path: 'SignUp' }"
                >Signup</router-link
              >
            </button>
          </li>

          <li v class="pt-2">
            <a
              type="button"
              class="text-white border rounded-full text-sm px-7 py-2 mr-1 mb-2 text-center transform hover:scale-110 transition ease-out duration-500 w-28"
            >
              <router-link class="hover:text-white" :to="{ path: 'login' }"
                >Login</router-link
              >
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
  props: ["showExtra"],

  mounted() {
    console.log(this.$root);
  },
};
</script>

<style lang="css">
.scale-slide-enter-active,
.scale-slide-leave-active {
  position: fixed;
  transition: all 0.85s ease;
}

.scale-slide-enter-from {
  left: -100%;
}

.scale-slide-enter-to {
  left: 0%;
}

.scale-slide-leave-from {
  transform: scale(1);
}

.scale-slide-leave-to {
  transform: scale(0.8);
}
</style>
