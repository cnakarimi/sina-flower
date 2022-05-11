import SuggestedList from "./suggestedList";

function SuggestedProducts(props) {
  const { items } = props;

  const suggestedProducts = items.map((product) => (
    <SuggestedList
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      product={product}
    />
  ));

  return (
    <ul className="mt-2 h-1/2 grid sm:grid-cols-5 grid-cols-3  mx-auto">
      {suggestedProducts}
    </ul>
  );
}
export default SuggestedProducts;
