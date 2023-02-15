<script>
  export default {
    name: 'HomePage',
    created() {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => {
          this.items = data
        })
    },
    data() {
      return {
        items: [
          { category: "men's clothing", image: ' ' },
          { category: "women's clothing", image: ' ' },
          { category: 'jewelery', image: ' ' }
        ],
        selectedCategories: ["men's clothing", "women's clothing", 'jewelery']
      }
    },
    computed: {
      filteredItems() {
        return this.items.filter((item) =>
          this.selectedCategories.includes(item.category)
        )
      }
    }
  }
</script>
<template>
  <ul class="product-grid">
    <li v-for="item in filteredItems" :key="item.id">
      <p>{{ item.category }}</p>
      <img class="product-image" :src="item.image" :alt="item.category" />
    </li>
  </ul>
</template>

<style>
  .product-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    list-style: none;
    padding-top: 50px;
    width: fit-content;
    margin: auto;
    color: black;
  }

  .product-image {
    width: 100%;
    height: 200px;
    object-fit: contain;
    background-color: rgb(2, 0, 36) 0, 4;
    box-shadow: 2px 3px 4px;
  }
  .product-image:hover {
    transform: scale(1.2);
  }
</style>
