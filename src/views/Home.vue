<template>
  <div
    class="min-h-screen w-full bg-cover flex justify-between items-end text-white"
    :style="{ backgroundImage: 'url(' + require('@/assets/home/background-home-desktop.jpg') + ')' }"
  >
    <div class="flex flex-col space-y-12 w-96 ml-32 mb-32">
      <h1 class="uppercase text-lg tracking-wider leading-10">
        So, you want to travel to
        <span class="text-9xl uppercase pb-6">space</span>
      </h1>
      <p class="text-sm text-justify pr-8 leading-7 font-thin">
        Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
      </p>
    </div>
    <!-- EXPLORE -->
    <div class="w-56 h-56 mr-32 mb-32 rounded-full text-black hover:bg-emerald-400 hover:text-white transition duration-1000 text-3xl tracking-wider bg-white flex justify-center items-center">EXPLORE</div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
