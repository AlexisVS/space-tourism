<template>
  <div
    class="min-h-screen text-white w-full flex items-center justify-center bg-cover"
    :style="{ backgroundImage: 'url(' + require('@/assets/destination/background-destination-desktop.jpg') + ')' }"
  >
    <div class="w-lg flex justify-between">
      <div class="w-1/2 flex flex-col items-center">
        <h1 class="uppercase text-2xl mb-12">
          <span class="text-gray-600 mr-5">01</span>Pick your destination
        </h1>
        <img class="w-xsl loop" :src="require('@/assets/destination/' + getDestination.images.webp)" alt />
      </div>
      <div class="w-xsl flex flex-col space-y-6 mt-20">
        <!-- Navigation -->
        <nav class="flex space-x-6 items-center text-white">
          <router-link v-for="destination in destinations" :key="'destination' + destination.id" :to="'/destination/' + destination.id">
            <p
              class="tracking-widest pb-2 border-b-3 hover:border-white border-transparent uppercase"
            >{{destination.name}}</p>
          </router-link>
        </nav>
        <h1 class="text-9xl uppercase">{{ getDestination.name }}</h1>
        <p class="leading-6 text-justify">{{ getDestination.description }}</p>
        <hr class="w-full opacity-20" />
        <div class="w-full flex items-center">
          <div class="flex flex-col w-1/2">
            <p class="uppercase">AVG. Distance</p>
            <p class="text-2xl font-thin uppercase">{{ getDestination.distance }}</p>
          </div>
          <div class="flex flex-col w-1/2">
            <p class="uppercase">EST. Travel time</p>
            <p class="text-2xl font-thin uppercase">{{ getDestination.travel }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"
export default {
  data () {
    return {
      destinations: store.destinations,
      destinationId: this.$route.params.id
    }
  },
  computed: {
    getDestination() {
      return store.destinations.find(e => e.id == this.destinationId)
    }
  }
}
</script>

<style scoped>
.loop {
  animation: infinite 60s rotate_infinite linear;
}

@keyframes rotate_infinite {
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
}
</style>