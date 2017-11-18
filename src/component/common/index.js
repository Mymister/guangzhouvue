//编写属于自己的公共VUE组件库
import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';


//Vue插件要求提供install方法，这个方法会被注入Vue
//需要我们调用Vue的filter component directive
export default{
    install(Vue){
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer',FooterComponent);
    }
}