// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
// google map
import * as VueGoogleMaps from 'vue2-google-maps'
// for Apollo
import {
  ApolloClient
} from 'apollo-client'
import {
  HttpLink
} from 'apollo-link-http'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// Apollo object
const httpLink = new HttpLink({
  uri: 'https://backend.haoxp.xyz/graphql'
})
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

// CSS
import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(VueApollo)
Vue.config.productionTip = false
// google map
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBPj6ER1A4Mxey2Dr8WvKidreaCK_kvG18',
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
