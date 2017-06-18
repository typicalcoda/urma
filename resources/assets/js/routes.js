import DashboardComponent from './components/DashboardComponent'
import CollectionsComponent from './components/CollectionsComponent'

const routes = [
  { path: '/', component: DashboardComponent  },
  { path: '/search' },
  { path: '/collections', component: CollectionsComponent },
  { path: '/records' },
  { path: '/users' },
  { path: '/plugins' },
  { path: '/settings' },
  { path: '/support' },

]
export default routes;