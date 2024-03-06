<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-12-20 09:32:58
-->
<template>
  <!-- 1. 容器 -->
  <div ref="left2_container" style="height:95%"> </div>
</template>

<script>
// 2. 导入图表构造函数
import { Pie } from '@antv/g2plot';
import {get} from '../../../utils/request'
export default {
  data(){
    return {
      dd:[]
    }
  },
  async mounted() {
    // 4. 查询数据
    await this.loadData();
    // 5. 页面渲染的时候初始化图表
    this.initChart()
  },
  methods:{
    // 查询统计数据 ajax  异步的javascript和xml
    async loadData(){
      let url = "/dashboard/queryDeviceOnlineNumber"
      let resp = await get(url);
      this.dd = resp.data;
    },
    //3. 初始化图表
    initChart(){
      const data = this.dd;
      const piePlot = new Pie(this.$refs.left2_container, {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        color: ['l(90) 0:#D1D1FF 1:#7C82EA', 'l(90) 0:#fccafb 1:#9c4dd5', 'l(90) 0:#c3faba 1:#36bb83'],
        radius: 0.8,
        legend:false,
        label: {
          formatter(v){
            return v.value+'个';
          },
          style:{
            fontSize: 16,
            type: 'outer',
            fill:'#fff'
          }
        },
        interactions: [{ type: 'element-active' }],
      });

      piePlot.render();
    }
  }
}
</script>
