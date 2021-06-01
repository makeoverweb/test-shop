import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsAction } from "store/shop/actions";
import { Header } from "../../components/Header";
import "./styles.css";

interface IApp {
  children: ReactElement;
}

const App = ({ children }: IApp): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction.request("products"));
  }, [dispatch]);
  return (
    <div className="app">
      <div className="container">
        <Header />
        {children}
      </div>
    </div>
  );
};

export { App };
