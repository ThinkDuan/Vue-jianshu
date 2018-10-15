<template>
    <div class="user-form">
        <form>
            <div class="user-message">
                <i class="iconfont user-message-icon">&#59064;</i>
                <input class="user-input user-name" v-model="userName" id="user-name" name="user-name" type="text" placeholder="你的昵称"/>
            </div>
            <div class="user-message">
                <i class="iconfont user-message-icon">&#59064;</i>
                <input class="user-input user-phone" v-model="userPhone" id="user-phone" name="user-phone" type="text" placeholder="手机号"/>
            </div>
            <div class="user-message" v-if="showUserPhoneCode">
                <i class="iconfont user-message-icon">&#xe63a;</i>
                <input class="user-input user-phone-code" v-model="phoneCode" id="user-phone-code" name="user-phone-code" type="text" placeholder="手机验证码"/>
                <button class="get-phone-code" :disabled="showUserPhoneCodeButton">发送验证码</button>
            </div>
            <div class="user-message">
                <i class="iconfont user-message-icon">&#xe652;</i>
                <input class="user-input password" v-model="password" id="password" name="password" type="password" placeholder="设置密码"/>
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
  watch: {
    userPhone: function(){}
  },
  data() {
    return {
      userName: "",
      userPhone: "",
      phoneCode: "",
      password: "",
      showUserPhoneCode: false,
      showUserPhoneCodeButton: false
    };
  }
};
</script>


<style scoped>
.login-main button {
  border: none;
  background-color: #ffffff;
}

.btn-label-register {
  font-weight: 700px;
  color: #ea6f5a;
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
  position: relative;
}

.user-input {
  box-sizing: border-box;
  border: 1px solid #c8c8c8;
  width: 300px;
  height: 50px;
  background-color: #ffffff;
  padding: 4px 12px 4px 35px;
}

.user-name {
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.user-phone,
.user-phone-code {
  border-bottom: none;
}

.password {
  border-radius: 0 0 4px 4px;
}
.user-message-icon {
  position: absolute;
  top: 14px;
  left: 10px;
  font-size: 18px;
  color: #969696;
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
  background-color: #ffffff;
  color: #999999;
  font-size: 14px;
}

.get-phone-code {
  position: absolute;
  top: 7px;
  right: 7px;
  width: 100px;
  height: 36px;
  background-color: #42c02e;
  border-radius: 20px;
  color: #ffffff;
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
  background-color: #3194d0;
  border-radius: 20px;
  border: none;
  color: #ffffff;
}
.register-btn:hover {
  background-color: #2a7eb1;
}

.login-other {
  width: 100%;
  height: 30px;
  font-size: 14px;
  color: black;
  color: #b5b5b5;
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
  background-color: #f0f0f0;
  border-radius: 50%;
  border: 0;
}
.protocol {
  margin-top: 8px;
  font-size: 10px;
  text-align: center;
}
</style>
