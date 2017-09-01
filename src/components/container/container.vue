<template>
  <div class="container">
      <header-nav></header-nav>
      <banner></banner>
      <div>
          <main></main>
          <sider></sider>
      </div>
  </div>
</template>
<script>
import HeaderNav from '../header/header'
import Banner from '../banner/banner'
import Sider from './children/sider'
import Main from './children/main'
export default {
  components:{
      HeaderNav,
      Banner,
      Sider,
      Main
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
</style>
