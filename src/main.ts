import { createApp } from 'vue';
import App from './App.vue';

import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/main.css';

createApp(App).use(AOS.init()!).mount('#app');
