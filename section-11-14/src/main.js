import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VeeValidatePlugin from "./includes/validation";
import { getAuth } from "./includes/firebase";

import "./assets/base.css";
import "./assets/main.css";

let app;

getAuth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    /*  
              Pinia is registering a plugin with the Vue Developer tools,
              Pinia package will add a new tool for interacting with the state.
          */
    app.use(createPinia());
    app.use(router);
    app.use(VeeValidatePlugin);

    app.mount("#app");
  }
});
