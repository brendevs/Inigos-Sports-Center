export const ROUTES = {
  HOME: "/",
  COURTS: "/court",
  BOOKINGS: "/booking",
  OPEN_PLAY: "/openPlay",

  // dynamic
  COURT_DETAILS: (id: number) => `/court/${id}`,
};
