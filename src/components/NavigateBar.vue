<template>
  <div class="Header">
    <img src="../assets/pageHead1.png" width="100%">
    <img src="../assets/pageHead2.png" width="100%">

    <div class="navigatebar-separate-line"></div>

    <div class="NavigateBar">
          <!-- <td><img src="../assets/rabbit-jump.gif"></td>
          <td><el-tag hit="true"><span style="color: #7171C6;"><strong>{{ TeacherName }}</strong></span></el-tag></td> -->
          <!-- <table style="cursor: pointer;">
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
          </table> -->

      <el-row :gutter="100">
        <el-col :span="2" style="margin-right:24px" ><el-button type="primary" plain size="medium"><strong>{{ TeacherName }}</strong></span></el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('Manage')"><i class="el-icon-d-arrow-right"></i>系统首页</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageTeaching')"><i class="el-icon-d-arrow-right"></i>教师教学</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageStudy')"><i class="el-icon-d-arrow-right"></i>学生学习</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageAcademy')"><i class="el-icon-d-arrow-right"></i>学院管理</el-button></el-col>  
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageFee')"><i class="el-icon-d-arrow-right"></i>财务管理</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageSearchInfo')"><i class="el-icon-d-arrow-right"></i>信息查询</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageTeaching')"><i class="el-icon-d-arrow-right"></i>课程辅导</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageTeaching')"><i class="el-icon-d-arrow-right"></i>系统维护</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageTeaching')"><i class="el-icon-d-arrow-right"></i>新闻中心</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round @click="changeManageType('ManageTeaching')"><i class="el-icon-d-arrow-right"></i>系统注销</el-button></el-col>
      </el-row>
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
    changeManageType (Type) {
      this.$emit('ManageType', Type)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .NavigateBar {
    margin-top: 10px;
  }
  .navigatebar-separate-line {
    background-color: rgba(176, 196, 222, 0.6);
    height: 2px;
  }
</style>
