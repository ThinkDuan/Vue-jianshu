<template>
  <div class="container">
      <header-nav class="header"></header-nav>
      <banner class="banner"></banner>
      <div class="main">
          <main-content class="mainContent"></main-content>
          <sider class="sider"></sider>
      </div>
  </div>
</template>
<script>
import HeaderNav from '../header/header'
import Banner from '../banner/banner'
import Sider from './children/sider'
import MainContent from './children/mainContent'
export default {
  components:{
      HeaderNav,
      Banner,
      Sider,
      MainContent
  }
}
</script>

<style scoped>
.container{
    margin-top: 58px;
    min-width: 768px;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.banner{
    width: 65%;
}
.main{
    width: 65%;
    margin-top: 40px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
}
.mainContent{
    width: 66.66%;
}
.sider{
    width: 33.34%;
    padding-left: 40px;
}
.header{
    position: fixed;
    top: 0;
    overflow: hidden;
    z-index: 1000;
    background: #FFFFFF;
    opacity: 1;
}
</style>
