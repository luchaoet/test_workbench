import MainLayout from '@/layouts/MainLayout';

import NotFound from '@/pages/NotFound';
import Home from '@/pages/Home';
import Management from '@/pages/Management';
import List from '@/pages/List';

const routerConfig = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {path: '/', redirect: '/home'},
      {path: '/home', component: Home},
      {path: '/list', component: List},
      {path: '/management', component: Management},
      {component: NotFound},
    ],
  },
  
];

export default routerConfig;