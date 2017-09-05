<template>
    <div class="recommend">
        <div class="title">
            <b>推荐作者</b>
            <a :href="clickTitleUrl"><i class="iconfont">&#xe6aa;</i> 换一批</a>
        </div>
        <div class="userMessage" v-for="list in recommendList" :key="list.key">
            <a class="content" :href="list.clickPaperUrl">
                <img :src="list.imageUrl" alt="">
            </a>
            <a class="middle" href="">
                <p>{{list.userName}}</p>
                <p>写了{{list.wordCount}}k字 {{list.likeCount}}k喜欢</p>
            </a>
            <a class="follow" :href="list.clickFollowUrl">
                <i class="iconfont">&#xe767;关注</i>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clickTitleUrl: "",
            recommendList: [{
                key: 0,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend0.png'),
                userName: "刘淼",
                wordCount: 58.3,
                likeCount: 4.5
            }, {
                key: 1,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend1.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }, {
                key: 2,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend2.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }, {
                key: 3,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend3.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }, {
                key: 4,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend4.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }, {
                key: 5,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend1.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }, {
                key: 6,
                clickPaperUrl: "",
                clickFollowUrl: "",
                imageUrl: require('../../../../images/recommend2.png'),
                userName: "简书出版",
                wordCount: 60.3,
                likeCount: 4.8
            }
            ]
        }
    }
}
</script>
<style scoped>
.recommend {
    width: 100%;
}

.title {
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
}

.title b,
a {
    font-size: 14px;
    color: #969696;
}
.userMessage{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
}
.content {
    display: flex;
    display: -webkit-flex;
    align-items: center;
}

.content img {
    border-radius: 50%;
    width: 48px;
    height: 48px;
}

.content b {
    font-size: 14px;
    margin-left: 10px;
}

.middle p:first-child{
    font-size: 14px;
    color: #333;
}
.middle p:last-child{
    font-size: 12px;
    cursor: text;
}
.follow{
    align-self: flex-start;
    margin-top: 10px;
}
.iconfont{
    font-size: 13px;
    color: #42c02e;
}
</style>


