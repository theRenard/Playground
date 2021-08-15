<script lang="tsx">
import 'reflect-metadata';
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Header extends Vue {

  title = "Hello header";

  test(test: string) {
    console.log('test');
  }

  render(h: Vue.CreateElement): Vue.VNode {
    return <h1 class="red">{this.title}</h1>
    ;
  }
}
</script>
