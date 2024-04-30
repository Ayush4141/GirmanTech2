"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton from "../LinkButton";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface NavbarProps {}

const links = ["Blog", "Services", "Contact"];

const Navbar: React.FC<NavbarProps> = () => {
  const [selected, setSelected] = useState(links[0]);
  const handleSelect = (selectedLink: string) => {
    setSelected(selectedLink);
  };
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderLinks = () => {
    return links.map((item, idx) => (
      <LinkButton
        handleClick={handleSelect}
        label={item}
        isActive={item === selected ? true : false}
      />
    ));
  };


  return (
    <div className="h-full w-full !z-10 flex flex-row items-center pb-6 justify-between  lg:pt-12 lg:mx-8 lg:pl-12 ">
      <div className="w-2/3 h-full flex flex-row items-center pl-4">
        <div className="flex flex-row">
          <Image src={"/Vector.svg"} width={24} height={24} alt={""} />
          <Image src={"/Vector1.svg"} width={14} height={16} alt={""} />
        </div>
        <div className="flex flex-row text-2xl md:text-3xl">
          <p className="pl-2 md:pl-4 font-semibold">Girman</p>
          <p className="pl-1  md:pl-2">Technologies</p>
        </div>
      </div>
      <div className="w-1/3 h-full items-center flex flex-row justify-center">
        {isLargeScreen ? <div className="flex flex-row">{renderLinks()}</div> : <div><GiHamburgerMenu size={24}/></div>}
      </div>
    </div>
  );
};

export default Navbar;
