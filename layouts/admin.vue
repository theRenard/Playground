<template>
  <div>
    <Header />
    <div class="container">
      admin
    </div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Header from "~/components/Navigation/Header.vue";

@Component({
  components: {
    Header,
  },
})
export default class BlogLayout extends Vue {}
</script>
