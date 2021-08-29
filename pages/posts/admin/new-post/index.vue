<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import AppControlInput from "~/components/UI-Components/AppControlInput.vue";
import AppButton from "~/components/UI-Components/AppButton.vue";

@Component
export default class Index extends Vue {

  editedPost = {
    author: '',
    title: '',
    thumbnailLink: '',
    content: '',
  };

  onCancel() {
    console.log('cance');
  }

  onSave() {
    console.log('cance');
  }

  render(): Vue.VNode {
    return (
      <div class="admin-new-post-page">
        <div>{JSON.stringify(this.editedPost)}</div>
        <section class="new-post-form">
          <form vOn:submit_prevent={this.onSave}>
            <AppControlInput vModel={this.editedPost.author}>Author Name</AppControlInput>
            <AppControlInput vModel={this.editedPost.title}>Title</AppControlInput>
            <AppControlInput vModel={this.editedPost.thumbnailLink}>Thumbnail Link</AppControlInput>
            <AppControlInput
              control-type="textarea"
              vModel={this.editedPost.content}>Content</AppControlInput>
            <AppButton type="submit">Save</AppButton>
            <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    vOn:click={this.onCancel}>Cancel</AppButton>
            </form>
        </section>
      </div>
    );
  }

}
</script>