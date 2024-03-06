<!--
 * @Description: 
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 15:44:55
-->
<template>
  <div ref="left2_container" style="height: 95%"></div>
</template>
<script>
import { get } from "../../../utils/request";
import { Pie } from "@antv/g2plot";
export default {
  data() {
    return {
      dataArr: [
        {
          value: 50.18,
          type: "男性",
        },
        {
          value: 49.82,
          type: "女性",
        },
      ],
    };
  },
  
  mounted() {
    this.initChat();
  },
  methods: {
    // initData(){
    //   let url = '/dashboard/queryDeviceOnlineNumber'
    //   get(url).then(res=>{
    //     this.dataArr=res.data;
    //     this.initChat();
    //   })
    // },
    initChat() {
      const pie = new Pie(this.$refs.left2_container, {
        appendPadding: 10,
        data: this.dataArr,
        angleField: "value",
        colorField: "type",
        radius: 0.9,
        interactions: [{ type: "element-active" }],
      });
      pie.render();
    },
  },
};
</script>
<style scoped>
</style>