import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { App } from "../../App";
import { ROUTES } from "../../constants/routes";
import { observer } from "mobx-react-lite";
import { NoMatch } from "../../components/NoMatch";
import { Error } from "../../components/Error";
import { ProductsPage } from "../Pages/ProductsPage";
import { OrderPage } from "../Pages/OrderPage/OrderPage";
import { ErrorBoundary } from "react-error-boundary";

const RouterContainer = observer(() => {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <BrowserRouter>
        {/* <App> */}
        <Switch>
          <Route path={ROUTES.PRODUCTS.ROUTE}>
            {/* <Switch> */}
            <Route
              path={ROUTES.PRODUCTS.ROUTE}
              exact
              component={ProductsPage}
            />
            {/* </Switch> */}
          </Route>
          <Route path={ROUTES.PRODUCTS.ROUTE}>
            <Switch>
              <Route path={ROUTES.ORDER.ROUTE} exact component={OrderPage} />
            </Switch>
          </Route>

          <Route path={"/nomatch"} component={NoMatch} />
          <Route component={NoMatch} />
        </Switch>
        {/* </App> */}
      </BrowserRouter>
    </ErrorBoundary>
  );
});

export { RouterContainer };
