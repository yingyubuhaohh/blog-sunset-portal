<template>
  <div style="text-align: left">
    <div class="comment-input ">
      <p class="comment-p"><i class="fa fa-comments" aria-hidden="true"></i>发表评论</p>
      <textarea placeholder="说出你想说的话" v-model="commentText" class="comment-text"></textarea><br/>
      <el-button @click="submit_comment(1,0,commentText)" class="comment-button">提交评论</el-button>
    </div>
    <div class="comment-input">
      <p class="comment-p"><i class="fa fa-comments-o" aria-hidden="true"></i>评论区</p>
      <div v-if="testLength==0" class="comment-null"><i class="fa fa-coffee" aria-hidden="true"></i>还没有评论，快来抢沙发吧</div>
        <ul v-if="testLength!=0" v-infinite-scroll="load" style="overflow: auto" class="infinite-list">
<!--      主评论-->
      <div v-if="testLength!=0" v-for="item in test">
        <b>{{item.comment.ouid}}</b><span class="comment-time">{{item.comment.date}}</span>
        <div  class="comments-bottom">{{item.comment.content}} <a href="javascript:void(0)" class="reply-a" @click="replyEvent(item.comment.ouid,item.comment.id)">回复</a>
        <div class="reply-comment reply_li" v-if="type==item.comment.id">
          <input
              type="text"
              :placeholder="replyName"
              class="inComment"
              v-model="replyText"
          />
          <el-button type="primary" @click="submit_comment(1,item.comment.id,replyText)">发送</el-button>
          <el-button type="primary" @click="cancel">取消</el-button>
        </div>
        </div>
<!--        次级评论-->
        <div class="reply" v-for="(reply) in item.childComments" >
          <b>{{reply.username}}&nbsp;&nbsp;回复&nbsp;&nbsp;{{item.comment.ouid}}</b>
            <span class="comment-time">{{reply.date}}</span>
            <div class="comments-bottom">{{reply.content}}</div>
        </div>
      </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref, reactive, onMounted} from "vue";
import {fetchList,addComment} from "@/api/comment";
import {useRoute} from "vue-router";
import {useStore} from "vuex"

const store = useStore();

const route = useRoute();
const test = ref([]);
const testLength = ref();
const type = ref('0');
const replyName = ref('输入你想说的话...');
const commentText = ref();
const replyText = ref();
const page = ref({
  pageSize: 5,
  pageNum:1,
  params:{
    aid: 0
  }
})

const load = ()=>{

}

//获取评论http://localhost:8080/blog/comments
const getComment = ()=>{
  setTimeout(()=>{
    // page.value.params.aid = route.query.blog_id;
    fetchList(route.query.blog_id).then(res=>{
      test.value = res.data.data;
      testLength.value = test.value.length;
    })
  },200)
}

//发送评论
const setComment = async (param)=>{
  await addComment(param).then(res=>{
    //console.log(res);
    cancel();
  })

}
const replyEvent = (ouid,id)=>{
  //清空输入框，防止异常显示
  commentText.value = '';
  //alert("oo")
  //确定是回复哪一条评论
  type.value = id;
  //确定评论的发起人
  replyName.value = '回复 ' + ouid;
  //评论的回复人
}

const cancel = ()=>{
  //清空输入框，防止异常显示
  commentText.value = '';
  replyText.value = '';
  type.value = 0;
}

const submit_comment =(type,pid,content)=>{
  const comment = reactive({
    id: null,
    ouid: 2,
    type: type,
    pid: pid,
    aid: route.query.blog_id,
    content: content,
    date: null
  })
  //router.go(0);
  // 添加评论
  setComment(comment);
  // 清空输入框
  cancel();
  // 重新获取评论
  getComment();
}

getComment();
</script>

<style scoped>
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
  padding-bottom: 20px;
}
.comment-input{
  margin:30px 400px 0px 100px;
  padding:30px 30px;
  background-color: #ffffff;
  border-radius: 10px;
}
.comment-text{
  width: 100%;
  height: 150px;
}
.comment-p{
  font-size: 23px;
  color: #333333;
  margin-top: 0px;
  font-weight: bold;
}
.comment-button{
  margin-top: 10px;
  width: 101%;
  background-color: rgba(11,72,107,0.3);
}
.infinite-list{
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>