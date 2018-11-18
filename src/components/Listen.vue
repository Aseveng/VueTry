<template>
<div id="example">
    <button v-on:click="warn('Form can not be submited',$event)">submit</button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'vue'
    }
  },
  methods: {
    warn: function (message, event) {
    // 现在我们可以访问原生事件对象
      if (event) event.preventDefault()
      alert(message)
    }
  }
}
</script>
