export const routes = {
  login: '/login',
  register: '/register',
  getStarted: '/get-started',
  getStartedDemographic: '/get-started/demographic',
  getStartedYP: '/get-started/yp/:step',
  getStartedPro: '/get-started/pro',
  home: '/',
  yp: '/yp',
};

export function routeForGetStartedYP(step) {
  return `/get-started/yp/${step}`;
}
