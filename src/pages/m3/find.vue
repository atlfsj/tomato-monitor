<template>
    <div>
        <!-- 使用 antd Upload 组件来实现文件上传，并预览图片 -->
        <div v-if="!previewUrl">
            <a-upload :before-upload="handleBeforeUpload" :show-upload-list="false">
                <a-button>点击上传图片</a-button>
            </a-upload>
        </div>

        <div class="show">
            <!-- 展示上传的图片预览 -->
            <div v-if="previewUrl" class="half-width">
                <img :src="previewUrl" alt="Preview" class="uploaded-image" />
            </div>

            <!-- 展示上传结果 -->
            <div v-if="uploadResult" class="result">
                <p>种类: {{ uploadResult.class }}</p>
                <p>概率: {{ uploadResult.probability }}</p>
                <p>治疗方法：{{ uploadResult.zhiliao }}</p>
                
            </div>
        </div>
        
    </div>
</template>

<script>
import { Upload, Button, Input } from 'ant-design-vue';

export default {
    components: {
        'a-upload': Upload,
        'a-button': Button,
        'a-textarea': Input.TextArea,
    },

    data() {
        return {
            // 上传结果信息
            uploadResult: null,
            // previewUrl: null,
            uploadButton: true,
        };
    },
    props: {
        previewUrl: String,
        //uploadResult: Object
    },
    methods: {
        // 上传前的处理
        handleBeforeUpload(file) {
            // 使用 FileReader 对象预览图片
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                this.$emit('update:previewUrl', reader.result); // 发送预览图片的事件
            };

            // 创建 FormData 对象, 并将图片文件添加到以后端预期的字段名 “file” 中
            const formData = new FormData();
            formData.append('url', file);

            // 发送 POST 请求，将图片文件上传到 Flask 后端
            fetch('http://192.168.185.20:5000', {
                method: 'POST',
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        // 获取后端返回的预测结果
                        return response.json();
                    } else {
                        // 如果请求未成功，则打印错误信息
                        console.error('上传图片失败');
                        alert('上传图片失败');
                        this.uploadResult = null;
                    }
                })
                .then((result) => {
                    //this.$emit('update:uploadResult', result);
                    this.uploadResult = result;
                    console.log('后端响应:', result); // 打印后端响应
                })
                .catch((error) => {
                    console.error('上传图片时出现错误:', error);
                });
            // 上传后隐藏按钮
            this.uploadButton = !this.uploadButton;
        },

    },
};
</script>

<style scoped>
.half-width {
    display: flex;
    width: 100%;
}

.uploaded-image {
    max-width: 50%;
    max-height: 100%;
    min-width: 250px;
    height: 250px;
}

.result {
    color: red;
    border: 1px solid red;
    height: 250px;
    padding: 10px;
    min-width: 600px;
}

.textarea {
    width: 100%;
}

.show {
    display: flex;
    flex-direction: row;

}
p{
    margin-top: 15px;
    margin-left: 15px
}
</style>