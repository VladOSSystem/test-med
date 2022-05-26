import React from 'react';
import './assets/styles/main.scss';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import DashboardMain from './components/dashboard/DashboardMain';
import Page404 from './components/Page404';
import ProtectedRoute, { ProtectedRouteProps } from './ProtectedRoute';


const App: React.FC = () => {
  const {success} = useTypedSelector(state => state.auth);
  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: success,
    authenticationPath: '/',
  };
  return (
    <Routes>
      <Route path='/' element={<Login setAuth={success}/>}/>
      {/* <Route path='dashboard' element={<DashboardMain/>}/> */}
      <Route path='dashboard' element={<ProtectedRoute {...defaultProtectedRouteProps} outlet={<DashboardMain />} />} />

      {/* <ProtectedRoute isAuth={success} path='/dashboard' element={<DashboardMain/>}/> */}
      <Route path='*' element={<Page404/>} />
    </Routes>
  );
}

export default App;
