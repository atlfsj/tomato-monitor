<!--
 * @Author: jyq
 * @Date: 2022-01-08 10:15:39
 * @LastEditTime: 2022-01-10 14:33:57
 * @LastEditors: jyq
 * @Description: 
 * @FilePath: \project_am\am-dashboard\src\pages\m2\components\Map1.vue
 * 可以输入预定的版权声明、个性签名、空行等
-->
<template>
  <div ref="map_container" style="height: 95%"></div>
</template>
<script>
import { get } from "../../../utils/request";
export default {
  data() {},
  mounted() {
    this.initMap();
  },
  methods: {
    //   地图初始化
    initMap() {
      var map = new AMap.Map(this.$refs.map_container, {
        zoom: 11, //级别
        center: [112.55126, 37.42119], //中心点坐标
        viewMode: "3D", //使用3D视图
      });
      //   行政区轮廓
      let polygons = [];
      var opts = {
        subdistrict: 0, //获取边界不需要返回下级行政区
        extensions: "all", //返回行政区边界坐标组等具体信息
        level: "district", //查询行政级别为 市
      };
      let district = new AMap.DistrictSearch(opts);
      district.setExtensions("all");
      district.search("太谷区", function (status, result) {
        map.remove(polygons); //清除上次结果
        polygons = [];
        var bounds = result.districtList[0].boundaries;
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            //生成行政区划polygon
            var polygon = new AMap.Polygon({
              strokeWeight: 1,
              path: bounds[i],
              fillOpacity: 0.4,
              fillColor: "#80d8ff",
              strokeColor: "#0091ea",
            });
            polygons.push(polygon);
          }
        }
        map.add(polygons);
        map.setFitView(polygons); //视口自适应
      });
      //   打点
      // let url = "/dashboard/findEngineerDeviceTree";
      // get(url).then((res) => {
      //   let edTree = res.data;
      //   let devices = [];
      //   edTree.forEach((element) => {
      //     devices.push(...element.children);
      //   });
      //   console.log(devices);
      //   devices.forEach((item) => {
      //     var marker1 = new AMap.Marker({
      //       position:item.position, // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      //       title: item.name,
      //       icon: '//vdata.amap.com/icons/b18/1/2.png',
      //       extData:item
      //     });

      //     map.add(marker1)
      //   });
      // });
      var marker1 = new AMap.Marker({
        position: [112.583913,37.423778], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '山西农大',
        icon: "//vdata.amap.com/icons/b18/1/2.png",
      });
      map.add(marker1);
      var marker2 = new AMap.Marker({
        position: [112.509344,37.447631], // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        title: '太谷西站',
        icon: "//vdata.amap.com/icons/b18/1/2.png",
      });
      map.add(marker2);
    },
  },
};
</script>
