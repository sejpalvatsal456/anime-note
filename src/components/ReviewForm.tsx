import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { useState } from "react";

type ReviewFormType = {
  userImage: string | null;
  userName: string;
};

export default function ReviewForm({ userName, userImage }: ReviewFormType) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  return (
    <div className="bg-white/10 w-full min-h-50 p-4 rounded-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            src={userImage ?? undefined}
            alt={userName}
            sx={{ width: 42, height: 42 }}
          />

          <div>
            <h3 className="font-semibold leading-none">{userName}</h3>
          </div>
        </div>

        <Rating
          precision={0.5}
          value={rating}
          size="large"
          onChange={(_, value) => setRating(value || 0)}
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#fbbf24",
            },
            "& .MuiRating-iconHover": {
              color: "#f59e0b", // amber-500
            },
            "& .MuiRating-iconEmpty": {
              color: "#52525b",
            },
          }}
        />
      </div>

      <div className="relative mt-10 border-gray-400 border-b-1 whitespace-pre-line text-zinc-200 leading-relaxed">
        <textarea
          className="w-full bg-transparent text-white text-xs sm:text-sm md:text-base resize-none outline-none min-h-[60px]"
          value={comment}
          placeholder="Write your review here..."
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <span className="absolute bottom-0 right-0 text-[10px] sm:text-xs text-[#6B7280]">
          {comment.length}/1000
        </span>
      </div>

      <div className="flex flex-row mt-5 gap-3 w-full sm:w-auto justify-end">
        <div className={"transition-all duration-200 ease-in-out transform origin-right " + (comment.length > 0 ? "opacity-100 scale-100" : "opacity-0 scale-0")}>
          <button 
            className="py-2 px-3 sm:px-4 w-full sm:w-auto text-xs sm:text-sm md:text-base font-medium text-[#E2E2E2] rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setComment("")}
          >
            Clear
          </button>
        </div>

        <button className="py-2 px-4 sm:px-6 text-xs sm:text-sm md:text-base font-medium text-black rounded-full transition-colors bg-white hover:bg-white/90  flex items-center justify-center gap-2">
          Post
        </button>
      </div>
    </div>
  );
}
