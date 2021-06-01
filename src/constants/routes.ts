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
  HOME: {
    ROUTE: `${ROUTE_INIT}/`,
    NAME: "home",
  },
  PRODUCTS: {
    ROUTE: `${ROUTE_INIT}/products`,
    NAME: "products",
  },
  ORDERS: {
    ROUTE: `${ROUTE_INIT}/orders`,
    NAME: "orders",
  },
  CART: {
    ROUTE: `${ROUTE_INIT}/cart`,
    NAME: "cart",
  },
};

export { ROUTE_INIT, ROUTES };
