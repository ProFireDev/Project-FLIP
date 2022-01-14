<template>


    <div id="filler" class="page_filler"></div>



    <div class="home">
    </div>

   <div class="text-3xl font-bold underline">
        <h1>This is the Home page</h1>
    </div>

</template>
<style>
body  {
    overflow-x: hidden !important;
}

.page_filler{
position: absolute;

width: 200%;
height: 120%;

z-index: -1000;


background: url(public/Home_Page_Filler.jpg);
transform: rotate(-25deg);
}

/*.page_filler {
    position: absolute;
    height: 200%;
    width: 200%;
background: url(public/Home_Page_Filler.jpg);
transform: rotate(-25deg);
} */

</style>

<script>

</script>

<!--figure out a proper nav bar and footer here first, then get the rest of the content together-->
