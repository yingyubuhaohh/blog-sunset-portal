<template>
    <div>
      <!--   导航栏   -->
      <el-header id="topNav" :style="topNavBg">
        <el-row :gutter="24">
          <el-col :span="8"><div class="grid-content bg-purple"><span class="sunset" @click="skip('/')">Sunset</span></div></el-col>
          <el-col :span="2"><div class="grid-content bg-purple">&nbsp;   </div></el-col>
          <el-col :span="11">
            <div style="height: 60px">
              <a href="javascript:void(0)" class="testHover" @click="skip('/blog')">
                <div class="test">
                  博客
                </div>
              </a>
<!--              <a href="javascript:void(0)" class="testHover" @click="skip('/classify')">
                <div class="test">
                  分类
                </div>
              </a>-->
              <a href="javascript:void(0)" class="testHover" @click="skip('/file')">
                <div class="test">
                  归档
                </div>
              </a>
              <a href="javascript:void(0)" class="testHover" @click="skip('/message')">
                <div class="test">
                  留言
                </div>
              </a>
              <a href="javascript:void(0)" class="testHover" @click="skip('/tool')">
                <div class="test">
                  百宝箱
                </div>
              </a>
            </div>
          </el-col>
          <!--      <el-col :span="1">
                  <div class="grid-content bg-purple">
                    <el-button circle>
                      <User style="width: 1em; height: 1em;" />
                    </el-button>
                  </div></el-col>-->
          <el-col :span="3">
            <div class="grid-content bg-purple">
              <span  v-on:click="btnAdd" class="login-text" @click="skip('/login')">{{ username }}&nbsp;</span>

              <el-popover
                  placement="bottom"
                  width="200"
                  trigger="hover">
                <el-button type="info" plain class="user-button">
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"><User style="width: 1em; height: 35px;" /></div></el-col>
                    <el-col :span="12"><div class="grid-content bg-purple">个人中心</div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple"><ArrowRight style="width: 1em; height: 35px;" /></div></el-col>
                  </el-row>
                </el-button>
                <br/>
                <el-button type="info" plain class="user-button">
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"><Edit style="width: 1em; height: 35px;" /></div></el-col>
                    <el-col :span="10"><div class="grid-content bg-purple">我要创作</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"><ArrowRight style="width: 1em; height: 35px;" /></div></el-col>
                  </el-row>
                </el-button>
                <br/>
                <el-button type="info" plain class="user-button">
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple"><SwitchButton style="width: 1em; height: 35px;" /></div></el-col>
                    <el-col :span="10"><div class="grid-content bg-purple" @click="logout">退出登录</div></el-col>
                    <el-col :span="8"><div class="grid-content bg-purple"><ArrowRight style="width: 1em; height: 35px;" /></div></el-col>
                  </el-row>
                </el-button>
                <template #reference>
                  <el-avatar :size="35" :src="userImg" style="margin: 10px;float:left;"/>
                </template>
              </el-popover>
            </div>
          </el-col>
        </el-row>
      </el-header>


    </div>
</template>


<script setup>
import { Search,User,ArrowRight,SwitchButton,Edit,ArrowDownBold } from '@element-plus/icons-vue';
import {ref, onMounted, nextTick} from "vue";
/*import Login from '@/views/login'*/
import router from "@/router";
import {ElMessage} from 'element-plus'
import {useStore} from "vuex"

const store = useStore();

const username = ref('游客');
const userImg = ref('https://blog-1314163904.cos.ap-hongkong.myqcloud.com/image%2Ftouxiang%2F7f5d3e78f8a57c57.jpg');
const getUsername = ()=>{
  if(sessionStorage.getItem('username')!=null){
    username.value = sessionStorage.getItem('username');
  }
  if(sessionStorage.getItem('avatar')!=null){
    userImg.value = sessionStorage.getItem("avatar");
    //console.log('img======'+userImg.value);
  }
}

const visible = ref(false);

const btnAdd = ()=>{
  //console.log(typeof sessionStorage.getItem('isLogin'));
  router.push("/login");
  if(sessionStorage.getItem('isLogin')=='false'){
    //console.log(sessionStorage.getItem('isLogin'));
    //visible.value = true;
    router.push("/login");
  }
}

onMounted(()=>{
  setTimeout(()=>{
    //window.addEventListener('beforeunload',getUsername);
    getUsername();
    //console.log(sessionStorage.getItem('username'));
  },200)
})

const logout = ()=>{
  if(sessionStorage.getItem('isLogin')=='true'){
    sessionStorage.setItem("isLogin",'false');
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("user");
    router.go(0);
  }else{
    ElMessage({
      message: '请先登录！！',
      type: 'warning',
    })
  }

}

</script>


<script>
export default{
  name: "Head",
  data() {
    return {
      //設置默认
      activeName: 'first',
      topNavBg: {
        background: ''
      }
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll) // 监听页面滚动
  },
  methods: {
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // 设置背景颜色的透明度
      if (scrollTop) {
        /* this.topNavBg.backgroundColor = `rgba(19, 23, 130,
           ${scrollTop / (scrollTop + 60)})` // scrollTop + 多少根据自己的需求设置*/
        this.topNavBg.background = `linear-gradient(to right, rgba(11,72,107,50%), rgba(245,98,23,50%))`
      } else if (scrollTop === 0) {
        this.topNavBg.background = 'transparent' // 设置回到顶部时，背景颜色为透明
      }
    },
    // 滚动之前重置
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    skip(index){
      this.$router.push(index);
    }
  }
}
</script>



<style scoped>
.login-text{
  text-decoration: none;
  color: #f9fafc;
  cursor: pointer;
  float: left;
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
.foot-icon i{
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

/*设置头标题内容的css样式*/
.test{
  height: 57px;
  padding: 0px 20px 0px 20px;
  cursor: pointer;
  background: rgba(225, 225, 225, 0);
  text-decoration: none;
  color: #f6f4f4;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.testHover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  text-decoration:none;
}
.testHover:before{
  content: "";
  position: absolute;
  z-index: -1;
  left: 51%;
  right: 51%;
  bottom: 0;
  background: linear-gradient(to right, rgba(11,72,107,0.6), rgba(245,98,23,0.6));
  height: 4px;
  -webkit-transition-property: left, right;
  transition-property: left, right;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.testHover:hover:before{
  left: 0px;
  right: 0px;
}
.test:hover{
  color: #d0d0d4;
}
/*自定义字体样式*/
@font-face {
  font-family: "sunset";
  src: url('../../assets/font/Sunset.ttf');
}
/*sunset*/
/*使用字体样式并添加艺术字效果*/
.sunset{
  font-family: sunset;
  color: #DCDFE6;
  font-size: 50px;
  font-style: italic;
  text-shadow: 1px 1px 0px yellow,
  2px 2px 2px orange,
  3px 3px 2px orangered,
  5px 5px 2px red;
  cursor: pointer;
}
/*设置头部的背景*/
.headImage{
  background: url("../../assets/images/body1.jpg") no-repeat;
  height:100%;
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

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
/*消除默认的10px*/
.el-button+.el-button, .el-checkbox.is-bordered+.el-checkbox.is-bordered {
  margin-left: 0px;
}

/*用于设置用户头像悬停时显示的按钮样式*/
.user-button{
  width: 200px;
  padding-top: 20px;
  height: 35px;
  line-height: 35px;
  border: none;
  outline: none;
}
</style>
