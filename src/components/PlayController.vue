<template>
    <div class="playController">
        <div class="left" @click="show=!show">
            <img :src="playlist[playCurrentIndex].al.picUrl" alt="">
            <div class="content">
                <div class="title">{{playlist[playCurrentIndex].name}}</div>
                <div class="tips">横滑可以切换上下首哦</div>
            </div>
        </div>
        <div class="right">
            <svg v-if="paused" class="icon play" aria-hidden="true" @click="play">
                    <use xlink:href="#icon-bofang_o"></use>
            </svg>
            <svg v-else class="icon play" aria-hidden="true" @click="play">
                    <use xlink:href="#icon-zanting1"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-24gl-playlist3"></use>
            </svg>
        </div>
        <play-music :play="play" :paused="paused" @back="show=!show" v-show="show" :playDetail="playlist[playCurrentIndex]"></play-music>
        <audio  ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex].id}.mp3 `"></audio>
    </div>
</template>

<script>
import { onUpdated } from '@vue/runtime-core'
import { mapState } from 'vuex'
import PlayMusic from '@/components/PlayMusic.vue'

export default {
    data() {
        return{
            paused:true,
            show:false
        }
    },
    computed:{
        ...mapState(['playlist', 'playCurrentIndex'])
    },
    mounted() {
        console.log([this.$refs.audio])
        
        
        
    },
    updated() {
        console.log(this.playlist[this.playCurrentIndex])
        this.$store.dispatch('reqLyric', {id:this.playlist[this.playCurrentIndex].id})
    },
    methods:{
        play:function() {
            if(this.$refs.audio.paused){
                this.$refs.audio.play()
                this.paused = false
                this.updateTime()
            }else{
                this.$refs.audio.pause()
                this.paused = true
                clearInterval(this.$store.state.id)
            }
            console.log([this.$refs.audio])
            
        },
        updateTime() {
            this.$store.state.id = setInterval(() => {
                this.$store.commit('setCurrentTime',this.$refs.audio.currentTime)
            },1000)
        }
    },

    components:{
        PlayMusic
    }
    
}
</script>


<style lang="less" scoped>
.playController{
    width:7.5rem;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom:0; 
    left:0;
    border-top:1px solid #ccc;
    background:#fff;
    padding:0 0.4rem;
    .left{
        display: flex;
        img{
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 0.4rem;
            margin-right: 0.2rem;
        }
        .content{
            .tips{
                color:#ccc;
                font-size: 0.2rem;
            }
        }

    }
    .right{
        display: flex;
        align-items: center;
        .icon{
            width: 0.4rem;
            height: 0.4rem;
            margin-left:0.2rem;
        }
        .play{
            width: 0.6rem;
            height: 0.6rem;
        }
        
    }
}
</style>