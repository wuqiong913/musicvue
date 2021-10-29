<template>
    <div class="SongListDetailTop">
        <div class="SongListDetailTopNav">
            <img class="bg" :src="playlist.coverImgUrl" alt="">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-fanhui"></use>
                </svg>
                <div class="title">歌单</div>
            </div>
            <div class="right">
                <svg class="icon search" aria-hidden="true" @click="$router.push('/search')">
                     <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-gengduo-shuxiang"></use>
                </svg>
            </div>
        </div>

        <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl" alt="">
                <div class="count">
                    <span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-24gl-play"></use>
                        </svg>
                    </span>
                    <span>{{changeValue(playlist.playCount)}}</span>
                </div>
            </div>
            <div class="contentRight">
                <h3>{{playlist.name}}</h3>
                <div class="author">
                    <img :src="playlist.creator.avatarUrl" alt="" class="header">
                    <span>{{playlist.creator.nickname}} ></span>
                </div>
                <div class="description">
                    {{playlist.description}}
                </div>
            </div>
        </div>

        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jianyi"></use>
                </svg>
                <span>{{playlist.commentCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-31fenxiang"></use>
                </svg>
                <span>{{playlist.shareCount}}</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-iconfontzhizuobiaozhun023146"></use>
                </svg>
                <span>下载</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-show_duoxuan"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:['playlist'],
    setup() {
        function changeValue(num) {
                let res=0
                if(num>=100000000){
                    res = (num/100000000).toFixed(2) + '亿'
                }else if(num>=10000){
                    res = (num/10000).toFixed(2) + '万'
                }
                return res
        }
        return {
            changeValue
        }
    },
}
</script>

<style lang="less" scoped>
.SongListDetailTop{
    width: 7.5rem;
    padding:0 0.4rem;
    .bg{
        position: fixed;
        top:0;
        left:0;
        width: 7.5rem;
        filter:blur(40px) ;
        z-index: -1;
    }
    .SongListDetailTopNav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.2rem;
        font-size: 0.35rem;
        .back{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:#fff;
            .title{
                margin-left:0.4rem
            }
        }
        .icon{
            width:0.5rem;
            height: 0.5rem;
            fill:#fff;
        }
        .search{
            margin-right:0.5rem
        }
    }

    .content{
        padding:0.3rem 0;
        display: flex;
        justify-content: space-between;
        .contentLeft{
            position: relative;
            img{
                width: 2.8rem;
                height: 2.8rem;
                border-radius: 0.1rem;
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
        .contentRight{
            width: 3.5rem;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            h3{color:#fff}
            .author {
                display: flex;
                align-items: center;
                font-size: 0.3rem;
               
                img.header{
                    width: 0.6rem;
                    height: 0.6rem;
                    border-radius: 0.3rem;
                    margin-right:0.2rem;
                }
                span{
                    color:#fff;
                    font-size: 0.26rem;
                }
            }
            .description{
                font-size: 0.24rem;
                color:rgb(235, 233, 233);
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp:2;
                -webkit-box-orient: vertical;
            }
        }
    }

    .iconList{
        margin:0.2rem 0;
        display: flex;
        justify-content: space-around;
        color:#fff;
        .iconItem{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 0.24rem;
            .icon {
                width: 0.6rem;
                height: 0.6rem;
                fill: #fff;
            }
            span{
                padding-top:0.1rem;
            }
        }
    }
}

</style>