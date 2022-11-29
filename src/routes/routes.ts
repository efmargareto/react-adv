import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element 

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy( () => import(/* webpackChunkNmae: LazyLayout*/ '../01-lazyload/layout/LazyLayout'));
const Lazy1 = lazy( () => import(/* webpackChunkNmae: lazyPage1*/ '../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy( () => import(/* webpackChunkNmae: lazyPage2*/ '../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy( () => import(/* webpackChunkNmae: lazyPage3*/ '../01-lazyload/pages/LazyPage2'));

export const routes:Route[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout'
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy'
  }
]

