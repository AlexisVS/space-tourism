<template>
  <div
    class="min-h-screen w-full flex items-center justify-center text-white bg-cover"
    :style="{ backgroundImage: 'url(' + require('@/assets/technology/background-technology-desktop.jpg') + ')' }"
  >
    <div class="w-8/12 min-h-screen justify-center flex flex-col">
      <div class="mx-auto">
      <h1 class="uppercase text-2xl mb-12 ml-5 tracking-widest">
        <span class="text-gray-600 mr-5 font-bold">03</span>SPACE LAUNCH 101
      </h1>
        <div class="w-full flex items-center justify-center mt-24">
          <!-- Numbers slide -->
          <div class="3/12 space-y-8 flex flex-col mr-20 text-black text-2xl font-bold">
          <router-link v-for="technology in technologies" :key="'technology'+ technology.id" :to="'/technology/' + technology.id">
            <div
              class="w-20 h-20 rounded-full flex justify-center items-center bg-white border-2 border-white hover:bg-transparent hover:text-white transition duration-1000"
            >{{technology.id}}</div>
          </router-link>
          </div>
          <div class="w-9/12 flex flex-col">
            <span class="uppercase text-gray-400">The terminology...</span>
            <h1 class="text-7xl uppercase mt-3">{{getTechnology.name}}</h1>
            <p class="tracking-widest leading-8 text-justify w-144 mt-7">{{getTechnology.description}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- Image -->
    <img class="w-4/12" :src="require('@/assets/technology/' + getTechnology.images.portrait)" alt />
  </div>
</template>

<script>
import store from "../store";
export default {
  data () {
    return {
      technologies: store.technology,
    }
  },
  computed: {
    getTechnology() {
      return this.technologies.find( e => e.id == this.$route.params.id )
    }
  }
}
</script>

<style>
</style>