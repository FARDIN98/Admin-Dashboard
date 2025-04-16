<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  movies: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  showStreams: {
    type: Boolean,
    default: false
  },
  showOwner: {
    type: Boolean,
    default: false
  },
  dateLabel: {
    type: String,
    default: 'Date'
  }
})
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="title-container">
        <h3 class="chart-title">{{ title }}</h3>
        <p v-if="subtitle" class="chart-subtitle">{{ subtitle }}</p>
      </div>
      <v-text-field
        density="compact"
        variant="outlined"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        hide-details
        class="search-field"
        
      ></v-text-field>
    </div>

    <v-card class="table-card mt-10" elevation="0">
      <v-table>
        <thead>
          <tr>
            <th class="text-left">
              Name <v-icon size="small">mdi-arrow-down</v-icon>
            </th>
            <th class="text-left">Category</th>
            <th class="text-left watchlists-col">Watchlists</th>
            <th v-if="showStreams" class="text-left streams-col">Streams</th>
            <th v-if="showOwner" class="text-left owner-col">Owner</th>
            <th class="text-left premiere-date-col">{{ dateLabel }}</th>
            <th class="text-left view-btn-col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie.id">
            <td>
              <div class="d-flex align-center">
                <v-avatar size="32" class="mr-2">
                  <v-img :src="movie.image"></v-img>
                </v-avatar>
                <span class="movie-name">{{ movie.name }}</span>
              </div>
            </td>
            <td>
              <div class="category-container">
                <div class="d-flex">
                  <v-chip
                    v-for="(cat, index) in movie.category"
                    :key="index"
                    size="small"
                    class="mr-1 category-chip"
                  >
                    {{ cat }}
                  </v-chip>
                  <span v-if="movie.more" class="more-info-text ml-1">{{ movie.more }}</span>
                </div>
              </div>
            </td>
            <td class="watchlists-col">{{ movie.watchlists.toLocaleString() }}</td>
            <td v-if="showStreams" class="streams-col">{{ movie.streams }}</td>
            <td v-if="showOwner" class="owner-col">{{ movie.owner }}</td>
            <td class="premiere-date-col">{{ showOwner ? movie.premierDate : movie.releaseDate }}</td>
            <td class="view-btn-col">
              <button class="view-btn">View</button>
            </td>
          </tr>
        </tbody>
      </v-table>
      <div class="pa-3 text-right">
        <v-btn variant="text" color="#000" class="view-all-btn">View all upcoming premiers</v-btn>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.category-chip {
  border-radius: 20px;
  background-color: var(--category-bg);
  color: rgba(71, 85, 168, 1);
  font-size: 12px;
  font-weight: bold;
  height: 24px;
  padding: 14px;
  letter-spacing: 0 ;
}

.movie-name {
  font-family: Helvetica Neue;
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0%;
}

.category-container {
  display: flex;
  flex-direction: column;
}

.title-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.watchlists-col {
  text-align: left !important;
  vertical-align: middle !important;
  padding-left: 0 !important;
}
.owner-col {
  text-align: left !important;
  vertical-align: middle !important;
  padding-left: 35px !important;
}
.premiere-date-col {
  text-align: left !important;
  vertical-align: middle !important;
  padding-left: 0 !important;
}
.streams-col {
  text-align: left !important;
  vertical-align: middle !important;
  padding-left: 0 !important;
}

/* Add styling for table headers */
th {
  font-weight: bold !important;
  font-family: Helvetica Neue;
}

.chart-title {
  font-weight: bold;
  font-family: Helvetica Neue;
}

.chart-subtitle {
  font-family: Helvetica Neue;
}

.more-info-text {
  font-family: 'Helvetica Neue';
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #4755A8;
  margin-top: 7px;
}
.view-btn-col {
  text-align: left !important;
  vertical-align: middle !important;
  padding-left: 0 !important;
}
.view-btn {
  width: 63px;
  height: 33px;
  padding: 8px 16px;
  gap: 10px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: #D1D5DB;
  background: #fff;
  font-family: 'Helvetica Neue';
  font-weight: semibold;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;
  cursor: pointer;
  transition: background 0.2s;
}
.view-btn:hover {
  background: #f5f6fa;
}

/* Add padding to table cells */
td {
  padding-top: 20px !important;
  padding-bottom: 20px !important;
}
</style>