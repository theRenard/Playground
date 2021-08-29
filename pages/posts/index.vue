<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import PostPreview from "~/components/Posts/PostPreview.vue";
import AppControlInput from "~/components/UI-Components/AppControlInput.vue";
import { Post } from "~/@types/posts";

@Component({
  // layout: 'blog',
})
export default class Index extends Vue {
  value: string = "";

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
      previewText: "This is a second post",
      thumbnail: "https://via.placeholder.com/150x150",
    }
  ];

  render(): Vue.VNode {
    return (
      <div class="posts">
        <div class="posts-title">
          <h1>Posts</h1>
          {this.posts.map((post) => (
            <PostPreview data-title={'ciao'} post={post}  />
          ))}
        </div>
        <AppControlInput value={this.value} controlType="input" vOn:input={(e: string) => { this.value = e }}>
          <span>Ciao</span>
        </AppControlInput>
        <div>{this.value}</div>
      </div>
    );
  }
}
</script>