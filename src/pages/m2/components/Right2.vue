<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 16:13:55
-->
<template>
  <div ref="right_container" style="height: 95%"></div>
</template>
<script>
import { DualAxes } from "@antv/g2plot";
export default {
  data() {
    return {
      dataArr: [
        { time: "1949", value: 35, count: 20 },
        { time: "1957", value: 34, count: 10 },
        { time: "1965", value: 37, count: 9.5 },
        { time: "1975", value: 23, count: 7.3 },
        { time: "1985", value: 21, count: 6.8 },
        { time: "1995", value: 17, count: 6.6 },
        { time: "2000", value: 14, count: 6.5 },
      ],
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const dualAxes = new DualAxes(this.$refs.right_container, {
        data: [this.dataArr,this.dataArr],
        xField: "time",
        yField: ["value", "count"],
      });
      dualAxes.render();
    },
  },
};
</script>
<style scoped>
</style>