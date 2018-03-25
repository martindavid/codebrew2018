export const routes = {
  login: '/login',
  register: '/register',
  getStarted: '/get-started',
  getStartedDemographic: '/get-started/demographic',
  getStartedEducationLevel: '/get-started/education',
  getStartedSubjects: '/get-started/subjects',
  getStartedMatch: '/get-started/match',
  home: '/',
  yp: '/yp',
  ypHome: '/yp/home',
  pro: '/pro',
};

export function routeForGetStartedYP(step) {
  return `/get-started/yp/${step}`;
}
