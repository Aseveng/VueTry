<template>
    <div>
        <h1>{{fullName}}</h1>
        <h2>测试页面</h2>
    </div>
</template>

<script>
export default {
  name: 'TestFull',
  data () {
    return {
      a: '111',
      b: 'bssbb'
    }
  },
  computed: {
    fullName: {
      get () {
        return this.a + this.b
      },
      set (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
}
</script>
