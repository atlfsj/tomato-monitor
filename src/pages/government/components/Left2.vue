<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: jyq
 * @LastEditTime: 2022-01-10 16:13:55
-->
<template>
  <!--  <div ref="right_container" style="height: 95%"></div>-->
  <div class="scroll">

    <div class="tieshi" style="height:50%">
      {{ data1 }}
    </div>
    <div class="tieshi" style="height:15%">
      {{ data2 }}
    </div>
  </div>
</template>
<script>
// import { DualAxes } from "@antv/g2plot";
export default {
  data() {
    return {
      data1: '1）68%金雷水分散粒剂（精甲霜灵·代森锰锌复配剂）和50%锐扑（氟吗·乙铝）可湿性粉剂防治番茄晚疫病速效性好，持效期长，且使用安全。',
      data2: '2）发病初期，喷氟吗·锰锌、氰霜唑、霜霉威、霜脲氰·代森锰锌、烯酰·锰锌、杀毒矾、乙膦·锰锌、甲霜铜、精甲霜·锰锌、吡唑醚菌酯等。',
      falg: true,
    };
  },

  watch: {},

  created() {
  },
  methods: {
    findDB() {		//这个方法是你要获取后台数据的方法
      //这里面通过你的axiosUrl获取到一些数据,
      if (!this.falg) {
        this.data1 = '1）苯基酰胺类 如苯菌灵是防治卵菌纲病害的较强内吸性杀菌剂，如浙江一帆化工的“霜扑”，对防治葡萄和瓜类霜霉病，苗期猝倒病有很好的效果。';
        this.data2 = "2）氨基甲酸酯中的霜霉威成份 如普力克霜霉威盐酸盐水剂，被誉为猝倒病和疫病特效药，对霜霉病和烟草黑胫病也有良好的杀灭作用。";
      } else {
        this.data1 =
          '1）68%金雷水分散粒剂（精甲霜灵·代森锰锌复配剂）和50%锐扑（氟吗·乙铝）可湿性粉剂防治番茄晚疫病速效性好，持效期长，且使用安全。';
        this.data2 =
          '2）发病初期，喷氟吗·锰锌、氰霜唑、霜霉威、霜脲氰·代森锰锌、烯酰·锰锌、杀毒矾、乙膦·锰锌、甲霜铜、精甲霜·锰锌、吡唑醚菌酯等。';
      }
    },
    times() {			//定义了一个times()方法来执行定时查询findDB()
      return setInterval(() => {			//setInterval换个名字就行了
        this.findDB()
        this.falg = !this.falg
      }, 6000)		//设置时间，这里是1分钟
    },
  },
  mounted() {		//模板渲染之后调用的，模板渲染之前是created
    //刚进页面就能获取到findDB()中的数据
    this.times()	//加载定时任务
  }
}
</script>
<style scoped>
.tieshi {
  text-indent: 1em;
  color: #ebf357;
  font-family: 雅痞-简;
}
</style>
