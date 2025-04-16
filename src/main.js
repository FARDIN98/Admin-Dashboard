import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Material Design Icons
import 'vuetify/styles' // Vuetify base styles
import './style.css' // Custom application styles
import App from './App.vue' // Main application component
import store from './store' // Vuex store with modules

// Create Vuetify instance with performance optimizations
const vuetify = createVuetify({
  components, // Register all Vuetify components
  directives, // Register all Vuetify directives
  theme: {
    defaultTheme: 'light' // Set light theme as default
  },
  display: {
    mobileBreakpoint: 'sm' // Better responsive handling
  }
})

// Import Helvetica Neue font for consistency
const link = document.createElement('link')
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Helvetica+Neue:wght@300;400;500;600;700&display=swap'
document.head.appendChild(link)

// Create and mount app with performance optimizations
const app = createApp(App)

// Use store and vuetify plugins
app.use(store) // Register Vuex store
app.use(vuetify) // Register Vuetify UI framework

// Mount with async chunks to improve initial loading performance
app.mount('#app') // Mount to the div with id 'app' in index.html
