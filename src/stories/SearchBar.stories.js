import SearchBar from "@/components/SearchBar";

export default {
  component: SearchBar,
  title: 'Search bar'
}

export const simpleSearchBar = () => ({
  components: {SearchBar},
  template: `
    <search-bar style="background-color: black"/>
  `
})
