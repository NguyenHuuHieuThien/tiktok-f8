// Layouts
import { HeaderOnly } from '~/Component/Layout';
import config from './config';

import HomePage from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';
// public routes
export const publicRoutes = [
  { path: config.home, component: HomePage },
  { path: config.following, component: Following },
  { path: config.nickname, component: Profile },
  { path: config.upload, component: Upload, layout: HeaderOnly },
  { path: config.search, component: Search, layout: null },
];
// private routes
export const privateRoutes = [];
