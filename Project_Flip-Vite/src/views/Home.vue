<template>
    <div class="home">
        <img class="mx-auto" alt="Vue logo" src="../assets/logo.png" />
        <br />
        <HelloWorld
            msg="Welcome to flipping, this site is currently under construction"
        />
    </div>
      <img alt="Vue logo" class="mx-auto" src="./assets/Vue Logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
};
</script>

<!--figure out a proper nav bar and footer here first, then get the rest of the content together-->





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  //color: #2c3e50;
  margin-top: 60px;
}
</style>