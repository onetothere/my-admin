import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sales: AppRouteModule = {
  path: '/quantity',
  name: 'quantity',
  component: LAYOUT,
  redirect: '/quantity/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:bar-chart-outline',
    title: t('routes.dashboard.quantity'),
    orderNo: 4,
  },
  children: [
    {
      path: 'index',
      name: 'quantity-create',
      component: () => import('/@/views/sales/create/index.vue'),
      meta: {
        title: t('routes.dashboard.quantity'),
        icon: 'ion:layers-outline',
        hideMenu: true,
      },
    },
  ],
};

export default sales;
