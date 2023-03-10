import { createStore } from 'vuex'
import {register,getUserInfo} from "@/api/register";
import {login} from "@/api/login";

export default createStore({
  state: {
    id: '',
    name: '',
    avatar: sessionStorage.getItem('avatar'),
    token: sessionStorage.token
  },
  getters: {
    getAvatar: state => {//通过方法访问
      return state.avatar
    }
  },
  mutations: {
    SET_TOKEN(state,token){
      state.token = token;
    },
    SET_NAME(state,name){
      state.name = name;
    },
    SET_AVATAR(state,avatar){
      state.avatar = avatar;
    },
    SET_ID(state,id){
      state.id = id;
    }
  },
  actions: {
    register({commit},user){
      return new Promise((resolve, reject)=>{
        register(user).then((res)=>{
          if(res.data.code == 20000){
            /*commit('SET_TOKEN',res.data.data);
            localStorage.token = res.data.data;*/
            resolve()
          }
        }).catch((error)=>{
          reject(error)
        })
      })
    },
    getUserInfo({commit},user){
      return new Promise((resolve, reject)=>{
        getUserInfo(user).then((res)=>{
          if(res.data.code == 20000){
            /*commit('SET_TOKEN',res.data.data);
            localStorage.token = res.data.data;*/
            commit('SET_NAME',res.data.data.name);
            commit('SET_AVATAR',res.data.data.avatar);
            commit('SET_ID',res.data.data.id);
            sessionStorage.setItem("username",this.state.name);
            sessionStorage.setItem("avatar",this.state.avatar);
            sessionStorage.setItem("id",this.state.id);
            console.log(this.state);
            resolve()
          }else{
            commit('SET_NAME','');
            commit('SET_AVATAR','');
            commit('SET_ID','');
            commit('SET_TOKEN','')
            reject(res.data.msg);
          }
        }).catch((error)=>{
          reject(error)
        })
      })
    },
    login({commit},user){
      return new Promise((resolve, reject)=>{
        login(user).then(res=>{
          if (res.data.code==200){
            commit('SET_TOKEN',res.data.data.token);
            sessionStorage.token = res.data.data.token;
            resolve();
          }else{
            reject(res.data.msg)
          }
        })
      })
    }
  },
  modules: {
  }
})
