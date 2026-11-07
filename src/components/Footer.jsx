import Logo from "./Logo";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark-gray text-white px-5 py-12.5">
        <Logo className="w-42.5 mb-5" color="var(--color-white)" />
        <p className="font-medium text-sm tracking-[0.25px] leading-5.5 mb-7.5 pr-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
        <SocialMedia />
      </footer>
    </>
  );
};

export default Footer;
