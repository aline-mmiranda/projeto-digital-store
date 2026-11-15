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
      <main className="bg-background xl:relative">
        <Gallery images={imagesHome} width={1440} height={681}/>
        <Highlight className="xl:absolute xl:top-31 xl:left-25" />
        <div className="flex flex-col gap-20 mb-10 xl:gap-25 xl:mt-9.5">
          <Section
            title="Coleções em destaque"
            titleAlign="center"
            titleAlignResp="left"
          >
            <div className="grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
              <img
                src="collection-1.png"
                alt="Destaque 1"
                className="w-full h-auto rounded-sm"
              />
              <img
                src="collection-2.png"
                alt="Destaque 2"
                className="w-full h-auto rounded-sm"
              />
              <img
                src="collection-3.png"
                alt="Destaque 3"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </Section>
          <Section title="Categorias" titleAlign="center">
            <div className="flex gap-4.75 flex-wrap justify-center lg:gap-12">
              {categories.map((category) => (
                <div className="flex flex-col items-center gap-2.75 lg:gap-3">
                  <div className="bg-white rounded-full w-23 h-23 flex justify-center items-center shadow-[0_3.54px_22.12px_0_rgba(0,0,0,0.05)] lg:w-26 lg:h-26">
                    <img
                      src={category.src}
                      alt={category.text}
                      className="w-14.25 h-14.25 lg:w-16 lg:h-16"
                    />
                  </div>
                  <h3 className="font-bold text-[12px] leading-5.5 tracking-[1px] text-dark-gray-2 lg:text-[14px] lg:tracking-[0.75px]">
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
