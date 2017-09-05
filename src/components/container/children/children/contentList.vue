<template>
    <ul>
        <li v-for=" list in noteList" :key="list.key">
            <div class="paperContent">
                <div class="author">
                    <a :href="list.clickUserUrl">
                        <img :src="list.imageUrl" alt="">
                    </a>
                    <div class="authorName">
                        <a :href="list.clickUserUrl">{{list.authorName}}</a>
                        <span>{{list.time}}</span>
                    </div>
                </div>
                <a class="paperTitle" :href="list.clickPaperUrl">{{list.paperTitle}}</a>
                <div class="abstract">{{list.paperAbout}}</div>
                <div class="meta">
                    <a class="tab" :href="list.clickTabUrl">{{list.tab}}</a>
                    <a :href="list.clickPaperurl">
                        <i class="iconfont">&#xe668; {{list.viewCount}}</i>
                    </a>
                    <a :href="list.clickPaperUrl">
                        <i class="iconfont">&#xe66b; {{list.messageCount}} </i>
                    </a>
                    <span>
                        <i class="iconfont">&#xe643; {{list.likeCount}}</i>
                    </span>
                    <span>
                        <i class="iconfont">&#xe657; {{list.money}}</i>
                    </span>
                </div>
            </div>
            <div class="paperImg">
                <a :href="list.clickPaperUrl">
                    <img :src="list.paperImgUrl" alt="">
                </a>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    data() {
        return {
            noteList: [{
                key: 0,
                clickUserUrl: "",
                clickPaperUrl: "",
                clickTabUrl: "",
                paperImgUrl: require('../../../../images/01.jpg'),
                imageUrl: require('../../../../images/00.jpg'),
                authorName: "罂粟姐姐",
                time: "前天 10:50",
                paperTitle: "F1~F12的妙用，80%的人第一个都没用过！",
                paperAbout: "在观察了周围同事操作Excel的过程后，发现功能键F1~F12的使用率非常低，有的功能键究竟有何用都不了解，所以今天就给大家详细说说Excel中F1~F12到底有何用？ F1...",
                tab: "上班这件事",
                viewCount: 1234,
                messageCount: 20,
                likeCount: 509,
                money: 10
            }, {
                key: 1,
                clickUserUrl: "",
                clickPaperUrl: "",
                clickTabUrl: "",
                paperImgUrl: require('../../../../images/01.jpg'),
                imageUrl: require('../../../../images/01.jpg'),
                authorName: "罂粟姐姐",
                time: "前天 10:50",
                paperTitle: "F1~F12的妙用，80%的人第一个都没用过！",
                paperAbout: "在观察了周围同事操作Excel的过程后，发现功能键F1~F12的使用率非常低，有的功能键究竟有何用都不了解，所以今天就给大家详细说说Excel中F1~F12到底有何用？ F1...",
                tab: "上班这件事",
                viewCount: 1234,
                messageCount: 20,
                likeCount: 509,
                money: 10
            }, {
                key: 2,
                clickUserUrl: "",
                clickPaperUrl: "",
                clickTabUrl: "",
                paperImgUrl: require('../../../../images/01.jpg'),
                imageUrl: require('../../../../images/01.jpg'),
                authorName: "罂粟姐姐",
                time: "前天 10:50",
                paperTitle: "F1~F12的妙用，80%的人第一个都没用过！",
                paperAbout: "在观察了周围同事操作Excel的过程后，发现功能键F1~F12的使用率非常低，有的功能键究竟有何用都不了解，所以今天就给大家详细说说Excel中F1~F12到底有何用？ F1...",
                tab: "上班这件事",
                viewCount: 1234,
                messageCount: 20,
                likeCount: 509,
                money: 10
            }, {
                key: 3,
                clickUserUrl: "",
                clickPaperUrl: "",
                clickTabUrl: "",
                paperImgUrl: require('../../../../images/01.jpg'),
                imageUrl: require('../../../../images/01.jpg'),
                authorName: "罂粟姐姐",
                time: "前天 10:50",
                paperTitle: "F1~F12的妙用，80%的人第一个都没用过！",
                paperAbout: "在观察了周围同事操作Excel的过程后，发现功能键F1~F12的使用率非常低，有的功能键究竟有何用都不了解，所以今天就给大家详细说说Excel中F1~F12到底有何用？ F1...",
                tab: "上班这件事",
                viewCount: 1234,
                messageCount: 20,
                likeCount: 509,
                money: 10
            }, {
                key: 4,
                clickUserUrl: "",
                clickPaperUrl: "",
                clickTabUrl: "",
                paperImgUrl: require('../../../../images/01.jpg'),
                imageUrl: require('../../../../images/01.jpg'),
                authorName: "罂粟姐姐",
                time: "前天 10:50",
                paperTitle: "F1~F12的妙用，80%的人第一个都没用过！",
                paperAbout: "在观察了周围同事操作Excel的过程后，发现功能键F1~F12的使用率非常低，有的功能键究竟有何用都不了解，所以今天就给大家详细说说Excel中F1~F12到底有何用？ F1...",
                tab: "上班这件事",
                viewCount: 1234,
                messageCount: 20,
                likeCount: 509,
                money: 10
            }
            ]
        }
    }
}
</script>
<style scoped>
li {
    width: 100%;
    margin: 17px 0;
    padding: 0 2px 17px 0;
    border-bottom: 1px solid #f0f0f0;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
}
.paperContent{
    width: 80%;
}
.paperImg img{
    width: 150px;
    height: 120px;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
}
.author {
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 14px;
}

.author a {
    width: 32px;
    height: 32px;
}

.author img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.authorName {
    margin-left: 10px;
    font-size: 13px;
}

.authorName>span {
    color: #969696;
}

.paperTitle {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    color: #333;
}
.abstract{
    margin: 4px 0 8px;
    font-size:13px;
    line-height: 24px;
}
.meta{
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
}
.meta a,span{
    margin-right: 10px;
    color: #b4b4b4;
}
.meta a:hover,a:focus{
    color: #6C6B6B;
}
.tab{
    color: rgba(236,97,73,.7) !important;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 3px;
    padding: 2px 6px;
}
.tab:hover{
    color: #ec6149!important;
    background-color: rgba(236,97,73,.05);
    border-color: #ec6149;
}
.iconfont{
    font-size: 12px;
}
.paperImg {
    width: 150px;
    height: 120px;
}

.paperImg img {
    width: 100%;
    height: 100%;
}
</style>
