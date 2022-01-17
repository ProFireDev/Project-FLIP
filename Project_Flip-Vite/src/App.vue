<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>


<template>
    <div id="nav_bar" class="flex justify-around items-center text-gray">
        <!--this is a temp nav bar-->
        <router-link id="nav_bar_Logo" to="/Home">
            <img
                src="\src\assets\Trans_Home_Page_Logo.png"
                class="
                    object-left
                    h-48
                    w-22
                    scale-125
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
            to="/about"
            class="
                font-roboto
                text-2xl
                hover:underline
                decoration-orange decoration-4
                underline-offset-4
            "
            >About
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
                    src="\src\assets\Cart_Icon (2).png"
                    class="flex justify-end"
                />
            </router-link>
        </div>

        <router-link to="/cart">
            <img src="\src\assets\Cart_Icon (2).png" class="flex justify-end" />
        </router-link>
        <router-link to="/login">
            <img src="\src\assets\Login_Icon.png" class="flex justify-end" />
        </router-link>
    </div>

    <router-view />
</template>

<style>
body {
    background-color: rgb(246, 246, 246);
}
</style>

<script checkBrowserStatus>
//check if the browser is online
//if not, redirect to the offline page
if (!navigator.onLine) {
    window.location.href = '/offline'
}
</script>
