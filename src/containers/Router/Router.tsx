import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Error } from "../../components/Error";
import { NoMatch } from "../../components/NoMatch";
import { ROUTES } from "../../constants/routes";
import { App } from "../App";
import { CartPage } from "../Pages/CartPage/CartPage";
import { OrdersPage } from "../Pages/OrdersPage/OrdersPage";
import { ProductsPage } from "../Pages/ProductsPage";
import { HomePage } from "../Pages/HomePage";

const RouterContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        <App>
          <Switch>
            <Route path={ROUTES.HOME.ROUTE} exact component={HomePage} />
            <Route
              path={ROUTES.PRODUCTS.ROUTE}
              exact
              component={ProductsPage}
            />
            <Route path={ROUTES.ORDERS.ROUTE} exact component={OrdersPage} />
            <Route path={ROUTES.CART.ROUTE} exact component={CartPage} />

            <Route path={"/nomatch"} component={NoMatch} />
            <Route component={NoMatch} />
          </Switch>
        </App>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export { RouterContainer };
