import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../store/shop/actions";
import { TProduct } from "../../../store/shop/entities";
import { getProductsData } from "../../../store/shop/selectors";
import Product from "./Product";
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
        <Product data={item} key={item._id} />
      ))}
    </div>
  );
}

export { ProductsPage };
