<template>
  <div class="essential-links">
    <h2>Essential Links</h2>
    <ul>
      <li v-for="item in links" :key="item.id">
        <a :href="item.link" target="_blank">{{item.text}}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({})
export default class EssentialLinks extends Vue {
  @Prop({ default: [] })
  links: Array<string>

  // lifecycle method
  mounted() {
    console.log(this.links)
  }
}
</script>