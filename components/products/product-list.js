import { useSelector } from "react-redux";
import ProductItem from "./product-item";

function ProductsList(props) {
  const { items } = props;

  return (
    <ul className="grid grid-cols-4 sm:grid-cols-5    lg:grid-cols-6 container mx-auto pb-6 xl:px-2 2xl:py-4 ">
      {items.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          product={product}
        />
      ))}
    </ul>
  );
}

export default ProductsList;
