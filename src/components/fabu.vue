<template>
  <div class="box">
    <div class="first">
      <div class="top" style="text-align: left">
        <a href="cnode.html"  style="margin-left: 20px"><span style="color: lawngreen">主页</span></a>
        <span>/</span>
        <span style="color: #5D6063">发表话题</span>
      </div>
      <div class="select" style="text-align: left;margin-left: 10px;margin-top: 5px">
        <span>
          选择板块：
        </span>
        <span>
          <select style="width: 200px;height: 30px" v-model="tab">
            <option value="ask">分享</option>
            <option value="share">问答</option>
            <option value="job">招聘</option>
            <option value="dev">客户端测试</option>
          </select>
        </span>
        <input type="text" v-model="title"
               style="width: 670px; height:25px;margin-left: 20px;margin-top: 10px" placeholder="标题字数不少于10字">
      </div>
      <div class="tu" style="margin-top: 5px">
        <img src="../img/20190118110346.png" alt="">
      </div>
      <textarea name="" id="" cols="97.8" rows="16" v-model="content"></textarea>
      <div style="margin-left: 500px;color: darkgray" >
        <span>lines:  1</span>
        <span>words:  0</span>
        <span>0:0</span>
      </div>
      <div style="width: 100px;height: 30px;margin-top: 20px">
      <button style="width: 70px; height: 30px; background-color:deepskyblue;border: 1px solid deepskyblue;
        color: white;margin-left: 50px;border-radius: 5px" @click="submit">
        提交
      </button></div>
  </div>
    <div class="right" style="margin-top: 30px;margin-left: 30px">
      <div style="width: 100%;height: 230px;text-align: left" class="zi" >
        <div class="h" style=" height: 30px;
    line-height: 30px;color: darkgray;
background-color: #f6f6f6;font-size: 12px">
          Markdown 语法参考
        </div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">###单行的标题</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">***粗体***</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">console.log(行内代码)</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">```js\n  code\n```标记代码块</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">内容[连接]</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">文字说明（图片连接）</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px">Markdown文档</div>
      </div>
      <div style="width: 100%;height: 110px;" class="ti">
        <div class="h" style=" height: 30px;
    line-height: 30px;color: darkgray;
background-color: #f6f6f6;font-size: 12px;text-align: left">
          话题发布指南
        </div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px;text-align: left">       文字说明（图片连接）</div>
        <div style="font-size: 12px;margin-left: 10px;margin-top: 6px;text-align: left">       Markdown文档</div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        tab: '',
        title: '',
        content: ''
      }
    },
    methods: {
      submit () {
        axios({
          method: 'post',
          url: 'https://cnodejs.org/api/v1/topics',
          data: {
            accesstoken: '1f12d0e5-b2f0-43ee-abb2-3f3d01c9e239',
            title: this.title,
            tab: this.tab,
            content: this.content
          }
        }).then(res => {
        })
      }
    },
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
    display: flex;
  }
  a{
    text-decoration: none;
    height: 20px;
    font-size: 13px;
    color: #80bd01;
    margin-left: 5px;
  }
  .first{
    width: 720px;
    height: 550px;
    border:  1px solid white;
    float: left;
    margin-left: 70px;
    margin-top: 30px;
    background-color: white;
  }

</style>
