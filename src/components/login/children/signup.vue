<template>
    <div class="user-form">
        <form>
            <div class="user-message user-name">
                <i class="iconfont">&#59064;</i>
                <input class="user-input" v-model="userName" id="user-name" name="user-name" type="text" placeholder="你的昵称"></input>
            </div>
            <div class="user-message user-phone">
                <i class="iconfont">&#59064;</i>
                <input class="user-input" v-model="userPhone" id="user-phone" name="user-phone" type="text" placeholder="手机号"></input>
            </div>
            <div class="user-message user-phone-code">
                <i class="iconfont">&#xe63a;</i>
                <input class="user-input" v-model="phoneCode" id="user-phone-code" name="user-phone-code" type="text" placeholder="手机验证码"></input>
                <input class="get-phone-code" type="button" value="发送验证码"/>
            </div>
            <div class="user-message password">
                <i class="iconfont">&#xe652;</i>
                <input class="user-input" v-model="password" id="password" name="password" type="password" placeholder="设置密码"></input>
            </div>
            <div class="register">
                <input class="register-btn" @click.prevent="count()" type="submit" value="注册" />
            </div>
            <div class="protocol">
                点击 “注册” 即表示您同意并愿意遵守简书<br/>
                <a>用户协议</a> 和 <a>隐私政策</a>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  data(){
      return {
          userName: '',
          userPhone: '',
          phoneCode: '',
          password: ''
      }
  }
}
</script>


<style scoped>
.login-main button {
    border: none;
    background-color: #FFFFFF;
}

.btn-label-register{
    font-weight: 700px;
    color: #EA6F5A;
}
.user-form {
    padding-top: 35px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}

.input-main {
    width: 300px;
    height: 50px;
}

.user-message {
    font-size: 14px;
    text-indent: 4px;
    width: 300px;
    height: 50px;
    border: 1px solid #C8C8C8;
    position: relative;
}

.user-name {
    border-bottom: none;
    border-radius: 5px 5px 0 0;
}
.user-phone,.user-phone-code{
    border-bottom: none;
}

.password {
    border-radius: 0 0 5px 5px;
}

.user-input {
    border: none;
    width: 85%;
    padding-top: 15px;
}

.remember-password {
    width: 300px;
    margin-right: 61px;
    margin-left: 0px;
    padding-left: 0px;
    margin-top: 15px;
    margin-bottom: 15px;
}

.remember-password-problem {
    margin-left: 80px;
    padding-left: 55px;
    width: 150px;
    border: none;
    background-color: #FFFFFF;
    color: #999999;
    font-size: 14px;
}

.get-phone-code{
    position: absolute;
    top: 7px;
    right: 7px;
    width: 100px;
    height: 36px;
    background-color: #42C02E;
    border-radius: 20px;
    color: #FFFFFF;
    border: none;
}

.register {
    width: 300px;
    margin-top: 20px;
}

.register-btn {
    width: 300px;
    height: 43px;
    font-size: 20px;
    background-color: #3194D0;
    border-radius: 20px;
    border: none;
    color: #FFFFFF;
}
.register-btn:hover{
    background-color: #2A7EB1;
}

.login-other {
    width: 100%;
    height: 30px;
    font-size: 14px;
    color: black;
    color: #B5B5B5;
    margin-top: 30px;
}

.login-other-li ul {
    height: 130px;
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
.protocol{
    margin-top: 8px;
    font-size: 10px;
    text-align: center;
}
</style>
