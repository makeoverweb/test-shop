import { calculateTotal, transformSumToString } from "helpers";
import { ReactElement, useState } from "react";
import { useSelector } from "react-redux";
import { TProduct } from "store/shop/entities";
import { getCartData, getCartTotal } from "store/shop/selectors";
import CartItem from "./CartItem";
import "./styles.css";
import { useDispatch } from "react-redux";
import { Button } from "components/Button";
import { addOrderAction } from "store/shop/actions";

interface ICartPage {}

function CartPage({}: ICartPage): ReactElement {
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const cartData = useSelector(getCartData);
  const cartTotal = useSelector(getCartTotal);

  const dispatch = useDispatch();

  const changeUserName = (e) => {
    setUserName(e.target.value);
  };

  const submitData = (e) => {
    e.preventDefault();
    dispatch(
      addOrderAction.request("orders", {
        products: cartData,
        userName,
        userPhone,
      })
    );
    setUserName("");
    setUserPhone("");
  };

  const changeUserPhone = (e) => {
    setUserPhone(e.target.value);
  };

  const transformToUniqueItem = cartData.reduce(
    (acc, el) => ({
      ...acc,
      [el._id]: { ...el, count: (acc[el._id]?.count || 0) + 1 },
    }),
    {}
  );

  const transformUniqueToArray = Object.values(transformToUniqueItem);

  return (
    <div className="cart__wrapper">
      <div className="cart__list">
        {transformUniqueToArray.length > 0 ? (
          transformUniqueToArray.map((item: TProduct) => (
            <CartItem data={item} key={item._id} />
          ))
        ) : (
          <div>Корзина пуста ¯\_(ツ)_/¯</div>
        )}
      </div>
      <form className="form__main" onSubmit={submitData}>
        <div className="form__contacts">
          <div className="form__parent form__item">
            <label htmlFor="parent" className="form__label">
              Имя <span className="form__required">*</span>
            </label>
            <input
              type="text"
              name="parent"
              value={userName}
              id="parent"
              placeholder="Укажите как вас зовут?"
              className="form__input"
              onChange={changeUserName}
            />
          </div>

          <div className="form__phone form__item">
            <label htmlFor="phone" className="form__label">
              Номер телефона <span className="form__required">*</span>
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={userPhone}
              placeholder="(__) ___-__-__"
              className="form__input"
              onChange={changeUserPhone}
            />
          </div>
        </div>
        <Button
          className="form__submit button"
          type="submit"
          disabled={Boolean(
            !userName.length || !userPhone.length || !cartData.length
          )}
        >
          Создать заказ
        </Button>
        <div className="cart__total">
          Итого:
          <span className="cart__price">
            {transformSumToString(calculateTotal(cartTotal))}
          </span>
        </div>
      </form>
    </div>
  );
}

export { CartPage };
