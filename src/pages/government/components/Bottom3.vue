<template>
  <div class="tieshi" v-text="texts[flag]"></div>
  <div class="button">
    <a href="https://atlfsj.github.io/cesium-screen/#/" target="self_black">
      <button>cesium大屏监测系统</button>
    </a>
    <a href="https://atlfsj.github.io/tomato-knowledgeGraph/#/" target="self_black">
      <button>点击进入知识图谱番茄病虫害识别与诊断专家系统</button>
    </a>
    <!-- 病虫害识别功能 -->
    <a-button type="primary" @click="showModal">点击识别番茄病虫害</a-button>
    <a-modal v-model:visible="visible" width="900px" title="病虫害识别系统" @ok="handleOk">
      <ifram class="identify">
        <Find :previewUrl="previewUrl" :uploadResult="uploadResult" @update:previewUrl="updatePreviewUrl"
          @update:uploadResult="updateUploadResult" />
      </ifram>
    </a-modal>
  </div>
</template>

<script>
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
        "\n",
        "2、对种子进行药剂拌种，选择能防真菌与卵菌病害的药剂，比如说恶霉灵、多菌灵、甲霜灵、代森锰锌。"
        , "3.为预防青枯病，可以推广高畦种植，生长期间多施加腐熟有机肥。发病初期浇灌噻菌铜悬浮剂等，在发病前也可以使用枯草芽孢杆菌可湿性粉剂进行灌根。"
        , "4.西红柿应开沟起垄栽培，合理密植，及时发现病株，及时喷洒醚菌酯悬浮剂，氢氧化铜可湿性粉剂等进行药剂防治晚疫病。"],
      visible: false,
      previewUrl: null, // 添加 previewUrl 数据
      uploadResult: null,
    }
  },
  mounted() {
    setInterval(this.changeflag, 7000);
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
      this.previewUrl = null; // 清除预览图片 URL
      this.uploadResult = null; // 清除图片识别结果
    },
    // 更新预览图片 URL 的方法
    updatePreviewUrl(newPreviewUrl) {
      this.previewUrl = newPreviewUrl;
    },
    // 更新上传图片的识别结果
    updateUploadResult(newUploadResult) {
      this.uploadResult = newUploadResult;
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

.button {
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin-top: 10px;
    /* 设置按钮之间的间隔 */
    color: white;
    background: #40a9ff;
    width: auto;
    height: 30px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
  }
}
</style>