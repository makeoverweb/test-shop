const ROUTE_INIT = "";

interface StaticRoute {
  ROUTE: string;
}

interface Route extends StaticRoute {
  NAME?: any;
}

interface Routes {
  [key: string]: Route;
}

const ROUTES: Routes = {
  ROOT: {
    ROUTE: `${ROUTE_INIT}/`,
    NAME: "home",
  },
  ORDER: {
    ROUTE: `${ROUTE_INIT}/order`,
    NAME: "order",
  },
  CART: {
    ROUTE: `${ROUTE_INIT}/cart`,
    NAME: "cart",
  },
};

export { ROUTE_INIT, ROUTES };
