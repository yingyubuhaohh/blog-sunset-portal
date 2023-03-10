<template>
  <div class="content" style="position:relative;">
  <div class="catalog-content" :class="scroll>425?'fix':'ab'" v-if="isCatalog">
    <p style="text-align: center" id="mulu"><i class="fa fa-list" aria-hidden="true"></i>&nbsp;目录</p>
    <div class="catalog">
      <template v-for="(item,index) in catalog">
        <div :style="{marginLeft: item.level * 20 + 'px'}" :class="active==index ? 'activeClass' : '  ' ">
          <p @click=selectMenu(item.id,index)>
            {{item.title}}
          </p>
        </div>
      </template>
    </div>
  </div>
  <div class="markdown-body">
    <div class="content-head">
      {{ data.headData.title }}
    </div>
    <div style="height: 30px;border-bottom: solid 1px rgba(11,72,107,0.3); margin-bottom: 10px">
      <div class="head-right">
        时间 | {{ data.headData.createTime }}
      </div>
      <div class="head-left">
        作者 | {{ data.headData.ouid }}
      </div>
    </div>
    <div ref="article">
      <div class="details"  v-html="parseContent"></div>
    </div>
  </div>

  </div>
</template>

<script setup>
import {computed, defineProps, ref,nextTick,onMounted,watch} from "vue";
import 'github-markdown-css'
import 'highlight.js/styles/github.css'
import { marked } from 'marked'

//是否显示目录
const isCatalog = ref(true);
const data = defineProps(['parentData','headData']);
//获取页面中的标签元素
const article = ref();
//目录
const catalog = ref([]);
//页面滚动条的高度
const scroll = ref();
//当前段落在目录中对应的标题，用于更改样式
const active = ref(0);
//获取文章内标题的dom元素
const sections = document.getElementsByName('section');

const parseContent = computed(()=>{
  return marked(data.parentData);
})

//生成目录
nextTick(()=>{
  const titleTag = ["H1", "H2", "H3"];
  let titles = [];
  //等待页面加载完成后执行
  setTimeout(()=>{
    //console.log(article.value.children[0].childNodes.length);
    article.value.children[0].childNodes.forEach((e,index)=>{
      //console.log(e);
      //通过节点名称判断是否是标题
      if(titleTag.includes(e.nodeName)){
        //console.log(e.childNodes[1])
        const titleText = e.childNodes[1].nodeValue;
        //console.log(titleText.nodeValue);
        const id = 'header-' + index;
        e.setAttribute('id',id);
        e.setAttribute('name','section')
        titles.push({
          id: id,
          title: titleText,
          level: Number(e.nodeName.substring(1,2)),
          nodeName: e.nodeName
        })
      }
    })
    catalog.value = titles;
    if(titles.length === 0){
      isCatalog.value = false;
    }
  },200)
})

//点击目录进行跳转
const selectMenu = function(id,index){
  this.active = index;
  //console.log('#'+id);
  // val想要跳往的dom的id
  const dom = document.querySelector('#'+id);
  //console.log(dom.offsetTop);
  // 获取需要滚动的距离
  let total = dom.offsetTop;
  window.scroll({
    //590大致为上面图片所占div的高度
    top: total+340,
    behavior: 'smooth'
  });
  // Chrome
  //document.body.scrollTop = total;
  // Firefox
  //document.documentElement.scrollTop = total;
  // Safari
  //window.pageYOffset = total;
  // $('html, body').animate({
  // 'scrollTop': total
  // }, 400);
  //console.log(dom);
  // 调用dom的scrollIntoView方法
  /*nextTick(()=>{
    dom.scrollIntoView({
      behavior: 'smooth'
    });
  })*/
}
//监听scroll的值，发生改变时执行loadScroll函数
watch(scroll,()=>{
  //console.log(scroll.value);
    loadScroll();
    //test();
})
//监听页面滚动的事件，当页面滚动时会改变scroll的值
onMounted(()=>{
  // scroll代表滚动条距离页面顶部距离
  window.addEventListener('scroll', ()=>{
    scroll.value = document.documentElement.scrollTop
  });
  document.documentElement.scrollTop = 0
})
//动态选中标题更改样式
const loadScroll = ()=>{
  //console.log(sections.length);
  //console.log();
  for (let i = sections.length - 1; i >= 0; i--) {
    //console.log(sections[i].offsetTop);
    if (scroll.value >= (sections[i].offsetTop+310)) {
      //我在上面规定了每个el-tab-pane标签的name属性值为tab+该标签的index值
      //console.log('scroll-------'+scroll.value)
      //console.log(sections[i].offsetTop);
      active.value = i;
      break;
    }
  }
}
</script>
<style scoped>
.content{
  /*background-color: rgba(199, 194, 194, 0.47);*/
  padding-top: 15px;
  text-align: left;
}
.content-head{
  padding-top: 20px;
  font-size: 30px;
  font-weight: bolder;
  text-align: center;
}
.head-right{
  float: right;
}
.head-left{
  float: left;
}
.activeClass{
  color: rgba(245,98,23,0.6);
}
.markdown-body{
  margin:0px 400px 0px 100px;
  padding:0px 30px;
  background-color: #ffffff;
  border-radius: 10px;
}
.catalog{
  padding: 0px 10px;
}
.catalog-content{
  /*position: absolute;*/
  top: 60px;
  right: 80px;
  background-color: #ffffff;
  border-radius: 10px;
}
.ab{
  position: absolute;
}
.fix{
  position: fixed;
}
a{
  text-decoration: none;
}
</style>