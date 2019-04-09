import Dashboard from '../client/pages/dashboard'
import Property from '../client/pages/property';
import Register from '../client/pages/register';
import Login from '../client/pages/login';
import Viewings from '../client/pages/viewings'
import Bookings from '../client/pages/bookings'
import Admin from '../client/pages/admin'

const routes = [
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
  {
    path: '/viewings',
    component: Viewings,
  },
  {
    path: '/bookings',
    component: Bookings,
  },
  {
    path: '/admin',
    component: Admin,
  },

]

export default routes