<template>
  <div class="box" style="height: auto">
    <div class="first"style="height: auto">
     <div class="yi">
      <div class="o">
        <div style="width: 30px; height:17px; border-radius: 3px;line-height: 17px;margin-left: 5px;
        margin-top: 10px; background-color:#80bd01;color: white;text-align: center;font-size: 10px">置顶</div>
        <div style="font-size: 22px;margin-left: 5px;font-weight: 800">{{xiangqingDada.title}}</div>
      </div>
       <div class="l">
         <p style="font-size: 12px;margin-left: 10px"> <span>发布于</span> <span>3小时前</span><span>作者</span>
           <span></span><span>{{xiangqingDada.visit_count}}</span><span>次浏览 </span> <span>来自</span> <span>{{xiangqingDada.tab}}</span> </p>
       </div>
       <div>
           <router-link to="/Update">编辑</router-link>
       </div>
       <div class="time-right" @click="shou" v-if="lover">收藏</div>
       <div class="time-right-del" @click="qx" v-else="lover">取消收藏</div>
     </div>
        <div class="q" style="text-align: left" v-html="xiangqingDada.content">
        </div>
      <p style="text-align: left;margin-left: 10px">{{xiangqingDada.length}}</p>
      <div style="width: 100%;height: 10px;background-color: lightgray"></div>
      <div class="reply" style="display: flex;margin-top: 15px;flex-wrap: wrap;border-bottom: 1px solid deepskyblue;
      justify-content: center;text-align: left" v-for="(item,index) in xiangqingDada.replies" :key="index">
        <div class="o" style="width: 30px">
          <img :src="item.author.avatar_url" alt="" style="width: 30px;height: 30px">
        </div>
      <div class="t" style="margin-left: 35px;width: 500px;">
        <p>
          <span>{{ item.author.loginname }}</span>
          <span>8楼•</span>
          <span>10 天前</span>
        </p>
       <div v-html="item.content"></div>
      </div>
        <div class="s" style="margin-left: 50px">
          <span class="zan" @click="zan(item)">💖</span><span>{{item.ups.length}}</span>
          <span @click="hiding(item.id)">💭</span>
        </div>
         <div style="text-align: center;" v-if="id===item.id">
           <img src="../img/20190118110346.png" alt="" width="100%">
        <textarea cols="95" rows="5" v-model="msg"></textarea>
           <div style="width: 100px;height: 30px;margin-top: 10px">
             <button style="width: 70px; height: 30px; background-color:deepskyblue;border: 1px solid deepskyblue;
        color: white;margin-left: 50px;border-radius: 5px" @click="submit">
               回复
             </button></div>
      </div>
      </div>
      <div style="width: 100%;height: 30px;background-color: whitesmoke;text-align: left;line-height: 30px;color: lightgray">添加回复</div>
      <div style="text-align: center;">
        <img src="../img/20190118110346.png" alt="" width="100%">
        <textarea cols="95" rows="8" v-model="hui"></textarea>
        <div style="width: 100px;height: 30px;margin-top: 10px">
          <button style="width: 70px; height: 30px; background-color:deepskyblue;border: 1px solid deepskyblue;
        color: white;margin-left: 50px;border-radius: 5px" @click="re">
            回复
          </button>
        </div>
      </div>
    </div>
    <div class="second">
      <div class="one">
        <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">个人信息</div>
        <div style="display: flex">
          <img :src="xiangqingDada.author.avatar_url" alt="" style="width: 25px;height: 25px">
          <p style="margin-top: 5px;margin-left: 5px">{{xiangqingDada.author.loginname}}</p>
        </div>
        <div style="text-align: left">积分:{{xiangqingDada.visit_count}}</div>
        <div>狼叔说:少抱怨，多思考，未来更美好</div>
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
  import axios from 'axios'
    export default {
    data (){
      return{
        xiangqingDada:{},
        id:'',
        msg:'',
        whomid:'',
        hui:'',
        lover:true
      }
    },
      methods:{
      hiding(id){
     this.id=id
      },
        re(){
        axios.post('https://cnodejs.org/api/v1/topic/'+this.whomid+'/replies',{
          accesstoken:'9cc12752-9001-47b5-9341-43061b9fab71',
          content:this.hui,
          reply_id:this.id
        }).then(res =>{
          location.reload()
        })
        },
        shou(){
        this.lover=false
          axios({
            method: 'post',
            url: 'https://cnodejs.org/api/v1/topic_collect/collect',
            data: {
              accesstoken: '9cc12752-9001-47b5-9341-43061b9fab71',
              topic_id: this.whomid
            }
          }).then(res => {
            console.log(res)
          })
        },
        qx(){
        this.lover=true
          axios({
            method: 'post',
            url: 'https://cnodejs.org/api/v1/topic_collect/de_collect',
            data: {
              accesstoken: '9cc12752-9001-47b5-9341-43061b9fab71',
              topic_id : this.whomid
            }
          }).then(res => {
            console.log(res)
          })
        },
        submit(){
          axios({
            method: 'post',
            url: 'https://cnodejs.org/api/v1/topic/' + this.whomid + '/replies',
            data: {
              accesstoken: '9cc12752-9001-47b5-9341-43061b9fab71',
              content: this.msg,
              reply_id: this.id
            }
          }).then(res => {
            location.reload()
          })
        },
        zan(item){
          axios.post('https://cnodejs.org/api/v1/reply/' + item.id + '/ups', {
            accesstoken: '9cc12752-9001-47b5-9341-43061b9fab71'
          }).then(res => {
            location.reload()
          })
        }
        },
    created(){
      let {id}=this.$route.params;
      this.whomid=id
      axios.get(`https://cnodejs.org/api/v1/topic/${id}`).then(res=> {
        let {data}=res.data
        this.xiangqingDada=data
      });
    }
    }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
.zan :hover{
  display: none;
}
  .q{
    width: 100%;
  }
  .time-right {
    float: right;
    width: 52px;
    height: 35px;
    background: #80bd01;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    border-radius: 3px;
    margin-right: 10px;
  }
  .time-right-del {
    float: right;
    width: 70px;
    height: 35px;
    background: lightgray;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 35px;
    border-radius: 3px;
    margin-right: 10px;
  }
a{
  color:darkgray;
}
  p img{
    display: none;
  }
  .box{
    width: 100%;
    background-color: #e1e1e1;
  }
  .markdown-text{
    display: none;
  }
  .first{
    text-align: center;
    /*overflow: hidden;*/
    width: 750px;
    border:  1px solid white;
    float: left;
    margin-left: 80px;
    margin-top: 30px;
    background-color: white;
  }
  .markdown-text{
    border: 1px solid red;
  }
  .o{
    display: flex;
  }
  .daohang{
    width: 100%;
    height: 35px;
    background-color: #f6f6f6;
  }
  .daohang ul li{
    list-style: none;
    float: left;
    font-size: 14px;
    color: #80bd01;
    margin-left: 10px;
    margin-top: 10px;
  }
  span{
    font-size: 14px;
  }
  .daohang ul li:hover{
    color: #2e6da4;
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
  .yi{
    width: 100%;
    height: 130px;
    text-align: left;
    border-bottom: dashed 0.5px ;
  }
  .second{
    width: 260px;
    height: 1100px;
    border:  1px solid white;
    float: left;
    margin-left: 20px;
  }
</style>
