import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";

type ReviewDisplayProps = {
  uid: string;
  userName: string;
  userImage: string | null;
  rating: number; // 0-5
  comment: string;
  timestamp: string;
};

export const ReviewDisplay = ({
  userName,
  userImage,
  rating,
  comment,
  timestamp,
}: ReviewDisplayProps) => {
  return (
    <div className="rounded-lg bg-black p-4 text-white">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar
            src={userImage ?? undefined}
            alt={userName}
            sx={{ width: 42, height: 42 }}
          />

          <div>
            <h3 className="font-semibold leading-none">
              {userName}
            </h3>

            <p className="mt-1 text-sm text-zinc-400">
              {timestamp}
            </p>
          </div>
        </div>

        <Rating
          readOnly
          precision={0.5}
          value={rating }
          size="small"
          sx={{
            "& .MuiRating-iconFilled": {
              color: "#fbbf24",
            },
            "& .MuiRating-iconEmpty": {
              color: "#52525b",
            },
          }}
        />
      </div>

      <p className="mt-10 whitespace-pre-line text-zinc-200 leading-relaxed">
        {comment}
      </p>
    </div>
  );
};