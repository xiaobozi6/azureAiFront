// frontend/src/plugins/vuetify.js

import 'vuetify/styles' // 引入 Vuetify 样式
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#1E88E5', // 使用 Azure 风格的蓝色
          secondary: '#424242',
          accent: '#82B1FF',
          success: '#4CAF50',
          error: '#F44336',
          info: '#2196F3',
          warning: '#FFEB3B',
        },
      },
    },
  },
})

export default vuetify
