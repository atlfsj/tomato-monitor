<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-12-20 10:05:03
 * @LastEditors: charles
 * @LastEditTime: 2021-12-22 09:29:45
-->
<template>
  <div ref="map_container" style="height:100%"></div>
</template>
<script>
import {get} from '../../../utils/request'
import {mapMutations} from 'vuex'
export default {
  props:['resMap'],
  data(){
    return {
      map:null,
      provinceMapInfo: []
    }
  },
  watch:{
    resMap(){
      // console.log(this.resMap)
      this.initMap()
    }
  },
  methods:{
    initMap(){
      let vm = this;
      let container = this.$refs.map_container;
      // 1.初始化地图
      var map = new AMap.Map(container, {
          mapStyle:'amap://styles/fresh',
          zoom:4,//级别
          center: [116.453807,39.806568],//中心点坐标
          // viewMode:'3D'//使用3D视图
      });
      // 将map保存为一个全局变量
      this.map = map;
      // 2.行政区轮廓
      let polygons=[];
      var opts = {
          subdistrict: 0,   //获取边界不需要返回下级行政区
          extensions: 'all',  //返回行政区边界坐标组等具体信息
          level: 'district'  //查询行政级别为 市
      };
      let district = new AMap.DistrictSearch(opts);
      district.setExtensions('all');

      for (let i=0;i<this.resMap.length;i++){
        let fillColor = ''
        let grade = 0
        if (this.resMap[i].grade === '部分中高风险'){
          fillColor = '#FF2736'
          grade = 2
        }
        if (this.resMap[i].grade === '全部低风险'){
          fillColor = '#ffe7b2'
          grade = 0
        }

        if (this.resMap[i].grade === '部分中风险'){
          fillColor = '#FFA577'
          grade = 1
        }
        let flag = 0
        for (let j=0;j<this.provinceMapInfo.length;j++){
          if (this.provinceMapInfo[j].province === this.resMap[i].province){
            if (this.provinceMapInfo[j].grade>grade){
              flag = 1
              break
            }
          }
        }

        if (flag === 1){
          continue
        }

        district.search(this.resMap[i].province, function(status, result) {
          // map.remove(polygons)//清除上次结果
          // console.log(result)
          polygons = [];
          var bounds = result.districtList[0].boundaries;
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              //生成行政区划polygon
              var polygon = new AMap.Polygon({
                strokeWeight: 1,
                path: bounds[i],
                fillOpacity: 0.4,
                fillColor: fillColor,
                strokeColor: fillColor
              });
              polygons.push(polygon);
            }
          }
          map.add(polygons)
          // map.setFitView(polygons);//视口自适应
        });

        this.provinceMapInfo.push({
          province: this.resMap[i].province,
          fillColor: fillColor,
          grade: grade
        })
      }
      // district.search('成都', function(status, result) {
      //     // map.remove(polygons)//清除上次结果
      //     polygons = [];
      //     var bounds = result.districtList[0].boundaries;
      //     if (bounds) {
      //         for (var i = 0, l = bounds.length; i < l; i++) {
      //             //生成行政区划polygon
      //             var polygon = new AMap.Polygon({
      //                 strokeWeight: 5,
      //                 path: bounds[i],
      //                 fillOpacity: 0.4,
      //                 fillColor: '#80d8ff',
      //                 strokeColor: '#0091ea'
      //             });
      //             polygons.push(polygon);
      //         }
      //     }
      //     map.add(polygons)
      //     // map.setFitView(polygons);//视口自适应
      // });
      //
      // district.search('山西', function(status, result) {
      //   // map.remove(polygons)//清除上次结果
      //   polygons = [];
      //   var bounds = result.districtList[0].boundaries;
      //   if (bounds) {
      //     for (var i = 0, l = bounds.length; i < l; i++) {
      //       //生成行政区划polygon
      //       var polygon = new AMap.Polygon({
      //         strokeWeight: 5,
      //         path: bounds[i],
      //         fillOpacity: 0.4,
      //         fillColor: '#80d8ff',
      //         strokeColor: '#0091ea'
      //       });
      //       polygons.push(polygon);
      //     }
      //   }
      //   map.add(polygons)
      //
      // });

      // // 3. 打点 查找到所有的工程设备
      // let url = "/dashboard/findEngineerDeviceTree"
      // get(url).then(resp => {
      //   let eds = resp.data;
      //   // 所有设备
      //   let devices = [];
      //   eds.forEach(item => {
      //     // 缓存工程，将工程绑定到
      //
      //     devices.push(...item.children)
      //   })
      //   // 将设备转换为点位
      //   console.log(devices)
      //   if(devices.length>0){
      //     let defaultDevice = devices[0];
      //     let ed = {
      //       engineer_id : defaultDevice.engineer_id,
      //       device_id : defaultDevice.id
      //     }
      //     this.SET_ED(ed)
      //   }
      //
      //
      //   devices.forEach(d => {
      //      // 1. 创建点
      //     let marker = new AMap.Marker({
      //       position:d.position,//位置
      //       title:d.name,
      //       extData:d
      //     })
      //     // 2. 为点绑定事件
      //     marker.on('click',function(){
      //       console.log(this.getExtData());
      //       let device_id = this.getExtData().id;
      //       let engineer_id = this.getExtData().engineer_id;
      //       // 将当前设备设置到状态机中
      //       let ed = {
      //         device_id,
      //         engineer_id
      //       }
      //       vm.SET_ED(ed)
      //     })
      //     // 3. 确认打点
      //     map.add(marker);
      //   })
      // })

    }
  }
}
</script>
