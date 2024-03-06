<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: charles
 * @LastEditTime: 2021-07-14 15:18:36
-->
<template>
  <div ref="minitorInfo">

  </div>
</template>

<script>
import service from "../../../utils/request";
import base_token from "../../../utils/base_constant";
import {Sankey, WordCloud} from "@antv/g2plot";
import {mapState} from "vuex";

export default {
  props:['deviceId'],
  data() {
    return {
      minitorInfo: {},
      sankey:{},
    }
  },
  computed:{
    ...mapState(['ed'])
  },
  watch:{
    ed:{
      handler(){
        console.log(this.ed.engineer_id)
        this.changeMinitorInfo()
      },

    }
  },
  mounted() {
    console.log(this.ed.engineer_id)
    this.initData()
  },
  methods: {
    async initData() {
      let url = '/device/findDeviceDetail'
      let res = await service.get(url, {
        params: {
          id: this.ed.device_id || 1
        },
        headers: {
          Authorization: base_token
        }
      })
      this.minitorInfo = res.data.engineer
      this.sankey = this.initCharts()
    },

    async changeMinitorInfo(){
      let url = '/device/findDeviceDetail'
      let res = await service.get(url, {
        params: {
          id: this.ed.device_id
        },
        headers: {
          Authorization: base_token
        }
      })
      this.minitorInfo = res.data.engineer
      console.log(this.minitorInfo)
      const DATA = [
        { source: '工程id', target: this.minitorInfo.serial_number, value: 20 },
        { source: '工程名', target: this.minitorInfo.name, value: 20 },
        { source: '工程类型', target: this.minitorInfo.type, value: 20 },
        { source: '工程地址', target: this.minitorInfo.address, value: 20 },
        { source: '状态', target: this.minitorInfo.status, value: 20 },
      ];
      this.sankey.changeData(DATA)
    },

    initCharts() {

      const DATA = [
        { source: '工程id', target: this.minitorInfo.serial_number, value: 20 },
        { source: '工程名', target: this.minitorInfo.name, value: 20 },
        { source: '工程类型', target: this.minitorInfo.type, value: 20 },
        { source: '工程地址', target: this.minitorInfo.address, value: 20 },
        { source: '状态', target: this.minitorInfo.status, value: 20 },
      ];

      const sankey = new Sankey(this.$refs.minitorInfo, {
        data: DATA,
        width: 300,
        height: 200,
        sourceField: 'source',
        targetField: 'target',
        weightField: 'value',
        nodeWidthRatio: 0.008,
        nodePaddingRatio: 0.03,
      });

      sankey.render();
      return sankey
    }




}
}
</script>
