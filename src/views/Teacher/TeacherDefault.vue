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
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="CourseName"
          label="课程名称"
          align="center"
          width="140">
          <template slot-scope="scope">
            <span class="course-name" style="color:red">{{scope.row.CourseName}}</span><br>
            <span class="course-name">{{scope.row.TeacherName}}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="StudentNum"
          label="学生数"
          align="center"
          width="80">
        </el-table-column>
        <el-table-column
          label="名单"
          align="center"
          width="80">
          <template slot-scope="scope">
            <el-button
              type="text">
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column
          prop="CourseDocuments"
          label="讲稿"
          align="center">
        </el-table-column>
        <el-table-column
          prop="HomeWorks"
          label="作业"
          align="center">
        </el-table-column>
      </el-table>
      </el-card>      

      <!-- <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table> -->


    </div>
</template>




<script>
import NavigateBar from '@/components/NavigateBar'
export default {
  name: 'TeacherDefault',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableData: [{
        CourseName: '综合课程2-2',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocuments: '上传 0 下载 0',
        HomeWorks: '布置作业'
      }, {
        CourseName: '信息检索系统原理',
        TeacherName: '温延龙[1班]',
        StudentNum: '104',
        StudentList: '查看',
        CourseDocuments: '上传 5 下载 426',
        HomeWorks: '布置作业'
      }, {
        CourseName: '信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '74',
        StudentList: '查看',
        CourseDocuments: '上传 0 下载 0',
        HomeWorks: '布置作业'
      }, {
        CourseName: '现代信息检索',
        TeacherName: '温延龙[1班]',
        StudentNum: '13',
        StudentList: '查看',
        CourseDocuments: '上传 5 下载 66',
        HomeWorks: '布置作业'
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