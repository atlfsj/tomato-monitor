<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-08 16:31:56
-->
<!--<template>
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
</style>-->
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
        height: 165, // 设置图表高度
      });

      // 修改为柱状图配置
      this.chart.interval().position('label*value').color('type');

      // 设置纵轴范围
      this.chart.scale({
        value: {
          min: 0,
          max: 1,
        },
      });

      this.chart.render();
    },
    generateRandomData() {
      const labels = ['CO2浓度', '湿度', '氮', '磷', '钾'];
      const types = ['空气及土壤元素含量比例数据'];

      return labels.map(label => {
        if (label === 'CO2浓度') {
          // CO2 浓度保持在 0.1 以下变动
          return types.map(type => ({
            label,
            type,
            value: Math.random() * 0.1,
          }));
        } else if (label === '湿度') {
          // CO2 浓度保持在 0.1 以下变动
          return types.map(type => ({
            label,
            type,
            value: Math.random(),
          }));
        } else {
          // 其他数据随机生成
          return types.map(type => ({
            label,
            type,
            value: Math.random() * 0.5,
          }));
        }
      }).flat();
    },
    startRandomJump() {
      setInterval(() => {
        this.data = this.generateRandomData();
        this.chart.changeData(this.data);
      }, 10000); // 调整更新的间隔
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
