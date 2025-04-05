const API = import.meta.env.VITE_API_URL;
export default {
  //namespaced: true,
  state: {
    plants: [],
    loading: false,
    message: "",
    plant: [],
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setPlants(state, plants) {
      state.plants = plants;
    },
    setMessage(state, message) {
      state.message = message;
    },
    setPlant(state, plant) {
      state.plant = plant;
    },
  },
  actions: {
    async fetchPlants({ commit }) {
      commit("setLoading", true);
      try {
        const response = await fetch(`${API}/plants`);
        const { data, message } = await response.json();
        if (message == "Ok") {
          commit("setPlants", data);
          commit("setMessage", message);
        }
      } catch (error) {
        commit("setMessage", error);
      } finally {
        commit("setLoading", false);
      }
    },
    async fetchPlantById({ commit }, id) {
      commit("setLoading", true);
      try {
        const response = await fetch(`${API}/getplant/${id}`);
        const { data, message } = await response.json();
        console.log(data, message);
        if (message == "Ok") {
          commit("setPlant", data);
          commit("setMessage", message);
        }
      } catch (error) {
        commit("setMessage", error);
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    getPlants: (state) => state.plants || "Данные не найден.",
    getPlant: (state) => state.plant || "Данные не найден.",

    getLoading: (state) => state.loading,

    getPlantsByText: (state) => (text) => {
      console.log("<<", text);

      if (!text) return "";

      return (
        state.plants.filter(
          (plant) =>
            plant.name.toLowerCase().includes(text.toLowerCase()) ||
            plant.latin_name.toLowerCase().includes(text.toLowerCase())
        ) || { name: "Данные не найден." }
      );
    },
  },
};
