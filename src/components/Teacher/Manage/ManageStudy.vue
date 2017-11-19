<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">学生学习</span>
      </div>
      <el-row :gutter="10" class="default">
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>教学计划</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>选课中心</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>学习中心</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>成绩查询</el-tag></div></el-col>
        <el-col :sm="6" :md="4" :lg="3"><div class="tag-style"><el-tag>补修主干课</el-tag></div></el-col>
     </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManageStudy',
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
