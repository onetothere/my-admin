<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTableList" class="w-2/4 xl:w-2/5" @select="handleSelect" />
    <BasicTable @register="registerTable" class="w-2/4 xl:w-3/5" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button type="primary" @click="handleCreate">新增账号</a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:info-standard-line',
                tooltip: '查看用户详情',
                onClick: handleView.bind(null, record),
              },
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑用户资料',
                onClick: handleEdit.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此账号',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <AccountModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getAccountList } from '/@/api/demo/system';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import AccountModal from './AccountModal.vue';

  import { useGo } from '/@/hooks/web/usePage';

  export default defineComponent({
    name: 'DictManage',
    components: { BasicTable, PageWrapper, AccountModal, TableAction },
    setup() {
      const go = useGo();
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive<Recordable>({});
      const checkedKeys = ref<Array<string | number>>([]);
      const [registerTableList] = useTable({
        title: '数据字典',
        api: getAccountList,
        rowKey: 'id',
        columns: [
          {
            title: '字段名称',
            dataIndex: 'dictName',
            width: 120,
          },
          {
            title: '字段Code',
            dataIndex: 'dictCode',
            width: 120,
          },
        ],
        formConfig: {
          labelWidth: 80,
          schemas: [
            {
              field: 'dictName',
              label: '字段名称',
              component: 'Input',
            },
            {
              field: 'dictCode',
              label: '字段Code',
              component: 'Input',
            },
          ],
          autoSubmitOnEnter: true,
        },
        rowSelection: {
          type: 'radio',
          selectedRowKeys: checkedKeys,
          onChange: onSelectChange,
        },

        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
      });
      const [registerTable, { reload, updateTableDataRecord }] = useTable({
        title: '数据字典明细',
        api: getAccountList,
        rowKey: 'id',
        columns: [
          {
            title: '显示顺序',
            dataIndex: 'order',
            width: 120,
          },
          {
            title: '值',
            dataIndex: 'label',
            width: 120,
          },
          {
            title: 'Code',
            dataIndex: 'value',
            width: 120,
          },
        ],
        formConfig: {
          labelWidth: 80,
          schemas: [
            {
              field: 'dictName',
              label: '值',
              component: 'Input',
            },
          ],
          autoSubmitOnEnter: true,
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });
      function onSelectChange(selectedRowKeys: (string | number)[]) {
        console.log(selectedRowKeys, '-----');
        checkedKeys.value = selectedRowKeys;
        searchInfo.dictCode = selectedRowKeys[0];
        reload();
      }
      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record: Recordable) {
        console.log(record);
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record: Recordable) {
        console.log(record);
      }

      function handleSuccess({ isUpdate, values }) {
        if (isUpdate) {
          // 演示不刷新表格直接更新内部数据。
          // 注意：updateTableDataRecord要求表格的rowKey属性为string并且存在于每一行的record的keys中
          const result = updateTableDataRecord(values.id, values);
          console.log(result);
        } else {
          reload();
        }
      }

      function handleSelect(deptId = '') {
        searchInfo.deptId = deptId;
        reload();
      }

      function handleView(record: Recordable) {
        go('/system/account_detail/' + record.id);
      }

      return {
        registerTableList,
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        handleSelect,
        handleView,
        searchInfo,
      };
    },
  });
</script>
