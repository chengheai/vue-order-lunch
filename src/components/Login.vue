<template>
<div class="row mt-3">
  <div class="col-md-12 col-lg-12">
    <div class="card">
      <div class="card-body">
        <img class="mx-auto d-block" src="../assets/logo.jpg">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">邮箱</label>
            <input 
              type="email"
              class="form-control"
              v-model="email"
            >
          </div>
          <div class="form-group">
            <label for="password">密码</label>
            <input 
              type="password"
              class="form-control"
              v-model="password"
            >
          </div>
          <button type="submit" class="btn btn-block btn-success">登录</button>
        </form>
      </div>
    </div>
  </div>   
</div>
  
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      email: '',
      password: ''
    }
  },
  //组件内守卫
  beforeRouteEnter: (to, from, next) => {
    console.log('to:', to)
    console.log('from:', from)
    console.log('next:', next)
    //  this.$store.dispatch('setUser',null)
    // TODO:退出时候清空用户信息
    next(vm => vm.$store.dispatch('setUser', null))
  },
  methods:{
    onSubmit(){
      axios.get('/users.json')
        .then(res =>{
          // console.log(res.data)
          const data  = res.data;

          const users = [];
          for(let key in data){
            const user = data[key]
            users.push(user)
          }
          // console.log(uers)
          // 实现过滤
        let result = users.filter((user) =>{
            return user.email === this.email && user.password === this.password
          })
          // console.log(result)
          if(result && result != null && result.length > 0){
            this.$store.dispatch('setUser',result[0].email)
            this.$router.push('/home')
          }else{
            alert('账号或密码错误')
             this.$store.dispatch('setUser',null)
            //  this.$store.commit("setUser", null)
          }
        })
    }
  }
}
</script>
