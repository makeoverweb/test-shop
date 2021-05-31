import { Button } from "components/Button";
import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { TProduct } from "store/shop/entities";
import { getOrdersData } from "store/shop/selectors";
import "./styles.css";

interface IOrdersPage {}

function OrdersPage({}: IOrdersPage): ReactElement {
  const ordersData = useSelector(getOrdersData);

  return (
    <div className="orders__wrapper">
      <div className="orders__list">
        {ordersData.length > 0 ? (
          ordersData.map((item: TProduct) => (
            <div key={item._id} className="Orders__item Orders">
              <span className="orders__name">{item.title}</span>
              <span className="orders__score">доступно: {5}</span>
              <Button className="button--delete">Удалить</Button>
            </div>
          ))
        ) : (
          <div>нет заказов</div>
        )}
      </div>
      <div className="orders__total">
        total:
        <span className="orders__price">123</span>
      </div>
    </div>
  );
}

export { OrdersPage };
