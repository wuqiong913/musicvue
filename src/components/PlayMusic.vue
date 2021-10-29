<template>
    <div class="playMusic">
        <div class="bg" :style="{backgroundImage:`url(${playDetail.al.picUrl})`}"></div>
        <div class="playTop">
            <div class="back">
                <svg class="icon" aria-hidden="true" @click="$emit('back')">
                     <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>
            <div class="center">
                <marquee behavior="scroll" direction="left">{{playDetail.name}}</marquee>
                <!-- <div class="author">{{playDetail.ar[0].name}}</div> -->
            </div>
            <div class="share">
                <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-31fenxiang"></use>
                </svg>
            </div>
            
        </div>
        <div class="playContent" v-show="!isLyric">
            <img class="needle" src="@/assets/images/needle-ab.png" :class="{active:!paused}" alt="">
            <img class="disc" src="@/assets/images/disc.png" alt="">
            <img class="playImg" :src="playDetail.al.picUrl" alt="">
        </div>
        <div class="playLyric" v-show="isLyric" ref="playLyric">
            <p :class="{active:(currentTime*1000>=item.pre1 && currentTime*1000<=item.pre2)}" 
               v-for="(item, i) in $store.getters.lyricList" :key='i'>{{item.lyric}}
            </p>   
        </div>
        <div class="progress"></div>
        <div class="playFooter">
            <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xunhuan"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                        <use xlink:href="#icon-shangyishoushangyige"></use>
            </svg>
            <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
                        <use xlink:href="#icon-bofangqi-bofangshu"></use>
            </svg>
            <svg v-else class="icon play" aria-hidden="true"  @click="play">
                        <use xlink:href="#icon-zanting1"></use>
            </svg>
            <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                        <use xlink:href="#icon-xiayigexiayishou"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-24gf-playlist"></use>
            </svg>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    props: ['playDetail', 'paused', 'play'],
    data() {
        return {
            isLyric:true
        }
    },  
    computed:{
        ...mapState(['lyric', 'currentTime','playCurrentIndex', 'playlist'])
    },
    watch:{
        currentTime(newValue) {
           console.log(newValue)
           
               let p =  document.querySelector('p.active')
               if(p){
                   let offsetTop  = p.offsetTop
           this.$refs.playLyric.scrollTop = offsetTop 
           console.log(offsetTop)
               }
           
           
                
        }
    },
    methods:{
        goPlay(num){
            console.log(num)
            console.log(this.playlist)
            console.log(this.playCurrentIndex)
            let index = this.playCurrentIndex + num
            if(index<0){
                index = this.playlist.length-1
            }else if(index==this.playlist.length){
                index = 0
            }
            this.$store.commit('setPlayCurrentIndex', index)
        }
    }
}
</script>

<style lang="less" scoped>
.playMusic{
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    .bg{
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-size: auto 100%;
        background-position: center;
        filter: blur(60px);
        
    }
    .playTop{
        width: 7.5rem;
        height: 1.6rem;
        padding:0.4rem;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color:#fff;
        .center{
            display: flex;
            flex-direction: column;
            .author{
                font-size: 0.2rem;
            }
        }
        .icon{
            fill:#fff;
            width: 0.5rem;
            height: 0.5rem;

        }
        marquee{
            width: 4rem;
        }
    }
    .playContent{
        position:absolute;
        width: 7.5rem;
        height: 7.5rem;
        top:1.5rem;
        left:0;
        .needle{
            position:absolute;
            left:3.5rem;
            width: 2.5rem;
            transform-origin: 0.3rem top;
            transform: rotate(-15deg);
            transition: all 1s;
            z-index: 10;
        }
        .needle.active{
            position:absolute;
            left:3.5rem;
            width: 2.5rem;
            transform-origin: 0.3rem top;
            transform: rotate(4deg);
            transition: all 1s;
            z-index: 10;
        }
        .disc{
            width: 5.5rem;
            position:absolute;
            left: calc(50% - 2.75rem) ;
            // margin-left: 2.75rem;
            top:2.5rem;
        }
        .playImg{
            width: 3.5rem;
            height: 3.5rem;
            border-radius: 1.7rem;
            position: absolute;
            left: calc(50% - 1.7rem);
            top: 3.5rem;
        }

    }
    .playFooter{
        position: absolute;
        width:7.5rem;
        padding: 0.4rem;
        bottom:0;
        left:0;
        display: flex;
        justify-content:space-between;
        align-items: center;
        .icon{
            fill:#fff;
            width: 0.5rem;
            height: 0.5rem;
        }
        .play{
            width: 0.9rem;
            height: 0.9rem;
        }
    }
    .playLyric{
        position:absolute;
        width: 7.5rem;
        height: 8rem;
        top:calc(50% - 4rem);
        left:0;
        overflow: scroll;
        text-align: center;
        color:#fff;
        padding:0.2rem 0;
        
        .active{
            color:red;  
        }
        
    }

}
</style>