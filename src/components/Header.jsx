import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchField from "./SearchField";
import Icons from "./Icons";

function Header() {
  return (
    <>
      <header className="flex justify-between items-center p-5 fixed top-0 left-0 right-0 bg-white z-100">
        <Icons icon={Menu} color="var(--color-dark-gray)" strokeWidth={2} />
        <Logo className="absolute left-1/2 -translate-x-1/2" color="var(--color-primary)" />
        <div className="flex gap-3.25">
          <Icons icon={Search} color="var(--color-light-gray-2)" size={20} />
          <Icons icon={ShoppingCart} color="var(--color-primary)" size={20} />
        </div>
      </header>
      <SearchField />
    </>
  );
}

export default Header;
