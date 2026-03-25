export const ROUTES = {
  HOME: "/",
  COURTS: "/court",
  BOOKINGS: "/booking",
  OPEN_PLAY: "/openPlay",

  SPORTS_DETAILS: (id: number) => `/court/${id}`,
  SCHEDULE: (id: number) => `/court/${id}/`,
  AVAILABLE: (id: number) => `/court/${id}/available`,
};
