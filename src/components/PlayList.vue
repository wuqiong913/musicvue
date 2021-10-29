<template>
    <div class="playList">
        <div class="playListTop">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-bofangqi-bofangshu"></use>
                </svg>
                <span class="title">播放全部</span><span class="num">（{{playlist.tracks.length}}）</span>
            </div>
            <div class="btn">
                + 收藏（{{playlist.subscribedCount}}）
            </div>
        </div>
        <div class="list">
            <div class="listItem" v-for="(item, i) in playlist.tracks"  :key="i">
                <div class="left" @click="setPlayCurrentIndex(i)">
                    <span>{{i+1}}</span>
                    <div class="name">
                        <div class="title">{{item.name}}</div>
                        <div class="author">{{item.ar[0].name}}-{{item.al.name}}</div>
                    </div>
                </div>
                <div class="right">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-play-square"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                      <use xlink:href="#icon-gengduo-shuxiang"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:['playlist'],
    methods: {
        ...mapMutations(['setPlayCurrentIndex'])
    }
}
</script>
<style lang="less" scoped>
.playList{
    width: 7.5rem;
    padding: 0.4rem;
    color:#333;
    background: #fff;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    .playListTop{
        display: flex;
        justify-content: space-between;
        .left{
            display: flex;
            align-items: center;
            .icon{
                width: 0.5rem;
                height: 0.5rem;        
            }
            .title{
                font-weight: 900;
            }
               
        } 
        .btn{
            padding:0 0.15rem;
            height: 0.6rem;
            line-height: 0.6rem;
            border-radius: 0.5rem;
            background:orangered;
            text-align:center;
            color:#fff;
            font-size: 0.24rem;
        }

    }

    .listItem{
        padding:0.15rem 0;
        display: flex;
        justify-content: space-between;
        color: rgb(129, 129, 129);
        .left{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
                font-size: 0.35rem;
                padding-right:0.3rem;
            }
            .name{
                .title{
                    color:#000;
                    font-size: 0.3rem;
                }
                .author{
                    font-size: 0.2rem;
                }
            }
        }
        .right{
            .icon{
                width: 0.4rem;
                height: 0.4rem;
                fill:#666
            }
        }
    }
}
</style>
