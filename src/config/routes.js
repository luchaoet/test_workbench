import MainLayout from '@/layouts/MainLayout';

import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import StaffList from '@/pages/StaffManagement/List';
import LogQuery from '@/pages/LogQuery';
import UserInfo from '@/pages/Settings/UserInfo';
import Login from '@/pages/Login';

const routerConfig = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {path: '/', redirect: '/home'},
      {path: '/home', component: Home},
      {path: '/staffManagement', redirect: '/staffManagement/list'},
      {path: '/staffManagement/list', component: StaffList},
      {path: '/logQuery', redirect: '/logQuery/list'},
      {path: '/logQuery/list', component: LogQuery},

      {path: '/settings/userInfo', component: UserInfo},
      {component: NotFound},
    ],
  },
  
];

export default routerConfig;