<script setup>
import { Line } from 'vue-chartjs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

// Chart options with performance in mind - avoid recalculations
const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 12,
      titleFont: {
        family: 'Helvetica Neue',
        size: 14,
        weight: 600
      },
      bodyFont: {
        family: 'Helvetica Neue',
        size: 12
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      border: {
        display: false
      },
      max: 1000,
      grid: {
        color: 'rgba(0, 0, 0, 0.05)',
        drawBorder: false
      },
      ticks: {
        font: {
          family: 'Helvetica Neue',
          size: 12
        },
        color: 'rgba(0, 0, 0, 0.6)',
        padding: 10,
        stepSize: 125,
        callback: function(value) {
          if (value === 0) return '0';
          if (value === 250) return '250k';
          if (value === 500) return '500K';
          if (value === 750) return '750k';
          if (value === 1000) return '1M';
          return '';
        }
      }
    },
    x: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
      ticks: {
        font: {
          family: 'Helvetica Neue',
          size: 10,
          weight: 400
        },
        color: 'rgba(0, 0, 0, 0.6)',
        padding: 8,
        maxRotation: 0,
        minRotation: 0,
        autoSkip: true,
        maxTicksLimit: 12,
        align: 'start',
        callback: function(value, index, ticks) {
          // Render months as straight text, no formatting
          return this.getLabelForValue ? this.getLabelForValue(value) : value;
        }
      }
    }
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2
    },
    point: {
      radius: 0,
      hitRadius: 5,
      hoverRadius: 5
    }
  }
}
</script>

<template>
  <div class="watch-time-chart ">
    <div class="chart-legend d-flex mb-3">
      <div class="legend-item d-flex align-center mr-4">
        <span class="legend-color blue-legend mr-2"></span>
        <span class="legend-text">0 - 1000</span>
      </div>
      <div class="legend-item d-flex align-center">
        <span class="legend-color pink-legend mr-2"></span>
        <span class="legend-text">1000 - 10,000</span>
      </div>
    </div>
    <Line :data="chartData" :options="lineOptions" />
  </div>
</template>

<style scoped>
.watch-time-chart {
  height: 250px;
  position: relative;
  margin-top: 25px;
}

.chart-legend {
  position: absolute;
  top: -25px;
  right: 0;
  z-index: 1;
}

.legend-item {
  font-size: 12px;
  color: #575757;
}

.legend-color {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  display: inline-block;
}

.blue-legend {
  background-color: #D1D8F7;
}

.pink-legend {
  background-color: #A6B3F0;
}

.legend-text {
  font-family: 'Helvetica Neue';
  font-weight: 400;
  font-size: 12px;
  color: #575757;
}
</style>