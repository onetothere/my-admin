import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sales: AppRouteModule = {
  path: '/workbench',
  name: 'workbench',
  component: LAYOUT,
  redirect: '/workbench/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.workbench'),
    orderNo: 1,
  },
  children: [
    {
      path: 'index',
      name: 'workbench-create',
      component: () => import('/@/views/dashboard/workbench/index.vue'),
      meta: {
        title: t('routes.dashboard.workbench'),
        icon: 'ion:layers-outline',
        hideMenu: true,
      },
    },
  ],
};

export default sales;
