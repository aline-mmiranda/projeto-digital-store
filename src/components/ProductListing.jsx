import ProductCard from "./ProductCard";

const ProductListing = ({ products, limit }) => {
  const visibleProducts = products.slice(0, limit);

  return (
    <>
      <div>
        <ul className="grid grid-cols-[repeat(2,163px)] justify-center gap-x-2.25 gap-y-10 md:grid-cols-[repeat(3,163px)] lg:grid-cols-[repeat(4,163px)] lg:gap-x-6 xl:grid-cols-[repeat(4,292px)]">
          {visibleProducts.map((product) => (
            <li key={product.id}>
              <ProductCard
                image={product.image}
                category={product.category}
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
