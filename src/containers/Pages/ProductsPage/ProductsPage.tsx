import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../store/products/actions";
import { getProductsData } from "../../../store/products/selectors";
import { TProduct } from "../../../store/products/entities";
import { Button } from "../../../components/Button";
import "./styles.css";

interface IProductsPage {}

function ProductsPage({}: IProductsPage): ReactElement {
  const dispatch = useDispatch();
  const productsData = useSelector(getProductsData);

  useEffect(() => {
    dispatch(getProductsAction.request("products"));
  }, [dispatch]);

  return (
    <div className="products__list">
      {productsData.map((item: TProduct) => (
        <div key={item.id} className="products__item product">
          <span className="product__name">{item.title}</span>
          <span className="product__score">доступно: {5}</span>
          <Button className="button">Добавить</Button>
          <Button className="button--delete">Удалить</Button>
        </div>
      ))}
    </div>
  );
}

export { ProductsPage };
