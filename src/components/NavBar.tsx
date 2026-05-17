import { Link } from "@tanstack/react-router";
import { FaCross, FaHome } from "react-icons/fa";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import SearchSection from "./SearchSection";
import { useState } from "react";
import type { NavbarTabsType } from "../../types";

const navbarTabs: NavbarTabsType[] = [
  {
    name: "Home",
    slug: "home",
    icon: <FaHome size={17} />,
    url: "/",
  },
  {
    name: "Explore",
    slug: "explore",
    icon: <MdOutlineExplore size={20} />,
    url: "/explore",
  },
];

type NavbarProps = {
  activePage: string;
};

const Navbar = ({ activePage }: NavbarProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSearchOpen((prev) => !prev);
  };

  return (
    <div className="fixed top-0 left-0 bg-black/0">
      <nav className="w-screen md:px-20 pr-10 border-b-1 border-gray-500 flex text-white items-center justify-between bg-[rgba(8, 8, 8, .8)] backdrop-blur-[16px]">
        <h1 className="text-white text-lg">Anime Note</h1>
        <ul className="flex gap-10">
          {navbarTabs.map((item, key) => (
            <li key={key}>
              <Link
                to={item.url}
                className={
                  "flex items-center gap-2 hover:text-white py-6 " +
                  (activePage === item.slug ? "text-white" : "text-gray-500")
                }
              >
                {item.icon}
                <span className="font-semibold">
                  {activePage === item.slug ? item.name : ""}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div
          className="py-6 cursor-pointer text-gray-500 hover:text-white"
          onClick={handleSearchClick}
        >
          {!isSearchOpen 
            ? <IoMdSearch size={25} />
            : <IoMdClose size={25} /> 
          }
        </div>
      </nav>
      <div
        className={`transition-all duration-300 overflow-hidden ${
          isSearchOpen
            ? "max-h-full opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <SearchSection />
      </div>
    </div>
  );
};

export default Navbar;
