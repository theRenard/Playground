<script lang="tsx">
import 'reflect-metadata';
import { Component, Prop, Vue } from "nuxt-property-decorator";
import PostPreview from "~/components/Posts/PostPreview.vue";
import { Post } from "~/@types/posts.d";

@Component
export default class Index extends Vue {

  @Prop({ type: Boolean, default: false })
  isAdmin!: boolean;

  @Prop({
    type: Array as Vue.PropType<Post[]>,
    required: true
  })
  posts!: Post[];

  render(): Vue.VNode {
    return (
      <div class="post-list">
      {this.posts.map((post) => (
        <PostPreview
          key={post.id}
          is-admin={this.isAdmin}
          data-title={'ciao'}
          post={post}  />
      ))}
      </div>
    );
  }
}
</script>