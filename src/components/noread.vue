<template>
    <div class="box">
    <div class="one">
    <div class="yi">
      <div style="width: 100%;height: 40px;text-align:left;line-height: 40px;
      background-color: #e1e1e1;margin-left: 0px;margin-top: 0px">
        <span style="margin-left: 10px;color: #00FF00">
        主页
        </span>
        <span>/</span>
        <span style="color: darkgray">新消息</span>
      </div>
      <div  style="width: 100%;height: 40px;text-align:left;line-height: 40px;
      margin-left: 0px;margin-top: 10px;margin-left: 10px">{{data1.length}}个新消息</div>
    </div>  <div class="yi">
      <div style="width: 100%;height: 40px;text-align:left;line-height: 40px;
      background-color: #e1e1e1;margin-left: 0px;margin-top: 10px">
        <span style="color: darkgray">过往消息</span>
      </div>
      <div  style="width: 100%;height: 40px;text-align:left;line-height: 40px;
      margin-left: 0px;margin-top: 10px;margin-left: 10px"  v-for="(item,index) in data1" :key="index">
      <span> {{ item.author.loginname }}</span>
      回复了你的消息
      <span> {{ item.topic.title }}</span>
    </div>
      <!--<div class="inner" v-for="(item,index) in data" :key="index">-->
          <!--<span>-->
            <!--<a :href="'/user/?'+item.author.loginname" target="view_window" @click="read">-->
              <!--{{ item.author.loginname }}-->
            <!--</a>-->
            <!--回复了你的话题-->
            <!--<a :href="'/topic/'+item.topic.id" target="view_window" @click="read">-->
              <!--{{ item.topic.title }}-->
            <!--</a>-->
          <!--</span>-->
      <!--</div>-->
    </div>
    </div>
      <Right></Right>
    </div>
</template>
<script>
  import Right from '../components/right'
  import Axios from 'axios'
  export default {
    components: {
      Right
    },
    data () {
      return {
        data: [],
        data1: []
      }
    },
    created () {
      Axios.get(`https://cnodejs.org/api/v1/messages/?accesstoken=00a9ee31-e710-47dc-aecc-2110bbcd353b`).then(res => {
        // console.log(res)
        let { hasnot_read_messages } = res.data.data
        let { has_read_messages } = res.data.data
        this.data = hasnot_read_messages
        this.data1 = has_read_messages
        // console.log(this.data1.length)
      })
      Axios({
        method: 'post',
        url: 'https://cnodejs.org/api/v1/message/mark_all',
        data: {
          accesstoken: '1f12d0e5-b2f0-43ee-abb2-3f3d01c9e239'
        }
      }).then(res => {

      })
    },
    methods: {
      read () {

      }
    }
  }
</script>
<style scoped>
.box{
  width: 100%;
  height: 1000px;
  background-color: lightgray;
}
  .one{
    width: 700px;
    height: 230px;
    /*margin-top: 10px;*/
    margin-left: 100px;
    /*margin-top: 10px;*/
    background-color: white;
  }
  .yi{
    width: 100%;
    height: 100px;
margin-left: 0px;
    margin-top: 0px;
  }
  .two{
    width: 260px;
    height: 800px;
    margin-top: 10px;
    margin-left: 30px;
    background-color: white;
  }
</style>
