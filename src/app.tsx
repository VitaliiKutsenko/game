import React from 'react';
import { GlobalStyleComponent } from '@src/style/styled/globalStyle';
import { ErrorBoundary } from '@src/services/errorBoundary/errorBoundary';
import { RouterProvider } from 'react-router-dom';
import { rootRouter } from '@src/routes/rootRouter';

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
