<template>
    <div class="songListDetail">
        <SongListDetail-top :playlist="state.playlist"></SongListDetail-top>
        <play-list :playlist="state.playlist"></play-list>
    </div>
</template>

<script>
import SongListDetailTop from '@/components/SongListDetailTop'
import PlayList from '@/components/PlayList'
import { getSongListDetail } from '@/api/index'
import { onMounted, reactive} from 'vue'
import {useRoute} from 'vue-router'
import store from '@/store/index.js'

export default {
    setup() {
        const route = useRoute()
        let state = reactive({
                list:[],
                playlist:{
                    creator:{},
                    tracks:[]
                }
            })
        onMounted(async () => {
            let id = route.query.id
            let res = await getSongListDetail(id)
            console.log(res)
            state.playlist = res.data.playlist
            store.commit('setPlayList', state.playlist.tracks)
        })  
        return{
            state
        }    
    },
    components:{
            SongListDetailTop,
            PlayList
    }
}
</script>
