<template>
  <div id="app">
    <div class="d-flex flex-row p-y">
      <side-menu></side-menu>

      <div class="w-100">
        <div class="header bg-dark bg-gradient"></div>

        <div class="p-3">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu/SideMenu.vue";

export default {
  components: {
    SideMenu,
  },
  data: () => {
    return {};
  },
};
</script>

<style lang="scss">
* {
  font-family: "Roboto", sans-serif;
}
// nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

.header {
  width: 100%;
  height: 30px;
  background-color: blue;
}
</style>
