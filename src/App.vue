<script setup>
// Import Vue composition API functions
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
// Import UI components
import ChartCard from './components/ChartCard.vue'
import DonutChart from './components/DonutChart.vue'
import LineChart from './components/LineChart.vue'
import MovieTable from './components/MovieTable.vue'
// Import global styles
import './assets/styles/main.css'

// Use store with namespaced modules for better code organization
const store = useStore()

// Use actions to fetch data once at component mount - lifecycle hook
onMounted(() => {
  // These would be actual API calls in a real app
  store.dispatch('charts/fetchChartData')
})

// Get data from namespaced store using computed properties for reactivity
// This ensures components re-render when store data changes
const upcomingMovies = computed(() => store.getters['movies/getUpcomingMovies'])
const trendingMovies = computed(() => store.getters['movies/getTrendingMovies'])
const userLoginData = computed(() => store.getters['charts/getFormattedDonutData'])
const watchTimeData = computed(() => store.getters['charts/getWatchTimeData'])
</script>

<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar color="black" app flat class="navbar">
      <div class="content-container">
        <div class="d-flex align-center justify-space-between">
          <div class="d-flex align-center">
            <div class="logo-container">
              <span class="moviebox-text">moviebox</span>
              <span class="admin-text">Admin</span>
            </div>
            
            <!-- Navigation links -->
            <div class="nav-links">
              <v-btn text class="nav-link active" color="white">Overview</v-btn>
              <v-btn text class="nav-link disabled">Movies</v-btn>
              <v-btn text class="nav-link disabled">Upload</v-btn>
              <v-btn text class="nav-link disabled">Reporting</v-btn>
              <v-btn text class="nav-link disabled">Users</v-btn>
            </div>
          </div>

          <!-- Right side icons -->
          <div class="navbar-actions">
            <v-btn icon class="navbar-icon" color="white">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-btn icon class="navbar-icon" color="white">
              <v-icon>mdi-bell</v-icon>
            </v-btn>
            <v-avatar size="36" class="ml-3">
              <v-img src="/profile.png"></v-img>
            </v-avatar>
          </div>
        </div>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="main-content">
      <v-container fluid class="content-container py-6">
        <!-- Overview Header -->
        <div class="d-flex align-center justify-space-between mb-6">
          <h1 class="overview-title">Overview</h1>
          <div>
            <v-btn class="mr-2 action-btn-outlined" variant="outlined" rounded color="#000" density="comfortable">
              <v-icon size="small" class="mr-1">mdi-filter-variant</v-icon>
              Filter
            </v-btn>
            <v-btn variant="outlined" rounded color="#000" density="comfortable" class="action-btn-outlined">
              <v-icon size="small" class="mr-1">mdi-export</v-icon>
              Export
            </v-btn>
          </div>
        </div>

        <!-- Charts Section -->
        <v-row class="mt-10">
          <!-- User Login Chart -->
          <v-col cols="12" md="4">
            <ChartCard 
              title="Today's user logins"
              paddingClass="pa-4 pb-5"
              :showViewReportButton="true"
            >
              <DonutChart :chartData="userLoginData" />
            </ChartCard>
          </v-col>

          <!-- Watch Time Chart -->
          <v-col cols="12" md="8">
            <ChartCard 
              title="Average watch time"
              subtitle="This tracks the average watch by users every month"
              paddingClass="pa-4 pb-6"
            >
              <LineChart :chartData="watchTimeData" />
            </ChartCard>
          </v-col>
        </v-row>

        <!-- Movie Tables Section -->
        <div class="mt-10">
          <MovieTable 
            :movies="upcomingMovies" 
            title="Upcoming movie premieres"
            subtitle="Keep track of the upcoming movie premieres"
            dateLabel="Premier Date"
            :showOwner="true"
          />
        </div>

        <div class="mt-8 mb-8">
          <MovieTable 
            :movies="trendingMovies" 
            title="Trending movies"
            subtitle="Keep track of the trending movies on moviebox"
            dateLabel="Release Date"
            :showStreams="true"
          />
        </div>
      </v-container>
    </v-main>
    <!-- Footer -->
    <v-footer app color="black" class="px-6 py-4">
      <div class="d-flex align-center justify-center w-100">
        <span class="text-caption footer-copyright ml-4">© 2022</span>
        <span class="moviebox-text-small ml-1"> moviebox</span>
        <span class="admin-text-small">Admin</span>
        <span class="text-caption footer-copyright ml-1"> All Rights Reserved.</span>
      </div>
    </v-footer>    
  </v-app>
  
</template>


