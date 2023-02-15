<template>
  <p>Tack för din registrering,{{ names }}!</p>
</template>

<script>
  export default {
    props: {
      names: {
        type: String,
        required: true
      }
    }
  }
</script>
