import { createApp } from 'vue'
import App from './App.vue'
import SensenUi from '../modules/sensen-ui'
window.__VUE_PROD_DEVTOOLS__ = false;
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
createApp(App).use(SensenUi).mount('#app')
