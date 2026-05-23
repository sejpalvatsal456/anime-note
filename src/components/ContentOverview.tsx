import { useState } from "react";
import type { Anime } from "../../types";

type ContentOverviewProps = {
  contentData: Anime;
};

const ContentOverview = ({
  contentData,
}: ContentOverviewProps) => {

  const [expanded, setExpanded] = useState(false);

  const synopsis = contentData.synopsis || "";

  return (
    <div className="ml-10 flex flex-col gap-5 w-[60%]">

      <h1 className="text-3xl font-semibold">
        Overview
      </h1>

      <div className="relative">

        {/* Text */}
        <p
          className={`
            text-lg text-gray-400 overflow-hidden transition-all duration-500
            ${expanded ? "max-h-[1000px]" : "max-h-[140px]"}
          `}
        >
          {synopsis}
        </p>

        {/* Bottom Blur / Fade */}
        {!expanded && (
          <div
            className="
              absolute bottom-0 left-0
              w-full h-20
              bg-gradient-to-t
              from-black via-black/80 to-transparent
              pointer-events-none
            "
          />
        )}

      </div>

      {/* Button */}
      {synopsis.length > 300 && (
        <div className={"w-full flex justify-center " + (expanded ? "" : "relative -top-10")}>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-fit text-sm font-medium cursor-pointer text-white hover:text-gray-300 transition-colors"
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </div>
  );
};

export default ContentOverview;