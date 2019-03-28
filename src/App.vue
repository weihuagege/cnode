<template>
  <div class="bag">
  <header>
    <div class="yi">
      <img src="./img/1.png" alt="">
    </div>
    <div class="er">
      <input type="text">
      <span class="fa fa-search"></span>
    </div>
    <div class="san">
      <ul>
        <li>
          <router-link to="Main">首页</router-link>
        </li>
        <li>
          <router-link to="No">未读信息</router-link></li>
        <li>
          <router-link to="">新手入门</router-link></li>
        <li>
          <router-link to="">API</router-link></li>
        <li>
          <router-link to="">关于</router-link></li>
        <li>
          <router-link to="">登录</router-link></li>
        <li>
          <router-link to="">注册</router-link></li>
      </ul>
    </div>
  </header>
  <div id="app">
    <router-view/>
  </div>
   <!--<vue-loading class="loading" type="spiningDubbles" color="#d9544e" :size="{width:'50px',height:'50px'}"-->
    <!--v-show="isload">
    </vue-loading>-->
    <vue-loading class="loading" type="barsCylon" color="#d9544e" :size="{width:'50px',height:'50px'}" v-show="isload">
    </vue-loading>
    <div class="foot">
      <p style="margin-top: 20px">RSS | 源码地址 </p>
      <p style="color:#ababab">CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
      <p style="color:#ababab">服务器赞助商为<img src="./img/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9.png" alt="" style="height: 30px;width: 80px">  ，存储赞助商为<img src="./img/Fg0jtDIcTqVC049oVu5-sn6Om4NX.png" alt="" style="height: 50px">  ，由  <img src="./img/FpMZk31PDyxkC8yStmMQL4XroaGD.png" alt="" style="height: 50px;width: 100px;"> 提供应用性能服务。 </p>
      <p style="color:#ababab">新手搭建 Node.js 服务器，推荐使用无需备案的  <a href="##">DigitalOcean(https://www.digitalocean.com/)</a></p>
    </div>
  </div>
</template>
<script>
  // import Axios from 'axios'
  // import {VueLoading} from 'vue-loading-template'
  import Axios from 'axios'
  import {VueLoading} from 'vue-loading-template'

export default {
    components:{
      VueLoading
    },
  data(){
      return{
        isload:true
      }
  },
  created() {
      //添加请求拦截器
      Axios.interceptors.response.use((response)=>{

        this.isload=false
        return response
      },error => {
        return Promise.reject(error)
      })
    Axios.interceptors.request.use((config)=>{
      this.isload=true
      return config

    },error => {
      return Promise.reject(error)
    })
  }
// components:{
//   VueLoading
// },
//   data(){
//   return{
//     isload:true
//   }
//   },
//   created() {
//
//   Axios.interceptors.response.use( (response) => {
//         this.isload=false
//         return response
//     console.log('成功')
//       }, (error) => {
//         return Promise.reject(error)
//       }
//     )
//     //添加请求拦截器
//     Axios.interceptors.request.use( (config) => {
//     this.isload=true
//       //发送请求前该做些什么
//     return config
//   },function(error) {
//       //对请求错误应该做什么
//     return Promise.reject(error)
//     }
//   )
//   }
}
</script>
<style>
  @import "../cnode/cd.css";
  @import "../cnode/cd3.css";
  @import "../cnode/cd1.css";
  @import "../layui/css/layui.css";
  @import "../bootstrap-3.3.7-dist/css/bootstrap.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
header{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
  background-color: #444444;
}
.loading{
  position: fixed;
  top: 50%;
  left: 40%;
  margin-top: -25px;
}
.yi{
  width: 100px;
  height: 40px;
  margin-left: 100px;
  float: left;
}
.yi img{
  width: 100%;
  height: 100%;
  margin-top: 3px;
}
.er{
  width: 240px;
  height: 25px;
  position: relative;
  float: left;
  margin-left: 10px;
}
.er input{
  width: 200px;
  height: 25px;
  border-radius: 15px;
  margin-top: 10px;
  background-color: #888888;
  border: 1px solid #888888;
}
.er input:hover{
  background-color: white;
}
.er span{
  position: absolute;
  top: 15px;
  left: 5px;
  color: #0f0f0f;
}
.san{
  width: 400px;
  height: 30px;
  float: right;
  margin-right: 60px;
}
.san ul li{
  float: left;
  color: #888888;
  list-style: none;
  font-size: 14px;
  margin-left: 20px;
}
.san ul li:hover{
  color: white;
}
.foot{
  position: absolute;
  top: 2200px;
  width: 100%;
  height: 200px;
  background-color: white;
}
.foot img{
  width: 100px;
  height: 60px;
}
.foot a{
  text-decoration: none;
}
.foot p{
  margin-left: 50px;
  margin-top: 5px;
}
  a{
    color: white;
    text-decoration: none;
  }
</style>
