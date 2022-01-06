<template>
    <div id="nav">
        <!--this is a temp nav bar-->
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/Build">Build</router-link> |
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/login">Login</router-link> |
        <router-link to="/shop">Shop</router-link> |
        <router-link to="/signup">Signup</router-link>
    </div>
    <router-view />
    <!-- This is the router-view
          if you get an ES lint error message here, its 
           wrong -->
    <!-- In vue 3 you can have more then one root element
           see shorturl.at/sxAEN -->
</template>