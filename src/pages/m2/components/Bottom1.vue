<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-07-14 15:08:24
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 16:18:51
-->
<template>
  <div ref="bottom1_container" style="height: 95%"></div>
</template>
<script>
import { Gauge, line } from "@antv/g2plot";
export default {
  data() {
    return {
      dataArr: [
        { time: "2019-03", value: 350, count: 800 },
        { time: "2019-04", value: 900, count: 600 },
        { time: "2019-05", value: 300, count: 400 },
        { time: "2019-06", value: 450, count: 380 },
        { time: "2019-07", value: 470, count: 220 },
      ],
      percent:0
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const ticks = [0, 1 / 3, 2 / 3, 1];
      const color = ["#F4664A", "#FAAD14", "#30BF78"];
      const gauge = new Gauge(this.$refs.bottom1_container, {
        percent:this.percent,
        range: {
          ticks: [0, 1],
          color: ["l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78"],
        },
        indicator: {
          pointer: {
            style: {
              stroke: "#D0D0D0",
            },
          },
          pin: {
            style: {
              stroke: "#D0D0D0",
            },
          },
        },
        statistic: {
          title: {
            formatter: ({ percent }) => {
              if (percent < ticks[1]) {
                return "差";
              }
              if (percent < ticks[2]) {
                return "适中";
              }
              return "好";
            },
            style: ({ percent }) => {
              return {
                fontSize: "20px",
                lineHeight: 1,
                color:
                  percent < ticks[1]
                    ? color[0]
                    : percent < ticks[2]
                    ? color[1]
                    : color[2],
              };
            },
          },
          content: {
            offsetY: 16,
            style: {
              fontSize: "14px",
              color: "#4B535E",
            },
            formatter: () => "劳动年龄人口",
          },
        },
      });
      gauge.render();
      setInterval(()=>{
        if(this.percent<0.5){
            this.percent+=0.01
            gauge.changeData(this.percent)
        }else{
          this.percent=0.5
        }
      },50)
    },
  },
};
</script>
<style scoped>
</style>