<template>
  <div>
    <div id="c1" style="width: 100%;"></div>
  </div>
</template>

<script>
import { Chart } from '@antv/g2';

export default {
  data() {
    return {
      chart: null,
      data: [], // 初始数据为空数组
      dataLength: 200, // 控制数据长度
      warningValue: 40, // 预警值
    };
  },
  mounted() {
    // 生成初始数据并渲染图表
    this.initChartData();
    this.initChart();
    this.startRandomJump();
  },
  methods: {
    initChartData() {
      const now = new Date().getTime();
      const initialTemperature1 = Math.floor(Math.random() * 3) + 26; // 初始温度1
      const initialTemperature2 = Math.floor(Math.random() * 3) + 23; // 初始温度2

      // 添加初始数据到数组
      this.data.push({ time: now, temperature: initialTemperature1, type: '大棚温度' });
      this.data.push({ time: now, temperature: initialTemperature2, type: '室外温度' });
    },
    initChart() {
      this.chart = new Chart({
        container: 'c1',
        autoFit: true, // 自适应容器宽度
        height: 170,
      });

      // 创建空数据源和列信息
      this.chart.data(this.data);
      this.chart.scale({
        time: {
          alias: '时间',
          type: 'time',
          mask: 'MM:ss',
          tickCount: 10,
          nice: false,
        },
        temperature: {
          alias: '平均温度(°C)',
          min: 15,
          max: 50, // 调整纵坐标范围
        },
        type: {
          type: 'cat',
        },
      });

      // 创建折线图
      this.chart.line().position('time*temperature').color('type', ['#ff7f0e', '#2ca02c']).shape('smooth').size(2);

      // 添加预警线
      this.chart.annotation().line({
        start: ['min', this.warningValue],
        end: ['max', this.warningValue],
        style: {
          stroke: '#f5222d', // 设置预警线为红色
        },
        text: {
          position: 'start',
          content: '预警温度：40摄氏度',
          style: {
            fill: '#f5222d',
            fontSize: 12,
            fontWeight: 'bold',
          },
        },
      });

      // 渲染图表
      this.chart.render();
    },
    startRandomJump() {
      setInterval(() => {
        const now = new Date().getTime();
        // 生成在20-30度之间的随机温度
        const temperature1 = Math.floor(Math.random() * 3) + 26; // 调整温度变化范围
        const temperature2 = Math.floor(Math.random() * 3) + 23; // 调整温度变化范围

        // 移除旧数据点
        if (this.data.length >= this.dataLength) {
          this.data.shift();
          this.data.shift();
        }

        // 更新数据
        this.data.push({ time: now, temperature: temperature1, type: '大棚温度' });
        this.data.push({ time: now, temperature: temperature2, type: '室外温度' });

        // 更新图表数据
        this.chart.changeData(this.data);
      }, 5000); // 调整更新的间隔
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
