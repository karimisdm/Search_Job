// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import '@/assets/main.css'
import '@/index.css'
import '@/output.css'
import App from '@/App.vue'
import router from '@/router'

library.add(faSearch);
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia())
app.use(router)

app.mount('#app')
