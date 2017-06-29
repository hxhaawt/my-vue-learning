
// 专门配置路由

// 引入 模块
import Home from './components/Home.vue'
import News from './components/news.vue'
import Login from './components/Login.vue'
import Reg from './components/Reg.vue'
import Detail from './components/Detial.vue'

export default {
    '/home': {
        component: Home,
        subRoutes: {
            'login': {
                component: Login
            },
            'reg': {
                component: Reg
            }

        }
    },
    '/news':{
        component: News,
        subRoutes: {
            'detail/:id':{
                component: Detail
            }
        }
    }

}










