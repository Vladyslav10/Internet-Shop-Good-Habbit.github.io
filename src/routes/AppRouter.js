import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((rout) => (
        <Route path={rout.path} element={<rout.Component />} key={rout.path} />
      ))}
      <Route path='*' element={<Main />} />
    </Routes>
  );
};

export default AppRouter;
