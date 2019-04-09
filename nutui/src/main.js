import Vue from 'vue'
import App from './App.vue'
import { Dialog, Picker} from '@nutui/nutui';
Dialog.install(Vue);
Picker.install(Vue);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
