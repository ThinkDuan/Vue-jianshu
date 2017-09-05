<template>
  <div class="tabList">
      <a v-for="tab in tabList" :href="tab.imgClickUrl" :key="tab.key">
          <img :src="tab.imgUrl" >
          <b>{{tab.name}}</b>
      </a>
      <a class="moretab">
          更多热门专题<i class="iconfont">&#xe666;</i>
      </a>
  </div>
</template>
<script>
export default {
  data () {
      return {
          tabList:[{
              key: 0,
              imgClickUrl:"",
              imgUrl: require('../../../../images/00.jpg'),
              name: "读书"
          },{
              key: 1,
              imgClickUrl:"",
              imgUrl: require('../../../../images/01.jpg'),
              name: "手帐圈"
          },{
              key: 2,
              imgClickUrl:"",
              imgUrl: require('../../../../images/02.jpg'),
              name: "读书"
          },{
              key: 3,
              imgClickUrl:"",
              imgUrl: require('../../../../images/03.jpg'),
              name: "读书"
          },{
              key: 4,
              imgClickUrl:"",
              imgUrl: require('../../../../images/04.jpg'),
              name: "读书"
          },{
              key: 5,
              imgClickUrl:"",
              imgUrl: require('../../../../images/01.jpg'),
              name: "读书"
          },{
              key: 6,
              imgClickUrl:"",
              imgUrl: require('../../../../images/01.jpg'),
              name: "读书"
          },{
              key: 7,
              imgClickUrl:"",
              imgUrl: require('../../../../images/01.jpg'),
              name: "读书"
          }
          ]
      }
  }
}
</script>
<style scoped>
.tabList{
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-size: 14px;
    border-bottom: 1px solid #F0F0F0;
}
.tabList a{
    height: 33px;
    margin-right: 30px;
    margin-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #eee;
    border-radius: 5px;
    border: 1px solid #bbbbbb;
}
.tabList img{
    height: 33px;
    width: 33px;
    border-radius: 5px 0 0 5px;
}
.tabList b{
    padding-left: 10px;
    padding-right: 10px;
}
.moretab{
    border: none!important;
    background-color: #FFFFFF!important;
    color: #787878!important;
    font-size: 14px;
}
.moretab i{
    font-size: 12px;
    padding: 0 5px;
}
</style>


