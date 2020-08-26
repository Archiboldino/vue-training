<template>
  <button class="search-bar-module__searchBtn" type="button" value="button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "Button",
}
</script>

<style scoped>
.search-bar-module__searchBtn {
  background-position: center;
  transition: background 0.8s;
  border: none;
  border-radius: 2px;
  padding: 5px 12px;
  margin: 0 10px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #F65261;;
  box-shadow: 0 0 4px #999;
  outline: none;
}

</style>
