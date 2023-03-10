<template>
  <Middle class="head-message" :parentData="content"/>
  <div class="message-content">
    <div class="message-title">
      <i class="fa fa-commenting" aria-hidden="true"></i>留言区
      <p class="message-verse">这里居然可以留言，想不到吧</p>
    </div>
  </div>
  <div class="comment-input">
    <p class="comment-p"><i class="fa fa-comments" aria-hidden="true"></i>留言</p>
    <textarea placeholder="说出你想说的话" v-model="commentText" class="comment-text"></textarea><br/>
    <el-button @click="submit_comment()" class="comment-button">发送</el-button>

    <p class="comment-p"><i class="fa fa-comments-o" aria-hidden="true"></i>留言区</p>
    <div v-if="messagesLength==0" class="comment-null"><i class="fa fa-coffee" aria-hidden="true"></i>现在一条留言都没有。</div>
    <div v-else="messagesLength!=0" v-for="(item,index) in messages">
      <b>{{item.ouid}}</b><span class="comment-time">{{item.date}}</span>
      <div  class="comments-bottom">{{item.content}}
<!--        <a href="javascript:void(0)" class="reply-a" @click="replyEvent(item.ouid,item.id)">回复</a>-->
        <div class="reply-comment reply_li" v-if="type==item.id">
        </div>
      </div>
<!--      <div class="reply" v-for="(reply) in item.comments" >
        <b>{{reply.ouid}}&nbsp;&nbsp;回复&nbsp;&nbsp;{{reply.pid}}</b>
        <span class="comment-time">{{reply.date}}</span>
        <div class="comments-bottom">{{reply.content}}<a href="javascript:void(0)" class="reply-a" @click="replyEvent(reply.ouid,reply.id)">回复</a>
          <div class="reply-comment" v-if="type==reply.id">
            <input
                type="text"
                :placeholder="replyName"
                class="inComment"
                v-model="commentText"
            />
            <el-button type="primary" @click="submit_comment(2,item.id)">发送</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
          </div>
        </div>
      </div>-->
    </div>
  </div>
<!--      <div class="comment-input">

      </div>-->
</template>

<script setup>
import Middle from '@/components/middle'
import Comment from '@/api/comment'
import {addComment, fetchList} from "@/api/message";
import {ref, reactive, onMounted} from "vue";
import axios from "axios";
import {useRoute} from "vue-router";
import router from "@/router";

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

const content = ref(['留言','黄昏于落日，晚风也念你']);
const route = useRoute();
const messages = ref([]);
const messagesLength = ref(0);
const type = ref();
const replyName = ref('输入你想说的话...');
const commentText = ref();
const page = ref({
  pageNum: 1,
  pageSize: 5,
  params: {
    type : 2
  }
});

//获取评论
const getMessage = async ()=>{
  await fetchList(page.value).then(res=>{
    messages.value = res.data.data.records;
    messagesLength.value = messages.value.length;
  })
}
//发送评论
const setComment = async (param)=>{
  addComment(param).then(res=>{
    //评论成功提示
    alert("评论成功")
  })
}
const replyEvent = (ouid,id)=>{
  //清空输入框，防止异常显示
  commentText.value = '';
  //alert("oo")
  //确定是回复哪一条评论
  type.value = id;
  //console.log(id);
  //确定评论的发起人
  //console.log(ouid);
  replyName.value = '回复 ' + ouid;
  //评论的回复人
}

const cancel = ()=>{
  //清空输入框，防止异常显示
  commentText.value = '';
  type.value = 0;
}

const submit_comment =()=>{
  //console.log(testLength.value);
  const comment = reactive({
    id: null,
    ouid: 2,
    type: 2,
    pid: 0,
    aid: 0,
    content: commentText,
    date: null
  })
  //console.log(comment);
  router.go(0);
  setComment(comment);
}

getMessage();
</script>

<style scoped>
.message-verse{
  color: #282828;
  font-size: 16px;
  font-weight: unset;
  margin: 0px;
  padding-top: 10px;
}
.test{
  text-align: center;
  border-radius: 15px;
  background-color: #f9fafc;
  height: 100px;
  width: 80%;
  margin-left: 10%;
  margin-top: 120px;
}
.head-message{
  background: url("../../assets/images/message.jpg") no-repeat;
  background-size: 100% 100%;
}
.message-content{
  position: relative;
}
.message-title{
  text-align: center;
  border-radius: 15px;
  background-color: #f9fafc;
  height: 100px;
  width: 80%;
  position: absolute;
  left: 10%;
  margin-top: -20px;
  padding-top: 20px;
  padding-left: 20px;
  font-size: 30px;
  font-weight: bold;
}
.reply-comment{
  margin: 10px 0px 0px 0px;
}
.inComment{
  width: 80%;
  height: 32px;
  margin-right: 10px;
}
.reply-a{
  float: right;
  right: 10px;
  color: rgba(11,72,107,0.6);
  text-decoration: none;
}
.reply-a:hover{
  color: rgba(11,72,107,1);
}
.comment-null{
  text-align: center;
  font-size: 15px;
  color: #333333;
  margin-top: 0px;
  font-weight: bold;
}
.comment-time{
  margin-left: 20px;
  font-size: 15px;
  color: #a39e9e;
}
.reply{
  margin-left: 30px;
}
.comments-bottom{
  border-bottom: 1px rgba(11,72,107,0.1) solid;
  padding: 10px 0px;
}
.comment-input{
  width: 80%;
  margin-left: 10%;
  padding: 15px 0px 30px 20px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 120px;
  text-align: left;
}
.comment-text{
  width: 99%;
  height: 150px;
}
.comment-p{
  font-size: 23px;
  color: #333333;
  margin-top: 20px;
  font-weight: bold;
}
.comment-button{
  margin-top: 10px;
  width: 100%;
  background-color: rgba(11,72,107,0.3);
}
</style>