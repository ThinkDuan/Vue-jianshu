<template>
    <div class="user-form">
        <form>
            <div class="user-message user-name">
                <i class="iconfont">&#59064;</i>
                <input class="user-input" id="user-name" @change="isRightUserName()" name="user-name" v-model="userName" type="text" placeholder="请输入手机号邮箱或者登录名"></input>
            </div>
            <div class="user-message password">
                <i class="iconfont">&#xe652;</i>
                <input class="user-input" id="password" name="password" v-model="password" type="password" placeholder="请输入密码"></input>
            </div>
            <div class="get-slider">
                <div class="slider">滑块验证占位</div>
                <div class="slider-ready">
                    <i class="iconfont">&#xe652;</i>
                </div>
            </div>
            <div class="remember-password">
                <input type="radio" value="记住我" />记住我
                <input class="remember-password-problem" type="button" value="登陆遇到问题？" />
            </div>
            <div class="submit">
                <input class="submit-btn" type="submit" @click.prevent="isRightUserName()" value="登陆" />
            </div>
        </form>
        <div class="errMessage" v-show="needErrMessage">
            <div class="errMessage-arrow"></div>
            <div class="errMessage-arrow-bg"></div>
            <div class="errMessage-inner">
                <i class="iconfont">&#xe65e;</i>
                <span>{{ errMessage }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            userName: '',
            password: '',
            errMessage: '',
            needErrMessage: false,
        }
    },
    computed: {
        rightUserName: function () {
            return /^1\d{10}$/gi.test(this.userName)
        }
    },
    methods: {
        isRightUserName: function () {
            let isRightUserName = false;
            let isEmail = /[@]/g;
            let phoneReg = /^1[34578]\d{9}$/;
            let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+[.]([a-zA-Z0-9_-])+$/;
            if (this.userName === '') {
                isRightUserName = false;
                this.errMessage = '';
                this.needErrMessage = false;
            } else {
                if (isEmail.test(this.userName)) {
                    if (!emailReg.test(this.userName)) {
                        this.errMessage = "邮箱错误,请重新输入";
                        this.needErrMessage = true;
                    } else {
                        this.errMessage = '';
                        this.needErrMessage = false;
                    }
                } else {
                    if (!phoneReg.test(this.userName)) {
                        this.errMessage = "手机号错误,请重新输入";
                        this.needErrMessage = true;
                    }else{
                        this.errMessage = '';
                        this.needErrMessage = false;
                    }
                }
            }
        }
    }
}
</script>
<style scoped>
.login-main button {
    border: none;
    background-color: #FFFFFF;
}

.btn-label-login {
    font-weight: 700px;
    color: #EA6F5A;
}

.user-form {
    position: relative;
    padding-top: 35px;
    margin-left: 50px;
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
}

.user-name {
    border-bottom: none;
    border-radius: 5px 5px 0 0;
}

.password {
    border-radius: 0 0 5px 5px;
}

.user-input {
    border: none;
    width: 85%;
    padding-top: 20px;
    background-color: #FFFFFF;
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

.remember-password-problem:hover {
    color: #000;
}

.get-slider {
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
    background-color: #ECE4DD;
}

.slider-ready {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #4DBCFF;
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
    background-color: #3194D0;
    border-radius: 20px;
    border: none;
    color: #FFFFFF;
}

.submit-btn:hover {
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

.errMessage {
    border: 1px solid #EC7D6A;
    margin-left: 10px;
    border-radius: 5px;
    position: absolute;
    top: 46px;
    left: 300px;
}

.errMessage-arrow {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-left: 1px solid #EC7D6A;
    border-bottom: 1px solid #EC7D6A;
    transform: rotate(45deg);
    margin-left: -5px;
    margin-top: 13px;
}

.errMessage-arrow-bg {
    background-color: #FFFFFF;
    z-index: 1000;
    width: 10px;
    height: 10px;
    margin-left: -1px;
    margin-top: -9px;
}

.errMessage-inner {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: -21px;
    margin-left: 5px;
    margin-right: 5px;
}

.errMessage-inner i {
    color: red;
}

.errMessage-inner span {
    line-height: 35px;
    word-break: keep-all;
    white-space: nowrap;
}
</style>
