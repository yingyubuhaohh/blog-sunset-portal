<template>
    <Middle class="head-tool" :parentData="content">test</Middle>
  <div class="tool-content">
    <div class="tool-title"><i class="fa fa-archive" aria-hidden="true"></i>工具箱</div>
  </div>
  <div style="width: 80%;margin-left: 10%">
      <div class="flex hvr-radial-out "
           v-for="item in tools" v-on:click="skip(item.url)"
           :style="{backgroundImage: 'url(' + item.toolIcon + ')', backgroundSize:'100% 100%'}"
      >
        <el-popover
            placement="top"
            trigger="hover"
        >
          <p>{{ item.toolName }}源码<a :href="item.download">点击下载</a></p>
          <template #reference>
            <div style="padding-bottom: 30px">
              <p style="flex: 2;padding-top: 60px;margin: 0px;font-size: 30px;font-weight: bold">{{ item.toolName }}</p>
              <p style="flex: 2; overflow: hidden;text-overflow: ellipsis;height: 50px">{{ item.toolName }}</p>
            </div>
          </template>
        </el-popover>
      </div>
  </div>

</template>

<script setup>
import Middle from '@/components/middle'
import {fetchList} from "@/api/tool";
import {onMounted, ref} from 'vue'


const content = ref(['工具箱','生活匆忙，别错过落日和夕阳']);
const tools = ref([])
const page = ref({
  pageSize: 10,
  pageNum: 1,
  params:{

  }
})

const getTools = async ()=>{
  await fetchList(page.value).then(res=>{
    tools.value = res.data.data.records;
  })
}

const skip = (url)=>{
  window.open(url);
}

getTools()
</script>

<style scoped>
.head-tool{
  background: url("../../assets/images/img3.jpg") no-repeat;
  background-size: 100% 100%;
}
.tool-content{
  position: relative;
  height: 100px;
}
.tool-title{
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
.flex{
  width: 280px;
  height: 210px;
  text-align: center;
  margin: 20px 30px;
  /*display: flex;
  flex-direction: column;*/
  background-size: 100% 100%;
  border-radius: 15px;
  color: #f9fafc;

}
.hvr-radial-out {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  overflow: hidden;
  background: #e1e1e1;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.hvr-radial-out:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../../assets/images/classify.jpg");
  border-radius: 100%;
  -webkit-transform: scale(0);
  transform: scale(0);
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-radial-out:hover, .hvr-radial-out:focus, .hvr-radial-out:active {
  color: white;
}
.hvr-radial-out:hover:before, .hvr-radial-out:focus:before, .hvr-radial-out:active:before {
  -webkit-transform: scale(2);
  transform: scale(2);
}
</style>