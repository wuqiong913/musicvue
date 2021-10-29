<template>
  <div class="home">
    <top-nav></top-nav> 
    <swiper-com></swiper-com>
    <icon-list></icon-list>
    <song-list></song-list>
  </div>
</template>

<script>
// @ is an alias to /src
import TopNav from '@/components/TopNav.vue'
import SwiperCom from '@/components/SwiperCom.vue'
import IconList from '@/components/IconList.vue'
import SongList from '@/components/SongList.vue'
                                    

export default {
  name: 'Home',
  components: {
    TopNav,
    SwiperCom,
    IconList,
    SongList
  },
   data() {
      return {
        
      }
    }
}
</script>
<style lang='less' scoped>
#d1{
  width: 3.75rem;
  height: 3.75rem;
  background: rebeccapurple;
}

</style>
