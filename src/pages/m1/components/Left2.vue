<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2022-01-04 13:12:52
-->
<template>
  <!--1. 容器 -->
  <div ref="left2_container" style="height: 95%"></div>
</template>

<script>
import { Column } from '@antv/g2plot';
export default {
  props: ['todayAdd','extData'],
  data(){
    return {

    }
  },
  watch:{
    todayAdd(){
      this.initCharts()
    }
  },
  methods: {

    initCharts(){
      const data = [
        { type: '确诊', value: this.todayAdd.confirm },
        { type: '无症状', value: this.extData.incrNoSymptom },
        { type: '治愈', value: this.todayAdd.heal },
        { type: '现有确诊', value: this.todayAdd.storeConfirm },
        { type: '境外输入', value: this.todayAdd.input},
        { type: '死亡', value: this.todayAdd.dead },
      ];

      const paletteSemanticRed = '#F4664A';
      const brandColor = '#00ff00';
      const whiteColor = '#ffffff'
      const redColor = '#ff0000'
      const columnPlot = new Column(this.$refs.left2_container, {
        data,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: ({ type }) => {
          if (type === '确诊' ) {
            return redColor;
          }
          if (type === '无症状' || type === '境外输入')
            return paletteSemanticRed
          if (type === '治愈')
            return brandColor
          if (type === '死亡')
            return whiteColor;
        },
        label: {
          content: (originData) => {
            const val = parseFloat(originData.value);
            if (val < 0.05) {
              return (val * 100).toFixed(1) + '%';
            }
          },
          offset: 10,
        },
        legend: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
      });

      columnPlot.render();
    }
  }
}
</script>
