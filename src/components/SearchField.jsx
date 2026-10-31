import { Search } from "lucide-react";

function SearchField() {
  return (
    <>
      <div className="relative flex items-center">
        <input
          type="text"
          className="rounded-lg bg-dark-gray-2/4 px-5 py-4 w-full h-15 mx-7.5"
          placeholder="Pesquisar produto..."
        />
        <Search
          className="absolute right-12.5 opacity-50"
          color="var(--color-dark-gray-3)"
          strokeWidth={1.5}
        />
      </div>
    </>
  );
}

export default SearchField;
