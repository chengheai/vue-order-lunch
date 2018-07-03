<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new -->
      <app-new-pizza></app-new-pizza> 
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- show -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name + new Date().getTime()">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NewPizza from './NewPizza'
export default {
  data(){
    return {
      // getMenuItems:[]
    }
  },
  components: {
    'app-new-pizza': NewPizza
  },
  computed:{
    getMenuItems:{
      // 再vuex中获取数据
      get(){
        // return this.$store.state.menuItems

         // 通过getters获取数据
        return this.$store.getters.getMenuItems
      },
      set(){

      }
    },
  },
  created(){
    fetch('https://wd3780466709glsyyc.wilddogio.com/menu.json')
      .then(res =>{
        return res.json()
      })
      .then(data =>{
        // console.log(data)
        let menuArray = []
        for(let key in data){
          // console.log(key)
          data[key].id = key
          menuArray.push(data[key])
        }
        // 数据同步
        this.$store.commit('setMenuItems', menuArray)
        //this.getMenuItems = menuArray
      })
  },
  methods:{
    deleteData(item){
      fetch('https://wd3780466709glsyyc.wilddogio.com/menu/'+item.id+'/.json', {
        method:'DELETE',
        headers:{
          "Content-type":'application/json'
        }
      })
      .then(res =>res.json())
      // .then(data =>this.$router.push('/menu'))
      .then(data =>{
        this.$store.commit('removeMenuItems',item)
      })
      .catch(err =>console.log(err))
    }
  }
}


// export default {
//   data(){
//     return {
//       name: 'Alex'
//     }
//   },
  // beforeRouteEnter:(to, from, next) => {
  //  // TODO: this.name undefined 
  //   // alert('hello ' + this.name);  
  //   // next()
  //   next(vm =>{
  //     // TODO: vm.name Alex
  //     alert('hello ' + vm.name)
  //   }) 
    
  // }

  // 离开的时候触发
  // beforeRouteLeave(to, from, next) {
  //  if(confirm('确定要离开吗?')==true){
  //    next();
  //  }else{
  //    next(false)
  //  }
    
  // }

  
// }



</script>