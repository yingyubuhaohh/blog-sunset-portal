<template>
  <div class="head-middle">
    <p class="head-middle-title">{{ title }}</p>
    <p class="head-middle-verse">{{ verse }}</p>
  </div>
</template>

<script setup>
import {ref,defineProps} from "vue";

const data = defineProps(['parentData']);
//console.log(data.parentData);
const title = ref(data.parentData[0]);
const verse = ref(data.parentData[1]);
</script>

<style scoped>
.head-middle{
  width:100%;
  height: 400px;
  text-align: center;
}
.head-middle-title{
  color: #f9fafc;
  font-size: 60px;
  font-weight: bold;
  margin: 0px;
  padding: 150px 0px 0px 0px;
}
.head-middle-verse{
  color: #f9fafc;
  font-size: 20px;
  margin: 0px;
}
</style>