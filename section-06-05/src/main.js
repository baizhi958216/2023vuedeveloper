import { createApp } from 'vue'
import App from './App.vue'
// import Greeting from '@/components/Greeting.vue'

let vm = createApp(App)

/* 
Register a component globally.
Global components tend to make optimisation 
harder for module bundlers like Webpack. 
*/
// vm.component('Greeting',Greeting)

vm.mount('#app')
