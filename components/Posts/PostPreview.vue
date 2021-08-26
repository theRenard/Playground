<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { Post } from '~/@types/posts';

@Component
export default class PostPreview extends Vue {

  @Prop({
    type: Object as Vue.PropType<Post>,
    required: true
  })
  post!: Post;

  render(): Vue.VNode {
    return (
      <nuxt-link to={{ name: 'posts-id', params: { id: this.post.id }}}>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">{this.post.title}</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">{this.post.previewText}</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
                  <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                    <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    );
  }

}
</script>
