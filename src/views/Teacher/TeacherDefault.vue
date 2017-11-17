<template>
  <div class="TeacherDefault">

    <navigate-bar></navigate-bar>

    <div style="position: absolute; width: 100%;  height: auto;">
      <hr style="width: 58%; height: 5px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB; margin-top: 15px; margin-bottom: 5px;" />
      <el-breadcrumb style="margin-left: 21% ; font-size: 15px" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      
      <hr style="width: 58%; height: 5px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB; margin-top: 5px; margin-bottom: 15px;" />
      

      <table align="center">
        <el-row :gutter="5" style="width: 1150px;">
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>教学中心</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>所授课程</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>工作量查询</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>经费支出明细</div></el-col>  
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>所带研究生</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>本科毕设</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>硕士选择</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>教师通讯录</div></el-col>
          <hr style="width: 100%; height: 0px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB; margin-top: 4px; margin-bottom: 4px;" />
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>个人信息</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>修改密码</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>论文著作</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>项目信息</div></el-col>  
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>课程信息</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>文档中心</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>在职工硕毕设</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>论文开题</div></el-col>
          <hr style="width: 100%; height: 0px; border-width: 0px; color: #7EC0EE; background-color: #87CEEB; margin-top: 4px; margin-bottom: 4px;" />
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>论文指导</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>论文评审</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>综合课设2-2</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>推免生选择</div></el-col>  
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>会议室预约</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>会议室管理</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>广告机上传</div></el-col>
          <el-col :span="3"><div class="grid-content bg-purple"><font size="20px"><i class="el-icon-star-on"></i></font></br>教学实习</div></el-col>
        </el-row>  
      </table>

      <hr style="width: 60%; height: 5px; border-width: 0px; color: #7EC0EE; background-color: #63B8FF; margin-top: 0px; margin-bottom: 15px;" />

      </div>




    </div>





  </div>
</template>




<script>

import NavigateBar from '@/components/NavigateBar'
export default {
  name: 'TeacherDefault',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavigateBar
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<style>
  .el-row {
    margin-bottom: 20px;
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
    background: rgba(	135,206,235,0.2);
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 10px;
    min-height: 100px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>