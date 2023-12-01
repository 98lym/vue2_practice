<template>
  <div id="frostedMirror">
    <video src="" id="video"></video>
  </div>
</template>
<script>
export default {
  name: 'frostedMirror',
  data() {
    return {
      video: null,
    }
  },
  created() {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: false,
      })
      .then((stream) => {
        this.video = document.getElementById('video')
        this.video.srcObject = stream
        this.video.onloadedmetadata = () => {
          this.video.play()
        }
      })
      .catch((e) => console.log(e))
  },
  methods: {
    stopVideo() {
      const stream = this.video.srcObject
      const tracks = stream.getTracks()

      // 停止所有轨道
      tracks.forEach((track) => track.stop())

      // 清空视频srcObject
      this.video.srcObject = null
    },
  },
  beforeRouteLeave(to, from, next) {
    // 调用关闭video的方法
    this.stopVideo()

    // 继续切换路由
    next()
  },
}
</script>
<style lang="scss" scope>
#video {
  width: 300px;
  height: 100px;
  object-fit: cover;
  filter: blur(2px) saturate(0.6) brightness(1.1);
  object-position: 0 -100px;
  transform: scaleX(-1);
}
</style>
