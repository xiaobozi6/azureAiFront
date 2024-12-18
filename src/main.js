// frontend/src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify' // 正确导入 Vuetify 插件
import '@mdi/font/css/materialdesignicons.css' // 引入 Material Design Icons
import 'vuetify/styles' // 引入 Vuetify 样式

const app = createApp(App)

app.use(vuetify) // 使用 Vuetify 插件

app.mount('#app')
