<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 14:37:33
-->
<template>
  <!--1. 容器 -->
  <div ref="bottom3_container" style="height: 95%"></div>
</template>
<script>
// 引入折线图构造函数
import { Column } from "@antv/g2plot";

export default {
  data() {
    return {
      dataArr: [
        {
          type: "家具家电",
          sales: 38,
        },
        {
          type: "粮油副食",
          sales: 52,
        },
        {
          type: "生鲜水果",
          sales: 61,
        },
        {
          type: "美容洗护",
          sales: 145,
        },
        {
          type: "母婴用品",
          sales: 48,
        },
        {
          type: "进口食品",
          sales: 38,
        },
        {
          type: "食品饮料",
          sales: 38,
        },
      ],
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const column = new Column(this.$refs.bottom3_container, {
        data: this.dataArr,
        xField: "type",
        yField: "sales",
        // 悬浮框的提示
        tooltip:{
           fields:['ratio','sales'],
           domStyles:{
             'g2-tooltip':{
               padding:'5px',
               background:'rgba(47,6,170,0.8)',
               color:'#fff',
               fontSize:"16px"
             }
           }
        },
        // 修改X轴文本
        xAxis:{
            label:{
              rotate:-45,
              offset:20,
            }
        }
      });
      // 渲染图像
      column.render();
    },
  },
};
</script>

<style scoped>
</style>