import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../components/Button";
import { getCartAction } from "../../../store/cart/actions";
import { getCartData } from "../../../store/cart/selectors";
import { TProduct } from "../../../store/products/entities";
import "./styles.css";

interface ICartPage {}

function CartPage({}: ICartPage): ReactElement {
  const dispatch = useDispatch();
  const cartData = useSelector(getCartData);

  useEffect(() => {
    dispatch(getCartAction.request("cart"));
  }, [dispatch]);

  return (
    <div className="cart__wrapper">
      <div className="cart__list">
        {cartData.map((item: TProduct) => (
          <div key={item.id} className="cart__item cart">
            <span className="cart__name">{item.title}</span>
            <span className="cart__score">доступно: {5}</span>
            <Button className="button--delete">Удалить</Button>
          </div>
        ))}
      </div>
      <div className="cart__total">
        total:
        <span className="cart__price">123</span>
      </div>
    </div>
  );
}

export { CartPage };
