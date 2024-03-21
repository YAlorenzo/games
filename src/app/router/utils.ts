export const ROUTES = {
  main: "/",
  auth: {
    login: "auth/login",
    register: "auth/register",
  },
  games: {
    roulette: "games/roulette",
    slots: "games/slots",
    hummer: "games/hummer",
  },
};

export const generatUrl = (url: string, params?: any) => {
  return url;
};
