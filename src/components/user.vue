<template>
  <div class="box">
    <div class="first" style="background-color: #e1e1e1;width: 840px">
      <div class="a">
        <div style="width: 100%;height: 30px;background-color:#f6f6f6;line-height: 30px;text-align: left">
          <span style="color: #00FF00;margin-left: 10px">主页</span><span style="color: darkgrey">/</span>
        </div>
        <div class="msg">
          <div style="display: flex">
            <img :src="userinfo.avatar_url" alt="" style="width: 30px;height: 30px;">
            <p style="margin-top: 5px;margin-left: 5px">{{userinfo.loginname}}</p>
          </div>
          <div style="text-align: left">{{userinfo.score}}积分</div>
          <div style="text-align: left">{{hua}}个话题收藏</div>
          <div style="display: flex">
            <img src="../img/r.png" alt="" style="width: 25px;height: 20px;">
            <p>http://i5ting.com</p>
          </div>
          <div style="display: flex">
            <img src="../img/e.png" alt="" style="width: 25px;height: 20px;">
            <p>北京</p>
          </div>
          <div style="display: flex">
            <img src="../img/w.png" alt="" style="width: 25px;height: 20px;">
            <p>@i5ting</p>
          </div>
          <div style="display: flex">
            <img src="../img/q.png" alt="" style="width: 25px;height: 20px;">
            <p>shit微博</p>
          </div>
          <div style="text-align: left;width: 300px;">注册时间{{userinfo.create_at}}</div>
        </div>
      </div>
      <div class="b">
        <div style="width: 100%;height: 30px;background-color:#f6f6f6;line-height: 30px;">
          <span style="color:black;margin-left: 10px">最近创建的话题</span>
        </div>
        <div class="tiao" style="border: 0px solid red;border-bottom: 1px solid #e5e5e5" v-for="(item,index) in datalist" :key="index">
          <div style="margin-left: 10px">
            <img :src="item.author.avatar_url" alt="" style="width: 30px;line-height:30px;
        border-radius: 3px;margin-top: 10px">
          </div>
          <div style="margin-left: 3px;margin-top: 15px">
            <div style="color: darkorchid;font-size: 14px"></div>
            <div style="color: darkgray;font-size: 10px;margin-top: 3px"></div>
          </div>
          <div style="margin-left: 5px;margin-top: 13px">{{item.title}} </div>
          <div style="margin-right: 10px; width: 60px;float: right">
            <div style="margin-top: 15px; width: 20px;">
              <img :src=" item.author.avatar_url" alt="" style="width: 18px;border-radius: 2px">
            </div>
            <div style="font-size: 10px;margin-top: 15px;color: darkgrey">1天前</div>
          </div>
        </div>
      </div>  <div class="b">
        <div style="width: 100%;height: 30px;background-color:#f6f6f6;line-height: 30px;">
          <span style="color:black;margin-left: 10px">最近创建的话题</span>
        </div>
        <div class="tiao" style="border: 0px solid red;border-bottom: 1px solid #e5e5e5" v-for="(item1,index) in datalist1" :key="index">
          <div style="margin-left: 10px">
            <img :src="userinfo.avatar_url" alt="" style="width: 30px;line-height:30px;
        border-radius: 3px;margin-top: 10px">
          </div>
          <div style="margin-left: 3px;margin-top: 15px">
            <div style="color: darkorchid;font-size: 14px"></div>
            <div style="color: darkgray;font-size: 10px;margin-top: 3px"></div>
          </div>
          <div style="margin-left: 5px;margin-top: 13px">{{item1.title}} </div>
          <div style="margin-right: 10px; width: 60px;float: right">
            <div style="margin-top: 15px; width: 20px;">
              <img :src=" item1.author.avatar_url" alt="" style="width: 18px;border-radius: 2px">
            </div>
            <div style="font-size: 10px;margin-top: 15px;color: darkgrey">1天前</div>
          </div>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="one">
        <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">个人信息</div>
        <div style="display: flex">
          <img :src="userinfo.avatar_url" alt="" style="width: 25px;height: 25px">
          <p style="margin-top: 5px;margin-left: 5px">{{userinfo.loginname}}</p>
        </div>
        <div style="text-align: left;margin-left: 15px">积分:{{userinfo.score}}</div>
        <div>狼叔说:少抱怨，多思考，未来更美好</div>
      </div>
      <div class="btn">
        <button>
          <router-link to="Fb"> 发布话题 </router-link>
        </button>
      </div>
      <div class="two">
        <div class="img">
          <img src="../img/Fl_LDJY2VdTy0g060A8jm75dnufL.jpg" alt="">
        </div>  <div class="img">
        <img src="../img/FlajCCXkxZaOsuWp3k0iaiqfrJaS.jpg" alt="">
      </div>  <div class="img">
        <img src="../img/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_.png" alt="">
      </div>  <div class="img">
        <img src="../img/Fssu56hfLTZbS0QWUrTq_Cj_tpmO.jpg" alt="">
      </div>  <div class="img">
        <img src="../img/Fv9R31Y6ySKKJi95ldk9TRkJ7o5O.png" alt="">
      </div>
      </div>
      <div class="five">
        <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">友情社区</div>
        <div>
          <div class="img1">
            <img src="../img/ruby-china-20150529.png" alt="">
          </div>
          <div class="img1">
            <img src="../img/golangtc-logo.png" alt="">
          </div>
          <div class="img1">
            <img src="../img/phphub-logo.png" alt="">
          </div>
          <div class="img1">
            <img src="../img/FjLUc7IJ2--DqS706etPQ1EGajxK.png" alt="">
          </div>
        </div>
      </div>
      <div class="six">
        <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">客户端二维码</div>
        <div class="img2">
          <img src="../img/FtG0YVgQ6iginiLpf9W4_ShjiLfU.png" alt="">
          <p style="background-color: white">客户端源码地址</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Axios from 'axios'
    export default {
    data(){
      return {
        userinfo:{},
        datalist:[],
        datalist1:[],
        hua:''
      }
    },
        created() {
          let { loginname }=this.$route.params
          Axios.get('https://cnodejs.org/api/v1/user/'+loginname).then( res =>{
            let {data}=res.data
            this.userinfo=data
            this.datalist=data.recent_replies
            this.datalist=data.recent_topics
            })
          Axios.get('https://cnodejs.org/api/v1/topic_collect/'+loginname).then( res =>{
            let {data}=res.data
            this.hua=data.length
            console.log(data)
          })
        }
    }
</script>
<style scoped>
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
  a{
    text-decoration: none;
    color: white;
  }
</style>
