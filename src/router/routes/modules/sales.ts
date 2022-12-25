import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sales: AppRouteModule = {
  path: '/sales',
  name: 'sales',
  component: LAYOUT,
  redirect: '/sales/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:layers-outline',
    title: t('routes.dashboard.sales'),
    orderNo: 2,
  },
  children: [
    {
      path: 'index',
      name: 'sales-create',
      component: () => import('/@/views/sales/create/index.vue'),
      meta: {
        title: t('routes.dashboard.sales'),
        icon: 'ion:layers-outline',
        hideMenu: true,
      },
    },
  ],
};

export default sales;
