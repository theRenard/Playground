<template>
  <div id="app">

   <nav class="main-nav">
     <Burger></Burger>
   </nav>

   <Sidebar>
    <ul class="sidebar-panel-nav" @click="$store.commit('toggleNav');">
      <li>
        <span>Three</span>
        <ul class="sub-menu">
          <li><nuxt-link to="/airplane">Airplane</nuxt-link></li>
          <li><nuxt-link to="/street">Street</nuxt-link></li>
          <li><nuxt-link to="/earth">Earth</nuxt-link></li>
          <li><nuxt-link to="/planet">Planet</nuxt-link></li>
          <li><nuxt-link to="/materials">Materials</nuxt-link></li>
          <li><nuxt-link to="/procedural-terrain">Procedural Terrain</nuxt-link></li>
        </ul>
      </li>
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
      <nuxt-link to="/platform">Platform</nuxt-link>
      </li>

    </ul>
   </Sidebar>

    <router-view/>
  </div>
</template>

<script>
import Burger from '~/components/Navigation/Burger.vue';
import Sidebar from '~/components/Navigation/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Burger,
    Sidebar,
  },
};
</script>

<style lang="scss">

 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
   position: absolute;
   right: 0;
 }

 ul {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > span,
 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.2rem;
   display: block;
   padding-bottom: 0.5em;
 }
 ul.sub-menu {
   padding-left: 20px;
 }
 ul.sub-menu > li > span,
 ul.sub-menu > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 0.8rem;
    display: block;
    padding-bottom: 0.5em;
  }
</style>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

</style>
