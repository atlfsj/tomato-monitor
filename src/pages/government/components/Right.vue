<template>
    <div>
      <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
    </div>
</template>
  

<script>
import echarts from 'echarts'
export default {
    mounted() {
        // 获取图表容器
        let chartContainer = this.$refs.chartContainer;

        // 创建ECharts实例
        this.chart = echarts.init(chartContainer);

        // 初始化图表数据
        this.initChart();
    },
    methods: {
        initChart() {
            // 初始数据
            const data = [/* your initial data here */];

            // 配置项
            const options = {
            xAxis: {
                type: 'category',
                data: data.map(item => item.label),
            },
            yAxis: {
                type: 'value',
            },
            series: [
                {
                name: 'Your Series Name',
                type: 'bar',
                data: data.map(item => item.value),
                },
            ],
            };

            // 使用 setOption 方法设置图表配置项
            this.chart.setOption(options);
        },
        updateChart(newData) {
            const options = {
            xAxis: {
                type: 'category',
                data: newData.map(item => item.label),
            },
            series: [
                {
                data: newData.map(item => item.value),
                },
            ],
        };

            // 使用 setOption 方法更新图表配置项
            this.chart.setOption(options);
        },
    },


}
</script>