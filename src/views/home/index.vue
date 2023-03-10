<template>
  <div class="head-home">
    <el-main>
      <div class="nf">
        <h2 class="nf-r1">夕阳下的余晖</h2>
        <!--        日落尤其温柔，人间皆是浪漫-->
        <h1 class="nf-r2">我把黄昏落于纸笔，恰似青春词不达意</h1>
      </div>
      <div style="text-align: center">
        <div class="head-icon">
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
      </div>
    </el-main>
    <div class="down">
      <i class="fa fa-angle-double-down" aria-hidden="true" style="font-size: 80px"></i>
    </div>
  </div>
  <div class="home">
    <div class="home-content">
      <h1 class="home-title center">网站介绍</h1>
      <div class="title-content center">
        “前后端分离，人不分离。”
      </div>
      <div class="introduce">
        <div class="introduce-left">
          <div class="left-content">技术栈</div>
        </div>
        <div class="introduce-right">
          <p style="margin-left: -130px">前端框架：Vue,Echars,Vuex,ElementUI</p>
          <p style="margin-left: -100px">后端技术：SpringBoot,mybatis,maven,Spring Security</p>
          <p style="margin-left: -70px">数据存储：关系型数据库MySQL</p>
          <p style="margin-left: -100px">项目部署：腾讯云服务器</p>
          <p style="margin-left: -130px">开发工具：IDEA,webStorm,Navicat,postman...</p>
        </div>
      </div>
      <h1 class="recommend center"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;推荐文章</h1>
      <div>
        <div class="firstBlog">
          <!--  v-for="blog in blogs"-->
          <div class="blogs-blog hvr-grow "
               @click="skip(firstBlog.id)">
            <p class="blog-title">{{ firstBlog.title }}</p>
            <span class="blog-author">作者：|{{ firstBlog.author }}&nbsp;&nbsp;&nbsp;&nbsp;分类：|暂无</span>
            <span class="blog-time">时间：{{ firstBlog.addTime }}</span>
            <p class="blog-content">{{firstBlog.description}}</p>
            <p class="blog-foot">标签：{{ firstBlog.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useRouter} from 'vue-router';
import {fetchList,getBlog} from '@/api/home/index.js'


const firstBlog = ref({})
const  blogs= ref([])
const router = useRouter();

const getBlogs = ()=>{
  //showLoading()
  /*setTimeout(()=>{
    axios.get("http://localhost:8080/blog/findAllBlogs").then(response=>{
      blogs.value = response.data.data;
      //console.log(blogs.value)
      hideLoading()
      //console.log(response.data.data);
    })
  },200)*/
//console.log(blogs.value)
  /*fetchList().then(res=>{
    blogs.value = res.data.data
    //console.log(res.data)
    //hideLoading()
  })*/

  getBlog(1).then(res=>{
    firstBlog.value = res.data.data
  })

}
const skip = function(id){
  router.push({
    name:"detail",
    query:{
      blog_id: id
    }
  });
  //console.log("id==="+id);
}

getBlogs();
</script>

<style scoped>
.introduce-left{
  display: flex;
  flex: 1;
  justify-content: right;
  align-items: center;
}
.left-content{
  background-color: rgba(158, 159, 161, 0.58);
  border-radius: 100%;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.introduce-right{
  flex: 2;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 200px;
}
.introduce-right p{
  flex: 1;
}
.introduce{
  width: 60%;
  display: flex;
  height: 400px;
  margin: 50px 0px 0px 25%;
}
.firstBlog{
  padding-bottom: 30px;
  text-align: left;
}
.head-icon i{
  margin: 30px 20px;
  font-size: 18px;
  color: #f9fafc;
}
/*首页字体样式*/
.nf {
  color: #e3d4d4;
  text-align: center;
  font-family: Raleway, sans-serif;
  line-height: 3em;
  padding-top: 5em;
}
.nf-r1 {
  font-size: 1.5em;
  font-style: normal;
  font-weight: 800;
  line-height: 1.2em;
  position: relative;
  display: inline-block;
  margin-top: 2em;
  margin-bottom: 1em;
}
.nf-r1::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 20%;
  bottom: -0.5em;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: #232121;
}
.nf-r2 {
  margin: 1em 0em 2em 0em;
  font-family: Lora, serif;
  font-size: 3em;
  line-height: 1em;
  font-weight: bold;
  font-style: italic;
}
.head-home{
  background: url("https://blog-1314163904.cos.ap-hongkong.myqcloud.com/image%2Fsrc%3Dhttp___c-ssl.duitang.com_uploads_item_202003_13_20200313193424_edusd.thumb.1000_0.gif%26refer%3Dhttp___c-ssl.duitang.gif") no-repeat;
  height:100vh;
  width:100%;
  background-size: 100%;
}
.el-header{
  position: absolute;
  background-color: transparent;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-header{
  /*background: linear-gradient(to right, #0b486b, #f56217);*/
  /*box-shadow: 0px 5px 10px #c07b3b;*/
  width: 100%;
  backgroundColor: '';
  position: fixed;
  z-index:9999;
}
.down{
  text-align: center;
  color: #f9fafc;
  animation: down 1.3s ease-in-out 2.7s infinite alternate;
}
/*动画效果*/
@keyframes down {
  from {
    transform: translate(0,-5px);
  }
  to {
    transform: translate(0,1px);
  }
}
.center{
  text-align: center;
}
.recommend{
  margin-top: 0px;
  padding-top: 100px;
}
.title-content{
  margin: 0px auto;
  font-size: 15px;
  color: #a8a8ac;
}
.home-title{
  margin-top: 0px;
  padding-top: 20px;
  font-size: 25px;
}
.home{
  background-color: rgba(199, 194, 194, 0.47);
}
.home-content{
  background-color: #ffffff;
  margin: 0px auto;
}
.blog-foot{
  float: bottom;
  margin: 5px 0px 5px 20px;
  color: #a05b38;
}
.blog-content{
  width: 90%;
  margin: 20px 10px;
  padding: 25px 0px;
  font-size: 20px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.blog-time{
  float: left;
  margin-left: 20px;
  color: #ffffff;
}
.blog-author{
  margin: 0px 0px 5px 20px;
  color: #ffffff;
}
.blog-title{
  font-size: 30px;
  margin: 0px 20px 10px 20px;
  color: #ffffff;
}
.blogs-blog{
  height: 250px;
  /*background-color: #ffffff;*/
  border-radius: 30px;
  margin: 20px 160px;
  background: url("../../assets/images/sky.jpg") no-repeat;
  /*opacity: 0.5;*/
  box-shadow: 5px 5px 10px #a05b38;
  background-size: 100% 100%;
}
.blogs{
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.blogs-blog2{
  background-color: #ffffff;
  height: 250px;
  width: 300px;
  border-radius: 30px;
  margin: 20px 50px;
  box-shadow: 5px 5px 10px #a05b38;
}
.blog-img{
  border-radius: 30px 30px 0px 0px;
  background: url("../../assets/images/dongman.jpeg") no-repeat;
  background-size: 100% 100%;
}

/* 鼠标放在博客上触发的css */
.hvr-grow {

  /*display: inline-block;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);*/
  vertical-align: middle;
/*  -webkit-transform: perspective(1px) translateZ(0);
  -webkit-transition-duration: 0.3s;
  transform: perspective(1px) translateZ(0);*/
  transition-duration: 0.5s;
  -webkit-transition-property: transform;
  transition-property: transform;
}
.hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
}
</style>