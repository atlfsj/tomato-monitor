<template>
    <div>
        <!-- 创建一个文件上传输入框 -->
        <input type="file" @change="uploadImage">
        <!-- 展示上传结果，若成功则显示种类和概率 -->
        <div class="result" v-if="uploadResult">
            <p>种类: {{ uploadResult.class }}</p>
            <p>概率: {{ uploadResult.probability }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // 上传结果信息
            uploadResult: null
        };
    },
    methods: {
        async uploadImage(event) {
            // 获取用户选择的图片文件
            const file = event.target.files[0];
            // 创建一个 FormData 对象, 并将图片文件添加到以后端预期的字段名 “url” 中
            const formData = new FormData();
            formData.append('url', file); // 确保字段名称与 Flask 后端代码匹配

            try {
                // 发送 POST 请求，将图片文件上传到 Flask 后端
                const response = await fetch('http://192.168.139.20:5000', {  // 确保 URL 是 Flask 服务器的地址
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    // 获取后端返回的预测结果
                    const result = await response.json();
                    this.uploadResult = result;
                    console.log("后端响应:", result); // 打印后端响应

                } else {
                    // 如果请求未成功，则打印错误信息
                    console.error('上传图片失败');
                    this.uploadResult = null;
                }
            } catch (error) {
                console.error('上传图片时出现错误:', error);
            }
        }
    }
};
</script>

<style>
.result {
    color: aliceblue;
}
</style>