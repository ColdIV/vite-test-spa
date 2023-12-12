import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Count from './components/Count.vue'
import GitApi from './components/GitApi.vue'

// const Home = { template: '<div>@@@Home</div>' }
const Test = { template: '<h1>Test</h1><p>Lorem ipsum dolor sit amet</p>' }

const routes = [
    { path: '/', name: 'root', component: Home },
    { path: '/:msg', name: 'home', component: Home },
    { path: '/test', name: 'test', component: Test },
    { path: '/count', name: 'count-empty', component: Count },
    { path: '/count/:count', name: 'count', component: Count },
    { path: '/GitApi', name: 'gitapi', component: GitApi },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
