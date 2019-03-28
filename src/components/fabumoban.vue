<template>
  <div class="main">
    <div class="content">
      <div class="header">
        <a href="">{{ navTitle }}</a>
      </div>
      <div class="create-form">
        <ul>
          <li>
            <span>选择版块{{ selected }}</span>
            <select name="" id="" v-model="selected">
              <option value="">请选择</option>
              <option :value="item.id" v-for="(item, key, index) in dataSelect" :key="index" selected>{{ item.name }}</option>
            </select>
          </li>
          <li>
            <input type="text" placeholder="标题字数10字以上" v-model="title">
            <p>{{title}}</p>
          </li>
          <li>
            <textarea name="" cols="30" rows="10" v-model="content" ref="aaa" ></textarea>
            <p>{{content}}</p>
          </li>
          <li class="sub-btn">
            <a href="javascript:;" @click="createTopic">{{flag ? '发布' : '编辑'}}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
let token = '29a6095a-146c-4d4e-9e98-d4083bc49a08'
let arrSelect = [
  {
    id: 'share',
    name: '分享'
  },
  {
    id: 'ask',
    name: '问答'
  },
  {
    id: 'job',
    name: '招聘'
  },
  {
    id: 'dev',
    name: '客户端测试'
  }
]
let apiUrl = ''
let topicId = ''
export default {
  data () {
    return {
      title: '',
      content: '',
      dataSelect: arrSelect,
      selected: '',
      navTitle: '',
      flag: true
    }
  },
  created () {
    if (this.$route.query.listId) {
      this.flag = false
      apiUrl = '/topics/update'
      topicId = this.$route.query.listId
      this.title = this.$route.query.listtitle
      this.selected = this.$route.query.listtab
      this.content = this.$route.query.listcontent
      document.title = '发布主题'
    }
    else {
      this.flag = true
      apiUrl = '/topics'
      document.title = '编辑主题'
    }
    // console.log(topicId)
    // console.log(apiUrl)
  },
  methods: {
    createTopic () {
      axios.post('https://cnodejs.org/api/v1/' + apiUrl, {
        accesstoken: token,
        topic_id: topicId,
        title: this.title,
        tab: this.selected,
        content: this.content
      }).then((res) => {
        this.title = ''
        this.selected = ''
        this.content = ''
        // if (res.success) {
        window.location.href = 'http://localhost:8080'
        // }
        // if (res.data.success) {
        // this.$router.replace({ path: '/' })
        // }
        // console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
  .main {
    width: 90%;
    margin: 12px auto;
    overflow: hidden;
    .content {
      width: 1095px;
      float: left;
      background: white;
      .header {
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: left;
        background: #f6f6f6;
        a {
          color: #80BD01;
          margin: 0 12px;
          font-size: 14px;
        }
      }
      .create-form {
        padding-bottom: 12px;
        ul {
          li {
            text-align: left;
            font-size: 14px;
            color: #333333;
            padding-left: 12px;
            margin-top: 12px;
            list-style: none;
            select {
              width:218px;
              height:28px;
              border: 1px #CCCCCC solid;
              border-radius: 3px;
              font-size: 14px;
              color: #555555;
              cursor: pointer;
            }
            input {
              border: 1px #DEDEDE solid;
              border-radius: 3px;
              width: 1070px;
              height: 32px;
            }
            textarea {
              width: 1070px;
              border: 1px #DEDEDE solid;
            }

          }
          .sub-btn {
            width: 72px;
            height: 36px;
            line-height: 36px;
            color: white;
            text-align: center;
            background: #0088CC;
            margin-left: 12px;
            padding: 0;
            a {
              color: white;
            }
          }
        }
      }
    }
    .aside {
      float: right;
      overflow: hidden;
    }
  }
</style>
