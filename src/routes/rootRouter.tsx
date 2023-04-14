import React from 'react';
import {
  // createHashRouter,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';

import { Skills } from '@src/pages/skills/skills';
import { LazyFight } from '@src/routes/lazyRoutes';
import { Layout } from '@src/pages/layout/layout';
import { Private } from '@src/routes/privateRoutes';
import { CharacterCreator } from '@src/components/characterCreator/characterCreator';

export const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Private>
            <Skills />
          </Private>
        }
      />
      <Route
        path="fight"
        element={
          <Private>
            <LazyFight />
          </Private>
        }
      />
      <Route path="auth" element={<CharacterCreator />} />

      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
