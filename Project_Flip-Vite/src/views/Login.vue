<style>
body.login  {
    overflow-x: hidden;
    overflow-y: hidden;
    background-color: white;
}
</style>


<template>


        <router-link id="nav_bar_home" to="/Home">
            <img
                src="\src\assets\Trans_Home_Page_Logo.png"
                class="
                    absolute
                    scale-[1.1]
                    sm:top-[2%]
                    sm:left-[45%]
                    sm:h-48
                    w-22

                    lg:top-[35%]
                    right-[45%]
                    h-48
                    w-22
                    lg:scale-150
                "
            />
        </router-link>

<section class="max-w-screen flex flex-col lg:flex-row h-screen items-center">
    <h1 id="message" class="absolute text-black-700 font-semibold text-4xl pl-[5%] pb-[5%] invisible lg:visible">
        Welcome Back!!
    </h1>

  <div class="hidden xl:block w-full md:w-1/2 xl:w-2/3 h-screen">
    <img src="\src\assets\Login_Gradient.png" alt="" class="invisble xl:visible h-full object-center">
  </div>

  <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div class="w-full h-100">


      <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form class="mt-6" action="#" method="POST">
        <div>
          <label class="block text-gray-700 sm:-max-width">Email Address</label>
          <input type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-[#089ade] placeholder-white text-white mt-2 border focus:border-blue focus:bg-white focus:outline focus:placeholder-[#9ca3af] focus:text-[#9ca3af]" autofocus autocomplete required>
        </div>

        <div class="mt-4">
          <label class="block text-gray-700">Password</label>
          <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-[#089ade] placeholder-white text-white mt-2 border focus:border-blue-500 focus:bg-white focus:outline focus:placeholder-[#9ca3af] focus:text-[#9ca3af]" required>
        </div>

        <div class="text-right mt-2">
          <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
        </div>

        <button type="submit" class="w-full block bg-[#666fc4] hover:bg-[#7984ea] focus:bg-[#666fc4] text-white font-semibold rounded-lg px-4 py-3 mt-6 z-1"
              > Login </button>
      </form>

      <hr class="my-6 border-gray-300 w-full">

      <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
            <div class="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
            <span class="ml-4">
            Log in
            with
            Google</span>
            </div>
          </button>

      <p id="test" class="mt-8"> Need an Account? <router-link id="link_sign-up" to="/sign-up" class="text-blue-500 hover:text-blue-700 font-semibold"> Create an Account </router-link> </p>


    </div>
  </div>

</section>
</template>

<script>
export default {
    beforeCreate: function () {
        document.body.className = 'login';
    }
}
</script>
 

