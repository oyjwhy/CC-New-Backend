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

      <el-popover
        ref="ManageTeaching"
        placement="bottom"
        trigger="hover"
        width="550">
        <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageTeachingTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageStudy"
        placement="bottom"
        trigger="hover"
        width="500">
        <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageStudyTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageAcaedmy"
        placement="bottom"
        trigger="hover"
        width="900">
        <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageAcademyTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageFee"
        placement="bottom"
        trigger="hover"
        width="300">
        <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageFeeTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageSearchInfo"
        placement="bottom"
        trigger="hover"
        width="600">
        <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageSearchInfoTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>


      <el-row :gutter="100">
        <el-col :span="2" style="margin-right:24px" ><el-button type="primary" plain size="medium"><strong>{{ TeacherName }}</strong></span></el-button></el-col>
        <el-col :span="2"><el-button size="medium" round ><i class="el-icon-d-arrow-right"></i>系统首页</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round v-popover:ManageTeaching><i class="el-icon-d-arrow-right"></i>教师教学</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round v-popover:ManageStudy><i class="el-icon-d-arrow-right"></i>学生学习</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round v-popover:ManageAcaedmy><i class="el-icon-d-arrow-right"></i>学院管理</el-button></el-col>  
        <el-col :span="2"><el-button size="medium" round v-popover:ManageFee><i class="el-icon-d-arrow-right"></i>财务管理</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round v-popover:ManageSearchInfo><i class="el-icon-d-arrow-right"></i>信息查询</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round ><i class="el-icon-d-arrow-right"></i>课程辅导</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round ><i class="el-icon-d-arrow-right"></i>系统维护</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round ><i class="el-icon-d-arrow-right"></i>新闻中心</el-button></el-col>
        <el-col :span="2"><el-button size="medium" round ><i class="el-icon-d-arrow-right"></i>系统注销</el-button></el-col>
      </el-row>

      





    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigateBarTwo',
  data () {
    return {
      TeacherName: '名字 [name]',
      ManageAcademyTags: [
        {message: '部门信息管理'},
        {message: '专业信息管理'},
        {message: '专业班级管理'},
        {message: '课程信息管理'},
        {message: '教学计划管理'},
        {message: '开课'},
        {message: '课程设置'},
        {message: '选课设置'},
        {message: '学生工作'},
        {message: '教务答疑'},
        {message: '教师管理'},
        {message: '教师通讯录管理'},
        {message: '学生管理'},
        {message: '课程教学情况一览'},
        {message: '本科毕设'},
        {message: '综合课程设计2-2管理'},
        {message: '研究生毕设'},
        {message: '教师指导研究生情况'},
        {message: '教师教授本科生情况'},
        {message: '本科生教学工作量管理'},
        {message: '研究生教学工作量管理'},
        {message: '项目管理'},
        {message: '科研成果管理'},
        {message: '行政工作量管理'},
        {message: '竞赛管理'},
        {message: '奖金工作量管理'},
        {message: '推免生管理'},
        {message: '学生学费管理'}
      ],
      ManageTeachingTags: [
        {message: '教学中心'},
        {message: '教学实习签字'},
        {message: '教学情况查询'},
        {message: '教学工作量'},
        {message: '本科毕设'}
      ],
      ManageStudyTags: [
        {message: '教学计划'},
        {message: '选课中心'},
        {message: '学习中心'},
        {message: '成绩查询'},
        {message: '补修主干课'}
      ],
      ManageFeeTags: [
      {message: '教师费用发放管理'},
      {message: '教师费用发放审核'}
      ],
      ManageSearchInfoTags: [
        {message: '学生情况查询'},
        {message: '教师通讯录查询'},
        {message: '教师数量查询'},
        {message: '教师项目查询'},
        {message: '教师论文查询'},
        {message: '学生论文查询'},
        {message: '教师工作量查询'},
        {message: '科研成果查询'},
        {message: '国创查询'},
        {message: '百项查询'},
        {message: '竞赛查询'},
        {message: '科研经费管理费查询'},
        {message: '研究生评教查询'},
        {message: '会议室预约'}
      ]
    }
  },
  methods: {
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
