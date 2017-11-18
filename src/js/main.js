//导入第三方包
import Vue from 'Vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from '../component/App.vue';
import Home from '../component/home/home.vue';
import News from '../component/news/news.vue';
import Photo from '../component/photo/photo.vue';

new Vue({
    el: '#app',
    render(c) {
        return c(App); 
    },

    router:new VueRouter({
        routes:[
            {path:'/',component:Home},
            {path:'/news',component:News},
            {path:'/photo',component:Photo}
        ]
    })
});
