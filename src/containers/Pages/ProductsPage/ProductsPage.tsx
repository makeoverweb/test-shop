import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../../../store/shop/actions";
import { TProduct } from "../../../store/shop/entities";
import { getProductsData } from "../../../store/shop/selectors";
import Product from "./Product";
import "./styles.css";

interface IProductsPage {}

function ProductsPage({}: IProductsPage): ReactElement {
  const productsData = useSelector(getProductsData);

  return (
    <div className="products__list">
      {productsData.map((item: TProduct) => (
        <Product data={item} key={item.id} />
      ))}
    </div>
  );
}

export { ProductsPage };
