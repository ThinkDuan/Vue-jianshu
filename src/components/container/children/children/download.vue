<template>
  <div class="download">
      <a :href="clickUrl">
          <img :src="imageUrl" alt="">
          <div class="right">
              <p><i class="iconfont">下载简书手机App &#xe666;</i> </p>
              <b>随时随地发现和创作内容</b>
          </div>
      </a>
  </div>
</template>
<script>
export default {
  data () {
      return {
          clickUrl: "",
          imageUrl: require('../../../../images/erweima.png')
      }
  }
}
</script>
<style scoped>
.download{
    display: inline-flex;
    display: -webkit-inline-flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 82px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
}
.download img{
    width: 60px;
    height: 60px;
}
.download a{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}
.right{
    margin-left: 7px;
}
.right p{
    font-size: 15px;
    color: #333;
}
.right b{
    font-size: 13px;
    color: #999;
    font-weight: 300;
}
.iconfont{
    font-weight: 300
}
</style>

