import { ReactElement } from "react";
import { Header } from "../../components/Header";
import "./styles.css";

interface IApp {
  children: ReactElement;
}

const App = ({ children }: IApp): ReactElement => {
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
