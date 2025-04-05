import { createStore } from "vuex";
import plants from "./plants";

const store = createStore({
  modules: {
    plants,
  },
});

export default store;
