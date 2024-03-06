<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 16:10:11
-->
<template>
  <!--1. 容器 -->
  <div ref="right1_container" id="container" style="height: 95%"></div>
</template>
<script>
// 引入折线图构造函数
import { Line } from "@antv/g2plot";
import {get} from "../../../utils/request"
import moment from "moment"

export default {
  data() {
    return {
      dataArr: [
        {
          year:'2013',
          value:5.48
        },
         {
          year:'2014',
          value:4.8
        },
         {
          year:'2015',
          value:4.8
        },
         {
          year:'2016',
          value:4.91
        },
         {
          year:'2017',
          value:6.09
        },
         {
          year:'2018',
          value:6.94
        },
         {
          year:'2019',
          value:6.96
        },
         {
          year:'2020',
          value:8.1
        },
         {
          year:'2021',
          value:8.87
        },
      ],
    };
  },
  created() {

  },
  mounted() {
   this.initChart();
  },
  methods: {
    // initData(){
    //   get("/dashboard/pageQueryTodayData",{
    //     page:1,
    //     pageSize:5,
    //     device_id:1
    //     }).then(res=>{
    //       console.log(res)
    //      res.data.list.forEach(item => {
    //        item.dateTime = moment(item.insert_time).format('hh:mm')
    //      });
    //      this.dataArr=res.data.list
    //      this.initChart();
    //   })
    // },
    initChart() {
      // 创建一个折线图对象
      const line = new Line(this.$refs.right1_container, {
        data:this.dataArr,
        xField: "year",
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