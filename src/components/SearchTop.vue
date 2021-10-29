<template>
    <div class="searchTop">
        <div class="searchTopNav">
            <div class="back" @click="$router.go(-1)">
                <svg class="icon" aria-hidden="true">
                     <use xlink:href="#icon-fanhui"></use>
                </svg>
            </div>
            <div class="right">
                <input v-model="searchKeyWord" ype="text" :placeholder="placeholder" @keydown.enter="saveKeyWord"> 
            </div>
        </div> 
        <div class="history" v-show="searchSongs.length==0">
            <div class="historyLeft">历史</div>
            <div class="historyCenter">
                <div @click="historySeach(item)" class="keyWordItem" v-for="(item, i) in keyWordList" :key="i">
                    {{item}}
                </div>
            </div>
            <div class="historyRight">
                <svg class="icon" aria-hidden="true" @click="clearKeyWord">
                     <use xlink:href="#icon-shanchu"></use>
                </svg>
            </div>
        </div>
         
         <!-- 搜索结果列表 -->
        <div class="searchSongs" v-show="searchSongs.length!==0">
            <div class="searchSongsTop">
                <div class="left">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofangqi-bofangshu"></use>
                    </svg>
                    <span class="title">播放全部</span><span class="num">（{{searchSongs.length}}）</span>
                </div>
            </div>
            <div class="list">
                <div class="listItem" v-for="(item, i) in searchSongs"  :key="i">
                    <div class="left" @click="setPlay(item, i)">
                        <span>{{i+1}}</span>
                        <div class="name">
                            <div class="title">{{item.name}}</div>
                            <div class="author">{{item.artists[0].name}}-{{item.album.name}}</div>
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

    </div>
</template>
<script>
import {searchMusic} from '@/api/index'
export default {
    data(){
        return {
            placeholder:'周杰伦',
            keyWordList:[],
            searchKeyWord:'',
            searchSongs:[]
        }
        
    },
    beforeMount(){
        //取
      this.keyWordList =localStorage.keyWordList ? JSON.parse(localStorage.keyWordList) : []
    },
    methods:{
        //存
         saveKeyWord:async function(){
                this.keyWordList.push(this.searchKeyWord)

                this.keyWordList = Array.from(new Set(this.keyWordList))
                if(this.keyWordList.length>10){
                    this.keyWordList = this.keyWordList.splice(this.keyWordList.length-10,this.keyWordList.length)
                }
                
                localStorage.keyWordList = JSON.stringify(this.keyWordList)
                let res = await searchMusic(this.searchKeyWord)  
                console.log(res)  
                this.searchSongs=res.data.result.songs
                console.log(this.searchSongs)
        },
        clearKeyWord(){
            this.keyWordList=[]
            localStorage.keyWordList=[]
        },
        historySeach(keyWord){
            this.searchKeyWord = keyWord
            this.saveKeyWord()
        },
        setPlay(item, i){
            console.log(item)
            item.al = item.album
            item.al.picUrl = item.album.artist.img1v1Url
            this.$store.commit('pushPlayList', item)
            this.$store.commit('setPlayCurrentIndex', this.$store.state.playlist.length-1)
        }

    }
}
</script>

<style lang="less" scoped>
.searchTop{
    width: 7.5rem;
    height:calc(100vh - 1.2rem);
    .searchTopNav{
        display: flex;
        width: 100%;
        height: 1.2rem;
        align-items: center;
        position:fixed;
        top:0;
        left:0;
        padding:0 0.4rem;
        background-color: #fff;
        .icon{
            width: 0.5rem;
            height: 0.5rem;
        }
        .right{
            padding-left:0.4rem;
            flex:1;
            input{
                flex:1;
                border:none;
                outline: none;
                border-bottom:1px solid  #666;
                width: 100%;
                height: 0.5rem;
            }
        }
    }
    .history{
        display: flex;
        margin-top: 1.2rem;
        padding:0 0.4rem;
        .historyLeft{
            width:1rem;
            font-weight: 900;
            height: 0.6rem;
            line-height: 0.6rem;
        }
        .historyCenter{
           flex:1;
           display: flex;
           flex-wrap: wrap; 
           width: 1rem;   
           font-size: 0.2rem; 
           color:666;   
           .keyWordItem{
               background-color:#eee;
               margin: 0.1rem;
               height: 0.6rem;
               line-height: 0.6rem;
               border-radius:0.3rem ;
               padding:0 0.2rem ;
           }
        }
        .historyRight{  
            .icon{
                width: 0.4rem;
                height: 0.4rem;
            }

        }
    }
    .searchSongs{
       width:7.5rem;
       padding:0 0.4rem;
        position:fixed;
        top: 1.2rem;
        bottom:1.2rem;
        overflow:scroll;
        
        border-top-left-radius: 0.4rem;
        border-top-right-radius: 0.4rem;
        .searchSongsTop{
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

        }
        .list{
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
        
    }
}

</style>