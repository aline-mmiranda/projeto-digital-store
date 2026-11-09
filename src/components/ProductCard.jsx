const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <>
      <div className="w-40.75 h-66 xl:w-73 xl:h-109.75">
        <img
          src={image}
          alt=""
          className="w-40.75 rounded-[2.23px] shadow-[3.35px_8.93px_16.75px_0px_rgba(105,98,98,0.05) xl:w-73 h-auto xl:rounded-sm xl:shadow-[6px_16px_30px_0px_rgba(105,98,98,0.05)"
        />
        <div>
          <h2 className="font-medium text-[14px] leading-5.5 tracking-[0.25px] xl:text-[24px] xl:leading-9.5 xl:tracking-[0.75px] xl:text-dark-gray-2">
            {name}
          </h2>
          <div>
            <span
              className={`text-[16px] leading-7 tracking-[0.75px] xl:text-[24px] xl:leading-9.5 ${priceDiscount ? "text-light-gray line-through" : "text-dark-gray"}`}
            >
              {price}
            </span>
            {priceDiscount && (
              <span className="font-bold text-[16px] leading-6  text-dark-gray xl:text-[24px] xl:leading-9.5 tracking-[0.75px]">
                {priceDiscount}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
