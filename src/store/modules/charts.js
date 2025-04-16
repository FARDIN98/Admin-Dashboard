// Charts store module - Manages data for dashboard visualization charts
export default {
  namespaced: true,
  // State contains mock chart data that would normally come from an API
  state: () => ({
    // Chart data for user login statistics donut chart
    userLoginData: [
      { range: '0 - 1000', value: 20, color: '#D1D8F7' },
      { range: '1000 - 10,000', value: 30, color: '#A6B3F0' },
      { range: '10,000 - 100,000', value: 25, color: '#4755A8' },
      { range: '100,000 - 1,000,000', value: 20, color: 'gradient' }
    ],
    // Watch time data for the line chart showing monthly trends
    watchTimeData: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'],
      datasets: [
        {
          label: '0 - 1000',
          data: [270, 280, 275, 265, 280, 290, 310, 380, 365, 350, 390],
          borderColor: '#D1D8F7',
          backgroundColor: 'rgba(53, 195, 243, 0.2)',
          tension: 0.4,
          fill: true
        },
        
      ]
    }
  }),
  // Getters provide access to state data with potential transformations
  getters: {
    getUserLoginData: state => state.userLoginData,
    getWatchTimeData: state => state.watchTimeData,
    // Computed data for donut chart to avoid recalculation in components
    getFormattedDonutData: state => ({
      labels: state.userLoginData.map(item => item.range),
      datasets: [
        {
          backgroundColor: state.userLoginData.map(item => item.color),
          data: state.userLoginData.map(item => item.value),
          borderWidth: 0,
          hoverOffset: 5
        }
      ]
    })
  },
  // Mutations are the only way to change state in Vuex
  mutations: {
    SET_USER_LOGIN_DATA(state, data) {
      state.userLoginData = data
    },
    SET_WATCH_TIME_DATA(state, data) {
      state.watchTimeData = data
    }
  },
  // Actions handle asynchronous operations before committing mutations
  actions: {
    // Simulate API calls that would fetch chart data from a backend
    fetchChartData({ commit, state }) {
      // In a real app, these would be API calls
      // Using setTimeout to simulate async API calls
      setTimeout(() => {
        commit('SET_USER_LOGIN_DATA', state.userLoginData)
        commit('SET_WATCH_TIME_DATA', state.watchTimeData)
      }, 100)
    }
  }
}