<template>
  <div class="container-fluid error-content">
    <div class="">
      <h1 class="error-number">404</h1>
      <p class="mini-text">Ooops!</p>
      <p class="error-text mb-4 mt-1">The page you requested was not found!</p>
      <router-link to="/" class="btn btn-primary mt-5">Go Back</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: [],
}
</script>

<style></style>
