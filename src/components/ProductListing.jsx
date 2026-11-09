import ProductCard from "./ProductCard";

const ProductListing = ({ products }) => {
  return (
    <>
      <div className="px-5">
        <ul className="grid grid-cols-2 gap-x-2.25 gap-y-10 ">
          {products.map((product) => (
            <li key={product.id}>
              <ProductCard
                image={product.image}
                name={product.name}
                price={product.price}
                priceDiscount={product.priceDiscount}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductListing;
