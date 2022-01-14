<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
    <div id="nav_bar" class="flex justify-between items-center text-gray" >
        <!--this is a temp nav bar-->
        <router-link to="/Home"> <img src="\src\assets\Trans_Home_Page_Logo.png" class="object-scale-down h-48 w-22 flex justify-start "> </router-link> 
       
          <router-link to="/shop" class="hover:underline decoration-orange font-roboto">Shop</router-link> 
          <router-link to="/build" class="hover:underline decoration-orange font-roboto">Build</router-link> 
          <router-link to="/about" class="hover:underline decoration-orange font-roboto">About  </router-link> 

        <router-link to="/cart"> <img src="\src\assets\Cart_Icon (2).png" class="flex justify-end"> </router-link> 
        <router-link to="/login"> <img src="\src\assets\Login_Icon.png" class="flex justify-end"> </router-link> 

    </div>
        <h1  class="mx-auto"> Site Is Currently Under Construction</h1>
  
    <router-view />

<<<<<<< Aakansh-C-Dev



</template>

<style>
body {
  background-color: rgb(246, 246, 246);
}

</style>

</template>