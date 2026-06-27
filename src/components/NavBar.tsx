import { Link } from "@tanstack/react-router";
import { FaHome } from "react-icons/fa";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import SearchSection from "./SearchSection";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { NavbarTabsType } from "../../types";
import { SignInButton, SignOutButton, SignUpButton, useAuth } from "@clerk/tanstack-react-start";
import { CgProfile } from "react-icons/cg";

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
  const { isSignedIn } = useAuth();

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSearchOpen((prev) => !prev);
  };

  return (
    <>
      <div className="z-10 fixed top-0 left-0 bg-black/0">
        <nav className="w-screen md:px-20 h-20 pr-10 border-b-1 border-gray-500 flex text-white items-center justify-between bg-[rgba(8, 8, 8, .8)] backdrop-blur-[16px]">
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

          <div className="flex gap-5">
            <div
              className="py-6 cursor-pointer text-gray-500 hover:text-white"
              onClick={handleSearchClick}
            >
              {!isSearchOpen ? <IoMdSearch size={25} /> : <IoMdClose size={25} />}
            </div>
            {isSignedIn
            ? (
              <div className="flex justify-center items-center gap-3">
                <Link  to='/user/$'>
                  <CgProfile size={30} />
                </Link>
                <SignOutButton>
                  <span className="bg-red-500 py-2 px-3 rounded cursor-pointer hover:bg-red-600">
                    Sign Out
                  </span>
                </SignOutButton>
              </div>
              
            )
            : (
              <div className="flex justify-center items-center gap-3">

                <SignInButton
                  mode="modal"
                >
                  <span className="bg-purple-700 py-2 px-3 rounded cursor-pointer hover:bg-purple-800">
                    Sign In
                  </span>
                </SignInButton>
                <SignUpButton
                  mode="modal"
                >
                  <span className="py-2 px-3 rounded cursor-pointer hover:bg-gray-900">
                    Sign Up
                  </span>
                </SignUpButton>

              </div>
            )}
          </div>

          
        </nav>
      </div>
      {createPortal(
        <div
          className={`
            fixed top-20 z-[100000]
            bg-black
            transition-all duration-300
            ${
              isSearchOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }
          `}
        >
          <SearchSection setIsSearchOpen={setIsSearchOpen} />
        </div>,
        document.body,
      )}
    </>
  );
};

export default Navbar;
