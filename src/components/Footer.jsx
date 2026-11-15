import FooterInfo from "./FooterInfo";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import informations from "../utils/informations";
import categories from "../utils/categories";
import contact from "../utils/contact";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-gray text-white px-5 pt-12.5 pb-11.5 lg:px-26 lg:pt-18 lg:pb-5.5">
        <div className="lg:grid lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-3">
            <Logo
              className="w-42.5 xl:w-63.25 h-auto mb-5 lg:mb-8.75"
              color="var(--color-white)"
            />
            <p className="font-medium text-sm tracking-[0.25px] leading-5.5 mb-7.5 pr-7 lg:font-normal lg:text-[16px] lg:tracking-[0%] lg:leading-6.5 lg:mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <SocialMedia />
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:contents">
            <div className="lg:col-span-2 lg:col-start-6">
              <FooterInfo title="Informação" informations={informations} />
            </div>
            <div className="lg:col-span-1 lg:col-start-8">
              <FooterInfo title="Categorias" informations={categories} />
            </div>
            <div className="col-span-2 lg:col-start-11">
              <FooterInfo title="Contato" informations={contact} />
            </div>
          </div>
        </div>
        <hr className="border border-white opacity-30 w-full mx-auto mt-10 mb-5.75" />
        <p className="flex justify-center items-center text-[13px] tracking-[0%] leading-6">
          @ 2026 Digital Store
        </p>
      </footer>
    </>
  );
};

export default Footer;
