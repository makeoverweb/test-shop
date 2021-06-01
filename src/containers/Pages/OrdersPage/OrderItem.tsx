import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { useState } from "react";
import { TOrderRes } from "store/shop/entities";

interface IOrderItem {
  data: TOrderRes;
}

const OrderItem = ({ data }: IOrderItem) => {
  const [isModal, setModal] = useState(false);
  const onCloseModal = () => setModal(false);

  return (
    <div className="order__item" key={data.id} onClick={() => setModal(true)}>
      <span className="orders__score">Заказ №: {data.id}</span>
      <span className="orders__user-name"> {data.userName}</span>
      <span className="orders__user-phone"> {data.userPhone}</span>

      <Modal
        visible={isModal}
        title={
          <div>
            <span className="modal__title">Заказ № {data.id}</span>
          </div>
        }
        content={
          <div className="modal__content-wrapper orders__modal-wrapper">
            <div className="modal__content-left orders__modal-left">
              <div className="orders__modal-name">Имя: {data.userName}</div>
              <div className="orders__modal-phone">
                Телефон: {data.userPhone}
              </div>
            </div>
            <div className="modal__content-right">
              {/* <img src={data.image} alt="pic" />
              <p>{data.description}</p> */}
              <div className="orders__modal-list">Продукты:</div>
              {data.products.map((el) => (
                <div key={el._id} className="orders__modal-item">
                  {el.title} <span>{el.price}</span>
                </div>
              ))}
            </div>
          </div>
        }
        footer={
          <>
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

export default OrderItem;
