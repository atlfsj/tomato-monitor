<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-08 16:31:56
-->
<template>
  <div ref= "bottom2_container" style="height:95%">

  </div>
</template>
<script>
import { Column, G2 } from '@antv/g2plot';

export default {
  data(){
     return{
       dataArr:[{"type":"未患病","value":0.25,"date":"05-1"},{"type":"患病","value":0.005,"date":"05-1"},{"type":"未患病","value":0.25,"date":"05-2"},{"type":"患病","value":0.015,"date":"05-2"},
         {"type":"未患病","value":0.25,"date":"05-3"},{"type":"患病","value":0.025,"date":"05-3"},{"type":"未患病","value":0.25,"date":"05-4"},{"type":"患病","value":0.015,"date":"05-4"}]
     }
  },
  mounted(){
    this.initChart();
  },
  methods:{
    initChart(){
       G2.registerInteraction('element-link', {
         start: [{ trigger: 'interval:mouseenter', action: 'element-link-by-color:link' }],
         end: [{ trigger: 'interval:mouseleave', action: 'element-link-by-color:unlink' }],
     });
      const columnPlot = new Column(this.$refs.bottom2_container,{
        data:this.dataArr,
        xField: 'date',
        yField: 'value',
        seriesField: 'type',
        isPercent: true,
        isStack: true,
        meta: {
          value: {
            min: 0,
            max: 10,
          },
        },
        color: ['#0e8121', '#5fe1a0'],
        label: {
          position: 'middle',
          content: (item) => {
            return `${(item.value * 100).toFixed(2)}%`;
          },
          style: {
            fill: '#fff',
          },
        },
        tooltip: false,
        interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }],
      });

    columnPlot.render();
    },

  }
}
</script>
<style scoped>
</style>