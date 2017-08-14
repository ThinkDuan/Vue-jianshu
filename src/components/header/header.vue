<template>
    <div class="nav">
        <div class="nav-main">
            <div class="first">
                <div class="logo">
                    <router-link to="/">
                        <img src="../../images/logo.png" />
                    </router-link>
                </div>
                <div class="list-drop-mean">
                    <button class="list-drop-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <div class="list">
                    <ul>
                        <li class="li-show">
                            <span>首页</span>
                            <i class="iconfont">&#xe64f;</i>
                        </li>
                        <li class="li-show">
                            <span>下载APP</span>
                            <i class="iconfont">&#xe714;</i>
                        </li>
                        <li>
                            <form>
                                <input class="search" />
                                <i class="iconfont">&#xe6ac;</i>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="user-btn-group">
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
    height: 56px;
    overflow: hidden;
    border: none;
    border-bottom: 1px solid #F0F0F0;
}

.nav-main {
    width: 100%;
    height: 58px;
    border: none;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
}

.first {
    width: 700px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
}

.user-btn-group {
    display: flex;
    display: -webkit-flex;
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
.list-drop-button{
    width: 46px;
    height: 37px;
    border-radius: 5px;
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
    text-align: center;
}
.list-drop-button span{
    display: block;
    width: 22px;
    height: 5px;
    border-top: 2px solid #888888;
    margin-left: 12px;
}
.list-drop-button span:first-child{
    margin-top: 5px;
}
.li-show:hover{
    color: #F66F6F;
    cursor: pointer;
    font-weight: 600;
}
@media screen and (max-width:768px) {
    .list{
        display: none;
    }
}
@media screen and (min-width:768px) and (max-width:1080px) {
    .list ul li {
        font-size: 18px;
        margin-left: 25px;
        border: none;
        display: inline-block;
    }
    .li-show span {
        display: none;
    }
    .list-drop-mean{
        display: none;
    }
}

@media screen and (min-width:1080px) {
    .list ul li {
        font-size: 18px;
        margin-left: 40px;
        border: none;
        display: inline-block;
    }
    .li-show i {
        display: none;
    }
    .list-drop-mean{
        display: none;
    }
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
.btn-register:hover{
    background-color: #E3DCDC;
}

.btn-write {
    width: 100px;
    height: 40px;
}
.btn-write:hover{
    background-color: #EB3333;
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

