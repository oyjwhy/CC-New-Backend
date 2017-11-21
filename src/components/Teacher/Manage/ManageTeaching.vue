<template>
  <div>
    <el-card class="box-card-teaching">
      <div slot="header" class="clearfix-teaching">
        <span style="font-size: 20px; font-weight: bold;">教师教学</span>
      </div>

      <el-button size="small" style="margin-bottom: 12px " plain v-for="item in ManageTeachingTags" :key="item.message">{{item.message}}</el-button>
      <!-- <el-row :gutter="4" class="default">
        <el-col :sm="6" :md="4" :lg="3" v-for="item in ManageTeachingTags" :key="item.message"><el-button size="small" style="margin-bottom: 12px " plain>{{item.message}}</el-button></el-col>
      </el-row> -->
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'ManageTeaching',
  data () {
    return {
      ManageTeachingTags: [
        {message: '教学中心'},
        {message: '教学实习签字'},
        {message: '教学情况查询'},
        {message: '教学工作量'},
        {message: '本科毕设'}
      ]
    }
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
.box-card-teaching {
  margin-bottom: 20px;
}
.clearfix-teaching {
  height: 16px;
}
</style>
