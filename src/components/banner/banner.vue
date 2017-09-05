<template>
      <div class="banner" @mouseover="onMouseOver" @mouseleave="onMouseLeave">
          <!-- <transition-group name="banner"> -->
          <div class="banner-item" v-for="item in images" :key="item.key" v-show="item.key == imageKey">
              <div class="banner-item-list imageOne">
                  <a :href="item.clickOneUrl"><img :src="item.imageOne"/></a>
              </div>
              <div class="banner-item-list imageTwo">
                  <a :href="item.clickTwoUrl"><img :src="item.imageTwo"/></a>
                  <a :href="item.clickThreeUrl"><img :src="item.imageThree"/></a>
              </div>
          </div>
          <!-- </transition-group> -->
          <div @click="preImage" v-show="arrowShow" class="arrowLeft"><i class="iconfont">&#xe667;</i></div>
          <div @click="nextImage" v-show="arrowShow" class="arrowRight"><i class="iconfont">&#xe666;</i></div>
      </div>
</template>
<script>
export default {
  data () {
      return {
          imageKey: 0,
          arrowShow: false,
          images: [{
              key: "0",
              imageOne: require('../../images/00.jpg'),
              imageTwo: require('../../images/01.jpg'),
              imageThree: require('../../images/02.jpg'),
              clickOneUrl: "",
              clickTwoUrl: "",
              clickThreeUrl: "",
              active: true
          },{
              key: "1",
              imageOne: require('../../images/01.jpg'),
              imageTwo: require('../../images/02.jpg'),
              imageThree: require('../../images/03.jpg'),
              clickOneUrl: "",
              clickTwoUrl: "",
              clickThreeUrl: "",
              active: false
          },{
              key: "2",
              imageOne: require('../../images/02.jpg'),
              imageTwo: require('../../images/03.jpg'),
              imageThree: require('../../images/04.jpg'),
              clickOneUrl: "",
              clickTwoUrl: "",
              clickThreeUrl: "",
              active: false
          },{
              key: "3",
              imageOne: require('../../images/03.jpg'),
              imageTwo: require('../../images/04.jpg'),
              imageThree: require('../../images/05.jpg'),
              clickOneUrl: "",
              clickTwoUrl: "",
              clickThreeUrl: "",
              active: false
          },{
              key: "4",
              imageOne: require('../../images/04.jpg'),
              imageTwo: require('../../images/05.jpg'),
              imageThree: require('../../images/00.jpg'),
              clickOneUrl: "",
              clickTwoUrl: "",
              clickThreeUrl: "",
              active: false
          }
          ]
      }
  },
  created: function(){

  },
  methods: {
          onMouseOver: function () {
              this.arrowShow = true;
          },
          onMouseLeave: function () {
              this.arrowShow = false;
          },
          nextImage: function(){
              if(this.imageKey === 4){
                  this.imageKey = 0;
              }else {
                  this.imageKey = this.imageKey + 1;
              }
              console.log(this.imageKey)
          },
          preImage: function(){
              if(this.imageKey === 0){
                  this.imageKey = 4;
              }else{
                  this.imageKey = this.imageKey - 1;
              }
              console.log(this.imageKey)
          }

      }
}
</script>
<style scoped>
.banner{
    position: relative;
    overflow: hidden;
}
.arrowLeft,.arrowRight{
    position: absolute;
    top: 40%;
    cursor: pointer;
    color: #FFFFFF;
    font-weight: 700;
    width: 40px;
    height: 50px;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(0,0,0,0.4);
}
.arrowLeft{
    left: 0;
    border-radius: 0 5px 5px 0;
}
.arrowRight{
    right: 0;
    border-radius: 5px 0 0 5px;
}
.banner-item{
    width: 100%;
    height: 272px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
}
.banner-item a{
    width: 100%;
    height: 100%;
}
.banner-item img{
    width:100%;
    height:100%;
}
.imageOne{
    width: 66.66%;
    height: 100%;
}
.imageOne img{
    border-bottom-left-radius: 5px;
}
.imageTwo a:last-child img{
    border-bottom-right-radius: 5px;
}
.imageTwo{
    width: 33.34%;
    height: 50%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
/* .banner-enter-active,.banner-leave-active{
    transition: all 1s ease;
    transform: translateX(0)
}
.banner-enter,.banner-leave-active{
    transform: translateX(100%)
} */
/* @keyframes image-in {
    0% {opacity: 1}
    50% {opacity: 0.5}
    100% {opacity: 0}
}
@keyframes image-out {
    0% {opacity: 0}
    50% {opacity: 0.5}
    100% {opacity: 1}
}
.banner-enter-active{
    animation: image-in 0.5s;
}
.banner-leave-active{
    animation: image-out 0.5s;
} */
</style>

