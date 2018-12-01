<template>
<div>
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="name-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="name=input">
</template>
<br>
<button @click="bclick">login type</button>
</div>
</template>

<script>
export default {
  data () {
    return {
      loginType: 'username'
    }
  },
  methods: {
    bclick () {
      if (this.loginType === 'username') {
        this.loginType = 'email'
      } else {
        this.loginType = 'username'
      }
    }
  }
}
</script>
