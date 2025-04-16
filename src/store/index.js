import { createStore } from 'vuex'
import moviesModule from './modules/movies'
import chartsModule from './modules/charts'

// Create Vuex store with modules for better organization
// This modular approach helps separate concerns and makes the codebase more maintainable
const store = createStore({
  modules: {
    // Each module has its own state, getters, mutations, and actions
    movies: moviesModule, // Handles movie-related data (upcoming and trending movies)
    charts: chartsModule  // Handles chart-related data (user logins and watch time)
  }
})

export default store