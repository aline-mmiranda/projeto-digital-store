import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchField from "./SearchField";
import Icons from "./Icons";
import { useState } from "react";
import SideMenu from "./SideMenu";

const Header = () => {
  const [activePanel, setActivePanel] = useState(null);

  function handleSearchClick() {
    setActivePanel(activePanel === "search" ? null : "search");
  }

  function handleMenuClick() {
    setActivePanel(activePanel === "menu" ? null : "menu");
  }
  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white z-100 xl:px-25 xl:py-8.75 xl:flex xl:flex-col xl:gap-10">
        <div className="relative flex justify-between items-center p-5 xl:p-0">
          <Icons
            className="cursor-pointer xl:hidden"
            icon={Menu}
            color="var(--color-dark-gray)"
            strokeWidth={2}
            onClick={handleMenuClick}
          />
          <Logo
            className="w-34.5 xl:w-63.25 h-auto absolute left-1/2 -translate-x-1/2 xl:static xl:translate-x-0"
            color="var(--color-primary)"
          />
          <div className="hidden xl:flex flex-1 ml-6.75 mr-12">
            <SearchField />
          </div>
          <div className="hidden xl:flex xl:justify-center xl:items-center xl:gap-7.5 xl:mr-17.5">
            <a
              href=""
              className="text-[16px] leading-7 tracking-[0.75px] underline decoration-solid text-dark-gray-2"
            >
              Cadastre-se
            </a>
            <a
              href=""
              className="w-28.5 h-10 bg-primary rounded-lg font-bold text-[14px] leading-5.5 tracking-[0.75px]  text-light-gray-3 flex justify-center items-center"
            >
              Entrar
            </a>
          </div>
          <div className="flex gap-3.25">
            <Icons
              className="cursor-pointer xl:hidden"
              icon={Search}
              color="var(--color-light-gray-2)"
              size={20}
              onClick={handleSearchClick}
            />
            <Icons icon={ShoppingCart} color="var(--color-primary)" size={20} />
          </div>
        </div>
        <nav className="hidden xl:inline">
          <ul className="xl:flex xl:gap-8 mt-5">
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Produtos</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2 cursor-pointer">
              <a href="">Categorias</a>
            </li>
            <li className="text-[16px] leading-7 tracking-[0.75px] text-dark-gray-2">
              <a href="">Meus Pedidos</a>
            </li>
          </ul>
        </nav>
      </header>
      {activePanel === "search" && (
        <div className="fixed top-16.5 left-0 right-0 z-90 bg-white mx-7.5 xl:hidden">
          <SearchField />
        </div>
      )}
      {activePanel === "menu" && <SideMenu />}
    </>
  );
};

export default Header;
