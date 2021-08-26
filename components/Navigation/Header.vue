<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {

  title = "Hello header";

  render(): Vue.VNode {
    return <h1 class="red">{this.title}</h1>
    ;
  }
}
</script>
