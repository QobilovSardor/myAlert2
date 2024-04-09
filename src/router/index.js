import { lazy } from 'react';
const Account = lazy(() => import('../pages/Account'));
const Connectors = lazy(() => import('../pages/Connectors'));
const EditingAdding = lazy(() => import('../pages/EditingAdding'));
const PersonalAccount = lazy(() => import('../pages/PersonalAccount'));

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
  {
    path: 'account',
    component: PersonalAccount,
  },
];
const router = [...coreRoutes];
export default router;
