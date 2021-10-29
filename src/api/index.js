import axios from 'axios'
let baseUrl = 'http://music.cpengx.cn'
//获取轮播图
export function  getBanner(type=2) {
    return axios.get(`${baseUrl}/banner?type=${type}`)
}

//获取推荐歌单
export function  getSongList(limit=10) {
    return axios.get(`${baseUrl}/personalized?limit=${limit}`)
}

//获取歌单详情
export function getSongListDetail(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`)
}

//获取歌词
export function getLyric(id){
    return axios.get(`${baseUrl}/lyric?id=${id}`)
}

//搜索歌曲
export function searchMusic(keywords){
    return axios.get(`${baseUrl}/search?keywords=${keywords}`)
}
//手机登录
export function phoneLogin(phone, password){
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`) 
}

//获取用户详情

export function getUserDetail(uid){
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`) 
}

export default{
    getBanner,
    getSongList,
    getSongListDetail,
    getLyric,
    searchMusic,
    phoneLogin,
    getUserDetail
}