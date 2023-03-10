<template>
  <el-container>
  <el-footer class="foot" style="height: 150px">
    <div class="foot-content">
      <div class="foot-a-bottom">
        <a href="#" target="_blank" class="foot-a-top">关于</a>
        <a href="#" target="_blank" class="foot-a-top">博客</a>
        <a href="#" target="_blank" class="foot-a-top">网站</a>
      </div>
      <div class="foot-icon">
        <el-tooltip class="item" effect="dark" content="微信扫一扫" placement="top">
          <i class="fa fa-weixin"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="QQ：2690708525" placement="top">
          <i class="fa fa-qq"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="邮件联系我" placement="top">
          <i class="fa fa-envelope-open"></i>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="电话：123456789" placement="top">
          <i class="fa fa-phone"></i>
        </el-tooltip>
      </div>
      <span>Copyright © 2022 Sunset | <a href="#" target="_blank" class="foot-a">个人主页</a> | Welcome to here!</span><br>
    </div>
  </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Foot"
}
</script>

<style scoped>
.foot-icon i{
  margin: 15px 20px;
  font-size: 18px;
}
.foot-a-bottom{
  margin: 0px 500px;
  height: 30px;
  border-bottom: 1px solid;
}
.foot-a-top{
  margin: 0px 20px;
  text-decoration: none;
  color: #f9fafc;
  font-weight: bold;
}
.foot-a{
  text-decoration: none;
  color: #f9fafc;
  font-weight: bold;
}
/*页面底部样式*/
.foot{
  background: linear-gradient(to right, rgba(11,72,107,0.9), rgba(245,98,23,0.9));
}
.foot-content{
  text-align: center;
  /*line-height: 120px;*/
  margin-top: 30px;
  color: #f9fafc;
}
</style>