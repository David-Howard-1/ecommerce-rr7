import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  layout('routes/layout-main.tsx', [
    index('routes/site-home.tsx'),
    route('/:q', 'routes/products.tsx'),
    route('/products/:id', 'routes/product-detail.tsx'),
    route('/support', 'routes/support.tsx'),
  ]),
] satisfies RouteConfig;
