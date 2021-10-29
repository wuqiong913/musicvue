<template>
    <div class="songList">
        <div class="song-top">
            <div class="title">推荐歌单</div>
            <div class="more">更多 ></div>
        </div>
        <div class="mList">
            <div class="swiper-container" id="songSwiper">
                <div class="swiper-wrapper">
                    <router-link :to="{path:'/songListDetail', query:{id:item.id}}" class="swiper-slide" v-for="(item,i) in state.songList" :key="i" >
                        <img :src="item.picUrl" :alt="item.name">
                        <div class="name">{{item.name}}</div>
                        <div class="count">
                            <span>
                                <svg class="icon" aria-hidden="true">
                                     <use xlink:href="#icon-24gl-play"></use>
                                </svg>
                            </span>
                            <span>{{changeValue(item.playCount)}}</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'   
import 'swiper/css/swiper.css' 
import { getSongList } from '@/api/index'
import {reactive, onMounted, onUpdated} from 'vue'
export default {
    setup(){
        let state = reactive({songList:[]})
        function changeValue(num) {
                let res=0
                if(num>=100000000){
                    res = (num/100000000).toFixed(2) + '亿'
                }else if(num>=10000){
                    res = (num/10000).toFixed(2) + '万'
                }
                return res
        }
        onMounted(async () => {
            let res = await getSongList()
            state.songList = res.data.result;
           
            console.log(res)
        })       
        onUpdated(() => {
            var swiper = new Swiper('#songSwiper', {
                slidesPerView: 3,
                spaceBetween: 10,
            });
        })       
        return {
            state,
            changeValue
        }
    }
}
</script>

<style lang="less" scoped>
.songList{
    width: 7.5rem;
    padding:0 0.4rem;
    .song-top{
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        .title{
            font-size: 0.4rem;
            font-weight: 999;
        }
        .more{
            width:1.2rem;
            height: 0.5rem;
            line-height: 0.5rem;
            border: 1px solid #ccc;
            font-size: 0.24rem;
            border-radius: 0.2rem;
            text-align: center;
        }
    }
    .mList{
        .swiper-container{
            width: 100%;
            height: 3rem;
            .swiper-slide{
                display: flex;
                flex-direction:column;
                position: relative;
                img{
                    width: 100%;
                    height:auro;
                    border-radius: 0.1rem;
                }
                .name{
                    height: 0.6rem;
                    width: 100%;
                    font-size: 0.24rem;
                    line-height: 0.42rem;
                }
                .count{
                    position:absolute;
                    right:0.1rem;
                    top:0.1rem;
                    color:#fff;
                    font-size: 0.24rem;
                    display: flex;
                    align-items: center;
                    background-color: rgba(0, 0, 0, 0.3);
                    border-radius: 0.2rem;
                    padding:0 0.1rem;
                    .icon{
                        fill: #fff;
                    }
                }
            }
        }
        
    }
}
</style>