<template>
  <div class="TeacherDefault">

    <navigate-bar></navigate-bar>
      <div class="Breadcrumb">
      <el-breadcrumb style="font-size: 15px;margin-top:10px" separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      </div>      
      <el-card class="box-card">
        <el-row :gutter="10" class="default">
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-rank"></i></span></br>教学中心</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-menu"></i></span></br>所授课程</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-search"></i></span></br>工作量查询</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-sort"></i></span></br>经费支出明细</div></el-col>  
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-news"></i></span></br>所带研究生</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-edit"></i></span></br>本科毕设</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-check"></i></span></br>硕士选择</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-phone-outline"></i></span></br>教师通讯录</div></el-col>
          
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-more-outline"></i></span></br>个人信息</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-setting"></i></span></br>修改密码</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-document"></i></span></br>论文著作</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-zoom-out"></i></span></br>项目信息</div></el-col>  
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-circle-plus-outline"></i></span></br>课程信息</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-download"></i></span></br>文档中心</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-service"></i></span></br>在职工硕毕设</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-star-off"></i></span></br>论文开题</div></el-col>

          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-tickets"></i></span></br>论文指导</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-view"></i></span></br>论文评审</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-plus"></i></span></br>综合课设2-2</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-circle-check-outline"></i></span></br>推免生选择</div></el-col>  
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-bell"></i></span></br>会议室预约</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-arrow-down"></i></span></br>会议室管理</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-upload2"></i></span></br>广告机上传</div></el-col>
          <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-minus"></i></span></br>教学实习</div></el-col>
        </el-row>
      </el-card>

      <div class="separate-line"></div>

      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-size: 20px;">当前课程信息</span>
        </div>
       <el-table
        :data="tableDataCourse"
        stripe
        style="width: 100%">
        <el-table-column
          label="课程名称"
          align="center"
          width="180">
          <template slot-scope="scope">
            <a href="#" class="course-name" style="color:red">{{scope.row.CourseName}}</a><br>
            <a href="#" class="course-name">{{scope.row.TeacherName}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="StudentNum"
          label="学生数"
          align="center"
          width="100">
        </el-table-column>
        <el-table-column
          label="名单"
          align="center"
          width="100">
          <template slot-scope="scope">
            <el-button
              type="text">
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          label="讲稿"
          align="center"
          width="100">
          <template slot-scope="scope">
            <a href="#" class="course-name" style="color:#698B69">上传{{scope.row.CourseDocumentsUp}}</a><br>
            <a href="#" class="course-name" style="color:#6A5ACD">下载{{scope.row.CourseDocumentsDown}}</a>
          </template>
        </el-table-column>
        <el-table-column
          prop="HomeWorks"
          label="作业"
          align="center">
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
        border
        style="width: 99%">
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
          label="年纪"
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
          width="240">
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
import NavigateBar from '@/components/NavigateBar'
export default {
  name: 'TeacherDefault',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableDataCourse: [{
        CourseName: '综合课程2-2',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocumentsUp: '0',
        CourseDocumentsDown: '0',
        HomeWorks: '布置作业'
      }, {
        CourseName: '信息检索系统原理',
        TeacherName: '温延龙[1班]',
        StudentNum: '104',
        StudentList: '查看',
        CourseDocumentsUp: '5',
        CourseDocumentsDown: '426',
        HomeWorks: '布置作业'
      }, {
        CourseName: '信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocumentsUp: '0',
        CourseDocumentsDown: '0',
        HomeWorks: '布置作业'
      }, {
        CourseName: '现代信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '13',
        StudentList: '查看',
        CourseDocumentsUp: '5',
        CourseDocumentsDown: '66',
        HomeWorks: '布置作业'
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
    NavigateBar
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: rgba(135, 206, 235, 0.2);
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  cursor:pointer;
  border-radius: 10px;
  min-height: 100px;
  margin-bottom: 10px;
}
.grid-content:hover{
  cursor:pointer;
  background: rgba(135, 206, 235, 0.7);
  font-weight: bold;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.Breadcrumb {
  border-top: 2px solid #87ceeb;
  border-bottom: 2px solid #87ceeb;
  height: 40px;
  line-height: 40px;
}
.default {
  margin-top: 20px;
  text-align: center;
}
.icon-style {
  font-size: 45px;
  color: rgba(209,95,238, 0.5);
}
.icon-style:hover {
  font-size: 50px;
  color: rgb(209,95,238);
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
</style>