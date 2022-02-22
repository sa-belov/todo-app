import React, { Suspense } from 'react';
import Header from './Header/Header';
import appRoutes from '../../routes/appRoutes';
import { Route, Routes } from 'react-router-dom';

function App() {
  const renderRoutes = () => {
    return appRoutes.map(({ id, path, component: Component }) => (
      <Route path={path} key={id} element={<Component />} />
    ));
  };

  return (
    <div>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>{renderRoutes()}</Routes>
      </Suspense>
    </div>
  );
}

export default App;
