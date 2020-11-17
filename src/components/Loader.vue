<template>
  <div v-show="isLoading" id="load_screen">
    <div class="loader">
      <div class="loader-content">
        <div class="spinner-grow align-self-center"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loader',
  data() {
    return {
      isLoading: false,
    }
  },
}
</script>
