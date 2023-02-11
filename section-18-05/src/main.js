import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import VeeValidatePlugin from "./includes/validation";
import { getAuth } from "./includes/firebase";

import Icon from "./directives/icon";
import i18n from "./includes/i18n";
import { registerSW } from "virtual:pwa-register";
import GlobalComponents from "./includes/_globals";
import progressBar from "./includes/progress-bar";

import "./assets/base.css";
import "./assets/main.css";
import "nprogress/nprogress.css";

registerSW({ immediate: true });

progressBar(router);

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
    app.use(i18n);
    app.use(GlobalComponents);
    app.directive("icon", Icon);

    app.mount("#app");
  }
});
