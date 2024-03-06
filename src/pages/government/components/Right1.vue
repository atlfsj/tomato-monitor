<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-19 12:08:18
-->
<template>
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
</script>
