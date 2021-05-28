const ROUTE_INIT = "";

interface StaticRoute {
  ROUTE: string;
}

interface Route extends StaticRoute {
  PATH: string;
  NAME?: any;
}

interface Routes {
  [key: string]: Route;
}

const ROUTES: Routes = {
  ROOT: {
    ROUTE: `${ROUTE_INIT}/`,
    PATH: `${ROUTE_INIT}/`,
  },
  HOME: {
    ROUTE: `${ROUTE_INIT}/home`,
    PATH: `${ROUTE_INIT}/home`,
    NAME: "home",
  },
  PRODUCTS: {
    ROUTE: `${ROUTE_INIT}/products`,
    PATH: `${ROUTE_INIT}/products`,
    NAME: "products",
  },
  ORDER: {
    ROUTE: `${ROUTE_INIT}/order`,
    PATH: `${ROUTE_INIT}/order`,
    NAME: "order",
  },
};

export { ROUTE_INIT, ROUTES };
