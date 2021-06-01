import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersAction } from "store/shop/actions";
import { TOrderRes } from "store/shop/entities";
import { getOrdersData } from "store/shop/selectors";
import OrderItem from "./OrderItem";
import "./styles.css";

interface IOrdersPage {
  data: {
    id: string;
    price: string;
    image: string;
    title: string;
    description: string;
    available: number;
  };
}

function OrdersPage({}: IOrdersPage): ReactElement {
  const ordersData = useSelector(getOrdersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAction.request("orders"));
  }, [dispatch]);

  return (
    <div className="orders__wrapper">
      <div className="orders__list">
        {ordersData.length > 0 ? (
          ordersData.map((item: TOrderRes) => <OrderItem data={item} />)
        ) : (
          <div>Нет заказов</div>
        )}
      </div>
    </div>
  );
}

export { OrdersPage };
