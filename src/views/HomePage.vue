<script>
  import CitiesList from '../components/CitiesList.vue'

  export default {
    name: 'HomePage',
    components: {
      CitiesList
    }
  }
</script>

<template>
  <div>
    <h1>Din klädbutik online!</h1>
  </div>

  <CitiesList />
</template>
<style>
  body {
    width: 100%;
  }
  h1 {
    text-align: center;
    padding-bottom: 10px;
  }
</style>
