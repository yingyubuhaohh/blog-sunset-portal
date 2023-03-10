<template>
  <div class="bg bg-blur">
    <div class="container">
      <div class="box">
        <div class="transtion-box">
          <div class="login-box">
            <h1>欢迎回来</h1>
            <el-form
                ref="form"
                :model="loginForm"
                label-width="auto"
                label-position="top"
            >
              <el-form-item class="register-form-item" label="账号" >
                <el-input v-model="loginForm.userName" class="register-form-input" style="margin-bottom: 20px"/>
              </el-form-item>
              <el-form-item  class="register-form-item" label="密码">
                <el-input v-model="loginForm.userPwd" class="register-form-input" type="password" style="margin-bottom: 20px"/>
              </el-form-item>
            </el-form>
            <button type="button" @click="login()">登录</button>
          </div>
          <div class="reg-box" style="display: none">
            <h1>立即注册</h1>
            <el-form
                ref="form"
                :model="registerForm"
                label-width="auto"
                label-position="top"
            >
              <el-form-item class="register-form-item" label="账号" >
                <el-input v-model="registerForm.userName" class="register-form-input" style="margin-bottom: 20px"/>
              </el-form-item>
              <el-form-item  class="register-form-item" label="密码">
                <el-input v-model="registerForm.userPwd" class="register-form-input" type="password" style="margin-bottom: 20px"/>
              </el-form-item>
              <el-form-item class="register-form-item" label="昵称">
                <el-input v-model="registerForm.userDisplayName" class="register-form-input" style="margin-bottom: 20px"/>
              </el-form-item>
              <el-form-item class="register-form-item" label="邮箱">
                <el-input v-model="registerForm.userEmail" class="register-form-input" style="margin-bottom: 20px"/>
              </el-form-item>
            </el-form>
            <button type="button" @click="onSubmit()">注册</button>
          </div>
        </div>
        <div class="transferToReg">
          <h1 class="title">还未注册？</h1>
          <span class="subTitle">立即注册，就可以使用更多的功能了！</span>
          <button type="button" id="transfetBtn">注册</button>
        </div>
      </div>
    </div>
  </div>


</template>

<script setup>
import test from "@/assets/js/login"
import {onMounted} from "vue";
import { reactive, ref } from 'vue'
import {register} from "@/api/register";
import {useStore} from "vuex"
import router from "@/router";

const store = useStore();

const registerForm = reactive({
  userName: '',
  userPwd: '',
  userDisplayName: '',
  userEmail: ''
})

const loginForm = reactive({
  userName: '',
  userPwd: ''
})

function onSubmit() {
  //console.log('submit!');
  store.dispatch("register",registerForm).then((res)=>{
    alert(res.data.data);
  }).catch((error)=>{
    alert("系统错误！")
  })
  /*register(registerForm).then((res)=>{
    console.log(res.data.data);
  })*/
}

function login(){
  store.dispatch('login',loginForm).then((res)=>{
    router.go(0);
  })
}

onMounted(()=>{
  test.test();
})
</script>

<style>
.register-form-item label{
  text-align: center !important;
  padding: 0px;
  color: rgb(232, 232, 232);
}

.register-form-input input{
  outline: 0;
  border: none;
  font-size: 18px;
  color: tomato;
  text-align: center;
  padding: 4px 10px;
}
</style>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/*.bg {
  background: url('/src/assets/images/body1.jpg');
  height:100vh;
  text-align: center;
}
.bg-blur {
  float: left;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  -webkit-filter: blur(15px);
  -moz-filter: blur(15px);
  -o-filter: blur(15px);
  -ms-filter: blur(15px);
  filter: blur(3px);
}*/



.container {
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/src/assets/images/body1.jpg") no-repeat fixed;
  background-size: 100% 100%;
}
.container:after {
  content: "";
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(8px);
}
.container .box {
  width: 900px;
  height: 550px;
  /*background: url("/src/assets/images/body1.jpg");*/
  border-radius: 4px;
  position: absolute;
  background: inherit;
  border: 1px solid rgba(11, 72, 107, 0.38);
  z-index: 1;
}
.container .box .transtion-box {
  position: absolute;
  left: 0;
  transition: 0.5s all ease-in-out;
}
.container .box .transtion-box .login-box,
.reg-box {
  width: 640px;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 50px 30px;
}

.container .box .transtion-box h1 {
  margin-bottom: 35px;
  color:rgb(232, 232, 232);
}

.container .box .transtion-box section {
  display: flex;
  flex-flow: inherit;
  align-items: inherit;
  width: 100%;
  margin-bottom: 30px;
}

.container .box .transtion-box section label {
  font-size: 14px;
  color: rgb(232, 232, 232);
  text-transform: uppercase;
  margin-bottom: 8px;
}

.container .box .transtion-box section input {
  width: 50%;
  outline: 0;
  border: none;
  font-size: 18px;
  color: tomato;
  text-align: center;
  padding: 4px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
}

.container .box .transtion-box section span {
  color: rgb(232, 232, 232);
  font-size: 15px;
  cursor: pointer;
  margin-top: 18px;
}

.container .box .transtion-box button {
  width: 50%;
  padding: 6px 0;
  text-align: center;
  border: 3px solid rgba(245,98,23,0.9);
  border-radius: 20px;
  background: rgba(245,98,23,0.9);
  color: #fff;
  font-size: 17px;
  letter-spacing: 6px;
  text-indent: 6px;
  margin-bottom: 15px;
  cursor: pointer;
}

.container .box .transtion-box .other {
  border: 3px solid #d3dae9;
  background: #fff;
  color: rgb(124, 145, 184);
  font-weight: 600;
}

.container .box .transferToReg {
  width: 260px;
  height: 100%;
  /*background: linear-gradient(
      to bottom right,
      #0e92eb 0%,
      #5f90ec 50%,
      #b08fe5 100%
  );*/
  background: linear-gradient(to right bottom, rgba(245,98,23,0.9), rgba(11,72,107,0.9));
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  position: absolute;
  left: 640px;
  top: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 50px 0;
  color: white;
  transition: all 1s ease-in-out;
}

.container .box .transferToReg .title {
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
}

.container .box .transferToReg button {
  margin-top: 260px;
  width: 50%;
  padding: 8px 0;
  border-radius: 14px;
  letter-spacing: 10px;
  text-indent: 10px;
  font-size: 18px;
  color: #fff;
  border: 3px solid #fff;
  background: transparent;
  font-weight: 700;
  cursor: pointer;
}

.container .box .transferToReg button:hover {
  border: 3px solid #206dfc;
}
</style>

