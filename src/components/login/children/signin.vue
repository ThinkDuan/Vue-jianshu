<template>
    <div class="user-form">
        <form>
            <div class="user-message user-name">
                <i class="iconfont">&#59064;</i>
                <input class="user-input" id="user-name" name="user-name" type="text" placeholder="请输入手机号邮箱或者登录名"></input>
            </div>
            <div class="user-message password">
                <i class="iconfont">&#xe652;</i>
                <input class="user-input" id="password" name="password" type="password" placeholder="请输入密码"></input>
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
                <input class="submit-btn" type="submit" value="登陆" />
            </div>
        </form>
    </div>
</template>
<script>

</script>
<style scoped>
.login-main button {
    border: none;
    background-color: #FFFFFF;
}

.btn-label-login{
    font-weight: 700px;
    color: #EA6F5A;
}

.user-form {
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

.remember-password-problem:hover{
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

.submit-btn:hover{
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
</style>
