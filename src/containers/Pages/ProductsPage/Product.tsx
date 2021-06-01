import { Button } from "components/Button";
import { useState } from "react";
import { Modal } from "components/Modal";
import { addToCart, deleteFromCart } from "store/shop/actions";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "store/shop/selectors";

export interface IProduct {
  data: {
    _id: string;
    price: string;
    image: string;
    title: string;
    description: string;
    available: number;
  };
}

const Product = ({ data }: IProduct) => {
  const [isModal, setModal] = useState(false);
  const onCloseModal = () => setModal(false);
  const dispatch = useDispatch();
  const cartData = useSelector(getCartData);

  return (
    <div className="products__item product">
      <div className="product__inner" onClick={() => setModal(true)}>
        <img src={data.image} alt="pic" className="product__img" />
        <span className="product__name">{data.title}</span>
      </div>
      <span className="product__score">Доступно: {data.available}</span>
      <Button className="button" onClick={() => dispatch(addToCart(data))}>
        Добавить
      </Button>
      <Button
        className="button button--delete"
        onClick={() => dispatch(deleteFromCart(data._id))}
        disabled={Boolean(!cartData.find((el) => el._id === data._id))}
      >
        Удалить
      </Button>
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
                className="button"
                onClick={() => dispatch(addToCart(data))}
              >
                Добавить
              </Button>
              <Button
                className="button button--delete"
                onClick={() => dispatch(deleteFromCart(data._id))}
                disabled={Boolean(!cartData.find((el) => el._id === data._id))}
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

export default Product;
