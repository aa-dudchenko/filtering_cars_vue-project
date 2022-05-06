import axios, { Axios } from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchQuery: '',
    cars: [],
    page: 1,
    perPage: 4,
  },

  getters: {
    FILTERED_CARS(state) {
      return state.cars.filter(car => {
        const result1 = car.name.toLowerCase().indexOf(state.searchQuery.toLowerCase()) !== -1
        const result2 = car.year.toString().indexOf(state.searchQuery) !== -1
        const result3 = car.color[0].toLowerCase().indexOf(state.searchQuery.toLowerCase()) !== -1
        return result1 || result2 || result3 ? car : null
        // Менее читабельно:
        // return car.name.toLowerCase().indexOf(state.searchQuery.toLowerCase()) !== -1 || car.year.toString().indexOf(state.searchQuery) !== -1 || car.color[0].toLowerCase().indexOf(state.searchQuery) !== -1         
      })
    },
  },
  mutations: {
    SET_SEARCH_QUERY(state, payload) {
      state.searchQuery = payload
    },
    SET_CARS_TO_STATE: (state, cars) => {
      state.cars = cars
    }
  },
  actions: {
    GET_CARS_FROM_API({ state, commit }) {
      return axios('https://626ffe2722c706a0ae7066cb.mockapi.io/Cars', {
        method: "GET"
      })
        .then((cars) => {
          commit('SET_CARS_TO_STATE', cars.data)
          return cars;
        })
        .catch((error) => {
          console.log(error)
          return error
        })
    }
  }
})


