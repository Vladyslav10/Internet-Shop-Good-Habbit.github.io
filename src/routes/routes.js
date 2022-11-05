import About from '../pages/about/About';
import Main from '../pages/main/Main';
import News from '../pages/news/News';
import Product from '../pages/product/Product';

import {
  ABOUT_ROUTE,
  MAIN_ROUTE,
  NEWS_ROUTE,
  PRODUCT_ROUTE,
} from '../utils/consts.js';

export const routes = [
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: ABOUT_ROUTE,
    Component: About,
  },
  {
    path: NEWS_ROUTE,
    Component: News,
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: Product,
  },
];
