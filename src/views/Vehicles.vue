<template>
  <data-table :entity="'vehicles'">
    <template v-slot:columns>
      <e-column field="code" headerText="Code" textAlign="Center" width="90"></e-column>
      <e-column field="registration_number" headerText="Reg #" width="90"></e-column>
      <e-column field="expiry_date" headerText="Expire Date" width="75"></e-column>
      <e-column field="make_id" headerText="Make" width="50"></e-column>
      <e-column field="model_id" headerText="Model" width="50"></e-column>
      <e-column field="capacity_id" headerText="Capacity" width="50"></e-column>
      <e-column field="vendor_id" headerText="Vendor" width="50"></e-column>
    </template>
  </data-table>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'vehicles',
  components: { DataTable },
}
</script>

<style></style>
