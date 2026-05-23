const ContentOverviewSkeleton = () => {
  return (
    <div className="ml-10 flex flex-col gap-5 w-[60%]">

      {/* Heading */}
      <div className="h-10 w-48 rounded-lg bg-zinc-800 animate-pulse" />

      {/* Overview Content */}
      <div className="relative">

        {/* Fake Paragraph Lines */}
        <div className="flex flex-col gap-3">

          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className={`
                h-5 rounded-md bg-zinc-800 animate-pulse
                ${i === 5 ? "w-[70%]" : "w-full"}
              `}
            />
          ))}

        </div>

        {/* Bottom Fade */}
        <div
          className="
            absolute bottom-0 left-0
            w-full h-20
            bg-gradient-to-t
            from-black via-black/80 to-transparent
            pointer-events-none
          "
        />
      </div>

    </div>
  );
};

export default ContentOverviewSkeleton;