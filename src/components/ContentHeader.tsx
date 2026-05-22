import { FaRegEye, FaRegBookmark } from "react-icons/fa";
import type { Anime } from "../../types";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

type ContentHeaderProps = {
  contentData: Anime;
};

const ContentHeader = ({ contentData }: ContentHeaderProps) => {
  return (
    <section>
      <div className="m-10 flex flex-col md:flex-row gap-5 justify-between md:items-end">
        <div className="flex flex-row items-end justify-space gap-10">
          {/* Poster of anime */}
          <img
            className="w-50 h-70 rounded-xl"
            src={contentData.images.jpg.image_url}
            alt="Poster"
          />

          {/* Anime Description */}

          <div className="flex flex-col w-[40vw]">
            <h5 className="text-sm">
              {contentData.type} • {" "}
              {contentData.aired.from ? new Date(contentData.aired.from).getFullYear() : "XXXX"}
            </h5>
            <h1 className="text-4xl font-semibold mb-10">
              {contentData.title}
            </h1>

            <div className="flex flex-row gap-10">
              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Created By:</span>
                <span className="text-lg font-semibold">-</span>
              </div>
              {contentData.type === "Movie" ? (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Total Duration:</span>
                  <span className="text-lg font-semibold">
                    {contentData.duration}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span className="text-gray-400 text-sm">Total Episodes:</span>
                  <span className="text-lg font-semibold">
                    {contentData.episodes}
                  </span>
                </div>
              )}

              <div className="flex flex-col">
                <span className="text-gray-400 text-sm">Rating:</span>
                <span className="text-lg font-semibold">
                  {contentData.rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:w-[25vw] gap-3">
          <PrimaryButton>
            <FaRegEye size={20} />
            Mark as Watched
          </PrimaryButton>

          <SecondaryButton>
            <FaRegBookmark size={15} />
            Add to Collection
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
};

export default ContentHeader;
