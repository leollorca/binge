import { UserIcon } from "@heroicons/react/24/outline";

import BingeLogo from "../BingeLogo/BingeLogo";
import Menu from "../Menu/Menu";
import IconWrapper from "../IconWrapper/IconWrapper";

const Header = () => {
  return (
    <header className="container flex justify-between items-center w-full py-[48px] bg-[#121212]">
      <BingeLogo height={14} />
      <Menu />
      <IconWrapper
        padding="p-[12px]"
        icon={<UserIcon className="size-6 text-[#797979]" />}
      />
    </header>
  );
};

export default Header;
