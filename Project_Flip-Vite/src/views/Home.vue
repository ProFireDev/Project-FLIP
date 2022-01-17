<template>


    <div id="filler" class="page_filler" src="\src\assets\Home_Page_Filler.jpg"></div>


    <div id="home_sign" class="font-ABeeZee text-6xl text-[#84888C] font-bold tracking-widest pl-[8vw]">
        <h1> HOME </h1>
    </div>


   <div class="text-center underline text-3xl font-bold">
        <h1>This is the Home page</h1>
    </div>

</template>


<script>

</script>

<style>
body  {
    overflow-x: hidden !important;
}

.page_filler{
position: absolute;

bottom: -5%;
left: -10%;

width: 200%;
height: 120%;

z-index: -1000;

background: url(/Home_Page_Filler.jpg);
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


<!--figure out a proper nav bar and footer here first, then get the rest of the content together-->
