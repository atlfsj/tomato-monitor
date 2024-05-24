<template>
    <div class="title">番茄病害监测</div>
    <div class="video">
        <video ref="videoPlayer" width="700" height="400" autoplay muted>
            <source src="../../../../public/monitor.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
export default {
    mounted() {
        // 获取视频元素
        const videoElement = this.$refs.videoPlayer;
        // 设置默认播放速度为0.25
        videoElement.playbackRate = 0.25;
        // 设置视频播放起始时间为17秒
        videoElement.currentTime = 17;
        // 播放视频
        videoElement.play();
    }
};
</script>

<style>
.title {
    color: white;
    text-align: center;
    font-size: 12pt;
}

.video {
    display: flex;
    justify-content: center;
}

video::-webkit-media-controls {
    display: none !important;
}

video::-webkit-media-controls-enclosure {
    display: none !important;
}

video::-webkit-media-controls-panel {
    display: none !important;
}
</style>
