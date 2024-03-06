<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-24 08:39:23
-->
<template>
  <div class="tieshi" v-text="texts[flag]"></div>
  
    <div class="news"> <router-link to="/find">点击进入番茄病虫害诊断系统</router-link><br>
        
        
    <!-- <a href="http://www.agri.cn/V20/ZX/nyyw/202204/t20220429_7847016.htm" target="self_black">
    点击进入知识图谱的番茄病虫害辅助识别与诊断专家系统
    </a> -->
    <a href="http://localhost:8081/" target="self_black">
    点击进入知识图谱的番茄病虫害辅助识别与诊断专家系统
    </a>
                            
  </div>
              
</template>
<script>
export default {
  data() {
    return {
      flag: 0,
      texts: ["1、在播种之前，先将种子放在55度温水里浸泡十五分钟，这样能起到防治病菌的作用。\n" +
      "\n" +
      "2、对种子进行药剂拌种，选择能防真菌与卵菌病害的药剂，比如说恶霉灵、多菌灵、甲霜灵、代森锰锌。"
        , "3.为预防青枯病，可以推广高畦种植，保证排灌方便，生长期间多施加腐熟有机肥，提高植株抗病能力。发病初期浇灌噻菌铜悬浮剂等，在发病前也可以使用枯草芽孢杆菌可湿性粉剂进行灌根。"
        , "4.西红柿应开沟起垄栽培，合理密植，及时发现病株，及时喷洒醚菌酯悬浮剂，氢氧化铜可湿性粉剂等进行药剂防治晚疫病。"]
    }
  },
  mounted() {
    setInterval(this.changeflag, 7000)
  },
  methods: {
    changeflag() {
      this.flag += 1;
      this.flag = this.flag % this.texts.length;
      // console.log(this.flag)
      // setTimeout(this.changeflag(),5000);
    },
  }
}
</script>
<style lang="scss" scoped>
.tieshi {
  text-indent: 2em;
  color: #ebf357;
  font-family: '雅痞-简';
}
.news{
  font-size: 12px;
  > a {
    //color: rgb(0, 211, 0);
    color: rgb(234, 19, 19);
  }  
}
</style>
