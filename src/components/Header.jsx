import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchField from "./SearchField";
import Icons from "./Icons";

function Header() {
  return (
    <>
      <header className="flex ">
        <Icons icon={Menu} color="var(--color-dark-gray)" strokeWidth={2} />
        <Logo color="var(--color-primary)" />
        <Icons icon={Search}  color="var(--color-light-gray-2)" size={20} />
        <Icons icon={ShoppingCart} color="var(--color-primary)" />
      </header>
      <SearchField />
    </>
  );
}

export default Header;
