import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'
import News from '@/views/demo'
import TeacherDefault from '@/views/Teacher/TeacherDefault'
import NewsList from '@/views/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/teacher-default',
      name: 'TeacherDefault',
      component: TeacherDefault
    },
    {
      path: '/newslist',
      name: 'NewsList',
      component: NewsList
    }
  ]
})
