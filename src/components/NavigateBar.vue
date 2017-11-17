<template>
  <div class="NavigateBar">
    <div>
      <a href="#/teacherdefault"><img src="../assets/logo-cc.png"></a>
    </div>
    <div>
      <table border="0" align="center">
        <tr>

          <td><img src="../assets/rabbit-jump.gif"></td>
          <td><el-tag hit="true"><span style="color: #7171C6;"><strong>{{TeacherName}}</strong></span></el-tag></td>
          <table style="cursor: pointer; ">
            <tr>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>系统首页</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>教师教学</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>学生学习</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>学院管理</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>财务管理</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>课程辅导</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>系统维护</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>新闻中心</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>硕士双选</el-button></td>
              <td><el-button size="mini" round><i class="el-icon-d-arrow-right"></i>系统注销</el-button></td>
            </tr>
          </table>

        </tr>
      </table>

    </div>
    <div>
      <table border="0" align="center">
        <tr >
          <td>
            <hr style=" height: 5px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB" />
          </td>
        </tr>
        <tr>
          <td>
            <el-breadcrumb style=" font-size: 15px" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item>首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
          </td>
        </tr>
        <tr>
          <td>
            <hr style="width: 58%; height: 5px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB" />
          </td>
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
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>

<style>

</style>
