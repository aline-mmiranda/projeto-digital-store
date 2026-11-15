import Gallery from "../components/Gallery";
import Highlight from "../components/Highlight";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import SpecialOffer from "../components/SpecialOffer";
import categories from "../utils/categories";
import link from "../utils/link";
import { imagesHome, products } from "../utils/products";

const HomePage = () => {
  return (
    <>
      <main className="bg-background">
        <Gallery images={imagesHome} width={1440} height={681} />
        <Highlight />
        <div className="flex flex-col gap-20 mb-10">
          <Section title="Coleções em destaque" titleAlign="center">
            <div className="flex flex-col gap-2.5">
              <img
                src="collection-1.png"
                alt="Destaque 1"
                style={{ borderRadius: "4px" }}
              />
              <img
                src="collection-2.png"
                alt="Destaque 2"
                style={{ borderRadius: "4px" }}
              />
              <img
                src="collection-3.png"
                alt="Destaque 3"
                style={{ borderRadius: "4px" }}
              />
            </div>
          </Section>
          <Section title="Categorias" titleAlign="center">
            <div className="flex gap-4.75 flex-wrap justify-center">
              {categories.map((category) => (
                <div className="flex flex-col items-center gap-2.75">
                  <div className="bg-white rounded-full w-23 h-23 flex justify-center items-center shadow-[0_3.54px_22.12px_0_rgba(0,0,0,0.05)]">
                    <img
                      src={category.src}
                      alt={category.text}
                      className="w-14.25 h-14.25"
                    />
                  </div>
                  <h3 className="font-bold text-[12px] leading-5.5 tracking-[1px] text-dark-gray-2">
                    {category.text}
                  </h3>
                </div>
              ))}
            </div>
          </Section>
          <Section title="Produtos em alta" link={link}>
            <ProductListing products={products} limit={8} />
          </Section>
        </div>
        <SpecialOffer />
      </main>
    </>
  );
};

export default HomePage;
