<template>
  <div class="chart">
    <vue-chart  class='animated fadeInUpBig' v-if="chartData" maintainAspectRatio: false type="bar" :data="chartData"></vue-chart>

  </div>
</template>

<script>
import VueChart from 'vue-chart-js'

export default {
  name: 'chart1',
  props: ['shoe'],
  components: {
    VueChart
  },
  mounted(){
    const retailPrice = Number(this.shoe.retail.replace('$', ''))
    const resellPrice = Number(this.shoe.resell.replace('$', ''))
    this.chartData = {
      options:{
        maintainAspectRatio: false,
      },
      labels: ['Retail', 'Resell'],
      datasets: [
        {
          label: 'Retail',
          data: [retailPrice],
          borderWidth: 2
            },
            {
              label: 'Resell',
              data: [0, resellPrice],
              borderWidth: 2
        }],
      }
    },
  data: () => ({
    chartData:null,
    retail: []
  })
}
</script>
<style media="screen" scoped="">
canvas{
  .max_width{
width: 100%;
}
  /* width: 100% !important;
       max-width: 800px;
       height: auto !important; */
}
.chart{
  /* .max_width{
width: 100%;
} */
}
</style>
