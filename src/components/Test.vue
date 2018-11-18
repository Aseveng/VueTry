<template>
    <div class="hello">
        <h1>{{msg}}</h1>
        <h2>测试页面</h2>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎进入vue世界'
    }
  }
}
</script>

<style>
    h1,h2{
        font-weight: normal;
        color:aquamarine;
    }
</style>
