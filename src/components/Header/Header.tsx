import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { getCartData } from "store/shop/selectors";
import { ROUTES } from "../../constants";
import logo from "../../static/images/logo.png";
import "./styles.css";

const Header = () => {
  const cartData = useSelector(getCartData);

  return (
    <div className="header">
      <div className="header__inner">
        <Link to={ROUTES.HOME.ROUTE}>
          <img src={logo} alt="logo" className="header__logo" />
        </Link>
        <div className="header__menu">
          <NavLink
            to={ROUTES.PRODUCTS.ROUTE}
            activeClassName="menu--active"
            className="menu__products"
          >
            Товары
          </NavLink>
          <NavLink
            to={ROUTES.ORDERS.ROUTE}
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
            {cartData.length ? (
              <span className="menu__cart--count">{cartData.length}</span>
            ) : null}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { Header };
