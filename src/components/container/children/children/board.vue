<template>
    <div class="board">
        <a v-for="list in boardList" :key="list.key" :href="list.clickUrl">
            <img :src="list.imageUrl" alt="">
        </a>
    </div>
</template>
<script>
export default {
    data() {
        return {
            boardList: [{
                key: 0,
                clickUrl: "",
                imageUrl: require('../../../../images/board0.png')
            }, {
                key: 1,
                clickUrl: "",
                imageUrl: require('../../../../images/board1.png')
            }, {
                key: 2,
                clickUrl: "",
                imageUrl: require('../../../../images/board2.png')
            }, {
                key: 3,
                clickUrl: "",
                imageUrl: require('../../../../images/board3.png')
            }, {
                key: 4,
                clickUrl: "",
                imageUrl: require('../../../../images/board4.png')
            }

            ]
        }
    }
}
</script>
<style scoped>
.board{
    min-height: 228px;
}
.board a>img{
    width: 280px;
    height: 50px;
    border-radius: 4px;
}
</style>


