import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { TProduct } from "store/shop/entities";
import { getCartData } from "store/shop/selectors";
import CartItem from "./CartItem";
import "./styles.css";

interface ICartPage {}

function CartPage({}: ICartPage): ReactElement {
  const cartData = useSelector(getCartData);

  return (
    <div className="cart__wrapper">
      <div className="cart__list">
        {cartData.length > 0 ? (
          cartData.map((item: TProduct) => <CartItem data={item} />)
        ) : (
          <div>корзина пуста</div>
        )}
      </div>
      <div className="cart__total">
        total:
        <span className="cart__price">123</span>
      </div>
    </div>
  );
}

export { CartPage };
