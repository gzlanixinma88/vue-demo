<template>
  <div>
    <HelloWorld/>
    <hello-world/>
    <img class="logo" src="./assets/logo.png" alt="logo">
  </div>
</template>
<script>
  import HelloWorld from './components/HelloWorld.vue'

  // 向外默认暴露一个配置对象: 前vm能写哪些它就能写哪些
  export default {
    data () {
      return {

      }
    },
    // 注册组件标签
    components: {
      HelloWorld
    }

  }
</script>
<style>
  .logo {
    width: 200px;
    height: 200px;
  }
</style>
