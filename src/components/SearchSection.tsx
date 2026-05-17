import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useQuery } from "@tanstack/react-query";
// import {} from '@tanstack'
import { searchAnime } from "@/server/search.ts";
import { useDebounce } from "#/hooks/useDebounce";
import ContentCard from "./ContentCard";
import type { Anime } from "../../types";

const SearchSection = () => {
  const [search, setSearch] = useState<string>("");
  const deboncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useQuery({
    queryKey: ["anime", deboncedSearch],
    queryFn: () => searchAnime({ data: deboncedSearch }),
    enabled: deboncedSearch.length > 0,
  });

  return (
    <div className="pt-5 flex flex-col items-center text-white w-screen h-screen bg-black overflow-y-scroll z-100">
      <div
        style={{ backgroundColor: "rgba(20, 20, 20, 1)" }}
        className="flex w-[80vw] border-1 border-gray-500 p-3 rounded-lg "
      >
        <IoMdSearch size={25} />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Anime..."
          className="focus:outline-none pl-3 text-lg w-full h-full"
          type="text"
        />
      </div>
      {data && (
        <div className="grid md:grid-cols-5 grid-cols-3 mt-5 md:gap-15 ">
          {data.length !== 0 ? (
            data.data.map((content: Anime, key: number) => (
              <ContentCard
                key={key}
                animeId={content.mal_id}
                imgUrl={content.images.jpg.image_url}
                title={content.title}
              />
            ))
          ) : (
            <p className="mt-5 text-xl font-semibold text-gray-400">
              No Results.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSection;
