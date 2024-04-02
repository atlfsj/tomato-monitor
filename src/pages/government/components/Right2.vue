<template>
  <div>
    <div id="c2" style="width: 100%;"></div>
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
      const initialHumidity = Math.floor(Math.random() * 6) + 45; // 初始湿度调整为45%

      // 添加初始数据到数组
      this.data.push({ time: now, humidity: initialHumidity, type: '湿度' });
    },
    initChart() {
      this.chart = new Chart({
        container: 'c2',
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
        humidity: {
          alias: '湿度(%)',
          min: 20,
          max: 80,
          nice: false,
        },
        type: {
          type: 'cat',
        },
      });

      // 创建折线图
      this.chart.line().position('time*humidity').color('type', '#007acc').shape('smooth').size(2);

      // 添加湿度数值类型标记
      this.chart.annotation().text({
        position: ['min', 'min'],
        content: '湿度',
        offsetY: -5,
        style: {
          textAlign: 'start',
          fontSize: 12,
        },
        offsetX: 5,
      });

      // 渲染图表
      this.chart.render();
    },
    startRandomJump() {
      setInterval(() => {
        const now = new Date().getTime();
        // 生成在45%-50%之间的随机湿度
        const humidityChange = Math.random() > 0.5 ? -1 : 1; // 随机增加或减少湿度
        let humidity = this.data[this.data.length - 1].humidity + humidityChange / 10; // 减小变化幅度

        // 限制湿度在20%-80%之间
        humidity = Math.max(20, Math.min(80, humidity));

        // 移除旧数据点
        if (this.data.length >= this.dataLength) {
          this.data.shift();
        }

        // 更新数据
        this.data.push({ time: now, humidity, type: '湿度' });

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
