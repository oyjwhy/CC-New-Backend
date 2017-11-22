<template>
  <div>
    <el-card class="box-card">
      <el-row :gutter="10" class="default">
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-rank"></i></span></br><span style="font-size:17px; font-weight:bold">教学中心</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-menu"></i></span></br><span style="font-size:17px; font-weight:bold">所授课程</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-search"></i></span></br><span style="font-size:17px; font-weight:bold">工作量查询</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-sort"></i></span></br><span style="font-size:17px; font-weight:bold">经费支出明细</span></div></el-col>  
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-news"></i></span></br><span style="font-size:17px; font-weight:bold">所带研究生</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-edit"></i></span></br><span style="font-size:17px; font-weight:bold">本科毕设</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-check"></i></span></br><span style="font-size:17px; font-weight:bold">硕士选择</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-phone-outline"></i></span></br><span style="font-size:17px; font-weight:bold">教师通讯录</span></div></el-col>
        
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-more-outline"></i></span></br><span style="font-size:17px; font-weight:bold">个人信息</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-setting"></i></span></br><span style="font-size:17px; font-weight:bold">修改密码</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-document"></i></span></br><span style="font-size:17px; font-weight:bold">论文著作</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-zoom-out"></i></span></br><span style="font-size:17px; font-weight:bold">项目信息</span></div></el-col>  
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-circle-plus-outline"></i></span></br><span style="font-size:17px; font-weight:bold">课程信息</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-download"></i></span></br><span style="font-size:17px; font-weight:bold">文档中心</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-service"></i></span></br><span style="font-size:17px; font-weight:bold">在职工硕毕设</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-star-off"></i></span></br><span style="font-size:17px; font-weight:bold">论文开题</span></div></el-col>

        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-tickets"></i></span></br><span style="font-size:17px; font-weight:bold">论文指导</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-view"></i></span></br><span style="font-size:17px; font-weight:bold">论文评审</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-plus"></i></span></br><span style="font-size:17px; font-weight:bold">综合课设2-2</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-circle-check-outline"></i></span></br><span style="font-size:17px; font-weight:bold">推免生选择</span></div></el-col>  
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-bell"></i></span></br><span style="font-size:17px; font-weight:bold">会议室预约</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-arrow-down"></i></span></br><span style="font-size:17px; font-weight:bold">会议室管理</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-upload2"></i></span></br><span style="font-size:17px; font-weight:bold">广告机上传</span></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="icon-style"><i class="el-icon-minus"></i></span></br><span style="font-size:17px; font-weight:bold">教学实习</span></div></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManagePanel',
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
.grid-content:hover{
  cursor:pointer;
  background: rgba(135, 206, 235, 0.7);
  font-weight: bold;
}
.icon-style {
  margin-top: 10px;
  font-size: 45px;
  color: rgb(37,70,158);
}
.icon-style:hover {
  font-size: 50px;
  color: rgb(37,70,158);
}
</style>
