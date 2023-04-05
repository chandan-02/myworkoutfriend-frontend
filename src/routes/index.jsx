//secured routes
import Home from '../pages/Home';
import Report from '../pages/Report';
import ManageWorkout from '../pages/WorkoutManagement';
import ManageCategory from '../pages/ManageCategory';
import PlanWorkout from '../pages/PlanWorkout';

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
  ,
  {
    path: '/plan-workout',
    component: PlanWorkout,
  },
]

export default routes