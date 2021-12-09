<template>
  <div
    class="min-h-screen flex w-full justify-center items-center text-white bg-cover"
    :style="{ backgroundImage: 'url(' + require('@/assets/crew/background-crew-desktop.jpg') + ')' }"
  >
    <div class="w-10/12 flex items-center justify-center">
      <div class="w-max min-h-screen justify-end flex flex-col">
        <h1 class="uppercase text-2xl mb-12 tracking-widest">
          <span class="text-gray-600 mr-5">02</span>Meet your crew
        </h1>
        <p class="text-4xl mb-4 text-gray-400 uppercase">{{ getCrew.role }}</p>
        <h2 class="text-6xl mb-10 uppercase tracking-widest">{{ getCrew.name }}</h2>
        <p class="mb-36 w-112 leading-8">{{ getCrew.bio }}</p>
        <div class="w-34 flex justify-between mb-16">
          <router-link v-for="crew in crews" :key="'crew' + crew.id" :to="'/crew/' + crew.id">
            <div class="w-3 h-3 rounded-full bg-gray-500 hover:bg-white"></div>
          </router-link>
        </div>
      </div>
      <div class="w-max flex min-h-screen justify-start items-end">
        <img :src="require('@/assets/crew/' + getCrew.images.webp)" alt />
      </div>
    </div>
  </div>
</template>

<script>
import destinations from '../store'
export default {
  data () {
    return {
      crews: destinations.crew,
    }
  },
  computed: {
    getCrew: function () {
      return this.crews.find(e => e.id == this.$route.params.id)
    },
  }
}
</script>

<style>
</style>