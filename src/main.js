import Vue from 'vue'
import App from './App.vue'

import { msg1, msg2 } from './variables';
import showAlert from './showAlert';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

showAlert(msg1);
showAlert(msg2);
