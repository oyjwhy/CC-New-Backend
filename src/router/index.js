import Vue from 'vue'
import Router from 'vue-router'
import News from '@/views/demo'
import TeacherDefault from '@/views/teacher/TeacherDefault'
import NewsList from '@/views/news/NewsList'

Vue.use(Router)

export default new Router({
  routes: [
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
