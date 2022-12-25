import { FormSchema } from '/@/components/Table';
import { uploadApi } from '/@/api/sys/upload';

export const formSchema: FormSchema[] = [
  {
    field: 'projectName',
    label: '项目名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'roleValue',
    label: '项目阶段',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    defaultValue: '交付阶段',
  },
  {
    field: 'state',
    label: '项目状态',
    component: 'Input',
    componentProps: {
      disabled: true,
    },
    defaultValue: '交付登记',
  },
  {
    field: 'projectName',
    label: '项目经理',
    required: true,
    component: 'Input',
  },
  {
    field: 'projectName',
    label: '销售经理',
    required: true,
    component: 'Input',
  },
  {
    field: 'projectName',
    label: '售前经理',
    required: true,
    component: 'Input',
  },
  {
    field: 'takeTime',
    label: '生效日期',
    required: true,
    component: 'DatePicker',
  },
  {
    field: 'status',
    label: '项目交付类型',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    field: 'projectName',
    label: '所属销售团队',
    required: true,
    component: 'Input',
  },
  {
    field: 'status',
    label: '公司主体',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    field: 'projectName',
    label: '签约客户/产业名称',
    required: true,
    component: 'Input',
  },
  {
    field: 'projectName',
    label: '商务对接人',
    required: true,
    component: 'Input',
  },
  {
    field: 'projectName',
    label: '最终用户',
    component: 'Input',
  },
  {
    field: 'status',
    label: '最终用户所属团队',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    field: 'status',
    label: '最终用户细分行业',
    component: 'Select',
    defaultValue: '0',
    componentProps: {
      options: [
        { label: '启用', value: '0' },
        { label: '停用', value: '1' },
      ],
    },
  },
  {
    field: 'projectName',
    label: '合同编码/PO号',
    component: 'Input',
  },
  {
    field: 'projectName',
    label: '合同金额（含税）',
    component: 'InputNumber',
    suffix: '元',
  },
  {
    field: 'projectName',
    label: '合同金额（未税）',
    component: 'InputNumber',
    suffix: '元',
  },
  {
    field: 'projectName',
    label: '年份',
    required: true,
    component: 'Input',
  },
  {
    field: 'takeTime',
    label: '项目预计启动时间',
    required: true,
    component: 'DatePicker',
  },
  {
    field: 'takeTime',
    label: '项目预计结束时间',
    required: true,
    component: 'DatePicker',
  },
  {
    label: '项目需求说明/项目范围',
    field: 'remark',
    component: 'InputTextArea',
    required: true,
    colProps: {
      span: 24,
    },
  },
  {
    field: 'field1',
    component: 'Upload',
    label: '项目需求/交付物附件',
    colProps: {
      span: 8,
    },
    // rules: [{ required: true, message: '请选择上传文件' }],
    componentProps: {
      api: uploadApi,
    },
  },
];
