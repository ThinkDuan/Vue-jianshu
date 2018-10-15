<template>
    <div class="user-form">
        <form>
          <div class="user-message">
            <i class="iconfont user-message-icon">&#59064;</i>
            <input class="user-input user-name" id="user-name" @change="isRightUserName()" name="user-name" v-model="userName" type="text" placeholder="请输入手机号邮箱或者登录名"/>
          </div>
            <div class="user-message">
              <i class="iconfont user-message-icon">&#xe652;</i>
              <input class="user-input password" id="password" name="password" v-model="password" type="password" placeholder="请输入密码"/>
            </div>
            <div class="get-slider">
              <div class="slider">滑块验证占位</div>
              <div class="slider-ready">
                  <i class="iconfont">&#xe652;</i>
              </div>
            </div>
            <div class="remember-password">
              <input type="checkbox"/>
              <span>记住我</span>
              <input class="remember-password-problem" type="button" value="登陆遇到问题？" />
            </div>
            <div class="submit">
              <input class="submit-btn" type="submit" @click.prevent="isRightUserName()" value="登陆" />
            </div>
        </form>
    </div>
</template>
<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      errMessage: "",
      needErrMessage: false
    };
  },
  computed: {
    rightUserName: function() {
      return /^1\d{10}$/gi.test(this.userName);
    }
  },
  methods: {
    isRightUserName: function() {
      let isRightUserName = false;
      let isEmail = /[@]/g;
      let phoneReg = /^1[34578]\d{9}$/;
      let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+[.]([a-zA-Z0-9_-])+$/;
      if (this.userName === "") {
        isRightUserName = false;
        this.errMessage = "";
        this.needErrMessage = false;
      } else {
        if (isEmail.test(this.userName)) {
          if (!emailReg.test(this.userName)) {
            this.errMessage = "邮箱错误,请重新输入";
            this.needErrMessage = true;
          } else {
            this.errMessage = "";
            this.needErrMessage = false;
          }
        } else {
          if (!phoneReg.test(this.userName)) {
            this.errMessage = "手机号错误,请重新输入";
            this.needErrMessage = true;
          } else {
            this.errMessage = "";
            this.needErrMessage = false;
          }
        }
      }
    }
  }
};
</script>
<style scoped>
.login-main button {
  border: none;
  background-color: #ffffff;
}

.btn-label-login {
  font-weight: 700px;
  color: #ea6f5a;
}

.user-form {
  position: relative;
  padding-top: 35px;
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
form {
  width: 300px;
}

.input-main {
  width: 300px;
  height: 50px;
}

.user-message {
  font-size: 14px;
  position: relative;
}


.user-message-icon{
  position: absolute;
  top: 14px;
  left: 10px;
  font-size: 18px;
  color: #969696;
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

.password {
  border-radius: 0 0 4px 4px;
}

.remember-password {
  margin-top: 15px;
}
.remember-password>span{
  margin-left: 5px;
  font-size: 15px;
  color: #969696;
}
.remember-password-problem {
  float: right;
  border: none;
  background-color: #ffffff;
  color: #999999;
  font-size: 14px;
  cursor: pointer;
}

.remember-password-problem:hover {
  color: #000;
}

.get-slider {
  display: none;
  width: 300px;
  height: 28px;
  margin-top: 20px;
}

.get-slider div {
  float: left;
}

.slider {
  width: 261px;
  height: 28px;
  background-color: #ece4dd;
}

.slider-ready {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #4dbcff;
  margin-left: 10px;
}

.slider-ready i {
  line-height: 26px;
  color: #ffffff;
}

.submit {
  width: 300px;
}

.submit-btn {
  width: 300px;
  height: 43px;
  font-size: 20px;
  background-color: #3194d0;
  border-radius: 20px;
  border: none;
  color: #ffffff;
  margin-top: 20px;
}

.submit-btn:hover {
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
</style>
