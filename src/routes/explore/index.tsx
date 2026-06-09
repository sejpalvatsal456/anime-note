import CategorySection from '#/components/CategorySection'
import Navbar from '#/components/NavBar'
import { createFileRoute } from '@tanstack/react-router'
import { Cross, Search } from 'lucide-react'
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export const Route = createFileRoute('/explore/')({
  component: RouteComponent,
});

const categoryData = [
  {
    letter: "A",
    categories: [
      { name: "Action", slug: "action" },
      { name: "Adaptation", slug: "adaptation" },
      { name: "Action", slug: "action" },
      { name: "Adaptation", slug: "adaptation" },
      { name: "Action", slug: "action" },
      { name: "Adaptation", slug: "adaptation" },
    ]
  },
  {
    letter: "B",
    categories: [
      { name: "Based on Books", slug: "based-on-books" }
    ]
  }
];

function RouteComponent() {

  const [searchText, setSearchText] = useState<string>("");

  return (
    <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      <div className="mx-25 mt-20">
        <div className="flex flex-row justify-between items-center">
          <span className="text-5xl font-bold">Categories</span>

          <div className="flex flex-row items-center bg-white/10 py-3 px-5 rounded-full gap-5">
            <Search size={20} />
            <input 
              className='w-80 outline-none' 
              type="text" 
              name="search" 
              id="" 
              placeholder="Search..." 
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
            />
            <IoMdClose 
              className={"cursor-pointer transition-all ease-in-out duration-200 " + (searchText.length > 0 ? "opacity-100" : " opacity-0")} 
              size={searchText.length > 0 ? 15 : 0} 
              onClick={() => setSearchText("")}
            />
          </div>
        </div>

        <div className="flex flex-col mt-20 gap-10">
          {categoryData.map(data => (
            <>
              <CategorySection categoryData={data} />
              <div className='border-b-1 border-gray-800' />
            </>
          ))}
        </div>

      </div>
    </main>
  )
}
