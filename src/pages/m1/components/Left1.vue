<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2022-01-04 13:12:25
-->
<template>
  <!--1. 容器 -->
  <div ref="left1_container" style="height: 95%"></div>
</template>
<script>
import axios from "axios";
import { Bar } from '@antv/g2plot';
export default {
  props: ['totalData','extData'],
  data(){
    return {
    }
  },
  mounted() {

  },
  watch:{
    totalData(){
      this.initCharts()
    }
  },
  methods:{
    // async initData(){
    //   const service = axios.create({
    //     baseURL: '/api',
    //     timeout: 30000
    //   })
    //   let res = await service.get('ug/api/wuhan/app/data/list-total')
    //   console.log(res)
    //   this.totalData = res.data.data.chinaTotal.total
    //   this.extData = res.data.data.chinaTotal.extData
    //   this.initCharts()
    // },

    initCharts(){
      const data = [
        { year: '总确诊', value: this.totalData.confirm },
        { year: '死亡总数', value: this.totalData.dead },
        { year: '累计治愈', value: this.totalData.heal },
        { year: '境外输入', value: this.totalData.input },
        { year: '无症状感染', value: this.extData.noSymptom },
      ];

      const bar = new Bar(this.$refs.left1_container, {
        data,
        autoFit: true,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
      });

      bar.render();
    }
  }
}
</script>
