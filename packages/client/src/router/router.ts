import { ROUTES } from '@constants/routesConstants';
import DashboardView from '@views/DashboardView';

const BoardView = () => import('@views/DashboardView/views/BoardView');
const BoardsView = () => import('@views/DashboardView/views/BoardsView');
const ProfileView = () => import('@views/DashboardView/views/ProfileView');
const SubscriptionView = () => import('@views/DashboardView/views/SubscriptionView');
const SignInView = () => import('@views/auth/SignInView');
const SignUpView = () => import('@views/auth/SignUpView');
const NotFoundView = () => import('@views/NotFoundView');

const routes = [
  {
    path: ROUTES.PATH,
    redirect: ROUTES.DASHBOARD.PATH,
  },
  {
    path: ROUTES.DASHBOARD.PATH,
    component: DashboardView,
    children: [
      {
        path: ROUTES.DASHBOARD.BOARDS.ROOT,
        component: BoardsView,
      },
      {
        path: ROUTES.DASHBOARD.PROFILE.ROOT,
        component: ProfileView,
      },
      {
        path: ROUTES.DASHBOARD.SUBSCRIPTION.ROOT,
        component: SubscriptionView,
      },
      {
        path: ROUTES.BOARD.PATH,
        component: BoardView,
      },
      {
        path: '',
        redirect: ROUTES.DASHBOARD.BOARDS.PATH,
      },
    ],
  },
  {
    path: ROUTES.SIGN_UP.PATH,
    component: SignUpView,
  },
  {
    path: ROUTES.SIGN_IN.PATH,
    component: SignInView,
  },
  {
    path: ROUTES.NOT_FOUND.PATH,
    component: NotFoundView,
  },
];

export default routes;
