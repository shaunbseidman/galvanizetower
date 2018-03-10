import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import nike from '@/components/nike';
import submitNike from '@/components/submitNike'
import adidas from '@/components/adidas'
import submitAdidas from '@/components/submitAdidas'
// import footer from '@/components/footer'

// Vue.component('footer', footer)
Vue.component('adidas', adidas)
Vue.component('submitAdidas', submitAdidas)
Vue.component('nike', nike)
Vue.component('submitNike', submitNike)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
