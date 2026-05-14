import { Link } from "@tanstack/react-router";
import { FaHome } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";

const navbarTabs: NavbarTabsType[] = [
  {
    name: "Home",
    slug: "home",
    icon: <FaHome size={17} />,
    url: "/",
  },
  {
    name: "Search",
    slug: "search",
    icon: <IoMdSearch size={20} />,
    url: "/search",
  },
  {
    name: 'Explore',
    slug: 'explore',
    icon: <MdOutlineExplore size={20} />,
    url: "/explore"
  }
];

type NavbarProps = {
  activePage: string;
};

const Navbar = ({ activePage }: NavbarProps) => {
  return (
    <nav className="w-screen bg-black/0 px-20 border-b-1 border-gray-500 flex text-white items-center justify-between fixed top-0 left-0 bg-[rgba(8, 8, 8, .8)] backdrop-blur-[16px]">
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
    </nav>
  );
};

export default Navbar;
