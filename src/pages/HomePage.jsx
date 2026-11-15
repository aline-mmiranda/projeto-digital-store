import Gallery from "../components/Gallery";
import Section from "../components/Section";
import { imagesHome } from "../utils/products";

const HomePage = () => {
  return (
    <>
      <Gallery images={imagesHome} width={1440} height={681} />
      <Section
        title="Coleções em destaque"
        titleAlign="center"
        className="px-5 mt-10.5 mb-20"
        classNameChildren="flex flex-col gap-2.5 w-84.5"
      >
        <img
          src="collection-1.png"
          alt="Celeção 1"
          style={{ borderRadius: "4px" }}
        />
        <img
          src="collection-2.png"
          alt="Celeção 2"
          style={{ borderRadius: "4px" }}
        />
        <img
          src="collection-3.png"
          alt="Celeção 3"
          style={{ borderRadius: "4px" }}
        />
      </Section>
    </>
  );
};

export default HomePage;
