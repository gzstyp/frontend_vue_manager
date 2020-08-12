import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element.js';

import MenuUtils from '@/utils/MenuUtils'; //处理动态路由,把字符串注册成component组件

Vue.config.productionTip = false;

let data = JSON.parse(sessionStorage.getItem('user'));//用户信息(含菜单数据)
if (data){
    //这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
    let routes = [];
    MenuUtils(routes,data);//把字符串注册成component组件
    router.addRoutes(routes);//添加到路由
}
router.beforeEach((route, redirect, next) => {
    let data = JSON.parse(sessionStorage.getItem('user'));
    if(data && route.path === '/login'){
        //这里不使用router进行跳转，是因为，跳转到登录页面的时候，是需要重新登录，获取数据的，这个时候，会再次向router实例里面add路由规则，
        //而next()跳转过去之后，没有刷新页面，之前的规则还是存在的，但是使用location的话，可以刷新页面，当刷新页面的时候，整个app会重新加载
        //而我们在刷新之前已经把sessionStorage里的user移除了，所以上面的添加路由也不行执行
        sessionStorage.removeItem('user');
        window.location.href = '/';
        return false;
    }
    if (!data && route.path !== '/') {
        next({ path: '/' });
    } else {
        if (route.path) {
            next()
        } else {
            next({ path: '/notFound' });
        }
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
