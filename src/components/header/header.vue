<template>
    <div class="nav">
        <div class="nav-main">
            <div class="logo">
                <router-link to="/">
                    <img src="../../images/logo.png" />
                </router-link>
            </div>
            <div class="list">
                <ul>
                    <li>首页</li>
                    <li>下载APP</li>
                    <li>
                        <form>
                            <input class="search" />
                            <i class="iconfont">&#xe6ac;</i>
                        </form>
                    </li>
                </ul>
            </div>
            <div class="user">
                <button class="btn btn-switch">Aa</button>
            </div>
            <div class="login">
                <router-link to="/login/signin">
                    <button class="btn btn-login">登陆</button>
                </router-link>
            </div>
            <div class="register">
                <router-link to="/login/signup">
                    <button class="btn btn-register">注册</button>
                </router-link>
            </div>
            <div class="write">
                <button class="btn btn-write" type="button">
                    <i class="iconfont">&#59038;</i>&nbsp写文章</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.nav {
    position: absolute;
    top: 0px;
    width: 100%;
    min-width: 768px;
    max-width: 1440px;
    text-align: center;
    height: 56px;
    overflow: hidden;
    border: none;
    border-bottom: 1px solid #F0F0F0;
}

.nav-main {
    width: 100%;
    height: 58px;
    border: none;
}

.logo {
    float: left;
    padding: 14px 25px 15px 20px;
    height: 26px;
    width: 55px;
}

.logo img {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.nav div {
    display: inline-block;
}

.list {
    float: left;
    margin-left: 70px;
    margin-right: 360px;
    padding-top: 10px;
}

.list ul li {
    font-size: 18px;
    margin-left: 40px;
    border: none;
    display: inline-block;
}

.list ul li>form {
    border: none;
    width: 210px;
    height: 38px;
    background-color: #EEEEEE;
    border-radius: 20px;
}

.search {
    height: 38px;
    width: 160px;
    border-radius: 20px;
    border: none;
    background-color: #EEEEEE;
    text-indent: 5px;
}

.btn {
    height: 38px;
    border-radius: 20px;
    border: none;
    font-size: 16px;
    background-color: #ffffff;
}

.btn-switch {
    font-size: 15px;
}

.btn-login {
    width: 56px;
    font-size: 15px;
}

.btn-register {
    width: 80px;
    border: 1px solid #F1907F;
}

.btn-write {
    width: 100px;
    height: 40px;
}

.user,
.write,
.register,
.login {
    padding: 10px;
}

.btn-user,
.btn-write,
.btn-login,
.btn-switch {
    color: #C0A396;
}

.btn-register {
    color: #EA6F5A;
}

.write {
    right: 10px;
}

.btn-write {
    width: 100px;
    background-color: #EA6F5A;
    color: #FFFFFF;
}
</style>

