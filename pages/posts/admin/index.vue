<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import PostList from "~/components/Posts/PostList.vue";
import AppButton from "~/components/UI/AppButton.vue";

@Component({
  layout: 'admin',
})
export default class Index extends Vue {

  buttonHandler() {
    this.$router.push('admin/new-post')
  }

  render(): Vue.VNode {
    return (
        <div class="admin-page">
          <section class="new-post">
            <AppButton vOn:click={this.buttonHandler}>
              Create Post
            </AppButton>
          </section>
          <section class="existinig-posts">
            <h1>Existing Posts</h1>
            <PostList />
          </section>
        </div>
    );
  }
}
</script>