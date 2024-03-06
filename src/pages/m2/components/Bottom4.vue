<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 15:40:00
-->
<template>
  <div ref="bottom4_container" style="height:95%">

  </div>
</template>
<script>
import { Column, Pie } from "@antv/g2plot";
export default {
 
  data() {
     return{
       dataArr: [
      {
        type: "小孩",
        sex: "男",
        value: 1299,
      },
      {
        type: "小孩",
        sex: "女",
        value: 1261,
      },
      {
        type: "青少年",
        sex: "男",
        value: 13246,
      },
      {
        type: "青少年",
        sex: "女",
        value: 12518,
      },
      {
        type: "中年",
        sex: "男",
        value: 35506,
      },
      {
        type: "中年",
        sex: "女",
        value: 34860,
      },
      {
        type: "老年",
        sex: "男",
        value: 17680,
      },
      {
        type: "老年",
        sex: "女",
        value: 18024,
      }
    ],
    piedata:[

    ]
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    getPiedata(){
      const groupData = groupBy(this.dataArr, 'type');
      const result = [];
      each(groupData, (sex, value) => {
        result.push({ type: sex, value: values.reduce((a, b) => a + b.value, 0) });
      });
      this.piedata=result

    },
    
    initChart() {
      const column = new Column(this.$refs.bottom4_container, {
        data:this.dataArr,
        xField: "type",
        yField: "value",
        seriesField: "sex",
        isGroup: "true",
        legend: false,
        columnStyle: {
          radius: [4, 4, 0, 0],
        },
      });

      column.render();
    },
  },
};
</script>
<style scoped>
</style>