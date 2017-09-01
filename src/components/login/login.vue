<template>
    <div class="login">
        <div class="logo">
            <router-link to="/">
                <img src="../../images/logo.png" />
            </router-link>
        </div>
        <div class="login-main">
            <div class="title">
                <router-link to="/login/signin">
                    <button class="btn-label btn-label-login" type="text">登陆</button>
                </router-link>
                <label>·</label>
                <router-link to="/login/signup">
                    <button class="btn-label btn-label-register" type="text">注册</button>
                </router-link>
            </div>
                <router-view></router-view>
            <div class="login-other">———&nbsp&nbsp&nbsp社交账号登陆&nbsp&nbsp&nbsp———</div>
            <div class="login-other-li">
                <ul>
                    <li v-for="loginOther in loginOthers">
                        <img :src="loginOther" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        onValue: true,
        offValue: false
      },
      loginOthers: [
          require("../../images/qq.jpg"),
          require("../../images/weibo.jpg"),
          require("../../images/weixin.jpg")
      ]
    }
  }
}
</script>
<style scoped>
.login {
    height: 100%;
    min-height: 768px;
    width: 100%;
    background-color: #f1f1f1;
}

.login::before {
    content: " ";
    display: table;
}

.logo {
    position: absolute;
    top: 50px;
    left: 50px;
}

.login-main {
    background-color: #FFFFFF;
    width: 400px;
    margin-top: 60px;
    padding-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 50px;
    box-shadow: 0 0 8px #E9E9E9;
    border-radius: 4px;
}

.login-main label{
    font-weight: 700;
    color: #EA6F5A;
}

.btn-label {
    width: 56px;
    height: 40px;
    font-size: 18px;
    color: #B09696;
    border-bottom: 2px solid #FFF;
}

.title{
    height: 50px;
    text-align: center;
}

.btn-label:hover {
    border-bottom: 2px solid #EA6F5A;
}

.login-main button {
    border: none;
    background-color: #FFFFFF;
}

.submit {
    width: 300px;
}

.submit-btn {
    width: 300px;
    height: 43px;
    font-size: 20px;
    background-color: #3194D0;
    border-radius: 20px;
    border: none;
    color: #FFFFFF;
}

.login-other {
    width: 100%;
    height: 30px;
    font-size: 14px;
    color: black;
    color: #B5B5B5;
    margin-top: 30px;
    text-align: center;
}

.login-other-li ul {
    height: 130px;
    text-align: center;
}

.login-other-li ul li {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 0;
}

.login-other-li img {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: 50%;
}

.img-other {
    line-height: 50px;
    background-color: #F0F0F0;
    border-radius: 50%;
    border: 0;
}
.router-link-active button{
    color: #EA6F5A;
    border-bottom: 2px solid #EA6F5A;
}
.router-link button{
    border-bottom: 2px solid #FFFFFF;
}
</style>

