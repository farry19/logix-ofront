<template>
  <data-table :entity="'customers'">
    <template v-slot:columns>
      <e-column field="code" headerText="Code" textAlign="Center" width="90"></e-column>
      <e-column field="name" headerText="Name" width="250"></e-column>
    </template>
  </data-table>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'customers',
  components: { DataTable },
}
</script>

<style></style>
