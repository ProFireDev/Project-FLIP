<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>
    <div id="nav" class="flex justify-center items-center bg-gray" >
        <!--this is a temp nav bar-->
        <router-link to="/Home" src="">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/build">Build</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/signup">Signup</router-link>
        <br>
        <h1> Site Is Currently Under Construction</h1>
    </div>

  
    <router-view />




</template>

<style>
body {
  background-color: rgb(246, 246, 246);
}

.nav_bar {

}
</style>
