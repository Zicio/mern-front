import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const isAuth = false;
  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={process.env.REACT_APP_MAIN_ROUTE!} />}
      />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element: Element }) => (
        <Route key={path} path={path} element={<Element />} />
      ))}
      <Route
        path="*"
        element={<Navigate to={process.env.REACT_APP_LOGIN_ROUTE!} />}
      />
    </Routes>
  );
};

export default AppRouter;
