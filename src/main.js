/*import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
*/
import TableFolder from './components/TableFolder.ce.vue';
import { defineCustomElement } from 'vue';
//import { defineCustomElement } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';
const element = defineCustomElement(TableFolder);
customElements.define("table-folder", element);

