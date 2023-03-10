import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import 'font-awesome/css/font-awesome.min.css'
//导入中文
import zhCn from 'element-plus/lib/locale/lang/zh-cn'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus,{
    locale: zhCn
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
