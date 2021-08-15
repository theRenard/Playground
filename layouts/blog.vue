<template>
  <div>
    <div class="page-header">TEST</div>
    <Header />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "~/components/Navigation/Header.vue";


@Component({
  components: {
    Header,
  },
})
export default class BlogLayout extends Vue {}
</script>
