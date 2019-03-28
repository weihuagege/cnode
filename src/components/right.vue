<template>
  <div class="second">
<div class="one">
  <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">个人信息</div>
  <div style="display: flex;margin-left: 10px">
    <router-link to="Use">
    <img src="../img/47845671.png" alt="" style="width:60px;height: 60px">
    </router-link>
    <p style="margin-top: 23px;margin-left: 5px">weihuagege</p>
  </div>
  <div style="text-align: left;margin-left: 10px">积分:10</div>
  <div style="text-align: left;margin-left: 10px;margin-top: 3px;font-size: 12px">“ 这家伙很懒，什么个性签名都没有留下。 ”</div>
</div>
    <div class="btn">
      <button style="margin-left: 10px">
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
    <div class="three">
      <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">无人回复的话题</div>
      <div style="text-align: left">
        <p>docker 版本回滚 </p>
        <p>100个左右TCP客户端去访问同一个TCP</p>
        <p>写了个 eruda 的 webpack 插件，帮助调</p>
        <p>webpack+vue 模仿cnode社区 </p>
        <p>AI考拉技术分享-Node基础架构专题（二）</p>
      </div>
    </div>
    <div class="four">
      <div style="background-color: #f6f6f6;height: 30px;text-align:left;line-height: 30px ">积分榜   TOP 100 >> </div>
      <div style="text-align: left">
        <p>21345 i5ting </p>
        <p>15375 alsotang </p>
        <p>9350 leapon </p>
        <p>8760 jiyinyiyong  </p>
        <p>7680 atian25 （二）</p>
        <p>7035 yakczh </p>
        <p>6725 im-here </p>
        <p>6070 DevinXian </p>
        <p>5740 chapgaga </p>
        <p>5335 magicdawn </p>
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
</template>
<script>
    export default {
        name: "right"
    }
</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 100%;
    height: 1500px;
    background-color: #e1e1e1;
    margin-top: -30px;
  }
  .second{
    position: absolute;
    top: 30px;
    right: 30px;
    width: 260px;
    height: 1100px;
    border:  1px solid white;
    float: left;
    margin-left: 10px;
    margin-top: 30px;
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
  .one{
    width: 100%;
    height: 150px;
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
  a{
    text-decoration: none;
    color: white;
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
    width: 95%;
    height: 95%;
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
