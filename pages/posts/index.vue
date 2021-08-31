<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import PostList from "~/components/Posts/PostList.vue";
import { Post } from '~/@types/posts.d';

@Component({
  // layout: 'blog',
})
export default class Index extends Vue {

  loadedPosts: Post[] = [{
    id: 1,
    author: '0',
    title: 'string',
    thumbnailLink: 'string',
    content: 'string',
  }];

  render(): Vue.VNode {
    return (
      <div class="posts">
        <div class="posts-title">
          <h1>Posts</h1>
          <PostList posts={this.loadedPosts} />
        </div>
      </div>
    );
  }
}
</script>