<template>
  <div class="search-bar-module__searchBar">
    <h3>Find your movie</h3>
    <div class="search-bar-module__searchInput">
      <input placeholder="Quentin Tarantino" type="text"/>
      <button-component>Search</button-component>
    </div>
    <div class="search-bar-module__searchFilter">
      <span class="search-bar-module__searchBy">Search by</span>
      <radiobutton-pair left-button-value="title" right-button-value="genre" left-button-id="search-by-title"
                        right-button-id="search-by-genre" buttons-name="search-by">
        <template v-slot:left-button-content>
          Title
        </template>
        <template v-slot:right-button-content>
          Genre
        </template>
      </radiobutton-pair>
    </div>
  </div>
</template>

<script>
import RadiobuttonPair from "@/components/RadiobuttonPair";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "SearchBar",
  components: {RadiobuttonPair, ButtonComponent}
}
</script>

<style scoped>

.search-bar-module__searchBar {
  margin: auto;
  width: 80%;
}

h3 {
  font-size: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: white;
}

input {
  color: wheat;
  background-color: rgba(42, 42, 42, 0.4);
  border: none;
  height: 30px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.search-bar-module__searchInput {
  margin-bottom: 20px;
  position: center;
  display: flex;
}

.search-bar-module__searchInput input::placeholder {
  color: white;
  opacity: 1;
}

.search-bar-module__searchBy {
  color: white;
  line-height: 2;
  margin-right: 20px;
}

.search-bar-module__searchFilter {
  display: flex;
  flex-direction: row;
}

span {
  text-transform: uppercase;
}
</style>
