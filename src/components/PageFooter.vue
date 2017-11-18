<template>
  <div class="page-footer">
    <span class="footer-font-size">Copyright(C) 2013-2018, College of Computer and Control Engineering. Nankai University, All Rights Reserved<br>
    版权所有：南开大学计算机与控制工程学院 设计制作：数据库与信息系统实验室<br><br>
    自2003年11月8日15时起到现在该站登录次数为<span style="color:red;">36005176</span>次</span>
  </div>
</template>

<script>
export default {
  name: 'NavigateBar',
  data () {
    return {
      TeacherName: '名字 [name]'
    }
  },
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.page-footer {
  margin-top: 40px;
  background-color: rgb(65,105,225);
  height: 85px;
  text-align: center;
  color: rgb(		220,220,220);
  font-size: 15px;
}
</style>
