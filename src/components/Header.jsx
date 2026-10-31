import { Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <Logo color="var(--color-primary)" />
      <Search />
      <ShoppingCart />
    </>
  );
}

export default Header;
