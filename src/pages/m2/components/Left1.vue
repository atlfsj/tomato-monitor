<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 15:52:58
-->
<template>
  <!--1. 容器 -->
  <div ref="left1_container" id="container" style="height: 95%"></div>
</template>
<script>
// 引入折线图构造函数
import { Line } from "@antv/g2plot";
import { get } from "../../../utils/request";
import moment from "moment";
export default {
  data() {
    return {
      dataArr: [
        {
          date:'1980',
          value:150000
        },
        {
          date:'1990',
          value:200000
        },
        {
          date:'2000',
          value:250000
        },
        {
          date:'2010',
          value:280000
        },
        {
          date:'2020',
          value:300000
        }
      ],
      devices: [],
      device_id: 1,
    };
  },
  created() {},
  mounted() {
    // this.initData();
    this.initChart();
  },
  methods: {
    // initData() {
    //   get("/dashboard/pageQueryTodayData", {
    //     page: 1,
    //     pageSize: 5,
    //     device_id: this.device_id,
    //   }).then((res) => {
    //     console.log(res);
    //     res.data.list.forEach((item) => {
    //       item.dateTime = moment(item.insert_time).format("hh:mm");
    //     });
    //     this.dataArr = res.data.list;
    //     this.initChart();
    //   });
    // },
    initChart() {
      // 创建一个折线图对象
      const line = new Line(this.$refs.left1_container, {
        data: this.dataArr,
        xField: "date",
        yField: "value",
      });
      // 渲染图像
      line.render();
    },
  },
};
</script>

<style scoped>
</style>
