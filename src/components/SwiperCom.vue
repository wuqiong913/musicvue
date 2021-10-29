<template>
<div class="swiperCom">
    <div class="swiper-container" id="swiperIndex">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in imgs" :key="i"><img :src="item.pic" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
</div>
</template>

<script>
import Swiper from 'swiper'   
import 'swiper/css/swiper.css'  
import {getBanner} from '@/api/index'
                              

export default {
    data() {
        return {
            imgs: [
               {pic: require('@/assets/images/b1.jpeg')},
               {pic: require('@/assets/images/b2.jpg')},
               {pic: require('@/assets/images/b3.jpeg')},
            ]
        }  
    },
    async mounted() {
      var mySwiper = new Swiper ('#swiperIndex', { 
        loop: true, // 循环模式选项
        autoplay: true,
        speed: 1000,
        // 如果需要分页器
         pagination: {
           el:'.swiper-pagination',
         }
       });

       let res = await getBanner(2)
       console.log(res)
       this.imgs = res.data.banners
    }
}
</script>

<style lang='less' >
.swiperCom{
    width: 7.5rem;
    .swiper-container {
        width: 7.1rem;
        height: 2.6rem;
        border-radius: 0.1rem;
        .swiper-slide img{
            width:100%;
        }
        .swiper-pagination-bullet-active{
            background-color: orangered;
        }
    
    }
}

</style>