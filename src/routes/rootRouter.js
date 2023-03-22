import React from 'react';
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from 'react-router-dom';
import { Layout } from '../pages/layout/layout';
import { WorldMap } from '../pages/map/worldMap';
import { Character } from '../pages/character/character';
import { Fight } from '../pages/fight/fight';
import { Private } from './privateRoutes';
import { CharacterCreator } from '../components/characterCreator/characterCreator';

export const rootRouter = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={
          <Private>
            <Character />
          </Private>
        }
      />
      <Route path="fight" element={<Fight />} />
      <Route path="map" element={<WorldMap />} />
      <Route path="create" element={<CharacterCreator />}></Route>
      <Route path="*" element={<div>Error</div>} />
    </Route>
  )
);
