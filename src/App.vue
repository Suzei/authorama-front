<template>
  <div class="row" id="app">
    <div class="d-flex flex-row">
      <side-menu></side-menu>

      <div class="w-100">
        <div class="header bg-dark"></div>

        <div class="container pt-5">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "./components/SideMenu/SideMenu.vue";
import "./styles/animation.scss";

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
  background: url("./assets/patern.jpg");
}
</style>
