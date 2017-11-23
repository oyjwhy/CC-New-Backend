<template>
  <div>
    <navigate-bar></navigate-bar>
    <div class="separate-line"></div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="font-size: 20px;">研究生指导</span>
      </div>
      <el-table
        :data="tableDataStudent"
        :show-header="false"
        stripe
        style="width: 100%">
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

export default {
  name: 'NewsList',
  data () {
    return {
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
  methods: {},
  components: {
    NavigateBar
  }
}
</script>

<style>
.separate-line {
  margin-top: 20px;
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
</style>


