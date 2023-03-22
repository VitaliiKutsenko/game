import React, { lazy, Suspense } from 'react';
import { Loader } from '../components/loader/loader';

const MainPage = lazy(() => import('./../pages/mainPage/mainPage'));

export const LazyMainPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <MainPage />
    </Suspense>
  );
};
