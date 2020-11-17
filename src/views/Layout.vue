<template>
  <div>
    <Loader />
    <Top />
    <Yield />
  </div>
</template>

<script>
import Loader from '@/components/Loader'
import Top from '@/components/Top'
import Yield from '@/components/Yield'

export default {
  name: 'layout',
  props: [],
  components: {
    Loader,
    Top,
    Yield,
  },
}
</script>
