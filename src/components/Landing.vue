<template>
  <v-app id="inspire">
    <div
      class="relative overflow-hidden bg-no-repeat bg-gradient-to-r from-gray-700 via-gray-900 to-black bg-cover"
      style="
        background-position: 50%;

        height: 529px;
      "
    >
      <div
        class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
        style="background-color: rgba(0, 0, 0, 0.75)"
      >
        <div class="flex justify-center items-center h-full">
          <div class="text-center text-white px-6 md:px-12">
            <h1
              class="text-5xl font-bold mt-0 mb-6 animate__animated animate__backInRight"
            >
              Welcome to discover Apps
            </h1>
            <h3 class="text-m mb-8 text-gray-400 animate__animated animate__backInLeft">
              Want to read reviews on apps and see which apps are trending
            </h3>
            <button
              type="button"
              class="text-white border rounded-full text-sm px-7 py-2 mr-1 mb-2 text-center transform hover:scale-110 transition ease-out duration-500 w-28 hover:text-red-500"
            >
              <router-link class="hover:text-white text-white" :to="{ path: 'SignUp' }"
                >Signup</router-link
              >
            </button>
            <button
              type="button"
              class="text-white border m-3 rounded-full text-sm px-7 py-2 mr-1 mb-2 text-center transform hover:scale-110 transition ease-out duration-500 w-28 hover:text-red-500"
            >
              <router-link class="hover:text-white text-white" :to="{ path: 'Login' }"
                >Login</router-link
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <v-main>
      <Navbar />
      <BlogPage />
      <Lastpage />
      <Footer />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "Home",
  components: {
    Navbar: require("@/components/Navbar.vue").default,
    BlogPage: require("@/components/BlogPage.vue").default,
    Lastpage: require("@/components/Lastpage.vue").default,
    Footer: require("@/components/Footer.vue").default,
  },
};
</script>
