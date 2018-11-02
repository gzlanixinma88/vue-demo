<template>
  <div>
    <p v-if="!repoName">LOADING...</p>
    <p v-else>most star repo is <a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>
<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        repoName: '',
        repoUrl: ''
      }
    },

    mounted () {
      // 使用vue-resource发ajax请求
      const url = `http://api.github.com/search/repositories?q=j&sort=stars`
      /*this.$http.get(url).then(
        response => {
          const result = response.data
          const repo = result.items[0]
          this.repoName = repo.name
          this.repoUrl = repo.html_url
        },
        response => {
          console.log('请求失败')
        }
      )*/

      // 使用axios发ajax请求
      axios.get(url).then(response => {
        const result = response.data
        const repo = result.items[0]
        this.repoName = repo.name
        this.repoUrl = repo.html_url
      }).catch(error => {
        console.log('请求失败222')
      })
    }
  }
</script>
<style>

</style>
