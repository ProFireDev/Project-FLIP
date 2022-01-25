<style>

</style>

<template>

    <div id="background">
        <div id="message">
            <h1 class="absolute font-[poppins] text-white text-[2.6vw] text-left italic tracking-wider pl-[5%] pt-[8%]"> 
                Used to say that there are no limits <br>
                and that anything is possible. <br>
                You can achieve anything if you really want to <br>
                The sky's the limit </h1>
            <img id="flipping_Custom" src="\src\assets\Sky_PC.png" class="absolute scale-[.75] right-[10%]">
         </div>
  
         <div id="fillers">
            <img id="background1" src="\src\assets\Shop_Filler_Sky.png" class="">   

                <div id="Janky_Product_Cards" class="absolute flex justify-between items-center w-screen scale-[.70]"> 
                    <img src="\src\assets\Product_Temp_A.png" class="">
                    <img src="\src\assets\Product_Temp_B.png" class="pb-[2%]">
                    <img src="\src\assets\Product_Temp_C.png" class="">
                </div>

            <img id="background2" src="\src\assets\Shop_Filler_2.png">  
        </div>


            </div>

 

    <div class="filler"></div>   

</template>

<script>
export default {
    beforeCreate: function () {
        document.body.className = 'shop';
    }
}
</script>

<style>

     body.shop {
        /*shop */
    overflow-y: scroll;

    }
</style>
