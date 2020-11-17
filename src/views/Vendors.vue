<template>
  <div class="col-lg-12 control-section">
    <div>
      <ejs-grid :dataSource="parentData" :childGrid="childGrid" :allowSorting="true">
        <e-columns>
          <e-column
            field="EmployeeID"
            headerText="Employee ID"
            width="120"
            textAlign="Right"
          ></e-column>
          <e-column field="FirstName" headerText="Name" width="140"></e-column>
          <e-column field="Title" headerText="Title" width="170"></e-column>
          <e-column
            field="HireDate"
            headerText="Hired Date"
            width="120"
            format="yMd"
            textAlign="Right"
          ></e-column>
          <e-column
            field="ReportsTo"
            headerText="Reports To"
            width="120"
            textAlign="Right"
          ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script lang="ts">
import { DetailRow, Sort } from '@syncfusion/ej2-vue-grids'
import { employeeData, orderDatas, customerData } from './data-source'

export default {
  data() {
    let secondChildGrid = {
      dataSource: customerData,
      queryString: 'CustomerID',
      columns: [
        {
          field: 'CustomerID',
          headerText: 'Customer ID',
          textAlign: 'Right',
          width: 75,
        },
        { field: 'Address', headerText: 'Address', width: 120 },
        { field: 'Country', headerText: 'Country', width: 100 },
      ],
    }

    return {
      parentData: employeeData,
      childGrid: {
        dataSource: orderDatas,
        queryString: 'EmployeeID',
        allowPaging: true,
        pageSettings: { pageSize: 6, pageCount: 5 },
        columns: [
          {
            field: 'OrderID',
            headerText: 'Order ID',
            textAlign: 'Right',
            width: 120,
          },
          { field: 'ShipCity', headerText: 'Ship City', width: 120 },
          { field: 'Freight', headerText: 'Freight', width: 120 },
          { field: 'ShipName', headerText: 'Ship Name', width: 150 },
        ],
        childGrid: secondChildGrid,
      },
    }
  },
  provide: {
    grid: [DetailRow, Sort],
  },
}
</script>
