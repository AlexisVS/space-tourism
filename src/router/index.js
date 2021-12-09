import Vue from 'vue'
import VueRouter from 'vue-router'
// import destinations from '../store'
// import destinationComponent from '../views/Destination.vue'

// const nestedRoutesDestination = destinations.destinations.map(e => {
//   let name
//   name = e.name.toLowerCase()
//   return {
//     path: name,
//     component: destinationComponent,
//     props : {destination:{ ...e }},
//   }
// })

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/destination/:id',
    name: 'Destination',
    // children: nestedRoutesDestination,
    props: true,
    component: () => import(/* webpackChunkName: "destination" */ '../views/Destination.vue')

  },
  {
    path: '/crew/:id',
    name: 'Crew',
    component: () => import(/* webpackChunkName: "crew" */ '../views/Crew.vue')
  },
  {
    path: '/technology/:id',
    name: 'Technology',
    component: () => import(/* webpackChunkName: "technology" */ '../views/Technology.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
