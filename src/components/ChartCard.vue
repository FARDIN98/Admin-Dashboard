<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  showViewReportButton: {
    type: Boolean,
    default: false
  },
  paddingClass: {
    type: String,
    default: 'pa-2'
  }
})
</script>

<template>
  <v-card :class="[paddingClass, 'chart-card']" elevation="0">
    <div class="d-flex justify-space-between mb-2">
      <div>
        
        <h3 class="chart-title">{{ title }}</h3>
        <p v-if="subtitle" class="chart-subtitle">{{ subtitle }}</p>
      </div>
      <v-icon>mdi-dots-vertical</v-icon>
    </div>
    
    <slot></slot>
    <template v-if="showViewReportButton">
      <v-btn class="view-report-btn" variant="flat" rounded>
        View full report
      </v-btn>
    </template>
    
  </v-card>
  
</template>

<style scoped>

.chart-title {
  font-weight: bold;
  font-family: 'Helvetica Neue';
  padding-left: 0;
  margin-left: 0;
}

.chart-subtitle {
  font-family: 'Helvetica Neue';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: var(--text-secondary);
  margin-top: 4px;
}

.view-report-btn {
  position: absolute;
  right: 24px;
  bottom: 24px;
  min-width: 140px;
  font-size: 14px;
  font-weight: 500;
  background-color: #fff;
  color: #000;
  border-radius: 8px;
  z-index: 2;
  border: 2px solid var(--border-color);
}

.chart-card {
  position: relative;
}
</style>