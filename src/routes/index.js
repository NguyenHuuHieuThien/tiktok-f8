// Layouts
import { HeaderOnly } from '~/Layout';
import config from '../Config/index';

import HomePage from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';
// public routes
export const publicRoutes = [
  { path: config.routes.home, component: HomePage },
  { path: config.routes.following, component: Following },
  { path: config.routes.nickname, component: Profile },
  { path: config.routes.upload, component: Upload, layout: HeaderOnly },
  { path: config.routes.search, component: Search, layout: null },
];
// private routes
export const privateRoutes = [];
