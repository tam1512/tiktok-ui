// file này tạo ra 2 mảng publicRoutes(không cần đăng nhập vẫn xem được) và privateRoutes(Phải đăng nhập mới xem được hoặc bị điều hướng sang login)

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';
// publicRotes
const publicRotes = [
  { path: '/', component: Home },
  { path: '/following', component: Following, layout: null },
  { path: '/:nickname', component: Profile, layout: null },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// privateRotes
const privateRotes = [];

export { publicRotes, privateRotes };
