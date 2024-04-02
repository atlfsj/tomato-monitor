<template>
  <div>
    <div ref="chartContainer" style="width: 100%; height: 170px"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';

export default {
  data() {
    return {
      chart: null,
      data: [
        { type: '黄化曲叶病', value: 2 },
        { type: '灰叶斑病', value: 0 },
        { type: '灰霉病', value: 1 },
        { type: '棒袍褐斑病', value: 2 },
      ],
      step: 0,
    };
  },
  mounted() {
    this.initChart();
    this.startRandomJump();
  },
  methods: {
    initChart() {
      const chartContainer = this.$refs.chartContainer;

      this.chart = new Chart({
        container: chartContainer,
        autoFit: true,
        height: 400,
      });

      this.chart.data(this.data);

      this.chart.scale({
        value: {
          min: 0,
          max: 5,
        },
      });

      this.chart.interval().position('type*value').color('type');

      this.chart.render();
    },
    startRandomJump() {
      setInterval(() => {
        if (this.step === 0) {
          this.data[0].value += 1;
          this.data[1].value += 1;
        } else if (this.step === 1) {
          this.data[3].value += 1;
        }
        this.chart.changeData(this.data);
        this.step = (this.step + 1) % 2;
      }, 12000); // Change every 10 seconds
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
