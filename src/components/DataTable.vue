<template>
  <div class="col-lg-12 control-section">
    <ejs-grid
      :toolbar="toolbar"
      :dataSource="data"
      :allowPaging="true"
      :allowSorting="true"
      :editSettings="editSettings"
      :pageSettings="pageSettings"
      @actionBegin="actionBegin"
      @actionComplete="actionComplete"
      ref="dataGrid"
    >
      <e-columns>
        <slot name="columns"></slot>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
// import Vue from 'vue'
import { Page, Sort, Edit, Filter, Group, Aggregate, Toolbar } from '@syncfusion/ej2-vue-grids'
import DialogTemplate from '@/components/DialogTemplate'

export default {
  name: 'data-table',
  props: {
    entity: {
      required: true,
    },
    initials: {
      default: 'CU',
    },
    size: {
      default: 8,
    },
  },
  data() {
    return {
      data: [],
      pageSettings: { pageSize: 15 },
      editSettings: {
        allowEditing: true,
        allowAdding: true,
        allowDeleting: true,
        mode: 'Dialog',
        template: function() {
          return { template: DialogTemplate }
        },
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      codeParams: { params: { value: 'Germany' } },
    }
  },
  provide: {
    grid: [Page, Sort, Edit, Filter, Group, Aggregate, Toolbar],
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$http(`${process.env.VUE_APP_BASE_URL}/${this.entity}`).then(res => {
        const { data } = res

        if (data.status) this.data = data.items.data
        else console.log(data.message[0])
      })
    },
    actionBegin(args) {
      if (args.requestType === 'add') {
        this.$http(`${process.env.VUE_APP_BASE_URL}/code/${this.initials}/${this.size}`).then(
          ({ data }) => {
            console.log(data)
          }
        )
      }
    },
    actionComplete(args) {
      if (args.action === 'edit' && args.requestType === 'save') {
        this.$http(`${process.env.VUE_APP_BASE_URL}/${this.entity}/${args.data.id}`, {
          method: 'PUT',
          data: {
            ...args.data,
          },
        })
      } else if (args.action === 'add' && args.requestType === 'save') {
        this.$http(`${process.env.VUE_APP_BASE_URL}/${this.entity}`, {
          method: 'POST',
          data: {
            ...args.data,
          },
        })
      } else if (args.requestType === 'delete') {
        const id = args.data[0].id
        this.$http(`${process.env.VUE_APP_BASE_URL}/${this.entity}/${id}`, {
          method: 'DELETE',
        })
      }
    },
  },
}
</script>
