<template>
<div>
<ul>
  <span v-for="item in items" :key="item.msg">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </span>
</ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      numbers: [ 1, 2, 3, 4, 5 ],
      items: [
        {msg: 1},
        {msg: 2}
      ]
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
}
</script>
