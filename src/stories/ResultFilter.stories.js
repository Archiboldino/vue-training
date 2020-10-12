import ResultFilter from "@/components/ResultFilter";

export default {
  component: ResultFilter,
  title: 'Result sort buttons'
}

export const simpleResultSort = () => ({
  components: {ResultFilter},
  template: `
    <result-filter style="background-color: black"/>
  `
})
