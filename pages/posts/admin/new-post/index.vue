<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";

@Component
export default class Index extends Vue {
  render(): Vue.VNode {
    return (
      <div class="admin-new-post-page">
        <section class="new-post-form">
          <AdminPostForm />
        </section>
      </div>
    );
  }
}
</script>