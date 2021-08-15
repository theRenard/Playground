<template>
  <div class="posts">
    <div class="posts-title">
      <h1>Posts</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PostPreview from "~/components/Posts/PostPreview.vue";
import { Post } from "~/@types/posts";

@Component({
  components: {
    PostPreview,
  },
  layout: 'blog'
})
export default class Index extends Vue {
  posts: Post[] = [
    {
      id: 1,
      title: "Hello World",
      previewText: "This is a post",
      thumbnail: "https://via.placeholder.com/150x150",
    },
    {
      id: 2,
      title: "Hello World",
      previewText: "This is a post",
      thumbnail: "https://via.placeholder.com/150x150",
    }
  ];
}



</script>