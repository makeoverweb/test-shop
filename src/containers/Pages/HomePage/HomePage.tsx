import { Button } from "components/Button";
import { ROUTES } from "constants/routes";
import { Link } from "react-router-dom";
import "./styles.css";

const HomePage = () => {
  return (
    <div className="home">
      <Button>
        <Link to={ROUTES.PRODUCTS.ROUTE}>Начать покупки</Link>
      </Button>
    </div>
  );
};

export { HomePage };
