"use client"

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#00537C] py-10 pb-20">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row justify-between px-10">
          <div className="flex flex-col">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={100}
              className="bg-white rounded-full p-2 mb-10"
            />
            <div className="bg-white p-5 max-w-lg rounded-lg">
              <p>
                Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung,
                Jawa Barat
              </p>
            </div>
          </div>
          <div className="flex flex-col text-white gap-4">
            <Link href="#identity">Who We Are</Link>
            <Link href="#values">Our Values</Link>
            <Link href="#specialty">The Perks</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
