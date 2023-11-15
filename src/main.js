import { createApp } from 'vue/dist/vue.esm-bundler';
import './style.css'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Test from './components/Test.vue'

const Home = { template: '<div>@@@Home</div>' }
// const Test = { template: '<div>Test</div>' }

const routes = [
    { path: '/', component: Home },
    { path: '/test', component: Test },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
