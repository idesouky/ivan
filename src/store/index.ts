import { createStore } from "vuex";

export default createStore({
  state: {
    currentLanguage: "en",
    destionation: {
      id: 0,
      value: "",
    },
    route: {
      name: "",
      path: [],
    },
  },
  mutations: {
    setLanguage(context, lang: string) {
      context.currentLanguage = lang;
    },
    setDestination(context, des: { id: number; value: string }) {
      context.destionation = des;
    },
    setRoute(context, route: any) {
      context.route = route;
    },
  },
  modules: {},
});
