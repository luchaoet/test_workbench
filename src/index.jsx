import Dva from 'dva';
import './global.scss';
import router from './router';
import { createBrowserHistory as createHistory } from 'history';

// iconfont
import '@/utils/iconfont/iconfont.css';

import mainModel from '@/layouts/MainLayout/model';

const models=[
  mainModel,
];

// 创建dva实例
const app = new Dva({
  history: createHistory()
});
models.forEach(m=>app.model(m));

// 引入路由
app.router(router);

// 启动项目
app.start('#ice-container');