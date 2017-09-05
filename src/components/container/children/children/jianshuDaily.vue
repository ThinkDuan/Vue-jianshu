<template>
  <div class="daily">
      <div class="title">
          <b>简书日报</b>
          <a :href="clickTitleUrl">查看往期</a>
      </div>
      <a class="content" v-for="list in dailyList" :key="list.key" :href="list.clickPaperUrl">
          <img :src="list.imageUrl" alt="">
          <b>{{list.paperTitle}}</b>
      </a>
  </div>
</template>
<script>
export default {
  data () {
      return {
          clickTitleUrl:"",
          dailyList:[{
              key: 0,
              clickPaperUrl: "",
              imageUrl: require('../../../../images/daily0.png'),
              paperTitle: "简婶揭秘006 —— 从产品的角度看中国有嘻哈的火爆"
          },{
              key: 1,
              clickPaperUrl: "",
              imageUrl: require('../../../../images/daily1.png'),
              paperTitle: "黛玉早报170903 ——《精神病人排行榜》"
          }

          ]
      }
  }
}
</script>
<style scoped>
.daily{
    width: 100%;
}
.title{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}
.title b,a{
    font-size: 14px;
    color: #969696;
}
.content{
    margin-top: 15px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
}
.content img{
    width: 48px;
    height: 48px;
}
.content b{
    font-size: 14px;
    margin-left: 10px;
}
</style>


