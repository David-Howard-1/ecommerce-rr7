import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout-main.tsx', [
    index('routes/site-home.tsx'),
    route('products', 'routes/products.tsx'),
  ]),
] satisfies RouteConfig;
