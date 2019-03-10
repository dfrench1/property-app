import Dashboard from '../client/pages/dashboard'
import Property from '../client/pages/property';
import Register from '../client/pages/register';
import Login from '../client/pages/login';

const routes =  [
  {
    path: '/',
    exact: true,
    component: Dashboard,
  },
  {
    path: '/property/:title',
    component: Property,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },

]

export default routes