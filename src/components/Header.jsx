import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchField from "./SearchField";

function Header() {
  return (
    <>
      <Menu color="var(--color-dark-gray)" />
      <Logo color="var(--color-primary)" />
      <Search color="var(--color-light-gray-2)" />
      <ShoppingCart color="var(--color-primary)" />
      <SearchField />
    </>
  );
}

export default Header;
