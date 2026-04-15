export const ROUTES = {
  LOGIN: "/login",
  HOME: "/home",
  PROFILE: "/profile",

  COURTS: "/court",
  BOOKINGS: "/booking",
  OPEN_PLAY: "/openPlay",

  // dynamic routes
  COURT_DETAILS: (id: number) => `/court/${id}`,
  COURT_SCHEDULE: (id: number) => `/court/${id}/schedule`,
  COURT_AVAILABLE: (id: number) => `/court/${id}/available`,
};
