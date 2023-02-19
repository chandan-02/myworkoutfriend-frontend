//secured routes
import Home from '../pages/Home';
import Report from '../pages/Report';
import ManageWorkout from '../pages/WorkoutManagement';
const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/report',
    component: Report,
  },
  {
    path: '/manage-workout',
    component: ManageWorkout,
  },
]

export default routes