<script setup>
import { computed, onMounted, ref } from 'vue'
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  chartData: {
    type: Object,
    required: true
  }
})

const chartRef = ref(null)

const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  cutout: '55%',
  plugins: {
    legend: {
      position: 'right',
      align: 'center',
      labels: {
        usePointStyle: true,
        pointStyle: 'circle',
        padding: 15,
        boxWidth: 8,
        boxHeight: 8,
        font: {
          family: 'Helvetica Neue',
          size: 12,
          weight: 400
        },
        color: '#575757'
      }
    },
    tooltip: {
      
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
    },
    gradientArc: {
      enabled: true
    }
  },
  pluginsArr: []
}

// Custom plugin for gradient arc
const gradientArcPlugin = {
  id: 'gradientArc',
  afterDatasetDraw(chart, args, pluginOptions) {
    if (!pluginOptions.enabled) return;
    const { ctx, chartArea } = chart;
    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);
    if (!meta || !meta.data) return;
    // Find the arc index for '100,000 - 1,000,000'
    const arcIndex = chart.data.labels.findIndex(l => l === '100,000 - 1,000,000');
    if (arcIndex === -1) return;
    const arc = meta.data[arcIndex];
    if (!arc) return;
    // Create gradient
    const gradient = ctx.createLinearGradient(chartArea.left, chartArea.top, chartArea.right, chartArea.bottom);
    gradient.addColorStop(0, '#35C3F3');
    gradient.addColorStop(0.2, '#8B9FE8');
    gradient.addColorStop(0.4, '#E681D8');
    gradient.addColorStop(0.6, '#FFA9A4');
    gradient.addColorStop(0.8, '#FED2CE');
    gradient.addColorStop(1, '#FED2CE');
    // Save original fillStyle
    ctx.save();
    // Draw the arc with gradient
    arc.options.backgroundColor = gradient;
    arc.options.borderColor = gradient;
    arc.draw(ctx);
    ctx.restore();
  }
}

onMounted(() => {
  if (chartRef.value && chartRef.value.chartInstance) {
    chartRef.value.chartInstance.options.plugins.gradientArc = { enabled: true };
    chartRef.value.chartInstance.update();
  }
})

ChartJS.register(gradientArcPlugin)
</script>

<template>
  <div class="user-login-chart">
    <Doughnut ref="chartRef" :data="chartData" :options="donutOptions" />
  </div>
</template>

<style scoped>
.user-login-chart {
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>