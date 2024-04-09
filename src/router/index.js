import { lazy } from 'react';
const Account = lazy(() => import('../pages/Account'));
const Connectors = lazy(() => import('../pages/Connectors'));
const EditingAdding = lazy(() => import('../pages/EditingAdding'));

const coreRoutes = [
  {
    path: '/',
    component: Account,
  },
  {
    path: '/connectors',
    component: Connectors,
  },
  {
    path: 'connectors/editting-adding',
    component: EditingAdding,
  },
];
const router = [...coreRoutes];
export default router;
