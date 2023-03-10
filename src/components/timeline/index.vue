<template>
  <section class="timeline">
    <div class="container">
      <div class="timeline-item "  v-for="blog in blogs">
        <div class="wow animate__animated animate__fadeInUp">
          <div class="timeline-img"></div>

          <div class="timeline-content js--fadeInLeft timeline-card ">
            <div class="timeline-img-header">
              <h2>{{ blog.title }}</h2>
            </div>
            <div class="date">{{ blog.createTime }}</div>
            <p>{{blog.description}}</p>
            <a class="bnt-more" href="javascript:void(0)">tag</a>
          </div>
        </div>
      </div>

<!--      <div class="timeline-item">

        <div class="timeline-img"></div>

        <div class="timeline-content js&#45;&#45;fadeInRight timeline-card ">
          <div class="timeline-img-header">
            <h2>Card Title</h2>
          </div>
          <div class="date">25 MAY 2016</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ipsa ratione omnis alias cupiditate saepe atque totam aperiam sed nulla voluptatem recusandae dolor, nostrum excepturi amet in dolores. Alias, ullam.</p>
          <a class="bnt-more" href="javascript:void(0)">More</a>
        </div>

      </div>-->
    </div>
  </section>
</template>

<script setup>
import axios from "axios";
import {ref, onMounted, nextTick} from "vue";
import {fetchList} from "@/api/file";

/*nextTick(()=>{
  new WOW({
    boxClass: 'wow',    //需要执行动画元素的Class
    animateClass: 'animated',    //animation.css动画的Class
    offset: 150,    //距离可视区域多少开始执行动画
    mobile: false,    //是否在移动设备执行动画
    live: false
  }).init();
})*/

const blogs = ref([]);
const getBlog = ()=>{
  /*axios.get("http://localhost:8080/blog/findAllBlogs").then(response=>{
    blogs.value = response.data.data;
    //console.log(response.data);
  })*/
  fetchList().then(res=>{
    blogs.value = res.data.data
  })
}
getBlog();

</script>

<style scoped>
section {
  padding: 100px 0;
}

html, body {
  overflow-x: hidden;
}

body {
  font-family: 'Roboto';
  font-size: 17px;
  font-weight: 400;
  background-color: #eee;
}

h1 {
  font-size: 200%;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 400;
}

.timeline {
  position: relative;
}
.timeline::before {
  content: '';
  background: #C5CAE9;
  width: 5px;
  height: 95%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.timeline-item {
  width: 100%;
  margin-bottom: 70px;
}
.timeline-item:nth-child(even) .timeline-content {
  float: right;
  padding: 40px 30px 10px 30px;
  margin-right: 5%;
}
.timeline-item:nth-child(even) .timeline-content .date {
  right: auto;
  left: 0;
  border-radius: 15px 0px 0px 0px;
}
.timeline-item:nth-child(even) .timeline-content::after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  left: -15px;
  border-width: 10px 15px 10px 0;
  border-color: transparent #f5f5f5 transparent transparent;
}
.timeline-item::after {
  content: '';
  display: block;
  clear: both;
}

.timeline-content {
  position: relative;
  width: 40%;
  padding: 10px 30px;
  border-radius: 15px;
  background: #f5f5f5;
  box-shadow: 0 20px 25px -15px rgba(0, 0, 0, 0.3);
}
.timeline-content::after {
  content: '';
  position: absolute;
  border-style: solid;
  width: 0;
  height: 0;
  top: 30px;
  right: -15px;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent #f5f5f5;
}

.timeline-img {
  width: 30px;
  height: 30px;
  background: #3F51B5;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  margin-top: 25px;
  margin-left: -15px;
}

a {
  background: #3F51B5;
  color: #FFFFFF;
  padding: 8px 20px;
  text-transform: uppercase;
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: 10px;
  display: inline-block;
  border-radius: 2px;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.6);
}
a:hover, a:active, a:focus {
  background: #32408f;
  color: #FFFFFF;
  text-decoration: none;
}

.timeline-card {
  padding: 0 !important;
  margin-left: 5%;
}
.timeline-card p {
  padding: 0 20px;
}
.timeline-card a {
  margin-left: 20px;
}

.timeline-item .timeline-img-header {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url("https://blog-1314163904.cos.ap-hongkong.myqcloud.com/file%2FblogImage%2Fdongman.jpeg") center center no-repeat;
  background-size: cover;
}
.timeline-item:nth-child(10) .timeline-img-header {
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.4)), url("https://hd.unsplash.com/photo-1444093826349-9ce8c622f4f3") center center no-repeat;
  background-size: cover;
}

.timeline-img-header {
  height: 200px;
  position: relative;
  margin-bottom: 20px;
  border-radius: 15px 15px 0px 0px;
}
.timeline-img-header h2 {
  color: #FFFFFF;
  position: absolute;
  bottom: 5px;
  left: 20px;
}

blockquote {
  margin-top: 30px;
  color: #757575;
  border-left-color: #3F51B5;
  padding: 0 20px;
}

.date {
  background: rgba(245,98,23,0.6);
  display: inline-block;
  color: #FFFFFF;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 15px 0px 0px;
}

@media screen and (max-width: 768px) {
  .timeline::before {
    left: 50px;
  }
  .timeline .timeline-img {
    left: 50px;
  }
  .timeline .timeline-content {
    max-width: 100%;
    width: auto;
    margin-left: 70px;
  }
  .timeline .timeline-item:nth-child(even) .timeline-content {
    float: none;
  }
  .timeline .timeline-item:nth-child(odd) .timeline-content::after {
    content: '';
    position: absolute;
    border-style: solid;
    width: 0;
    height: 0;
    top: 30px;
    left: -15px;
    border-width: 10px 15px 10px 0;
    border-color: transparent #f5f5f5 transparent transparent;
  }
}

</style>