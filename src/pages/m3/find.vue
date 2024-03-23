<template>
  <div class="find">
    <div v-if="!fileList.length" class="full-width">
      <a-upload-dragger :file-list="fileList" :custom-request="customRequest" :before-upload="beforeUpload"
        :show-upload-list="false" class="full-height">
        <!-- 如果文件列表为空，显示拖拽上传区域 -->
        <div class="upload-container">
          <!-- 拖拽上传区域的图标 -->
          <p class="ant-upload-drag-icon">
            <a-icon type="inbox" />
          </p>
          <!-- 拖拽上传区域的提示文本 -->
          <p class="ant-upload-text">点击或拖拽上传图片</p>
        </div>
      </a-upload-dragger>
    </div>

    <div v-else class="half-width">
      <!-- 如果文件列表不为空，显示已上传的图片 -->
      <img class="uploaded-image" :src="fileList[0].url" alt="Uploaded" @click="getResultGroups" />
      <!-- 识别结果展示区域 -->
      <div class="result-show">
        <div v-for="(group, groupIndex) in resultGroups" :key="groupIndex">
          <div v-for="(result, resultIndex) in group" :key="resultIndex">
            <a-input :addon-before="result.label" v-model:value="result.value" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { message } from 'ant-design-vue';
import axios from 'axios';

export default {
  data() {
    return {
      fileList: [],
      resultGroups: [] // 确保定义 resultGroups
    };
  },

  methods: {
    // 在上传前进行文件类型检查
    beforeUpload(file) {
      const isImage = file.type.startsWith('image/');
      // 如果不是图片类型，显示错误提示
      if (!isImage) {
        message.error('You can only upload image files!');
      }
      // 返回检查结果，允许上传图片则返回 true，否则返回 false
      return isImage;
    },
    // 模拟文件上传过程，并更新文件列表
    customRequest({ file, onSuccess }) {
      // 模拟文件上传的延时操作
      setTimeout(() => {
        // 上传成功的回调函数
        onSuccess();

        // 假设服务器返回的数据包含图片地址
        const imageUrl = URL.createObjectURL(file);

        // 更新文件列表，添加上传成功的文件信息
        this.fileList = [{
          uid: file.uid,
          name: file.name,
          status: 'done',
          url: imageUrl
        }];
        console.log(this.fileList[0].url);
        this.getResultGroups();
      }, 1000);
    },
    getResultGroups() {
      const blobUrl = this.fileList[0].url
      axios.post('http://localhost:3000/blob', {
        url: blobUrl
      }).then(() => {
        alert('上传成功')
        console.log(blobUrl)
      }).catch(() => {
        alert('上传失败')
      }).then(() => {
        axios.get('http://localhost:3000/result', {

        }).then(response => {
          this.resultGroups = response.data
        }).catch(() => {
          alert('识别失败')
        })
      })

      /*axios.get('http://localhost:3000/result')
        .then(response => {
          // Assuming the resultGroups data is returned in the response
          this.resultGroups = response.data;
        })
        .catch(error => {
          console.error('Failed to fetch resultGroups:', error);
          alert('获取数据失败');
        });*/
    },
  },
};
</script>

<style scoped>
.find {
  background-color: aliceblue;
  width: 100%;
  height: 100%;
}

.full-width {
  width: 100%;
}

.half-width {
  display: flex;
  width: 100%;
}

.full-height {
  height: 100%;
}

.upload-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.ant-upload-text {
  margin-top: 10px;
  color: #666;
}

.uploaded-image {
  max-width: 50%;
  max-height: 100%;
}

.result-show {
  max-width: 50%;
  height: 100%;
  overflow-y: auto;
  /* 添加滚动条，以防结果过多溢出 */
}

.result-show::-webkit-scrollbar {
  width: 5px;
}

.result-show::-webkit-scrollbar-thumb {
  background-color: #ccc;
}
</style>
