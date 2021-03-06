import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/login/login';
import Header from '@/components/header/header';
import Signin from '@/components/login/children/signin';
import Signup from '@/components/login/children/signup';
import Container from '@/components/container/container';
import PropDemo from '@/components/vueDemo/propFather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      children: [
        {
          path: 'signin',
          name: 'Signin',
          component: Signin
        },
        {
          path: 'signup',
          name: 'Signup',
          component: Signup
        }
      ]
    },
    {
      path: '/',
      name: 'container',
      component: Container
    },
    {
      path: '/propDemo',
      name: 'propDemo',
      component: PropDemo
    }
  ]
})
