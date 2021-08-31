<script lang="tsx">
import 'reflect-metadata';
import axios from 'axios';
import { Component, Vue } from "nuxt-property-decorator";
import AdminPostForm from "~/components/Admin/AdminPostForm.vue";
import { Post } from '~/@types/posts.d';

@Component
export default class Index extends Vue {

  onSubmitted(postData: Post) {
    axios.post('https://playground-7b3c6-default-rtdb.firebaseio.com/posts.json', postData)
    .then(() => {})
    .catch((e) => new Error(e));
  }

  render(): Vue.VNode {
    return (
      <div class="admin-new-post-page">
        <section class="new-post-form">
          <AdminPostForm vOn:submit={this.onSubmitted} />
        </section>
      </div>
    );
  }
}
</script>