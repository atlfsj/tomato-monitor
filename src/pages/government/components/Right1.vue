<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-19 12:08:18
-->
<!--<template>
  <div ref="rightcontainer" style="height: 95%">

  </div>
</template>
<script>
import { Chart } from '@antv/g2';

export default {
  data() {
    return {}
  },
  mounted() {
    this.initCharts();
  },
  methods: {
    initCharts() {
      const data = [
        { month: '周日', city: '毛毛虫', temperature: 7 },
        { month: '周日', city: '臭虫', temperature: 6 },
        { month: '周一', city: '毛毛虫', temperature: 2 },
        { month: '周一', city: '臭虫', temperature: 15 },
        { month: '周二', city: '毛毛虫', temperature: 6.9 },
        { month: '周二', city: '臭虫', temperature: 31 },
        { month: '周三', city: '毛毛虫', temperature: 1 },
        { month: '周三', city: '臭虫', temperature: 7 },
        { month: '周四', city: '毛毛虫', temperature: 11 },
        { month: '周四', city: '臭虫', temperature: 9 },
        { month: '周五', city: '毛毛虫', temperature: 5 },
        { month: '周五', city: '臭虫', temperature: 21 },
        { month: '周六', city: '毛毛虫', temperature: 14.5 },
        { month: '周六', city: '臭虫', temperature: 12 },
      ];

      const chart = new Chart({
        container: this.$refs.rightcontainer,
        autoFit: true,
        height: 500,
      });
      

      chart.data(data);
      chart.scale({
        month: {
          range: [0, 1],
        },
        temperature: {
          nice: true,
        },
      });

      chart.tooltip({
        showCrosshairs: true,
        shared: true,
      });

      chart.axis('temperature', {
        label: {
          formatter: (val) => {
            return val + ' 次';
          },
        },
      });

      chart
          .line()
          .position('month*temperature')
          .color('city')
          .shape('smooth');

      chart
          .point()
          .position('month*temperature')
          .color('city')
          .shape('circle');

      chart.render();

    }
  }
}
</script>-->

<template>
  <div>
    <div ref="chartContainer" style="width: 100%;"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';

export default {
  data() {
    return {
      chart: null,
      data: this.generateRandomData(),
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
        height: 165,// 设置图表宽度
      });

      this.chart.data(this.data);
      this.chart
        .line()
        .position('label*value')
        .color('type')
        .shape('smooth');
      this.chart.scale({
        value: {
          min: 0, // 设置最小值
          max: 35, // 设置最大值
        },
      });
      this.chart.render();
    },
    generateRandomData() {
      const labels = ['周日', '周一', '周二', '周三', '周四', '周五', '周六',];
      const types = ['毛毛虫', '臭虫'];

      return labels.map(label => {
        return types.map(type => ({
          label,
          type,
          value: Math.floor(Math.random() * 30) + 1,
        }));
      }).flat();
    },
    startRandomJump() {
      setInterval(() => {
        this.data = this.generateRandomData();
        this.chart.changeData(this.data);
      }, 2000); // Adjust the interval as needed
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
