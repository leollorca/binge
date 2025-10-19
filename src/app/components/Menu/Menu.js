import Link from "next/link";

import SearchBar from "../SearchBar/SearchBar";

const Menu = ({ pathname }) => {
  return (
    <ul className="flex items-center gap-[32px] h-full mx-[32px] text-gray">
      <li
        className={`${
          pathname === "/direct"
            ? "text-light-gray after:block"
            : "text-gray after:hidden"
        } relative flex flex-col justify-center h-[48px] hover:text-light-gray after:content-[''] after:absolute after:bottom-0 after:w-[4px] after:h-[4px] after:bg-yellow after:rounded-full after:self-center`}
      >
        <Link href="/direct">TV en direct</Link>
      </li>
      <li
        className={`${
          pathname === "/"
            ? "text-light-gray after:block"
            : "text-gray after:hidden"
        } relative flex flex-col justify-center h-[48px] hover:text-light-gray after:content-[''] after:absolute after:bottom-0 after:w-[4px] after:h-[4px] after:bg-yellow after:rounded-full after:self-center`}
      >
        <Link href="/">Films</Link>
      </li>
      <li
        className={`${
          pathname === "/series"
            ? "text-light-gray after:block"
            : "text-gray after:hidden"
        } relative flex flex-col justify-center h-[48px] hover:text-light-gray after:content-[''] after:absolute after:bottom-0 after:w-[4px] after:h-[4px] after:bg-yellow after:rounded-full after:self-center`}
      >
        <Link href="/series">Séries</Link>
      </li>
      <li
        className={`${
          pathname === "/fav"
            ? "text-light-gray after:block"
            : "text-gray after:hidden"
        } relative flex flex-col justify-center h-[48px] hover:text-light-gray after:content-[''] after:absolute after:bottom-0 after:w-[4px] after:h-[4px] after:bg-yellow after:rounded-full after:self-center`}
      >
        <Link href="/fav">Favoris</Link>
      </li>
      <li>
        <SearchBar />
      </li>
    </ul>
  );
};

export default Menu;
