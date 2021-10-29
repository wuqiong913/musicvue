<template>
    <div class="personal-center">
        <div class="top">
            <div class="left">
                <img :src="$store.state.user.userDetail.profile.avatarUrl" alt="">
                <div class="left-text">
                    <div class="name">{{$store.state.user.userDetail.profile.nickname}}</div>
                    <span>Lv.{{$store.state.user.userDetail.level}}</span>
                </div>
            </div>
            <div class="right">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-qianjin"></use>
                </svg>
            </div>
        </div>

        <div class="iconList">
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-bofangqi-bofangshu"></use>
                </svg>
                <span>最近播放</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-bendisucaibeifen"></use>
                </svg>
                <span>本地/下载</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-shangchuanyunpan"></use>
                </svg>
                <span>云盘</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-gaiicon-"></use>
                </svg>
                <span>已购</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-weibiaoti--"></use>
                </svg>
                <span>我的好友</span>
            </div>
            <div class="iconItem">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-shoucang_shixin"></use>
                </svg>
                <span>收藏和赞</span>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.personal-center{
    width:7.5rem;
    padding:0.4rem;
    .top{
        height: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .left{
            display: flex;
            img{
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 0.6rem;
                margin-right:0.4rem;
                

            }
            .left-text{
                .name{
                    margin-bottom: 0.2rem;
                }
                span{
                    
                    background-color: rgb(238, 236, 236);
                    padding:0 0.2rem;
                    border-radius: 0.5rem;
                }
            }
        }
        .icon{
            width: 0.4rem;
            height: 0.4rem;
            
        }
    }
    .iconList {
        width:100%;
        padding:0.4rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        background-color: rgb(235, 232, 232);
        border-radius: 0.4rem;
        margin-top: 0.4rem;
        .iconItem{
            width: 1.475rem;
            margin-bottom: 0.3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            
            .icon {
                width: 0.6rem;
                height: 0.6rem;
            }
            span{
                font-size: 0.22rem;
            }
        }
        
    }
}
</style>