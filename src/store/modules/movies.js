// Movies store module - Manages movie data for upcoming and trending sections
export default {
  namespaced: true,
  // State contains mock data that would normally come from an API
  state: () => ({
    // Movie premieres data
    upcomingMovies: [
      { id: 1, name: 'Avengers Black Widow', category: ['ACTION', 'THRILLER'], watchlists: 389234, owner: 'Sony Entertainment', premierDate: '21th May, 2022', image: 'avengers-black-widow.png' },
      { id: 2, name: 'Moonlight', category: ['TRUE STORY'], watchlists: 5893, owner: 'A24 and Plan B Entertainment', premierDate: '15th August, 2022', image: 'Moonlight.png', more: '+2 more' },
      { id: 3, name: 'Grimsby', category: ['COMEDY', 'CRIME'], watchlists: 200901, owner: 'Sony Entertainment', premierDate: '5th October, 2022', image: 'Grimsby.png' },
      { id: 4, name: 'Spider Man - No way home', category: ['ACTION', 'THRILLER'], watchlists: 509262, owner: 'Sony Entertainment', premierDate: '25th December, 2022', image: 'spiderman.png' }
    ],
    // Trending movies data
    trendingMovies: [
      { id: 1, name: 'Moonlight', category: ['TRUE STORY'], watchlists: 5893, streams: '24,512,232', releaseDate: '4th July, 2012', image: 'Moonlight.png', more: '+2 more' },
      { id: 2, name: 'Grimsby', category: ['COMEDY', 'CRIME'], watchlists: 200901, streams: '4,164,476', releaseDate: '21th May, 2003', image: 'Grimsby.png' },
      { id: 3, name: 'Spider Man - Far from Home', category: ['ACTION', 'THRILLER'], watchlists: 389234, streams: '13,043,145', releaseDate: '14th June, 2012', image: 'spiderman.png' }
    ]
  }),
  // Getters provide access to state data with potential transformations
  getters: {
    getUpcomingMovies: state => state.upcomingMovies,
    getTrendingMovies: state => state.trendingMovies
  },
  // Mutations are the only way to change state in Vuex
  mutations: {
    SET_UPCOMING_MOVIES(state, movies) {
      state.upcomingMovies = movies
    },
    SET_TRENDING_MOVIES(state, movies) {
      state.trendingMovies = movies
    }
  },
  // Actions handle asynchronous operations before committing mutations
  actions: {
    // Simulate API calls - in a real app, these would fetch from an API
    fetchUpcomingMovies({ commit }) {
      // In a real app, this would be an API call
      commit('SET_UPCOMING_MOVIES', state.upcomingMovies)
    },
    fetchTrendingMovies({ commit }) {
      // In a real app, this would be an API call
      commit('SET_TRENDING_MOVIES', state.trendingMovies)
    }
  }
}