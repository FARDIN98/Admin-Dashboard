# 🎬 Moviebox Admin Dashboard

[![Vue.js](https://img.shields.io/badge/Vue.js-3.5.13-42b883?style=flat-square&logo=vue.js)](https://vuejs.org/) [![Vuetify](https://img.shields.io/badge/Vuetify-3.8.1-1867c0?style=flat-square&logo=vuetify)](https://vuetifyjs.com/) [![Vuex](https://img.shields.io/badge/Vuex-4.1.0-42b883?style=flat-square&logo=vue.js)](https://vuex.vuejs.org/) [![Chart.js](https://img.shields.io/badge/Chart.js-4.4.8-ff6384?style=flat-square&logo=chart.js)](https://www.chartjs.org/) [![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)

A modern, responsive admin dashboard for movie management built with Vue.js and Vuetify. This dashboard provides comprehensive analytics, movie tracking, and management capabilities.

## 🛠️ Installation

### Setup Instructions

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/moviebox-admin-dashboard.git
   cd moviebox-admin-dashboard
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Build for production
   ```bash
   npm run build
   ```

5. Preview production build
   ```bash
   npm run preview
   ```

## 🖥️ Project Structure

```
├── Assets/            # Static assets like images and avatars
├── public/            # Public static assets
├── src/
│   ├── assets/        # Project assets (styles, images)
│   ├── components/    # Vue components
│   │   ├── ChartCard.vue
│   │   ├── DonutChart.vue
│   │   ├── LineChart.vue
│   │   └── MovieTable.vue
│   ├── store/         # Vuex store modules
│   │   ├── index.js
│   │   └── modules/   # Namespaced store modules
│   ├── App.vue        # Main application component
│   ├── main.js        # Application entry point
│   └── style.css      # Global styles
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
└── vite.config.js     # Vite configuration
```
