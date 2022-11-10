<template>
  <v-app id="inspire" class="py-full">
    <div
      class="relative py-20 relative overflow-hidden bg-no-repeat bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-cover"
    >
      <div
        v-animate-onscroll="{ down: 'flipInY', up: 'flipOutY' }"
        class="relative container m-auto px-10 text-gray-500 md:px-12"
      >
        <div class="grid lg:grid-cols-2 gap-6 md:w-8/12 md:mx-auto lg:w-full">
          <div
            class="group bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
          >
            <img
              v-animate-onscroll="'animated flip'"
              class="mx-auto w-24"
              src="@/assets/google.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 class="text-2xl font-semibold text-white">Trending Apps</h3>

            <router-link to="/signup">
              <a
                href="#"
                class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
              >
                <span class="text-gray-700">&rightarrow;</span>
              </a>
            </router-link>
          </div>
          <div
            class="group bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
          >
            <img
              v-animate-onscroll="'animated flip'"
              class="mx-auto w-24"
              src="@/assets/apps-develop.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 class="text-2xl font-semibold text-white">App Nation</h3>

            <router-link to="/signup">
              <a
                href="#"
                class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
              >
                <span class="text-gray-700">&rightarrow;</span>
              </a>
            </router-link>
          </div>
          <div
            class="group bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
          >
            <img
              v-animate-onscroll="'animated flip'"
              class="mx-auto w-24"
              src="@/assets/box-appstore.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 class="text-2xl font-semibold text-white">App of the week</h3>

            <router-link to="/signup">
              <a
                href="#"
                class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
              >
                <span class="text-gray-700">&rightarrow;</span>
              </a></router-link
            >
          </div>
          <div
            class="group bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 rounded-xl shadow-xl px-8 py-12 space-y-6 text-center"
          >
            <img
              v-animate-onscroll="'animated flip'"
              class="mx-auto w-24"
              src="@/assets/reviews.png"
              alt="illustration"
              loading="lazy"
            />
            <h3 class="text-2xl font-semibold text-white">App Reviews</h3>

            <router-link to="/signup">
              <a
                href="#"
                class="relative flex justify-center items-center h-10 w-10 mx-auto before:absolute before:inset-0 before:border before:rounded-full before:transition before:duration-300 group-hover:before:scale-125"
              >
                <span class="text-gray-700">&rightarrow;</span>
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.items-center {
  align-items: center;
  margin-top: 10px;
}
#inspire {
  z-index: 10;
}
</style>
