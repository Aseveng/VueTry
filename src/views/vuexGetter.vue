<template>
  <div>
    <P>通过方法访问：{{todos}}</p>
    <P>通过属性访问：{{doneTodosCount}}</p>

  </div>
</template>

<script>
export default {
  computed: {
    todos: function () {
      return this.$store.getters.doneTodos
    },
    doneTodosCount () {
      return this.$store.getters.doneTodosCount
    }
  }
}
</script>
