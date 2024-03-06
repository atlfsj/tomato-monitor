<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-07-14 15:08:24
 * @LastEditors: charles
 * @LastEditTime: 2022-01-04 07:25:53
-->
<template>
  <div ref="bottom1container"> </div>
</template>
<script>
import {Line} from '@antv/g2plot';

export default {
  props:['recentAddData'],
  data() {
    return {}
  },
  watch:{
    recentAddData(){
      // console.log(this.recentAddData)
      this.initCharts()
    }
  },
  methods: {
    initCharts() {
      const data = this.recentAddData
      const linePlot = new Line(this.$refs.bottom1container, {
        data,
        xField: 'date',
        yField: 'value',
        seriesField: 'name',
        height: 200,
        yAxis: {
          // label: {
          //   formatter: (v) => `${(v / 10e8).toFixed(1)} B`,
          // },
        },
        legend: {
          position: 'top',
        },
        smooth: true,
        // @TODO 后续会换一种动画方式
        animation: {
          appear: {
            animation: 'path-in',
            duration: 5000,
          },
        },
      });

      linePlot.render();

    }
  }
}
</script>
