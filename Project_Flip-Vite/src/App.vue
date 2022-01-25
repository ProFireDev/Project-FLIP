<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<style>
body {
    background-color: rgb(246, 246, 246);
}
</style>

<template>
<!-- This entire div is the nav bar, it is in app.vue as it is universal for the pages, no repetetive code. 
      There are 2 divs surrounding the man nav code, as we are unable to make a complex boolean to stop the nav from loading on router /login & /sign-up Janky Fix-->
<div v-if="$route.fullPath !== '/sign-up'">
    <div id="nav_bar" class="flex justify-around items-center text-gray" v-if="$route.fullPath !== '/login'">
        <!--this is a temp nav bar-->
        <router-link id="nav_bar_Logo" to="/" >
            <img
                src="\src\assets\Trans_Home_Page_Logo.png"
                class="
                    object-left
                    h-48
                    w-22
                    scale-[1.05]
                    flex
                    justify-start
                    hover:underline
                    decoration-orange
                    mt-8
                "
            />
        </router-link>

        <router-link
            to="/shop"
            class="
                font-roboto
                text-2xl
                hover:underline
                decoration-orange decoration-4
                underline-offset-4
            "
            >Shop</router-link
        >
        <router-link
            to="/build"
            class="
                font-roboto
                text-2xl
                hover:underline
                decoration-orange decoration-4
                underline-offset-4
            "
            >Build</router-link
        >
        <router-link
            to="/contact"
            class="
                font-roboto
                text-2xl
                hover:underline
                decoration-orange decoration-4
                underline-offset-4
            "
            >Contact
        </router-link>

        <div class="flex justify-end">
            <router-link to="/login">
                <img
                    src="\src\assets\Login_Icon.png"
                    class="flex justify-end pr-4"
                />
            </router-link>
            <router-link to="/cart">
                <img
                    src="\src\assets\Cart_Icon.png"
                    class="flex justify-end"
                />
            </router-link>
        </div>
    </div>
  </div>
    <router-view/>

      <footer class="fixed w-full bottom-0 bg-[#374151] p-4">
    <div class="container mx-auto px-4">
      <hr class=" border-b-1 border-gray-700" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4">
          <div class="text-sm text-white font-semibold py-1">
            Copyright © {{date}}
            <a
              href=""
              class="text-white hover:text-gray-400 text-sm font-semibold py-1"
              >Flipping Industries</a
            >
          </div>
        </div>
        <div class="w-full md:w-8/12 px-4">
          <ul
            class="flex flex-wrap list-none md:justify-end  justify-center"
          >
           <li>
              <a
                href="/contact"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >Pricing</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >Contact</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >About Us</a
              >
            </li>
            <li>
              <a
                href=""
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >Hiring</a
              >
            </li>
            <li>
              <a
                href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                class="text-white hover:text-gray-400 text-sm font-semibold block py-1 px-3"
                >MIT License</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


<script checkBrowserStatus>
//check if the browser is online
//if not, redirect to the offline page
if (!navigator.onLine) {
    window.location.href = '/offline'
}

</script>
