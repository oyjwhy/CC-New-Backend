<template>
  <div class="header">
    <div class="navigate-bar-style">

      <el-popover
        ref="ManageTeaching"
        placement="bottom"
        trigger="hover"
        width="550"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageTeachingTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageStudy"
        placement="bottom"
        trigger="hover"
        width="500"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageStudyTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>


      <el-popover
        ref="ManageAcaedmy"
        placement="bottom"
        trigger="hover"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageAcademyTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageFee"
        placement="bottom"
        trigger="hover"
        width="300"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageFeeTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageSearchInfo"
        placement="bottom"
        trigger="hover"
        width="600"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageSearchInfoTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageMasterSelection"
        placement="bottom"
        trigger="hover"
        width="430"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageMasterSelectionTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageSystem"
        placement="bottom"
        trigger="hover"
        width="500"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageSystemTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-popover
        ref="ManageNews"
        placement="bottom"
        trigger="hover"
        width="300"
        transition="el-zoom-in-top">
        <el-button size="small" style="margin-bottom: 12px " v-for="item in ManageNewsTags" :key="item.message">{{item.message}}</el-button>
      </el-popover>

      <el-row>
        <!-- <el-button type="primary" size="medium"><span style="color: #FFF8DC;">{{ TeacherName }}</span></el-button> -->
        <!-- <el-col :span="2" style="margin-right:28px" ><el-button type="primary" size="medium"><span style="color: #FFF8DC;">{{ TeacherName }}</span></el-button> -->
        <el-button type="primary" plain size="medium" round><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>系统首页</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageTeaching><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>教师教学</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageStudy><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>学生学习</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageAcaedmy><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>学院管理</span></el-button>  
        <el-button type="primary" plain size="medium" round v-popover:ManageFee><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>财务管理</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageSearchInfo><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>信息查询</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageMasterSelection><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>硕士双选</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageSystem><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>系统维护</span></el-button>
        <el-button type="primary" plain size="medium" round v-popover:ManageNews><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>新闻中心</span></el-button>
        <el-button type="primary" plain size="medium" round><span class="nav-btn-font"><i class="el-icon-d-arrow-right"></i>系统注销</span></el-button>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigateBar',
  data () {
    return {
      TeacherName: '阿斯顿[fcj]',
      ManageAcademyTags: [
        {message: '部门信息管理'},
        {message: '专业信息管理'},
        {message: '专业班级管理'},
        {message: '课程信息管理'},
        {message: '教学计划管理'},
        {message: '开课'},
        {message: '课程设置'},
        {message: '选课设置'},
        {message: '学生工作'},
        {message: '教务答疑'},
        {message: '教师管理'},
        {message: '教师通讯录管理'},
        {message: '学生管理'},
        {message: '课程教学情况一览'},
        {message: '本科毕设'},
        {message: '综合课程设计2-2管理'},
        {message: '研究生毕设'},
        {message: '教师指导研究生情况'},
        {message: '教师教授本科生情况'},
        {message: '本科生教学工作量管理'},
        {message: '研究生教学工作量管理'},
        {message: '项目管理'},
        {message: '科研成果管理'},
        {message: '行政工作量管理'},
        {message: '竞赛管理'},
        {message: '奖金工作量管理'},
        {message: '推免生管理'},
        {message: '学生学费管理'}
      ],
      ManageTeachingTags: [
        {message: '教学中心'},
        {message: '教学实习签字'},
        {message: '教学情况查询'},
        {message: '教学工作量'},
        {message: '本科毕设'}
      ],
      ManageStudyTags: [
        {message: '教学计划'},
        {message: '选课中心'},
        {message: '学习中心'},
        {message: '成绩查询'},
        {message: '补修主干课'}
      ],
      ManageFeeTags: [
      {message: '教师费用发放管理'},
      {message: '教师费用发放审核'}
      ],
      ManageSearchInfoTags: [
        {message: '学生情况查询'},
        {message: '教师通讯录查询'},
        {message: '教师数量查询'},
        {message: '教师项目查询'},
        {message: '教师论文查询'},
        {message: '学生论文查询'},
        {message: '教师工作量查询'},
        {message: '科研成果查询'},
        {message: '国创查询'},
        {message: '百项查询'},
        {message: '竞赛查询'},
        {message: '科研经费管理费查询'},
        {message: '研究生评教查询'},
        {message: '会议室预约'}
      ],
      ManageMasterSelectionTags: [
        {message: '考生信息查看'},
        {message: '导师招生信息'},
        {message: '未确定导师的考生导师设置'},
        {message: '批准导师招生人数'},
        {message: '教师论文查询'}
      ],
      ManageSystemTags: [
        {message: '数字字典维护'},
        {message: '个人密码修改'},
        {message: '用户密码修改'},
        {message: '角色权限配置'},
        {message: '学院管理员设置'},
        {message: '数据库备份'},
        {message: '初始拼音简码'},
        {message: '系统参数设置'},
        {message: '教师财务查询配置'},
        {message: '修改日志查询'}
      ],
      ManageNewsTags: [
        {message: '学院通知'},
        {message: '教务通知'},
        {message: '课程通知'},
        {message: '系统公告'},
        {message: '新闻中心'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navigate-bar-style {
  margin-top: 10px;
}
.nav-btn-font {
  color: #3D3D3D;
}
.nav-btn-font:hover {

  color: #FCFCFC;
  font-weight: bold;
}

/* 手机（小于等于 768px） */
@media (max-width: 768px) { 
  .el-button--primary.is-plain {
    width: 9%;
    margin-left: 0;
    font-size: 1px;
  }
  .el-button--medium.is-round {
    padding: 5px 2px;
  }
  .el-icon-d-arrow-right{
    display: none;
  }
  .el-popover {
    width: 90%;
  }
}

/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) and (max-width: 991px) { 
  .el-button--primary.is-plain {
    width: 9.5%;
    margin-left: 0;
    font-size: 12px;
  }
  .el-button--medium.is-round {
    padding: 10px 10px;
  }
  .el-icon-d-arrow-right{
    display: none;
  }
  .el-popover {
    width: 90%;
  }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) and (max-width: 1367px) { 
  .el-button--primary.is-plain {
    width: 9.5%;
    margin-left: 0;
    font-size: 12px;
  }
  .el-button--medium.is-round {
    padding: 10px 10px;
  }
  .el-popover {
    width: 70%;
  }
}

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 1368px) and (max-width: 2500px) { 
  .el-button--primary.is-plain {
    width: 9.5%;
    margin-left: 2px;
    font-size: 14px;
  }
  .el-popover {
    width: 900px;
  }
  /* .el-button--medium.is-round {
    padding: 10px 10px;
  } */
}
</style>
