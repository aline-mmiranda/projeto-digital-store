import Gallery from "../components/Gallery";
import { imagesHome } from "../utils/products";

const HomePage = () => {
  return (
    <>
      <Gallery images={imagesHome} width={1440} height={681} />
    </>
  );
};

export default HomePage;
