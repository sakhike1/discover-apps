<template>
  <section
    class="relative p-100 h-85 flex h-full flex-col items-center bg-cyan-900 overflow-hidden md:py-40"
    style="padding-top: 50px !important; padding-bottom: 500px !important"
  >
    >
    <div
      class="relative z-[1] bg-gray-400 p-60 py-15 rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg container m-auto px-6 md:px-12"
    >
      <section class="">
        <div class="container px-6 py-10 mx-auto">
          <div class="lg:flex lg:-mx-6">
            <div class="lg:w-3/4 lg:px-6">
              <img
                v-animate-onscroll.repeat="{ down: 'swing' }"
                class="object-cover hover:scale-105 object-center w-full h-80 xl:h-[28rem] rounded-xl"
                src="@/assets/rami-al-zayat-w33-zg-dNL4-unsplash.jpg"
                alt=""
              />

              <div>
                <h1
                  class="max-w-lg mt-4 text-4xl font-semibold leading-tight text-white dark:text-white"
                >
                  Trending apps and tech information
                </h1>

                <div
                  class="flex bg-gray-300 hover:bg-gradient-to-r from-gray-700 via-gray-900 to-black group-hover:text-black p-10 rounded-xl bg-opacity-0 backdrop-filter backdrop-blur-lg items-center mt-6"
                >
                  <img
                    v-animate-onscroll="'animated flip'"
                    class="object-cove animate__animated animate__fadeInUp object-center w-10 h-10 rounded-full"
                    src="@/assets/1655994702089.jpg"
                    alt=""
                  />

                  <div class="mx-4">
                    <h1 class="text-m text-white dark:text-gray-200">Discover apps</h1>
                    <p class="text-sm text-white dark:text-gray-400">
                      Lead Developer - Sakhile Simelane
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 lg:w-1/4 lg:mt-0 lg:px-6">
              <div>
                <h3 class="text-white capitalize">Design instument</h3>

                <a
                  href="#"
                  class="block mt-2 text-xs text-white hover:underline hover:text-gray-500 dark:text-gray-400"
                >
                  Take your design to another level on this guideline step
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-white capitalize">Apps you should check out</h3>

                <a
                  href="#"
                  class="block mt-2 font-medium text-xs text-white hover:underline hover:text-gray-500 dark:text-gray-400"
                >
                  Check the coolest apps we discovered
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />

              <div>
                <h3 class="text-white capitalize">Room spaces</h3>

                <a
                  href="#"
                  class="block mt-2 text-xs font-medium text-white hover:underline hover:text-gray-500 dark:text-gray-400"
                >
                  You can start your own postcast in Roomspaces
                </a>
              </div>

              <hr class="my-6 border-gray-200 dark:border-gray-700" />
            </div>
          </div>
        </div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div
              class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
            >
              <div
                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
              >
                <img
                  v-animate-onscroll="'animated flip'"
                  src="@/assets/secure-folder.png"
                  alt=""
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                />
              </div>
              <div class="flex-grow-left text-left mt-6 sm:mt-0">
                <h2 class="text-white text-lg title-font font-medium mb-2">
                  A Security-By-Design Approach
                </h2>
                <p class="leading-relaxed text-white text-xs">
                  Cybersecurity consideration in mobile app development is sorely lacking.
                  To build successful apps, adopt a security-by-design approach
                </p>
              </div>
            </div>
            <div
              class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col"
            >
              <div class="flex-grow p-10 sm:text-left text-left mt-6 sm:mt-0">
                <h2 class="text-white text-lg title-font font-medium mb-2">
                  Targeted Push Notifications
                </h2>
                <p class="leading-relaxed text-xs text-white">
                  Targeted push notifications are key to driving user retention and
                  reengagement.
                </p>
              </div>
              <div
                class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
              >
                <img
                  v-animate-onscroll="'animated flip'"
                  src="@/assets/notification (1).png"
                  alt=""
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                />
              </div>
            </div>
            <div class="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
              <div
                class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0"
              >
                <img
                  v-animate-onscroll="'animated flip'"
                  src="@/assets/man.png"
                  alt=""
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="sm:w-16 sm:h-16 w-10 h-10"
                  viewBox="0 0 24 24"
                />
              </div>
              <div class="flex-grow sm:text-left text-left mt-6 sm:mt-0">
                <h2 class="text-white text-lg title-font font-medium mb-2">
                  A User-Friendly, Responsive Interface
                </h2>
                <p class="leading-relaxed text-xs text-white">
                  A mobile app should have a user-friendly interface and be responsive.
                  Customers want to have a seamless experience and clearly understand what
                  to do with the app
                </p>
              </div>
            </div>
            <router-link to="/signup"
              ><button
                class="flex mx-auto mt-20 transform hover:scale-110 transition ease-out duration-500 text-white bg-indigo-500 rounded-full border-0 py-5 px-12 focus:outline-none hover:bg-indigo-600 text-lg"
              >
                Learn more
              </button></router-link
            >
          </div>
        </section>
      </section>

      <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
        <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
          <div
            class="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start"
          >
            <ul role="list" class="space-y-8"></ul>
          </div>
        </div>
      </div>
    </div>
    <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
      <div
        aria-hidden="true"
        class="bg-layers bg-scale w-56 h-100 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"
      ></div>
    </div>
    <div
      aria-hidden="true"
      class="absolute inset-0 w-full h-full bg-[#020314] opacity-80"
    ></div>
    <div class="py-100">
      <div
        class="xl:container relative z-[1] bg-white py-10 rounded-xl bg-opacity-25 backdrop-filter backdrop-blur-lg rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg container m-auto px-6 md:px-12 mx-auto px-6 md:px-12"
      >
        <div class="mb-16 md:w-2/3 lg:w-1/2">
          <h2 class="text-white text-lg title-font font-medium mb-2">
            DON’T BE AFRAID TO INNOVATE
          </h2>
          <p class="text-white text-xs font-light dark:text-gray-300">
            Never be afraid to experiment with new things because there is no knowing what
            wonderful product you might end up creating.
          </p>
        </div>
        <div
          class="grid gap-10 px-3 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"
        >
          <div class="group relative rounded-3xl space-y-6 overflow-hidden">
            <img
              v-animate-onscroll="'animated flash'"
              class="mx-auto h-[26rem] w-full hover:grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-5"
              src="@/assets/240_F_332868002_EwKc4mpYytHNxavGdJUdE7UzuZ8wnXns.jpg"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              class="absolute hover:bg-gradient-to-r from-green-300 to-purple-400 bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-400 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 class="text-sm font-semibold dark:text-gray-700 text-white">
                  Design with the user in mind
                </h4>
              </div>
              <p class="mt-8 py-2 text-white text-sm dark:text-gray-600">
                Putting the user first is a great approach to creating a usable app
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl space-y-6 overflow-hidden">
            <img
              v-animate-onscroll="'animated flash'"
              class="mx-auto h-[26rem] w-full hover:grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-10"
              src="@/assets/240_F_236751935_8EAc64zCUnVEjDDsGoJRwTPRtiKrwapv.jpg"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              class="absolute hover:bg-gradient-to-r from-green-300 to-purple-400 bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-400 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 class="text-sm font-semibold dark:text-gray-700 text-white">
                  Build as a team
                </h4>
              </div>
              <p class="mt-8 py-2 text-white text-sm dark:text-gray-600">
                Successful mobile apps are the result of combined efforts
              </p>
            </div>
          </div>
          <div class="group relative rounded-3xl space-y-6 overflow-hidden">
            <img
              v-animate-onscroll="'animated flash'"
              class="mx-auto h-[26rem] w-full hover:grayscale object-cover object-top ransition duration-500 group-hover:scale-105 group-hover:grayscale-10"
              src="@/assets/istockphoto-1335785179-612x612.jpg"
              alt="woman"
              loading="lazy"
              width="640"
              height="805"
            />
            <div
              class="absolute hover:bg-gradient-to-r from-green-300 to-purple-400 bottom-0 inset-x-0 h-max mt-auto px-8 py-6 bg-gray-400 dark:bg-white translate-y-24 transition duration-300 ease-in-out group-hover:translate-y-0"
            >
              <div>
                <h4 class="text-sm font-semibold dark:text-gray-700 text-white">
                  App accessibility
                </h4>
              </div>
              <p class="mt-8 py-2 text-white text-sm dark:text-gray-600">
                Making your app accessible to a wider audience is a must
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.v-application .py-15 {
  padding-top: 60px !important;
  padding-bottom: 70px !important;
}

.relative {
  margin-bottom: -10px;
}
</style>
