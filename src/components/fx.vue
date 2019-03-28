<template>
  <div class="box">
    <div class="first"style="border: 0px solid red;">
      <div class="daohang">
        <router-link to="Main"> 全部 </router-link>
        <router-link to="Jh"> 精华 </router-link>
        <router-link to="Fx"> 分享 </router-link>
        <router-link to="Wd"> 问答 </router-link>
        <router-link to="Zp"> 招聘 </router-link>
        <router-link to="Cs"> 客户端测试 </router-link>
      </div>
      <div class="tiao" style="border: 0px solid red;border-bottom: 1px solid #e5e5e5"
           v-for="(item,index) in dataList" :key="index">
        <div style="margin-left: 3px">
          <router-link :to="`/user/`+item.author.loginname">
            <img :src="item.author.avatar_url" alt="" style="width: 30px;line-height:30px;
        border-radius: 3px;margin-top: 10px">
          </router-link>
        </div>
        <div style=" margin-top: 15px;width:60px; text-align:left;margin-left: 3px">
          <span>{{ item.reply_count  }}/{{ item.visit_count }}</span>
        </div>
        <!--<div style="width: 30px;height:20px;border-radius: 3px;margin-top: 15px;margin-left: 7px;-->
        <!--background-color:#80bd01;color: white;font-size: 12px;text-align: center;line-height: 20px"-->
        <!--v-if="item.top">置顶</div>-->
        <div div style="width: 30px;height:20px;border-radius: 3px;margin-top: 10px;
     <!--background-color:#80bd01;color: white;font-size: 12px;text-align: center;line-height: 20px">
          <span v-if="item.top"  class="left_color">置顶</span>
          <span v-show="!item.top && item.good"  class="left_color">精华</span>
          <span v-show="!item.top && !item.good && item.tab === 'share'"  class="left_colors">分享</span>
          <span v-show="item.tab === 'ask'" class="left_colors">问答</span>
          <span v-show="item.tab === 'job'" class="left_colors">招聘</span>
        </div>
        <div style="margin-top: 17px;font-size: 14px; color:black;overflow: hidden;margin-left: 15px;text-align: left;
        width: 550px;height: 20px">
          <router-link :to="'/xiangqing/' + item.id" style="color: black">{{ item.title }}</router-link>
        </div>
        <div style="margin-right: 10px; width: 60px;float: right">
          <div style="margin-top: 15px; width: 20px;">
            <img :src=" item.author.avatar_url" alt="" style="width: 18px;border-radius: 2px">
          </div>
          <div style="margin-left:10px;font-size: 10px;margin-top: 15px;color: darkgrey">1天前</div>
        </div>
      </div>
    </div>
<Right></Right>
  </div>
</template>
<script>
  import Right from './right'
  import Axios from 'axios'
  export default {
    components: {
      Right
    },
    data () {
      return {
        dataList: []
      }
    },
    created() {
      let loading=document.getElementById('loading')
      if(loading !== null){
        document.body.removeChild(loading)
      }
      Axios.get('https://cnodejs.org/api/v1/topics',{
        params:{
          tab:'share'
        }
      })
        .then(res =>{
          let {data} = res.data
          this.dataList=data
          console.log(data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 100%;
    height: 2200px;
    background-color: #e1e1e1;
    margin-top: -30px;
  }
  a{
    text-decoration: none;
    height: 20px;
    font-size: 13px;
    color: #80bd01;
    margin-left: 5px;
  }
  .left_color {
    width: 32px;
    height: 20px;
    background: #80bd01;
    font-size: 12px;
    color: white;
    margin-top: 7px;
    line-height: 20px;
    float: left;
    margin-left: 5px;
    text-align: center;
    border-radius: 3px;
  }

  .left_colors {
    width: 32px;
    height: 20px;
    background: gainsboro;
    font-size: 12px;
    color: white;
    margin-top: 7px;
    line-height: 20px;
    float: left;
    margin-left: 5px;
    text-align: center;
    border-radius: 3px;
  }
  .first{

    width: 790px;
    height: 2200px;
    border:  1px solid white;
    float: left;
    margin-left: 40px;
    margin-top: 30px;
    background-color: white;
  }
  .first img{
    width: 100%;
  }
  .btn{
    text-align: left;
    margin-top: 5px;
    width: 100%;
    height: 50px;
    background-color: white;
  }
  .btn button{
    width: 100px;
    height: 30px;
    color: white;
    text-align: center;
    margin-top: 8px;
    border-radius: 5px;
    margin-left: 5px;
    border: 1px solid #80bd01;
    background-color: #80bd01;
  }
  .second{

    width: 260px;
    height: 1100px;
    border:  1px solid white;
    float: left;
    margin-left: 20px;
    margin-top: 30px;
  }
  .daohang{
    width: 100%;
    height: 35px;
    display: flex;
    background-color: #f6f6f6;
  }
  .daohang a{
    font-size: 14px;
    color: #80bd01;
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 3px
  }
  span{
    font-size: 14px;
  }
  .daohang a:hover{
    color:white;
    background-color: #80bd01;
  }
  .one{
    width: 100%;
    height: 100px;
    font-size: 14px;
    background-color: white;
  }
  .one button{
    width: 130px;
    height: 30px;
    margin-top: 3px;
  }
  .one a{
    color: black;
    text-decoration: none;
    color: darkgray;
  }
  span{
    font-size: 14px;
  }
  .tiao{
    width: 100%;
    height: 50px;
  }
  .tiao div:nth-of-type(4):hover{
    text-decoration: underline;
  }
  .tiao:hover{
    text-decoration: underline;
  }
  .tiao div{
    float: left;
  }
  .two{
    width: 100%;
    margin-top: 20px;
    background-color: white;
  }
  .img{
    width: 100%;
    height: 70px;
    margin-top: 10px;

  }
  .img img{
    width: 100%;
    height: 100%;
  }
  .three{
    background-color: white;
    font-size: 12px;
    height: 180px;
    margin-top: 20px;
  }
  .three p{
    margin-top: 5px;
    font-size: 13px;
    color: #778087;
    margin-left: 5px;
  }.four{
     background-color: white;
     font-size: 12px;
     height: 280px;
     margin-top: 20px;
   }
  .four p{
    margin-top: 5px;
    font-size: 13px;
    color: #778087;
    margin-left: 5px;
  }
  .five{
    height: 260px;
    margin-top: 20px;
    background-color: white;
  }
  .img1{
    width: 100%;
    height: 50px;
    margin-top: 3px;
  }
  .img1 img{
    width: 100%;
    height: 100%;
  }
  .six{
    width: 100%;
    height: 220px;
    margin-top: 20px;
    background-color: white;
  }
  .img2{
    width: 90%;
    height: 100%;
    margin-left: 20px;
  }
  .img2 img{
    width: 80%;
    height: 75%;
  }
  .img2 p{
    margin-left: 30px;
  }
</style>
