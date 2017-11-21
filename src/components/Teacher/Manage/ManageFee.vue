<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">财务管理</span>
      </div>
      <!-- <el-row :gutter="10" class="default">
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师费用发放管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师费用发放审核</el-tag></div></el-col>
     </el-row> -->
      <el-row :gutter="10" class="default">
       <el-col :sm="6" :md="4" :lg="3" v-for="item in ManageAcademyTags" :key="item.message"><el-button size="small" style="margin-bottom: 12px " plain>{{item.message}}</el-button></el-col>
        
       
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>部门信息管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>专业信息管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>专业班级管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>课程信息管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教学计划管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>开课</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>课程设置</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>选课设置</el-tag></div></el-col>
        
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>学生工作</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教务答疑</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师通讯录管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>学生管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>课程教学情况一览</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>本科毕设</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>综合课程设计2-2管理</el-tag></div></el-col>
        
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>研究生毕设</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师指导研究生情况</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教师教授本科生情况</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>本科生教学工作量管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>研究生教学工作量管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>项目管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>科研成果管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>行政工作量管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>竞赛管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>奖金工作量管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>推免生管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE毕业生设置</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE指导教师分配</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE毕业设计管理</el-tag></div></el-col>

        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE进度时间管理</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE评审专家分配</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>MSE系统参数设置</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>学生学费管理</el-tag></div></el-col>
     </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManageFee',
  data () {
    return {}
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
.grid-content:hover {
  cursor:pointer;
  background: rgba(135, 206, 235, 0.7);
  font-weight: bold;
}
.tag-style {
  margin-bottom: 20px;
}
.tag-style:hover {
  cursor:pointer;
  font-weight: bold;
}
</style>
