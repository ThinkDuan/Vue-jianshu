<template>
  <div>
    <board></board>
    <download-jianshu class="download"></download-jianshu>
    <jianshu-daily class="daily"></jianshu-daily>
    <recommend class="recommend"></recommend>
  </div>
</template>
<script>
import Board from './children/board'
import JianshuDaily from './children/jianshuDaily'
import Recommend from './children/recommend'
import DownloadJianshu from './children/download'
export default {
  components: {
    Board,
    JianshuDaily,
    Recommend,
    DownloadJianshu
  }
}
</script>
<style scoped>
.download{
  margin-top: 10px;
}
.daily{
  margin-top:30px;
}
.recommend{
  margin-top: 30px;
}
</style>

