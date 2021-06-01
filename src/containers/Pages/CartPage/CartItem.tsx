import { Button } from "components/Button";
import { useState } from "react";
import { Modal } from "components/Modal";
import { addToCart, deleteFromCart } from "store/shop/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "store/shop/selectors";

interface ICartItem {
  data: {
    id: string;
    price: string;
    image: string;
    title: string;
    description: string;
    available: number;
    count?: number;
  };
}

const CartItem = ({ data }: ICartItem) => {
  const [isModal, setModal] = useState(false);
  const onCloseModal = () => setModal(false);
  const dispatch = useDispatch();
  const cartData = useSelector(getCartData);

  return (
    <div className="cart__item">
      <div className="cart__inner" onClick={() => setModal(true)}>
        <img src={data.image} alt="pic" className="cart__img" />
        <span className="cart__name">{data.title}</span>
      </div>
      <Button
        className="button button--delete"
        onClick={() => dispatch(deleteFromCart(data.id))}
        disabled={Boolean(!cartData.find((el) => el.id === data.id))}
      >
        Удалить
      </Button>
      <span>X{data.count}</span>
      <Modal
        visible={isModal}
        title={
          <div>
            <span className="modal__title">{data.title}</span>
            <span className="modal__price">{data.price}</span>
          </div>
        }
        content={
          <div className="modal__content-wrapper">
            <div className="modal__content-left"></div>
            <div className="modal__content-right">
              <img src={data.image} alt="pic" />
              <p>{data.description}</p>
            </div>
          </div>
        }
        footer={
          <>
            <div className="modal__footer-inner">
              <Button
                className="button button--delete"
                onClick={() => {
                  dispatch(deleteFromCart(data.id));
                  onCloseModal();
                }}
              >
                Удалить
              </Button>
            </div>
            <Button onClick={onCloseModal} className="button button--default">
              Закрыть
            </Button>
          </>
        }
        onClose={onCloseModal}
      />
    </div>
  );
};

export default CartItem;
