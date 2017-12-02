<template>
  <div>
    <el-card class="box-card-manage-panel">
      <el-row :gutter="20" class="manage-panel-default">
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-rank"></i></span><p class="panel-font-style">教学中心</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-menu"></i></span><p class="panel-font-style">所授课程</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-sort"></i></span><p class="panel-font-style">经费支出</p></div></el-col>  
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-edit"></i></span><p class="panel-font-style">本科毕设</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-check"></i></span><p class="panel-font-style">硕士选择</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-star-off"></i></span><p class="panel-font-style">论文开题</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-tickets"></i></span><p class="panel-font-style">论文指导</p></div></el-col>
 
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-view"></i></span><p class="panel-font-style">论文评审</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-more-outline"></i></span><p class="panel-font-style">个人信息</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-setting"></i></span><p class="panel-font-style">修改密码</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-document"></i></span><p class="panel-font-style">论文著作</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-zoom-out"></i></span><p class="panel-font-style">项目信息</p></div></el-col>  
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-circle-plus-outline"></i></span><p class="panel-font-style">课程信息</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-download"></i></span><p class="panel-font-style">文档中心</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-minus"></i></span><p class="panel-font-style">教学实习</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-service"></i></span><p class="panel-font-style">MSE毕设</p></div></el-col>   

        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-phone-outline"></i></span><p class="panel-font-style">教师通讯录</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-news"></i></span><p class="panel-font-style">所带研究生</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-search"></i></span><p class="panel-font-style">工作量查询</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-plus"></i></span><p class="panel-font-style">综合课设2-2</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-circle-check-outline"></i></span><p class="panel-font-style">推免生选择</p></div></el-col>  
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-bell"></i></span><p class="panel-font-style">会议室预约</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-arrow-down"></i></span><p class="panel-font-style">会议室管理</p></div></el-col>
        <el-col :xs="12" :sm="6" :md="4" :lg="3"><div class="grid-content bg-purple"><span class="panel-icon-style"><i class="el-icon-upload2"></i></span><p class="panel-font-style">广告机上传</p></div></el-col>    
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
.box-card-manage-panel {
  margin-top: 20px;
  margin-bottom: 50px;
}
.manage-panel-default {
  margin-top: 10px;
  text-align: center;
}

.el-row {
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: rgba(135, 206, 235, 0.2);
}
.grid-content {
  cursor:pointer;
  border-radius: 5px;
  box-shadow: 4px 4px 4px #EAEAEA;
  min-height: 100px;
  margin-bottom: 20px;
}
.grid-content:hover{
  transition: all, .3s;
  cursor:pointer;
  box-shadow: 4px 4px 12px #888888;
  background: rgba(135, 206, 235, 0.7);
  font-weight: bold;
}

.grid-content:active{
  box-shadow: 4px 4px 4px #EAEAEA;
  background: rgba(135, 206, 235, 0.5);
}

.grid-content:hover .panel-icon-style{
  font-size: 42px;
  color: rgb(10,56,123);
}

.panel-icon-style {
  font-size: 40px;
  color: rgba(37,70,158,0.7);
}

.panel-font-style {
  font-size: 17px;
  font-weight: bold;
}
</style>
