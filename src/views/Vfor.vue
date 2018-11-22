<template>
<div>
<!-- <ul>    v-for 列表渲染使用
    <li v-for="item in items" :key="item.message">
    {{item.message}}
  </li>
</ul> -->
<ul id="example1">
    <li v-for="(item,index) in items" :key="item.message">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</ul>
</div>

</template>

<script>
export default {
  data () {
    return {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      parentMessage: 'Parent'
    }
  }
}
</script>
