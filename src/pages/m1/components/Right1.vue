<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-07-14 15:19:22
-->
<template>
  <div ref="rightcontainer">

  </div>
</template>
<script>
import {Area} from '@antv/g2plot';
import {Line} from '@antv/g2plot';

export default {
  props: ['allCountryConfirm'],
  data() {
    return {}
  },
  watch: {
    allCountryConfirm() {
      this.initCharts()
    }
  },
  methods: {
    initCharts() {
      const data = this.allCountryConfirm


      const line = new Line(this.$refs.rightcontainer, {
        data,
        padding: 'auto',
        height: 150,
        xField: 'name',
        yField: 'today',
        annotations: [
          // 低于中位数颜色变化
          {
            type: 'regionFilter',
            start: ['min', 'median'],
            end: ['max', '0'],
            color: '#F4664A',
          },
          {
            type: 'text',
            position: ['min', 'median'],
            content: '中位数',
            offsetY: -4,
            style: {
              textBaseline: 'bottom',
            },
          },
          {
            type: 'line',
            start: ['min', 'median'],
            end: ['max', 'median'],
            style: {
              stroke: '#F4664A',
              lineDash: [2, 2],
            },
          },
        ],
      });

      line.render();


    }
  }
}
</script>
