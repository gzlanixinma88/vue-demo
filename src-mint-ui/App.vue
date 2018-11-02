<template>
  <mt-button type="primary" @click="hint" style="width: 100%">测试mint-ui</mt-button>
</template>
<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';

  export default {

    methods: {
      hint () {
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        })
      }
    }
  }
</script>
<style>

</style>
