import React, { useEffect } from 'react';
import { GlobalStyleComponent } from './style/styled/globalStyle';
import { ErrorBoundary } from './components/errorBoundary/errorBoundary';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './routes/rootRouter';

export const App = () => {
  return (
    <>
      <GlobalStyleComponent />
      <ErrorBoundary>
        <RouterProvider router={rootRouter} />
      </ErrorBoundary>
    </>
  );
};
