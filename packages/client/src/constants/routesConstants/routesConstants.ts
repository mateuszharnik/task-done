export const ROUTES = {
  PATH: '/',

  DASHBOARD: {
    ROOT: 'dashboard',
    PATH: '/dashboard',

    BOARDS: {
      ROOT: 'boards',
      PATH: '/dashboard/boards',
    },

    PROFILE: {
      ROOT: 'profile',
      PATH: '/dashboard/profile',
    },

    SUBSCRIPTION: {
      ROOT: 'subscription',
      PATH: '/dashboard/subscription',
    },
  },

  BOARD: {
    ROOT: 'board/:id',
    PATH: '/board/:id',
  },

  SIGN_IN: {
    ROOT: 'sign-in',
    PATH: '/sign-in',
  },

  SIGN_UP: {
    ROOT: 'sign-up',
    PATH: '/sign-up',
  },

  NOT_FOUND: {
    PATH: '/:pathMatch(.*)*',
  },
};
