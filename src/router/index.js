import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import Blog from 'components/Blog'
import NotFound from 'components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
