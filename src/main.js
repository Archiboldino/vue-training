import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import InViewDirective from './plugins/in-view-directive-plugin'

Vue.config.productionTip = false

Vue.use(InViewDirective)

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    this.$store.dispatch('loadMovies');
  }
}).$mount('#app')
