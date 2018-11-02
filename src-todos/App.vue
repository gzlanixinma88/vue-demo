<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header :addTodo="addTodo"/>
      <List :todos="todos" :deleteTodo="deleteTodo"/>
      <TodoFooter :todos="todos" :deleteComplete="deleteComplete" :selectAll="selectAll"/>
    </div>
  </div>
</template>
<script>

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
