<template>
  <div class="video-container">
    <video ref="videoPlayer" width="300" height="160" autoplay muted @timeupdate="updateProgress">
      <source src="../../../../public/fangzhi.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="progress-bar" @click="seek">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      progress: 0
    };
  },
  mounted() {
    // 获取视频元素
    const videoElement = this.$refs.videoPlayer;

    // 设置视频播放起始时间为17秒
    videoElement.currentTime = 17;
    // 播放视频
    videoElement.play();
  },
  methods: {
    updateProgress() {
      const videoElement = this.$refs.videoPlayer;
      this.progress = (videoElement.currentTime / videoElement.duration) * 100;
    },
    seek(event) {
      const videoElement = this.$refs.videoPlayer;
      const progressBar = event.currentTarget;
      const clickX = event.offsetX;
      const progressBarWidth = progressBar.offsetWidth;
      const newTime = (clickX / progressBarWidth) * videoElement.duration;
      videoElement.currentTime = newTime;
    }
  }
};
</script>

<style>
.video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar {
  width: 300px;
  height: 10px;
  background-color: #ddd;
  cursor: pointer;
  margin-top: 10px;
  position: relative;
}

.progress {
  height: 100%;
  background-color: #76c7c0;
  width: 0;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
