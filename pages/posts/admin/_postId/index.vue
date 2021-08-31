<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";

@Component
export default class Index extends Vue {

  loadedPost = {
    author: 'test',
    title: 'test',
    thumbnailLink: 'test',
    content: 'test',
  }

  render(): Vue.VNode {
    return (
      <div class="admin-post-page">
        <section class="update-form">
          <AdminPostForm post={this.loadedPost} />
        </section>
      </div>
    );
  }
}
</script>