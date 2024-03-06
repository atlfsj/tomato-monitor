<template>
  <!---<div class="upload-iden">
  <div class="upload-file">
 <a-upload-dragger
   v-model:fileList="fileList"
  name="file"
 :customRequest="toUpload">
     
 <p class="ant-upload-drag-icon">
 <inbox-outlined></inbox-outlined>
  </p>
    <p class="ant-upload-text">请将作物图片上传到此处</p>
   <p class="ant-upload-hint">
      支持点击选择文件上传与拖拽文件至此处上传
    </p>
   </a-upload-dragger>
 </div>

  <div class="upload-img">
  <img
     :src="imageBase64"
  />
 <a-input addon-before="虫害名称" v-model:value="resultName" disabled/>
 <a-input addon-before="中文翻译" v-model:value="resultChineseName" disabled/>
    <a-input addon-before="相似概率" v-model:value="resultScore" disabled/>
</div> 
  </div>  -->

  <div class="carousel-middle">

    <el-carousel height="420px">
      <el-carousel-item v-for="item in images" :key="item">
        <img
            :src="item">
      </el-carousel-item>
    </el-carousel>


  </div>

</template>
<script>
import {InboxOutlined} from '@ant-design/icons-vue';
import {defineComponent} from 'vue';
import axios from "axios";

export default defineComponent({
  components: {
    InboxOutlined,
  },

  data() {
    return {
      resultName: '',
      resultChineseName: '晚疫病',
      resultScore: '',
      fileList: [],
      access_token: '',
      imageBase64: '',
     images: [
'https://img-qn.51miz.com/preview/photo/00/01/51/47/P-1514717-13256105.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420'
       ,
        'https://img-qn.51miz.com/preview/photo/00/01/51/41/P-1514113-29810DBD.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420'
       ,
'https://img-qn.51miz.com/preview/photo/00/01/51/25/P-1512599-CF19391A.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420'
       ,
'https://img-qn.51miz.com/preview/photo/00/01/51/47/P-1514788-0DF4C2C8.jpg!/quality/90/unsharp/true/compress/true/fwfh/640x420'
      ]
    }
  },
  setup() {
  // const handleChange = info => {
   // const status = info.file.status;
   
   // if (status !== 'uploading') {
    //   console.log(info.file, info.fileList);
    //  }
  
   //if (status === 'done') {
      // message.success(`${info.file.name} file uploaded successfully.`);
   // } else if (status === 'error') {
     // message.error(`${info.file.name} file upload failed.`);
   //  }
   //};
  
    //return {
  //handleChange,
   // fileList: ref([]),
   //};
  },
  mounted() {
    this.getAccessToken()
  },
  methods: {
    initBaiDuApi() {
      const service = axios.create({
        timeout: 3000
      })
      return service
    },
    getAccessToken() {
      const that = this
      const service = that.initBaiDuApi()
      service.get('/baidu/oauth/2.0/token?grant_type=client_credentials&client_id=xsxLag513Ry9nhoa900IDQac&client_secret=BXkbiRbNCXyj2ZamEITZ0P5RmPcqT6SW')
          .then(res => {
            that.access_token = res.data.access_token
          })
    },
    toUpload(data) {
      const that = this
      const file = data.file
      const base64 = new Promise(resolve => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
          resolve(fileReader.result);
          // this.formImg = fileReader.result;
        }
      }).then(function (res) {
        that.imageBase64 = res
        const imageBase64 = res.replace(/^data:image\/\w+;base64,/, "")
        const service = that.initBaiDuApi()
        service.post('/baidu/rpc/2.0/ai_custom/v1/classification/sxau20?access_token=' + that.access_token, {
          'image': imageBase64
        }).then(res => {
          that.resultName = res.data.results[0].name
          that.resultScore = (Math.round(res.data.results[0].score * 10000)) / 100 + '%'
        })
      });
    }
  }
});
</script>

<style scoped>
.upload-iden {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: nowrap;

}

.upload-file {
  width: 50%;
}

.upload-img {
  width: 50%;


}

.upload-img img {
  width: 100%;
  height: 86%;
}

.carousel-middle {
  width: 100%;
}

.carousel-middle img {
  width: 700px;
  height: 420px;
}
</style>
