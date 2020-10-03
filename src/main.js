import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import './assets/app.css'
import './plugins/axios'
import './plugins/message'

Vue.config.productionTip = false
Vue.use(VueI18n)

Vue.config.lang = 'en'

const i18n = new VueI18n({ 
   locale: store.state.locale, // 默认语言为英文
   messages: {   
      'zh': require('@/assets/languages/zh.json'),   
      'en': require('@/assets/languages/en.json') 
    }
  });


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
