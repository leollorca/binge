import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const SearchBar = () => {
  return (
    <form className="relative">
      <MagnifyingGlassIcon className="size-6 absolute top-[12px] left-[20px]" />
      <input
        type="text"
        placeholder="Rechercher un film, une série"
        className="w-[384px] h-[48px] pl-[56px] border rounded-full outline-none focus:border-light-gray"
      />
    </form>
  );
};

export default SearchBar;
