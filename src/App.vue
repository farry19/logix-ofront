<template>
  <router-view />
</template>

<script>
import { isLoggedIn } from '@/utils/auth'

export default {
  methods: {
    isLoggedIn() {
      return isLoggedIn()
    },
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700');
@import url('./assets/css/bootstrap.min.css');
@import url('./assets/css/plugins.css');
@import url('./assets/css/authentication/form-1.css');
@import url('./assets/css/structure.css');
@import url('./assets/css/forms/theme-checkbox-radio.css');
@import url('./assets/css/forms/switches.css');
@import url('./assets/css/plugins.css');

@import url('./assets/css/datatable/datatables.css');
@import url('./assets/css/datatable/dt-global_style.css');

@import url('./assets/css/jqwidgets/styles/jqx.base.css');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
