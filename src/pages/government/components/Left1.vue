<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-12-22 15:46:29
-->
<template>
  <!--1. 容器 -->
  <div ref="left1_container" style="height: 95%"></div>
</template>
<script>
// 2. 导入图表构造函数
import { Line } from '@antv/g2plot';
import {mapState} from 'vuex'
import { get } from '../../../utils/request';
import moment from 'moment'
export default {
  data(){
    return {
      monitorData:[],
      chart:null
    }
  },
  mounted() {
    // 4. 在页面渲染完成后调用图表的渲染
    this.initChart();
  },
  computed: {
    ...mapState(['ed'])
  },
  watch: {
    ed:{
      async handler(params){
        // 重新加载数据
        await this.loadMonitorData();
        this.changeData();
      },
      deep:true
    }
  },
  methods:{
    changeData(){
      if(this.chart){
        this.chart.changeData(this.monitorData)
      }
    },
    async loadMonitorData(){
      let url = "/dashboard/pageQueryTodayData"
      let params = {
        page:1,
        pageSize:20,
        ...this.ed
      }
      let resp = await get(url,params);
      let data = resp.data.list.map(item => {
        return {
          time:moment(item.insert_time).format('hh:mm'),
          value:+item.temperature
        }
      })
      this.monitorData = data;
    },
    // 3. 初始化图表
    initChart(){
      const data = this.monitorData;
      const line = new Line(this.$refs.left1_container, {
        data,
        xField: 'time',
        yField: 'value',
        color:'l(90) 0:#D1D1FF 1:#7C82EA',
        xAxis: {
          label: {
            rotate: -45,
            offset: 10,
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            },
          },
        },
        yAxis: {
          label: {
            style: {
              fill: "white",
              fontFamily: "TencentSans",
              fontSize: 16,
            }
          }
        }
      });
      line.render();
      this.chart = line;
    }
  }
}
</script>
