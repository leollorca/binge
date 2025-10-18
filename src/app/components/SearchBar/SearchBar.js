const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Rechercher un film, une série"
        className="w-[384px] h-[48px] border rounded-full"
      />
    </form>
  );
};

export default SearchBar;
