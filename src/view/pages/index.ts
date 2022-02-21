// Core
import { lazy } from 'react';

// Pages
export const Main = lazy(() => import(/* webpackChunkName: "Main" */ './Main'));
export const Js = lazy(() => import(/* webpackChunkName: "Js" */ './Js'));
