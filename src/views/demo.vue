<template>
<div>
  <button @click="getNews()">获取信息</button>
  <br />
  <br />
  <input v-model="newsID" placeholder="请输入新闻查询ID" style="width:40%"></input>
  <br>
  <div style="margin-left:40%;margin-top:1%">
  <tr>
    <td><strong>标题：</strong></td>
    <td>{{title}}</td>
  </tr>
  <tr>
    <td>关键字：</td>
    <td>{{keywords}}</td>
  </tr>
  <tr>
    <td>类型：</td>
    <td>{{TypeID}}</td>
  </tr>
  <tr>
    <td>作者：</td>
    <td>{{AuthorID}}</td>
  </tr>
  <tr>
    <td>CheckStatus：</td>
    <td>{{CheckStatus}}</td>
  </tr>
  <tr>
    <td>发布时间：</td>
    <td>{{PublishTime}}</td>
  </tr>
  </div>

  <br>
  <br>
  <span><strong>内容部分：</strong></span>
  <br>
  <div align="justify" style="margin: 1% 10% 1% 10%">
  <span v-html="Content"></span>
  <!-- {{Content}} -->
  </div>

</div>
</template>

<script>

import AXIOS from 'axios'

export default {
  data () {
    return {
      newsID: '',
      msg: 'test',
      title: '_title_',
      keywords: 'key1、key2、key3',
      TypeID: '1',
      AuthorID: '1',
      CheckStatus: '1',
      Content: '这里是UE测试',
      defaultMsg: '这里是UE测试',
      PublishTime: '2017-11-09 11:00:22'
    }
  },
  methods: {
    getNews () {
      AXIOS.get('http://192.168.190.120:8081/news/1', {
        params: {},
        headers: {
          token: 'oyjw'
        }
      })
        .then(res => {
          this.msg = res
          this.title = res.data.Title
          this.keywords = res.data.Keywords
          this.TypeID = res.data.TypeID
          this.AuthorID = res.data.AutherID
          this.CheckStatus = res.data.CheckStatus
          this.Content = res.data.Content
          this.PublishTime = res.data.PublishTime
        })
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

