import { Link } from "react-router";

const Highlight = () => {
  return (
    <>
      <div className="flex flex-col items-center text-center px-5 mt-2.5 mb-10">
        <h2 className="font-bold text-[14px] leading-5.5 tracking-[0.75px] text-primary mb-2.5">
          Melhores ofertas personalizadas
        </h2>
        <h1 className="font-extrabold text-[40px] leading-12.5 tracking-[1px] text-dark-gray mb-5">
          Queima de estoque 🔥
        </h1>
        <p className="font-medium text-[14px] leading-5.5 tracking-[0.25px] text-dark-gray-2 mb-10">
          Consequat culpa exercitation mollit nisi excepteur do do tempor
          laboris eiusmod irure consectetur.
        </p>
        <button className="font-bold text-[16px] leading-6 tracking-[0.75px] text-light-gray-3 bg-primary rounded-lg w-full h-12">
          <Link>Ver Ofertas</Link>
        </button>
      </div>
    </>
  );
};

export default Highlight;
