// Layouts
import { HeaderOnly } from '~/Component/Layout';

import HomePage from '~/Page/Home';
import Following from '~/Page/Following';
import Profile from '~/Page/Profile';
import Upload from '~/Page/Upload';
import Search from '~/Page/Search';
// public routes
export const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];
// private routes
export const privateRoutes = [];
