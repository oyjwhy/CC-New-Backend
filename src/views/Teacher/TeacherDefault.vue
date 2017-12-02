<template>
  <div class="teacher-default">


    <navigate-bar></navigate-bar>

    <div class="bread-crumb-separate-line">
      <el-breadcrumb style="font-size:17px; margin-top:10px; margin-left:10px; width:80%; margin-right:0;" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

    </div>


    <manage-panel></manage-panel>

    <div class="separate-line"></div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">当前课程信息</span>
      </div>
      <el-table
        :data="tableDataCourse"
        v-loading="loading"
        style="width: 100%"
        header-row-style="font-size:17px; color: #424242">
        <el-table-column
          label="课程名称"
          align="center"
          width="240">
          <template slot-scope="scope">
            <a href="#" class="course-name" style="color:	#F08080">{{scope.row.CourseName}}</a><br>
            <a href="#" class="course-name">{{scope.row.TeacherName}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="StudentNum"
          label="学生数"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          label="名单"
          align="center"
          width="120">
          <template slot-scope="scope">
            <el-button
              type="text">
              查看
            </el-button>
          </template>~
        </el-table-column>
        <el-table-column
          label="讲稿"
          align="center"
          width="200">
          <template slot-scope="scope">
            <a href="#" class="course-name" style="color:#698B69">上传{{scope.row.CourseDocumentsUp}}</a><br>
            <a href="#" class="course-name" style="color:#6A5ACD">下载{{scope.row.CourseDocumentsDown}}</a>
          </template>
        </el-table-column>
        <el-table-column
          label="作业"
          align="center"
          min-width="500">
          <template slot-scope="scope">
            <span class="homework-font">{{scope.row.HomeWorks}}</span>
            <span v-for="item in scope.row.HomeWorkList">
              <div class="table-line"></div>{{item.message}}
            </span>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <div class="separate-line"></div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">研究生指导</span>
      </div>
      <el-table
        :data="tableDataStudent"
        stripe
        style="width: 100%"
        header-row-style="font-size:17px; color: #424242">
        <el-table-column
          prop="StudentNo"
          label="学号"
          align="center">
        </el-table-column>
        <el-table-column
          prop="StudentName"
          label="名字"
          align="center">
        </el-table-column>
        <el-table-column
          prop="StudentLeve"
          label="层次"
          align="center">
        </el-table-column>
        <el-table-column
          prop="StudentGrade"
          label="年级"
          align="center">
        </el-table-column>
        <el-table-column
          prop="StudentSex"
          label="性别"
          align="center">
        </el-table-column>
        <el-table-column
          prop="MajorName"
          label="专业"
          align="center"
          width="320">
        </el-table-column>
        <el-table-column
          prop="StudentCondition"
          label="状态"
          align="center">
        </el-table-column>
      </el-table>
    </el-card>   
  </div>
</template>




<script>
import NavigateBar from '@/components/teacher/NavigateBar'
import ManagePanel from '@/components/teacher/ManagePanel'

export default {
  name: 'TeacherDefault',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ManageType: 'Manage',
      tableDataCourse: [{
        CourseName: '综合课程2-2',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocumentsUp: '0',
        CourseDocumentsDown: '0',
        HomeWorks: '布置作业 0 次',
        HomeWorkList: []
      }, {
        CourseName: '信息检索系统原理',
        TeacherName: '温延龙[1班]',
        StudentNum: '104',
        StudentList: '查看',
        CourseDocumentsUp: '5',
        CourseDocumentsDown: '426',
        HomeWorks: '布置作业 3 次',
        HomeWorkList: [
          {message: '在线 09-29 至 10-11: 97 人已交 97 人未阅'},
          {message: '在线 10-19 至 11-08: 99 人已交 99 人未阅'},
          {message: '在线 11-16 至 12-13: 0 人已交 0 人未阅'}]
      }, {
        CourseName: '信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocumentsUp: '0',
        CourseDocumentsDown: '0',
        HomeWorks: '布置作业 0 次',
        HomeWorkList: []
      }, {
        CourseName: '现代信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '13',
        StudentList: '查看',
        CourseDocumentsUp: '5',
        CourseDocumentsDown: '66',
        HomeWorks: '布置作业 5 次',
        HomeWorkList: [
          {message: '在线 09-29 至 10-11:  97  人已交 97  人未阅'},
          {message: '在线  10-19 至 11-08:  99  人已交 99  人未阅'},
          {message: '在线  11-16 至 12-13:  0 人已交 0 人未阅'},
          {message: '在线  11-16 至 12-13:  0 人已交 0 人未阅'},
          {message: '在线  11-16 至 12-13:  0 人已交 0 人未阅'}]
      }],
      tableDataStudent: [{
        StudentLeve: '硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2014',
        StudentNo: '0123456789',
        StudentName: '张三',
        StudentSex: '男',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '专业硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2015',
        StudentNo: '0123456789',
        StudentName: '李四',
        StudentSex: '男',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '工程硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2015',
        StudentNo: '0123456789',
        StudentName: '张三',
        StudentSex: '女',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '博士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2013',
        StudentNo: '0123456789',
        StudentName: '张三四五',
        StudentSex: '女',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2014',
        StudentNo: '0123456789',
        StudentName: '张三',
        StudentSex: '男',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '专业硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2015',
        StudentNo: '0123456789',
        StudentName: '李四',
        StudentSex: '男',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '工程硕士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2015',
        StudentNo: '0123456789',
        StudentName: '张三',
        StudentSex: '女',
        StudentCondition: '本院在学'
      }, {
        StudentLeve: '博士',
        MajorName: '计算机科学与技术',
        StudentGrade: '2013',
        StudentNo: '0123456789',
        StudentName: '张三四五',
        StudentSex: '女',
        StudentCondition: '本院在学'
      }]
    }
  },
  components: {
    ManagePanel,
    NavigateBar
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.bread-crumb-separate-line {
  border-top: 2px solid #87ceeb;
  border-bottom: 2px solid #87ceeb;
  height: 40px;
  line-height: 40px;
}

.separate-line {
  height: 4px;
  background-color:	#63B8FF;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
  margin-top: 20px;
  margin-bottom: 50px;
}
.course-name:hover {
  cursor:pointer;
  font-weight: bold;
}
.table-line {
  height: 1px;
  background-color: rgba(176, 196, 222, 0.5);
}
.homework-font {
  /* color: #696969; */
  color: black;
  font-size: 15px;
  opacity: 0.8;
}
.homework-font:hover {
  cursor:pointer;
  font-weight: bold;
  color: #4F4F4F;
  font-size: 15px;
}
</style>