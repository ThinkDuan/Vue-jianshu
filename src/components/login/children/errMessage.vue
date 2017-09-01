<template>
    <div class="errMessage" v-show="needErrMessage">
        <div class="errMessage-arrow"></div>
        <div class="errMessage-arrow-bg"></div>
        <div class="errMessage-inner">
            <i class="iconfont">&#xe65e;</i>
            <span>{{ errMessage }}</span>
        </div>
    </div>
</template>
<style scoped>
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
