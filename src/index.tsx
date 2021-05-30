import { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Preloader } from "./components/Preloader";
import "./static/styles/global.css";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./store/reducer";
import rootSaga from "./store/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const LazyRouter = lazy(() =>
  import("./containers/Router").then(({ RouterContainer }) => ({
    default: RouterContainer,
  }))
);

const container = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Preloader />}>
      <LazyRouter />
    </Suspense>
  </Provider>,
  container
);
