import MainPage from './pages/Main/MainPage';
import LoginPage from './pages/Login/LoginPage';
import CreatePost from './modules/CreatePost/CreatePost';
import FullPost from './components/FullPost/FullPost';
import Registration from './modules/Registration/Registration';

export const publicRoutes = [
  {
    path: process.env.REACT_APP_MAIN_ROUTE,
    element: MainPage,
  },
  {
    path: process.env.REACT_APP_FULL_POST_ROUTE,
    element: FullPost,
  },
  {
    path: process.env.REACT_APP_LOGIN_ROUTE,
    element: LoginPage,
  },
  {
    path: process.env.REACT_APP_REGISTER_ROUTE,
    element: Registration,
  },
];

export const privateRoutes = [
  {
    path: process.env.REACT_APP_CREATE_POST_ROUTE,
    element: CreatePost,
  },
];
