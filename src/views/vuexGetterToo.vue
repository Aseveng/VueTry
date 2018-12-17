<template>
  <div>
    <P>通过方法访问：{{todos}}</p>
    <button click="remove">remove</button>
  </div>
</template>

<script>
export default {
  computed: {
    todos () {
      return this.$store.getters.doneTodos
    }
  },
  methods: {
    remove () {
      return this.$store.getters.removeTodo
    }
  }
}
</script>
