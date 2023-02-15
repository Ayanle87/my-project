<script>
  export default {
    name: 'HomePage',
    components: {}
  }
</script>

<template>
  <nav class="topnav">
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/ContactUs">Kontakt</RouterLink>
      </li>
      <li>
        <RouterLink to="/AboutUs">Om</RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
<style lang="scss">
  $some-color: #c2eabd;
  .topnav {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-size: 30px;
    background-color: $some-color;
  }
  nav ul li {
    list-style-type: none;
    display: inline-block;
    padding: 10px 30px;
    margin: 10px 100px;
    justify-content: space-between;
  }
  body {
    width: 100%;
    background: #465362;
    color: lightgray;
    margin: 0;
  }
</style>
