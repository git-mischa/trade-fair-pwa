import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/router/HomeView'
import ExhibitionView from '@/router/ExhibitionView'
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
      path: '/exhibitionmap',
      name: 'exhibitionmap',
      component: ExhibitionView
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
      name: 'board',
      component: BoardView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})
