//导入第三方包
import Vue from 'vue';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import Common from '../component/common';//自动引入index.js
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';
import axios from 'axios';


//启用VUE插件
Vue.use(MintUi);
Vue.use(Common);
Vue.prototype.axios = axios; // 把axios库放置到原型,其他组件直接可以拿到axios对象


//导入根组件
import AppComponent from '../component/App.vue'

//渲染组件，启动项目
new Vue({
    el:'#app',
    render(createNode){
        return createNode(AppComponent);
    }
})