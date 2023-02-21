//secured routes
import Home from '../pages/Home';
import Report from '../pages/Report';
import ManageWorkout from '../pages/WorkoutManagement';
import ManageCategory from '../pages/ManageCategory';
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
  {
    path: '/manage-category',
    component: ManageCategory,
  },
]

export default routes