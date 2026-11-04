import { Search } from "lucide-react";
import Icons from "./Icons";

const SearchField = () => {
  return (
    <>
      <div className="relative w-full">
        <input
          type="text"
          className="w-full h-15 rounded-lg bg-dark-gray-2/4 px-5 pr-14"
          placeholder="Pesquisar produto..."
        />
        <Icons
          icon={Search}
          color="var(--color-dark-gray-3)"
          opacity={0.5}
          className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
        />
      </div>
    </>
  );
};

export default SearchField;
