<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-07-14 15:18:36
-->
<template>
  <div ref="bottom2container">

  </div>
</template>
<script>
import {Line} from '@antv/g2plot';

export default {
  props: ['recentTotalData'],
  data() {
    return {}
  },
  watch: {
    recentTotalData(){
      this.initCharts()
    }
  },
  methods: {
    initCharts() {
      const data = this.recentTotalData
      const linePlot = new Line(this.$refs.bottom2container, {
        data,
        height: 200,
        xField: 'date',
        yField: 'value',
        seriesField: 'name',
        yAxis: {
          // label: {
          //   formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
          // },
        },
        legend: {
          position: 'top',
        },
        smooth: true,
        // 配置折线趋势填充
        area: {
          style: {
            fillOpacity: 0.15,
          },
        },
        animation: {
          appear: {
            animation: 'wave-in',
            duration: 3000,
          },
        },
      });

      linePlot.render();

    }
  }
}
</script>
