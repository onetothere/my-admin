import { FormProps } from '/@/components/Table';
import { BasicColumn } from '/@/components/Table/src/types/table';
import { h } from 'vue';
import { Tag } from 'ant-design-vue';
export function getBasicColumns(): BasicColumn[] {
  return [
    {
      title: '项目编码',
      dataIndex: 'number',
      width: 150,
    },
    {
      title: '项目名称',
      dataIndex: 'projectName',
    },
    {
      title: '项目状态',
      dataIndex: 'state',
      width: 150,
      sorter: true,
    },
    {
      title: '进度',
      width: 150,
      sorter: true,
      dataIndex: 'progress',
      customRender: ({ record }) => {
        const progress = record.progress;
        const enable = ~~progress === 0;
        const color = enable ? 'green' : 'red';
        const text = enable ? '进度正常' : '进度延期';
        return h(Tag, { color: color }, () => text);
      },
    },
    {
      title: '项目经理',
      width: 150,
      sorter: true,
      dataIndex: 'projectManager',
    },
    {
      title: '售前经理',
      dataIndex: 'saleManage',
    },
    {
      title: '生效日期',
      dataIndex: 'takeTime',
      width: 150,
      sorter: true,
    },
    {
      title: '项目交付类型',
      width: 150,
      sorter: true,
      dataIndex: 'deliveryType',
    },
    {
      title: '所属销售团队',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '公司主体',
      width: 150,
      sorter: true,
      dataIndex: 'deliveryType',
    },
    {
      title: '签约客户/产业名称',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '最终用户',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '最终用户所属行业',
      width: 150,
      sorter: true,
      dataIndex: 'deliveryType',
    },
    {
      title: '最终用户细分行业',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '合同编码/PO号',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '合同签订金额（含税）',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '合同签订金额（未税）',
      width: 150,
      sorter: true,
      dataIndex: 'deliveryType',
    },
    {
      title: '年份',
      width: 150,
      sorter: true,
      dataIndex: 'year',
    },
    {
      title: '项目预计启动时间',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '项目预计完工时间',
      width: 150,
      sorter: true,
      dataIndex: 'team',
    },
    {
      title: '创建人',
      width: 150,
      sorter: true,
      dataIndex: 'createUser',
    },
    {
      title: '创建时间',
      width: 150,
      sorter: true,
      dataIndex: 'createTime',
    },
    {
      title: '最后修改人',
      width: 150,
      sorter: true,
      dataIndex: 'updateuser',
    },
    {
      title: '最后修改时间',
      width: 150,
      sorter: true,
      dataIndex: 'updateTime',
    },
  ];
}

export function getFormConfig(): Partial<FormProps> {
  return {
    labelWidth: 100,
    schemas: [
      {
        field: `number`,
        label: `项目编号`,
        component: 'Input',
        colProps: {
          xl: 8,
          xxl: 4,
        },
      },
      {
        field: `name`,
        label: `项目名称`,
        component: 'Input',
        colProps: {
          xl: 8,
          xxl: 4,
        },
      },
      {
        field: `state`,
        label: `项目状态`,
        component: 'Select',
        componentProps: {
          options: [
            {
              label: '选项1',
              value: '1',
              key: '1',
            },
            {
              label: '选项2',
              value: '2',
              key: '2',
            },
          ],
        },
        colProps: {
          xl: 8,
          xxl: 4,
        },
      },
      {
        field: `projectManage`,
        label: `项目经理`,
        component: 'Input',
        colProps: {
          xl: 8,
          xxl: 4,
        },
      },
    ],
  };
}

export function getTreeTableData() {
  return (() => {
    const arr: any = [];
    for (let index = 0; index < 40; index++) {
      arr.push({
        id: `${index}`,
        projectName: 'John Brown',
        year: `1${index}`,
        number: `${index + 10}`,
        address: 'New York No. 1 Lake ParkNew York No. 1 Lake Park',
        beginTime: new Date().toLocaleString(),
        endTime: new Date().toLocaleString(),
      });
    }
    return arr;
  })();
}
