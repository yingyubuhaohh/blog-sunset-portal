<template>
  <Middle class="head-file" :parentData="content"/>
  <div class="file-content">
    <div class="file-title">文章归档</div>
  </div>
  <Timeline />
  <el-backtop :right="100" :bottom="100" @click="method()"/>
</template>

<script setup>
import Middle from '@/components/middle'
import Timeline from '@/components/timeline'
import {ref} from 'vue'
const content = ref(['归档','日落跌进昭昭星野，人间忽晚，山河已秋'])

const method = ()=>{
  console.log("aaa");
}

</script>

<style scoped>
.head-file{
  background: url("../../assets/images/file.png") no-repeat;
  background-size: 100% 100%;
}
.file-content{
  position: relative;
  height: 100px;
}
.file-title{
  text-align: center;
  border-radius: 15px;
  background-color: #f9fafc;
  height: 100px;
  width: 60%;
  position: absolute;
  left: 20%;
  margin-top: -20px;
  padding-top: 20px;
  font-size: 30px;
  font-weight: bold;
}
</style>