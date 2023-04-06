import React from 'react';
import { GlobalStyleComponent } from './style/styled/globalStyle';
import { ErrorBoundary } from './services/errorBoundary/errorBoundary';
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
