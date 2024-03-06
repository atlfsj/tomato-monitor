<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 16:36:05
-->
<template>
  <div ref="bottom2_container" id="container"  style="height: 95%"></div>
</template>
<script>
import { Area } from '@antv/g2plot';
export default {
  data(){
    return{
      dataArr:[
        {
          type:'常住人口',
          value:298783
        },
        {
          type:'户籍人口',
          value:280047
        },
        {
          type:'城镇人口',
          value:115996
        },
        {
          type:'农村人口',
          value:220078
        },
      ]
    }
  },
  mounted(){
    this.initChart();
  },
  methods:{
    initChart(){
      const area = new Area(this.$refs.bottom2_container,{
        data:this.dataArr,
         xField: 'type',
        yField: 'value',
      })
      area.render();
    }
  }
  
}
</script>
<style scoped>

</style>