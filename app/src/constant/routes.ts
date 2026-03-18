export const ROUTES = {
  HOME: "/",
  COURTS: "/court",
  BOOKINGS: "/booking",
  OPEN_PLAY: "/openPlay",

  COURT_DETAILS: (id: number) => `/court/${id}`,
  TIME: (id: number) => `/court/${id}/time`,
  AVAILABLE: (id: number) => `/court/${id}/time/available`,
};
