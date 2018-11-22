<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
  </div>
</template>

<script>
export default {
  computed: {
    count: {
      get () { return this.$store.state.common.count }
    }
  },
  methods: {
    increment () {
      this.$store.commit({
        type: 'common/increment',
        amount: 10
      })
    },
    decrement () {
      this.$store.commit('common/decrement')
    }
  }
}
</script>
