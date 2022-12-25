import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const sales: AppRouteModule = {
  path: '/deliver',
  name: 'deliver',
  component: LAYOUT,
  redirect: '/deliver/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'ion:git-compare-outline',
    title: t('routes.dashboard.deliver'),
    orderNo: 3,
  },
  children: [
    {
      path: 'index',
      name: 'deliver-create',
      component: () => import('/@/views/sales/create/index.vue'),
      meta: {
        title: t('routes.dashboard.deliver'),
        icon: 'ion:layers-outline',
        hideMenu: true,
      },
    },
  ],
};

export default sales;
