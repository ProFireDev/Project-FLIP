<style>

body.home {
    overflow-x: hidden;

}

.page_filler{
position: absolute;

bottom: -10%;
left: -10%;

width: 200%;
height: 120%;

z-index: -1000;

background: url(/Home_Page_Filler.jpg);
transform: rotate(-25deg);
}
.socials {
position: absolute;
width: 5vw;
height: 10vh;
right: 4vw;;
bottom: 40vh;
}

</style>


<template>
    <main>
        <div id="filler" class="page_filler" src="\src\assets\Home_Page_Filler.jpg"></div>


  <div id="home_sign" class="font-ABeeZee text-7xl text-[#84888C] font-bold tracking-widest pl-[7vw] pt-[4.5vh]">
        <h1> HOME </h1>
    </div>
    <h1 class="font-ABeeZee text-[#c8cbce] text-3xl pl-[7vw] pt-[4vh] italic"> We strive for the best <br> experience for our customers </h1>


    <div id="socials" class="socials flex flex-wrap scale-100"> 
       <a href="https://discord.gg/TrMaZxY47j"><img class="p-[2vh] scale-125" src="\src\assets\Discord_Logo.png"></a>
        <a href="https://www.instagram.com/flipping_industries/?hl=en"><img class="p-[2vh]" src="\src\assets\Instagram_Logo.png"></a>
        <a href="https://twitter.com/indistrys?t=onBAOqdrYkKGmb01DXh3Zw&s=09"><img class="p-[2vh]" src="\src\assets\Twitter_Logo.png"></a>
        <a href="https://www.facebook.com/Flipping-Industries-109518394203284"><img class="p-[2vh]" src="\src\assets\Facebook_Logo.png"></a>
       
       </div>

    </main>

</template>


<script>
export default {
    beforeCreate: function () {
        document.body.className = 'home';
    }
}
</script>



<!--figure out a proper nav bar and footer here first, then get the rest of the content together-->
