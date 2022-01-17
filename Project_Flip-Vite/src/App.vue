<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
    <div id="nav_bar" class="flex justify-around items-center text-gray" >
        <!--this is a temp nav bar-->
        <router-link to="/Home"> <img src="\src\assets\Trans_Home_Page_Logo.png" class="object-scale-down h-48 w-22 flex justify-start hover:underline decoration-orange"> </router-link> 
       
          <router-link to="/shop"  class="font-roboto text-2xl hover:underline decoration-orange decoration-4 underline-offset-4">Shop</router-link> 
          <router-link to="/build" class="font-roboto text-2xl hover:underline decoration-orange decoration-4 underline-offset-4">Build</router-link> 
          <router-link to="/about" class="font-roboto text-2xl hover:underline decoration-orange decoration-4 underline-offset-4">About  </router-link> 
        <div class="flex justify-end">
          <router-link to="/login"> <img src="\src\assets\Login_Icon.png" class="flex justify-end pr-4"> </router-link> 
          <router-link to="/cart"> <img src="\src\assets\Cart_Icon (2).png" class="flex justify-end"> </router-link> 
        </div>

    </div>

    <div id="social_media">
        <button onclick="" src="" class=""></button>
        <button onclick="" src="" class=""></button>
        <button onclick="" src="" class=""></button>
        <button onclick="" src="" class=""></button>
    </div>
        <h1  class="text-center underline text-3xl font-bold"> Site Is Currently Under Construction</h1>
  
    <router-view />

</template>

<style>
body {
  background-color: rgb(246, 246, 246);
}

</style>

