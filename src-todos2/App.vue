<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header @addTodo="addTodo"/>
      <List :todos="todos"/>
      <TodoFooter>
        <input type="checkbox" v-model="isCheck" slot="left"/>
        <span slot="middle">已完成{{completeSize}} / 全部{{todos.length}}</span>
        <button slot="right" class="btn btn-danger" v-show="completeSize" @click="deleteComplete">清除已完成任务</button>
      </TodoFooter>
    </div>
  </div>
</template>
<script>

  import PubSub from 'pubsub-js'

  import storageUtils from './utils/storageUtils'
  import Header from './components/Header.vue'
  import List from './components/List.vue'
  import Footer from './components/Footer.vue'
  export default {

    data () {
      return {
        // 读取localstorage中存储的todos数据作为初始值
        todos: storageUtils.readTodos()
      }
    },

    computed: {
      completeSize () {
        return this.todos.reduce((preTotal, todo) => preTotal + (todo.complete ? 1 : 0), 0)
      },

      isCheck: {
        get () { // 计算得到一个决定是否勾选的boolean值
          return this.todos.length===this.completeSize && this.completeSize>0
        },

        set (value) { // 用户操作勾选框时调用
          this.selectAll(value)
        }
      }
    },

    mounted () {
      // 订阅消息
      PubSub.subscribe('deleteTodo', (msg, index) => {
        this.deleteTodo(index)
      })
    },

    methods: {
      // 添加todo
      addTodo (todo) {
        this.todos.unshift(todo)
      },

      // 删除指定下标的todo
      deleteTodo (index) {
        this.todos.splice(index, 1)
      },

      // 删除已完成的所有todo
      deleteComplete () {
        this.todos = this.todos.filter(todo => !todo.complete)
      },

      // 全选/全不选
      selectAll (isSelect) {
        this.todos.forEach(todo => todo.complete = isSelect)
      }
    },

    watch: {
      todos: {
        deep: true, // 深度监视
        /*handler: function (value) {
          // 保存todos的json数据到localStorage
          storageUtils.saveTodos(value)
        }*/
        handler: storageUtils.saveTodos
        /*handler: function (todos) {
          localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
        }*/
      }
    },

    components: {
      TodoHeader: Header,
      List,
      TodoFooter: Footer
    }
  }
</script>
<style>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
