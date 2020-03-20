import Error404 from './components/Error404';
import Homepage from './components/Homepage';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    component: Error404,
  },
];

export default routes;
