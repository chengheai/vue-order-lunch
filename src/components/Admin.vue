<template>
  <h1>Admin</h1>
</template>

<script>
export default {
  data(){
    return {
      name: 'Alex'
    }
  },
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

  
}
</script>
