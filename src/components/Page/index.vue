<template>
  <div class="page">
    <div class="demo-pagination-block">
      <el-pagination
          class="page-color"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="props.parentTotal"
      />
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps(['parentTotal','parentPage']);
const emits = defineEmits(["clickSize","clickNum"]);

const handleSizeChange = (val)=>{
  emits('clickSize',val);
}
const handleCurrentChange = (val)=>{
  emits('clickNum',val);
}
</script>

<style scoped>
.page{
  display: flex;
  padding: 20px 0px;
  align-items: center;
  justify-content: center;
}

.demo-pagination-block + .demo-pagination-block {
  margin-top: 10px;
}
.demo-pagination-block .demonstration {
  margin-bottom: 16px;
}

</style>
<style>
.el-pagination button:hover{
  background: linear-gradient(to right bottom, rgb(11,72,107), rgb(245,98,23));
  color: #f9fafc;
}

.el-pager li:hover{
  background: linear-gradient(to right bottom, rgb(11,72,107), rgb(245,98,23));
  color: #f9fafc;
}
</style>