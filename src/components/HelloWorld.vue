<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="logger({log: 'Test Test Test'} )">Hello World Button</button>
    <essential-links :links="essentialLinks"></essential-links>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <p>{{computedMsg}}</p>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'

import BaseWorldDecorated from './BaseWorldDecorated'
import EssentialLinks from './EssentialLinks.vue'

@Component({
  components: {
    EssentialLinks
  }
})
export default class HelloWorld extends BaseWorldDecorated {
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      essentialLinks: [
        { id: 'zdf', link: 'https://vuejs.org', text: 'Core Docs' },
        { id: 'axe', link: 'https://forum.vuejs.org', text: 'Community Chat' },
        { id: 'bae', link: 'https://twitter.com/vuejs', text: 'Twitter' }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
