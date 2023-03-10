<template>
  <div v-for="blog in blogs.parentData">
    <el-card class="box-card hvr-underline-from-left" @click="skip(blog.id)">
      <template #header>
        <div class="card-header">
          <div class="column">
            <div class="title">{{ blog.title }}</div>
            <div class="author">作者 | {{ blog.author }}</div>
          </div>
          <div>{{ blog.createTime }}</div>
        </div>
      </template>
      <div class="content">
        {{ blog.description }}
      </div>
      <div class="card-header card-footer">
        <div class="tag">
          <i class="fa fa-tags tag-left" aria-hidden="true"></i>
<!--            <el-tag
                v-for="item in blog.keywords"
                :key="item"
                class="ml-2 footer-tag"
            >
              {{ item }}
            </el-tag>-->
          <el-tag>{{ blog.keywords }}</el-tag>
        </div>
        <div class="liked">
          <span class="footer-liked">
            <i class="fa fa-thumbs-up"></i>
            {{ blog.likeNum }}
          </span>
          <span class="footer-liked">
            <i class="fa fa-eye"></i>
            {{ blog.clickNum }}
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {reactive, ref, defineProps, onMounted} from "vue"
import {useRouter} from 'vue-router';

const router = useRouter();
const blogs = defineProps(['parentData']);

const skip = function(id){
  router.push({
    name:"detail",
    query:{
      blog_id: id
    }
  });
  //console.log("id==="+id);
}

/*const blog = reactive({
  title: "博客卡片",
  author: "浪",
  time: "2022-08-01",
  tags: ["文字","测试"],
  content: "",
  liked: 0,
  isTop: 0,
  total: 0
})*/
</script>

<style scoped>
/**{
  border: 1px solid rgba(153, 145, 145, 0.06);
}*/

.content{
  margin: 10px 0px 30px 0px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
}

.liked{
  height: 20px;
  line-height: 20px;
}

.title{
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  font-weight: bolder;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.author{
  font-size: 15px;
  text-align: left;
  color: rgba(139, 137, 137, 0.64);
}

.footer-tag{
  font-size: 15px;
  background: linear-gradient(to right, rgba(11,72,107,0.6), rgba(245,98,23,0.6));
  -webkit-background-clip: text;
  color: transparent;
  border: none;
  cursor: pointer;
}

.footer-liked{
  margin: 0px 20px;
}

.flex1{
  flex: 1;
}

.tag-left{
  margin-right: 5px;
}

.column{
  flex-direction: column;
}

.card-footer{
  color: rgba(139, 137, 137, 0.64);
  font-size: 18px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.box-card{
  padding: 10px;
  margin-bottom: 2px;
  cursor: default;
}

/* Underline From Left */
.hvr-underline-from-left {
  /*display: inline-block;*/
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
}
.hvr-underline-from-left:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  right: 100%;
  bottom: 0;
  background: linear-gradient(to right, rgba(11,72,107,0.6), rgba(245,98,23,0.6));
  height: 4px;
  -webkit-transition-property: right;
  transition-property: right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
  right: 0;
}
</style>