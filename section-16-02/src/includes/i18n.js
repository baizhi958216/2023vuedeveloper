import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";

export default createI18n({
  locale: "zh",
  fallbackLocale: "en",
  messages: {
    en,
  },
});
