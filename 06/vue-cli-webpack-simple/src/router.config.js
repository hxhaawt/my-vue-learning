/**
 * Created by hxh on 2017/7/1.
 */

import Home from './components/Home.vue'
import News from './components/News.vue'

export default {
    routes: [
        // /home 中的 / 要写，不然不会显示组件
        {path: '/home', component: Home},
        {path: '/news', component: News},
        {path: '*', redirect:'/home'}
    ]
}








