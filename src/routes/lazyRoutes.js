import React, { lazy, Suspense } from 'react';

const Fight = lazy(() => import('../pages/fight/fight'));

export const LazyFight = () => {
  return (
    <Suspense fallback={<h1>Load</h1>}>
      <Fight />
    </Suspense>
  );
};
