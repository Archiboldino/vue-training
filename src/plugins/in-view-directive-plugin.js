import {directive} from "@/directives/is-in-view-directive";

export default {
  install(Vue) {
    Vue.directive('in-view-observer', directive)
  }
}
