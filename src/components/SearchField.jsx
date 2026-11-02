import { Search } from "lucide-react";
import Icons from "./Icons";

const SearchField = () => {
  return (
    <>
      <div className="fixed top-[66.5px] px-7.5 w-full">
        <input
          type="text"
          className="rounded-lg bg-dark-gray-2/4 px-5 py-4 w-full h-15"
          placeholder="Pesquisar produto..."
        />
        <Icons
          icon={Search}
          color="var(--color-dark-gray-3)"
          opacity={0.5}
          className="absolute top-4.5 right-15 cursor-pointer"
        />
      </div>
    </>
  );
};

export default SearchField;
