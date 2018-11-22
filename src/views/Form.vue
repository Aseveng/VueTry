<template>
  <div>
    <select v-model="selected">
      <option v-for="option in options"
              :key="option.text"
              v-bind:value="option.value">
        {{option.text}}
      </option>
    </select>
    <span>Selelt:{{selected}}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 'A',
      options: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' }
      ]
    }
  }
}
</script>
