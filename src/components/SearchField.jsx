import { Search } from "lucide-react";
import Icons from "./Icons";

function SearchField() {
  return (
    <>
      <div className="relative flex items-center">
        <input
          type="text"
          className="rounded-lg bg-dark-gray-2/4 px-5 py-4 w-full h-15 mx-7.5"
          placeholder="Pesquisar produto..."
        />
        <Icons
          icon={Search}
          color="var(--color-dark-gray-3)"
          opacity = {0.5}
          className="absolute right-12.5"
        />
      </div>
    </>
  );
}

export default SearchField;
