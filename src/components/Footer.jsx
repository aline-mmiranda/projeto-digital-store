import FooterInfo from "./FooterInfo";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import informations from "../utils/informations";
import categories from "../utils/categories";
import contact from "../utils/contact";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-gray text-white px-5 pt-12.5 pb-11.5">
        <Logo className="w-42.5 mb-5" color="var(--color-white)" />
        <p className="font-medium text-sm tracking-[0.25px] leading-5.5 mb-7.5 pr-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <SocialMedia />
        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
          <FooterInfo title="Informação" informations={informations} />
          <FooterInfo title="Categorias" informations={categories} />
          <div className="col-span-2">
            <FooterInfo title="Contato" informations={contact} />
          </div>
        </div>
        <hr className="border border-white opacity-30 w-[95%] mx-auto mt-10 mb-5.75" />
        <p className="flex justify-center items-center text-[13px] tracking-[0%] leading-6">
          @ 2026 Digital Store
        </p>
      </footer>
    </>
  );
};

export default Footer;
