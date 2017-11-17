<template>
  <div class="NavigateBar">
    <div>
      <a href="#/teacherdefault"><img src="../assets/logo-cc.png" width="1200px"></a>
    </div>
    <div>
      <table border="0" align="center" style="margin-top:10px">
        <tr>

          <td><img src="../assets/rabbit-jump.gif"></td>
          <td><el-tag hit="true"><span style="color: #7171C6;"><strong>{{TeacherName}}</strong></span></el-tag></td>
          <table style="cursor: pointer; ">
            <tr>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>系统首页</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>教师教学</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>学生学习</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>学院管理</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>财务管理</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>课程辅导</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>系统维护</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>新闻中心</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>硕士双选</el-button></td>
              <td><el-button style="margin-left:10px" size="small" round><i class="el-icon-d-arrow-right"></i>系统注销</el-button></td>
            </tr>
          </table>
        </tr>
      </table>
    </div>



  </div>
</template>

<script>
export default {
  name: 'NavigateBar',
  data () {
    return {
      TeacherName: '名字 [name]'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>

<style>
</style>
