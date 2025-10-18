import SearchBar from "../SearchBar/SearchBar";

const Menu = () => {
  return (
    <ul className="flex items-center gap-[32px] text-[#797979]">
      <li>TV en direct</li>
      <li>Films</li>
      <li>Séries</li>
      <li>Favoris</li>
      <li>
        <SearchBar />
      </li>
    </ul>
  );
};

export default Menu;
