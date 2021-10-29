import { createStore } from 'vuex'
import api from '@/api/index.js'
import { phoneLogin } from '../api';

export default createStore({
  state: {
    playlist:[{
      name: '有幸',
      id: 1433810301,
      al:{
        id: 85836671,
        name: "浮生若梦",
        pic: 109951165673546300,
        picUrl: "http://p3.music.126.net/gYnPb2mqT7kqF7P3NXdHew==/109951165673546297.jpg",
        pic_str: "109951165673546297",

      }}],
    playCurrentIndex:0,
    lyric:'',
    currentTime: 0,
    intervalId:0,
    user:{
      isLogin:false,
      userDetail:{},
      account:{}
    }
  },
  getters: {
    lyricList(state){
      let arr = state.lyric.split(/\n/igs).map((item, i) => {
          let min = parseInt(item.slice(1,3));
          let sec = parseInt(item.slice(4,6));
          let mill = parseInt(item.slice(7,10));
          return {
            min, sec, mill, 
            lyric:item.slice(11,item.length),
            content: item,
            time:mill+sec*1000+min*60*1000
          } 
          
      })
 
      arr.forEach((item, i) => {
        if (i != 0 && arr[i].time) {
          item.pre1 = arr[i].time
          item.pre2 = arr[i+1].time
        }
      })
      
      console.log(arr)
      return  arr
    }
  },
  mutations: {
    setPlayList:function(state, value) {
      state.playlist = value
    },
    pushPlayList(state, value) {
      state.playlist.push(value)
    },
    setPlayCurrentIndex(state, value) {
      state.playCurrentIndex = value
    },
    setLyric(state, value) {
      state.lyric = value
    },
    setCurrentTime(state, value) {
      state.currentTime = value
    },
    setUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async reqLyric(content, payload){
      console.log(payload)
      let res = await api.getLyric(payload.id)
      content.commit('setLyric', res.data.lrc.lyric)
      console.log(res)

    },
    async login(content, payload){
      console.log(payload)
      let res = await api.phoneLogin(payload.phone, payload.password)
      if(res.data.code==200){
        content.state.user.isLogin=true
        content.state.user.account = res.data.account
    
        let userDetail = await api.getUserDetail(res.data.account.id) 
        content.state.user.userDetail = userDetail.data
        console.log(userDetail)
        localStorage.userData = JSON.stringify(content.state.user)
        content.commit('setUser', content.state.user)
      }
      console.log(res)
      return res
    }
  },
  
  modules: {
  }
})
