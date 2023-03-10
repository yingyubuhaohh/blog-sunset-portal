<template>
  <div class="head-home">
    <el-main>
      <div class="nf">
        <h2 class="nf-r1">夕阳下的余晖</h2>
        <!--        日落尤其温柔，人间皆是浪漫-->
        <h1 class="nf-r2">欢迎浏览我的博客</h1>
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
  <div class="flex index">
    <div class="blog">
      <BlogCard :parentData="blogs"/>
      <Page :parentTotal="total" :parentPage="page" @clickSize="updatePageSize" @clickNum="updatePageNum"/>
    </div>
    <div class="info">
      <div class="info-classify">
        <div class="info-select mt-4">
          <el-input
              v-model="input3"
              placeholder="输入你要搜索的内容"
              class="input-with-select info-select-input"
          >
            <template #append>
              <el-button :icon="Search" @click="blogSearch" />
            </template>
          </el-input>
        </div>
        <p class="info-title">
          文章分类
        </p>
        <div v-for="tag in classify" class="info-tag">
          {{ tag.categoryName }}
        </div>
      </div>

    </div>
  </div>

<!--  <transition>
    <div class="blog-to-top" @click="toTop" v-show="topShow">
      <el-icon class="blog-to-top-icon">
        <CaretTop/>
      </el-icon>
    </div>
  </transition>-->
  <el-backtop :right="100" :bottom="100" />
</template>

<script setup>
import {onMounted,ref} from "vue";
import { Search } from '@element-plus/icons-vue'
import BlogCard from '@/components/BlogCard'
import Page from '@/components/Page'
import {fetchList,getTags} from "@/api/blog";
import {useRouter} from 'vue-router';

const input3 = ref('');
const select = ref('');
const classify = ref([]);
const blogs = ref();
const router = useRouter();
const total = ref();
const page = {
  pageSize: 5,
  pageNum: 1,
  params:{}
}

const getBlogs = ()=>{
  fetchList(page).then(res=>{
    blogs.value = res.data.data.records;
    total.value = res.data.data.total;
    // console.log(blogs.value)
  })
}

const Tags = ()=>{
  getTags(page).then(res=>{
    classify.value = res.data.data.records;
    //console.log(classify.value);
  })
}

const blogSearch = ()=>{
  if(input3.value !== ''){
    //console.log(input3.value)
  }else{
    //console.log(input3.value)
    //alert("尚未输入需要搜索的内容")
  }
}

const updatePageSize = (val)=>{
  page.pageSize = val;
  getBlogs();
}

const updatePageNum = (val)=>{
  page.pageNum = val;
  getBlogs();
}

onMounted(()=>{
  Tags();
  getBlogs();
})

/*const topShow = ref(false);
const toTop = ()=>{
  document.body.scorllTop = 0;
  document.documentElement.scrollTop = 0;
  topShow.value = false;
  alert(topShow.value);
}
const findTop = ()=>{
  let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
  if(curHeight > 400){
    topShow.value = true;
  }else{
    topShow.value = false;
  }
}

onMounted(()=>{
    window.addEventListener('scroll',findTop);
})*/
</script>

<style scoped>
*{

}
.head-home{
  background: url("../../assets/images/girl.jpg") no-repeat;
  height:100vh;
  width:100%;
  background-size: 100%;
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

.down{
  text-align: center;
  color: #f9fafc;
  animation: down 1.3s ease-in-out 2.7s infinite alternate;
}
.head-icon i{
  margin: 30px 20px;
  font-size: 18px;
  color: #f9fafc;
}
.blog{
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-left: 40px;
}

.info{
  width: 350px;
  margin: 0px 20px 0px 30px;
}

.info-classify{
  background-color: #ffffff;
}

.info-select{
  height: 80px;
  line-height: 80px;
  margin: 0px;
  background: linear-gradient(to right, rgba(245,98,23,0.6), rgba(11,72,107,0.6));;
}

.info-select-input{
  width: 200px;
}

.info-title{
  font-size: 20px;
  font-weight: bold;
}

.info-tag{
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  font-size: 15px;
  border-top: 1px solid rgba(137, 130, 130, 0.2);
}

.index{
  padding-top: 60px;
  justify-content: center;
}

.flex{
  display: flex;
}

/*.blog-to-top{
  background-color: #fff;
  position: fixed;
  right: 100px;
  bottom: 150px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  transition: 1s;
  box-shadow: 0 0 6px rgba(0,0,0,0.12);
  z-index: 5;
}

.blog-to-top-icon{
  color: #00d1b2;
  display: block;
  line-height: 40px;
  margin: auto;
  font-size: 18px;
}*/
</style>