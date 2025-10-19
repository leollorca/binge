"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { UserIcon } from "@heroicons/react/24/outline";

import BingeLogo from "../BingeLogo/BingeLogo";
import Menu from "../Menu/Menu";
import IconWrapper from "../IconWrapper/IconWrapper";

const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex justify-between items-center w-full mb-[36px] py-[48px] text-[14px] bg-black">
      <Link href="/">
        <BingeLogo height={14} />
      </Link>
      <Menu pathname={pathname} />
      <Link href="/">
        <IconWrapper padding="p-[12px]" Icon={UserIcon} />
      </Link>
    </header>
  );
};

export default Header;
