<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-07-14 15:08:24
 * @LastEditors: charles
 * @LastEditTime: 2022-01-04 07:25:53
-->
<template>
  <div ref="workOrder">

  </div>
</template>

<script>

  import { RingProgress } from "@antv/g2plot";
  import service from "../../../utils/request";
  import base_token from "../../../utils/base_constant";

  export default {
    data(){
      return {
        processingCount: 0,
        allCount: 0
      }
    },
    mounted() {
      this.initData()
    },
    methods:{
      async initData(){
        let url = '/workorder/pageQuery'
        let res = await service.get(url,{
          params:{
            page: 1,
            pageSize: 10000
          },
          headers:{
            Authorization: base_token
          }
        })
        let data = res.data.list
        this.allCount = res.data.total
        for(let item in data){
          if (data[item].status == '进行中'){
            this.processingCount++;
          }
        }
        this.initCharts()

      },

      initCharts(){
        const ringProgress = new RingProgress(this.$refs.workOrder, {
          height: 150,
          width: 150,
          autoFit: true,
          percent: this.processingCount/this.allCount,
          color: ['#00B16B', '#E8EDF3'],
          innerRadius: 0.85,
          radius: 0.98,
          statistic: {
            title: {
              style: { color: '#ffffff', fontSize: '15px', lineHeight: '14px' },
              formatter: () => '工单已完成进度',
            },
          },
        });
        ringProgress.render();
      }
    }
  }
</script>
