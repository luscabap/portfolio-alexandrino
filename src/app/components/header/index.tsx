"use client";

import { useState } from "react";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import AsideMenu from "../aside-menu";

export default function Header(){
  const [isOpen, setIsOpen] = useState(false);

  function handleMenu(){
    setIsOpen(previewValue => !previewValue);
  }

  const iconProps = {
    onClick: handleMenu,
    size: 30,
  }

  const IconComponent = isOpen ? CiMenuFries : CiMenuBurger;

  return (
    <header className="flex justify-between items-center bg-zinc-500 w-full p-6">
      <h1>Logo Alexandrino</h1>
      <IconComponent  {...iconProps}/>
      {
        isOpen && (
          <AsideMenu />
        )
      }
    </header>
  )
}
