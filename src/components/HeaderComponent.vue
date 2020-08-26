<template>
  <div class="header-module__heading">
    <header>
      <h1>Netfilxroulette</h1>
      <router-link to="/" v-if="showHomeButton">
        <button-component>HOME</button-component>
      </router-link>
    </header>
    <slot></slot>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "Header",
  components: {ButtonComponent},
  props: {
    showHomeButton: Boolean
  }
}
</script>

<style scoped>
.header-module__heading {
  position: relative;
  padding: 10px 20px;
  background: linear-gradient(to right, rgba(23, 23, 23, .8), rgba(23, 23, 23, .8)), url("~@/assets/background.jpg");
}

h1 {
  position: relative;
  font-size: 20px;
  margin-bottom: 30px;
  margin-left: 5%;
  text-transform: lowercase;
  color: #F65261;
  text-align: left;
}

header {
  display: flex;
  justify-content: space-between;
}
</style>
