import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
import { Layout } from '../pages/layout/layout';
import { Private } from './privateRoutes';
import { CharacterCreator } from '../components/characterCreator/characterCreator';
import { Skills } from '@src/pages/skills/skills';
import { LazyFight } from '@src/routes/lazyRoutes';

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
