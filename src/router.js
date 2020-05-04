import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/grid',
      name: 'Grid',
      meta: ['GRID'],
      component: require('./components/grid/index.vue').default
    },
    {
      path: '/todo',
      name: 'Todo',
      meta: ['todo'],
      component: require('./components/todo/todo.vue').default
    },
  ]
});

