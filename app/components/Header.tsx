"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <header className="fixed w-full z-10 shadow-lg">
      <div
        className="
        py-4 
        px-12
        bg-white
        max-w-7xl 
        mx-auto flex 
        flex-row 
        justify-between 
        items-center
        "
      >
        <div>
          <Image src="/images/logo.png" alt="Logo" width={200} height={100} />
        </div>
        <div className="flex flex-row gap-10">
          <Link href="#identity">Who We Are</Link>
          <Link href="#values">Our Values</Link>
          <Link href="#specialty">The Perks</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
