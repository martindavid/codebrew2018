export const routes = {
  login: '/login',
  register: '/register',
  getStarted: '/get-started',
  getStartedDemographic: '/get-started/demographic',
  getStartedEducationLevel: '/get-started/education',
  getStartedSubjects: '/get-started/subjects',
  home: '/',
  yp: '/yp',
  pro: '/pro',
};

export function routeForGetStartedYP(step) {
  return `/get-started/yp/${step}`;
}
