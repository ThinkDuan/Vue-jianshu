<template>
  <div class="container">
      <router-view></router-view>
      <div class="row">
          <div class="main">
              <div class="main-top">
                  <div class="main-top-link">
                      <div class="logo">
                          <img src="../../images/jianshu.png"/>
                      </div>
                      <div>
                          <div class="title"></div>
                          <ul class="info">
                              <li>
                                  <div class="meta-block">
                                        <p></p>
                                        关注
                                        <i class="iconfont"></i>
                                  </div>
                              </li>
                               <li>
                                  <div class="meta-block">
                                        <p></p>
                                        关注
                                        <i class="iconfont"></i>
                                  </div>
                              </li>
                               <li>
                                  <div class="meta-block">
                                        <p></p>
                                        关注
                                        <i class="iconfont"></i>
                                  </div>
                              </li>
                               <li>
                                  <div class="meta-block">
                                        <p></p>
                                        关注
                                        <i class="iconfont"></i>
                                  </div>
                              </li>
                               <li>
                                  <div class="meta-block">
                                        <p></p>
                                        关注
                                        <i class="iconfont"></i>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="main-top-btn">
                      <div></div>
                      <div></div>
                  </div>
              </div>
              <ul class="trigger-menu"></ul>
              <div class="list-container"></div>
          </div>
          <div class="aside">
              <div class="title">个人介绍</div>
              <div class="description"></div>
              <ul class="list user-dynamic"></ul>
          </div>
      </div>
  </div>
</template>
<style scoped>
.row{
    margin:0 auto;
    margin-top: 58px;
    padding-top: 30px;
    width: 72%;
    min-width: 768px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    box-sizing: border-box;
}
.main{
    width: 66.7%;
}
.aside{
    width: 33.3%;
    background-color: #D91919;
}
.main-top{
    width: 100%;
    height: 80px;
    padding-bottom: 20px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
}
.main-top-link{
    width: 66.7%;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
}
.main-top-btn{
    width: 33.3%;
}
.logo{
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border: 1px solid #E8E8E8;
    border-radius: 50%;
}
.logo img{
    width: 100%;
    height: 100%;
}
</style>
