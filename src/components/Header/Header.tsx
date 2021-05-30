import { NavLink, Link } from "react-router-dom";
import { ROUTES } from "../../constants";
import logo from "../../static/images/logo.png";
import "./styles.css";

const Header = () => (
  <div className="header">
    <div className="header__inner">
      <Link to={ROUTES.ROOT.ROUTE}>
        <img src={logo} alt="logo" className="header__logo" />
      </Link>
      <div className="header__menu">
        <NavLink
          to={ROUTES.ROOT.ROUTE}
          activeClassName="menu--active"
          className="menu__products"
        >
          Продукты
        </NavLink>
        <NavLink
          to={ROUTES.ORDER.ROUTE}
          activeClassName="menu--active"
          className="menu__order"
        >
          Заказы
        </NavLink>
        <NavLink
          to={ROUTES.CART.ROUTE}
          activeClassName="menu--active"
          className="menu__cart"
        >
          Корзина
        </NavLink>
      </div>
    </div>
  </div>
);

export { Header };
