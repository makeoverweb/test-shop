import { RouterContainer } from "containers/Router";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import createSagaMiddleware from "redux-saga";
import "./static/styles/global.css";
import { reducer } from "./store/reducer";
import rootSaga from "./store/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

const container = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <RouterContainer />
  </Provider>,
  container
);
