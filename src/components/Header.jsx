import { Menu, Search, ShoppingCart } from "lucide-react";
import Logo from "./Logo";
import SearchField from "./SearchField";
import Icons from "./Icons";
import { useState } from "react";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  function handleSearchClick() {
    setShowSearch(!showSearch);
  }
  return (
    <>
      <header className="flex justify-between items-center p-5 fixed top-0 left-0 right-0 bg-white z-100">
        <Icons
          className="cursor-pointer"
          icon={Menu}
          color="var(--color-dark-gray)"
          strokeWidth={2}
        />
        <Logo
          className="absolute left-1/2 -translate-x-1/2"
          color="var(--color-primary)"
        />
        <div className="flex gap-3.25">
          <Icons
            className="cursor-pointer"
            icon={Search}
            color="var(--color-light-gray-2)"
            size={20}
            onClick={handleSearchClick}
          />
          <Icons
            className="cursor-pointer"
            icon={ShoppingCart}
            color="var(--color-primary)"
            size={20}
          />
        </div>
      </header>
      {showSearch && <SearchField />}
    </>
  );
}

export default Header;
