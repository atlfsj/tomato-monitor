<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-07-14 15:19:37
-->
<template>
  <div ref="right2container">

  </div>
</template>
<script>
import {Column} from '@antv/g2plot';

export default {
  props:['allCountryTotalConfirm'],
  data() {
    return {}
  },
  watch:{
    allCountryTotalConfirm(){
      this.initCharts()
    }
  },
  methods: {
    initCharts() {
      const data = this.allCountryTotalConfirm
      const column = new Column(this.$refs.right2container, {
        data,
        height: 150,
        xField: 'name',
        yField: 'total',
        xAxis: {
          label: {
            autoRotate: false,
          },
        },
        slider: {
          start: 0.1,
          end: 0.2,
        },
      });

      column.render();
    }
  }
}
</script>
