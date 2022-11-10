<template>
  <div
    class="introDescription"
    data-aos="zoom-in"
    data-aos-duration="1500"
    data-aos-delay="500"
  >
    <section
      class="h-screen bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r"
      style="
        background-position: 50%;

        height: 810px;
      "
    >
      <div class="px-6 h-full text-gray-800">
        <div
          class="flex xl:justify-center lg:justify-between absolute top-0 right-0 bottom-0 left-0 justify-center items-center flex-wrap h-full g-6"
        >
          <div
            class="grow-0 my-12- shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
          >
            <img
              src="@/assets/mobile-chatting-app.png"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form>
              <div class="mb-6">
                <input
                  type="name"
                  class="form-control block w-full h-12 px-4 py-2 text-m font-normal text-gray-700 bg-white bg-transparent border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Username"
                  v-model="name"
                  required
                />
              </div>

              <!-- Password input -->
              <div class="mb-6">
                <input
                  type="email"
                  class="form-control block w-full h-12 px-4 py-2 text-m font-normal text-gray-700 bg-white bg-transparent border rounded-full border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                  v-model="email"
                  required
                />
              </div>
              <div class="mb-6">
                <input
                  type="password"
                  class="form-control block w-full h-12 px-4 py-2 text-m font-normal text-gray-700 bg-white bg-transparent border rounded-full border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                  v-model="password"
                  required
                />
              </div>

              <div class="text-center lg:text-left">
                <button
                  @click="registerUser()"
                  type="button"
                  class="inline-block px-12 py-3 bg-blue-600 text-white text-sm leading-snug rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Signup
                </button>
              </div>
            </form>
          </div>
        </div>
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registerUser() {
      console.log(this.name, this.email, this.password);
      Axios.post("https://reqres.in/api/users?page", {
        name: this.name,

        email: this.email,

        password: this.password,
      })
        .then((response) => {
          const { data } = response.data;

          localStorage.setItem("auth", JSON.stringify(data));

          this.$root.auth = data;

          this.$router.push("dashboard");
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
  },
};
</script>

<style></style>
