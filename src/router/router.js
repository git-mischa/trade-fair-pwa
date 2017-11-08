import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/router/HomeView'
import DetailView from '@/router/DetailView'
import OverView from '@/router/OverviewView'
import BoardView from '@/router/BoardView'
import AboutView from '@/router/AboutView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/overview',
      name: 'overview',
      component: OverView
    },
    {
      path: '/board',
      name: 'borad',
      component: BoardView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})
