import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import i18next from 'i18next';
import VueI18Next from "@panter/vue-i18next";
import translations from "./translations/main";

Vue.config.productionTip = false;
Vue.use(VueI18Next);

i18next.init({
  lng: "de",
  resources: {
    en: { translation: translations.en },
    pl: { translation: translations.pl },
    de: { translation: translations.de }
  }
});

const i18n = new VueI18Next(i18next);

new Vue({
  router,
  store,
  i18n: i18n,
  render: h => h(App)
}).$mount("#app");
