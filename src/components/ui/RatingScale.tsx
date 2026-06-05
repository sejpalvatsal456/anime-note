import { Star } from "lucide-react";
import { useState } from "react";

type Props = {
  value: number;
  onChange: (rating: number) => void;
};

export function RatingScale({ value, onChange }: Props) {
  const [hover, setHover] = useState<number | null>(null);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="relative">
          {/* Left Half */}
          <button
            className="absolute left-0 top-0 h-full w-full z-10"
            onMouseEnter={() => setHover(star - 0.5)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange(star - 0.5)}
          />

          {/* Right Half */}
          <button
            className="absolute right-0 top-0 h-full w-1/2 z-10"
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => onChange(star)}
          />

          <Star
            className={`h-6 w-6 ${
              (hover ?? value) >= star
                ? "fill-yellow-400 text-yellow-400"
                : (hover ?? value) >= star - 0.5
                ? "text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </div>
      ))}
    </div>
  );
}