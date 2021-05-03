import { createStore } from "vuex";

export default createStore({
  state: {
    currentLanguage: "en",
  },
  mutations: {
    setLanguage(context, lang: string) {
      context.currentLanguage = lang;
    },
  },
  actions: {
    commitLanguage(context, lang: string) {
      context.commit("setLanguage", lang);
    },
  },
  modules: {},
});
