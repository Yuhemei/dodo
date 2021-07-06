<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import HomeHeader from '@/components/homeHeader'
export default {
  name: 'app',
  components: {
    HelloWorld,
    HomeHeader,
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
    provide(){
    return{
      reload:this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRuterAlive=true
      })

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
