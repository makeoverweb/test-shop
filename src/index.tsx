import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Preloader } from "./components/Preloader";

const LazyRouter = lazy(() =>
  import("./containers/Router").then(({ RouterContainer }) => ({
    default: RouterContainer,
  }))
);

const container = document.getElementById("root");
ReactDOM.render(
  <Suspense fallback={<Preloader />}>
    <LazyRouter />
  </Suspense>,
  container
);
