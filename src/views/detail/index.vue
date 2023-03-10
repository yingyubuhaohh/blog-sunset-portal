<template>
  <div class="head-detail"></div>
  <div  style="background-color: rgba(199, 194, 194, 0.47)" class="detail-one">
    <Content :parentData="content" :headData="headData"/>
    <!--  <div class="markdown-body">
        <div v-html="parseContent"></div>
      </div>-->
    <Comment/>
<!--    <el-affix v-if="bottomBt" position="bottom" :offset="20" style="text-align: right;margin-right: 100px">
      <el-button :icon="Search" circle size="large"/>
    </el-affix>-->
    <el-dropdown>
      <el-backtop :bottom="20" />
      <template #dropdown>
        <el-button circle size="large"/><br/>
        <el-button circle size="large"/><br/>
      </template>
    </el-dropdown>
  </div>

</template>

<script setup>
import Content from '@/components/content'
import Comment from '@/components/comment'
import  axios from 'axios'
import {onMounted, ref} from "vue";
import {useRoute} from 'vue-router';
import {getBlog} from "@/api/blog";

/*onMounted(()=>{
  setTimeout(()=>{
    new WOW({
      boxClass: 'wow',    //需要执行动画元素的Class
      animateClass: 'animated',    //animation.css动画的Class
      offset: 0,    //距离可视区域多少开始执行动画
      mobile: true,    //是否在移动设备执行动画
      live: false
    }).init();
  },200)
})*/
const route = useRoute();

const id = route.query.blog_id;
//console.log(id);
const content=ref('');
const headData = ref('');
const infoTableData=()=>{
  /*const res = await axios.post("http://localhost:8080/blog/"+id).then(res=>{
    //console.log(res.data.blog_content);
    content.value=res.data.content;
    //console.log(typeof res.data.blog_content);
  })*/
  getBlog(id).then(res=>{
    //console.log(res.data.data)
    content.value = res.data.data.content;
    headData.value = res.data.data;
    //console.log(content.value);
  })
}
infoTableData();

</script>
<script>
export default{
  name: "Head",
  data() {
    return {
      //設置默认
      activeName: 'first',
      bottomBt: false
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop > 400) {
        /* this.topNavBg.backgroundColor = `rgba(19, 23, 130,
           ${scrollTop / (scrollTop + 60)})` // scrollTop + 多少根据自己的需求设置*/
        this.bottomBt = true;
      } else if (scrollTop === 0) {
        this.bottomBt = false // 设置回到顶部时 不展示
      }
    },
    // 滚动之前重置
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
}
</script>

<style scoped>
.right-bottom{
  float: right;
  right: 100px;
  bottom: 100px;
}
.head-detail{
  background: url("../../assets/images/detail.jpg") no-repeat;
  width:100%;
  height: 400px;
  background-size: 100%;
}
.detail{
  background-color: rgba(199, 194, 194, 0.47);
  padding-top: 15px;
}
.detail-content{
  background-color: #ffffff;
  width: 80%;
  margin: 0px auto;
  border-radius: 10px;
}
</style>
