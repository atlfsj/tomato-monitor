<!--
 * @Description:
 * @Author: charles
 * @Date: 2021-05-05 22:02:56
 * @LastEditors: 高鸿宇 10395429+gao-hong-yu@user.noreply.gitee.com
 * @LastEditTime: 2023-01-24 08:39:23
-->
<template>
  <div class="tieshi" v-text="texts[flag]"></div>
  <br>
  <div class="news">
    <!--<router-link to="/find">点击进入番茄病虫害诊断系统</router-link>-->
    <button @click="showFind">点击进入番茄病虫害诊断系统</button>
    <br>
    <a href="http://localhost:8081/" target="self_black">点击进入知识图谱的番茄病虫害辅助识别与诊断专家系统</a>
  </div>

  <div class="dialog">

    <a-button type="primary" @click="showModal">Open Modal of 1000px width</a-button>
    <a-modal v-model:visible="visible" width="1000px" title="Basic Modal" @ok="handleOk">
      <ifram>
        <Find />
      </ifram>
    </a-modal>

  </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import 'ant-design-vue/dist/antd.css'
import Find from '../../m3/Find'
export default {
  components: {
    Find
  },
  data() {
    return {
      flag: 0,
      texts: ["1、在播种之前，先将种子放在55度温水里浸泡十五分钟，这样能起到防治病菌的作用。\n" +
        "\n" +
        "2、对种子进行药剂拌种，选择能防真菌与卵菌病害的药剂，比如说恶霉灵、多菌灵、甲霜灵、代森锰锌。"
        , "3.为预防青枯病，可以推广高畦种植，保证排灌方便，生长期间多施加腐熟有机肥，提高植株抗病能力。发病初期浇灌噻菌铜悬浮剂等，在发病前也可以使用枯草芽孢杆菌可湿性粉剂进行灌根。"
        , "4.西红柿应开沟起垄栽培，合理密植，及时发现病株，及时喷洒醚菌酯悬浮剂，氢氧化铜可湿性粉剂等进行药剂防治晚疫病。"],
      visible: false
    }
  },
  mounted() {
    setInterval(this.changeflag, 7000)
  },
  methods: {
    changeflag() {
      this.flag += 1;
      this.flag = this.flag % this.texts.length;
    },
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    }
  },
}
</script>
<style lang="scss" scoped>
.tieshi {
  text-indent: 2em;
  color: #ebf357;
  font-family: '雅痞-简';
}

.news {
  font-size: 12px;
  color: rgb(234, 19, 19);

  button {
    background: rgba(0, 0, 0, 0);
    border: none;
    margin-left: -5px;
    cursor: pointer;
    font-size: 12px;
  }
}
</style>
