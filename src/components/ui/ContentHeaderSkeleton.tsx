import Skeleton from '@mui/material/Skeleton'

const CardHeaderSkeleton = () => {
  return (
    <section>
      <div className="m-10 flex flex-col md:flex-row gap-5 justify-between md:items-end">

        {/* Left Side */}
        <div className="flex flex-row items-end gap-10">

          {/* Poster Skeleton */}
          <Skeleton
            variant="rounded"
            width={200}
            height={280}
            animation="wave"
            sx={{
              borderRadius: "12px",
              bgcolor: "rgb(39 39 42)",
            }}
          />

          {/* Description Skeleton */}
          <div className="flex flex-col w-[40vw]">

            {/* Type + Year */}
            <Skeleton
              variant="text"
              width={120}
              height={30}
              animation="wave"
              sx={{ bgcolor: "rgb(39 39 42)" }}
            />

            {/* Title */}
            <Skeleton
              variant="text"
              width={350}
              height={60}
              animation="wave"
              sx={{
                marginBottom: "30px",
                bgcolor: "rgb(39 39 42)",
              }}
            />

            {/* Stats */}
            <div className="flex flex-row gap-10">

              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-2">

                  <Skeleton
                    variant="text"
                    width={90}
                    height={20}
                    animation="wave"
                    sx={{ bgcolor: "rgb(39 39 42)" }}
                  />

                  <Skeleton
                    variant="text"
                    width={70}
                    height={30}
                    animation="wave"
                    sx={{ bgcolor: "rgb(39 39 42)" }}
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:w-[25vw] gap-3">

          <Skeleton
            variant="rounded"
            width="90%"
            height={40}
            animation="wave"
            sx={{
              borderRadius: "24px",
              bgcolor: "rgb(39 39 42)",
            }}
          />

          <Skeleton
            variant="rounded"
            width="90%"
            height={40}
            animation="wave"
            sx={{
              borderRadius: "24px",
              bgcolor: "rgb(39 39 42)",
            }}
          />

        </div>
      </div>
    </section>
  )
}

export default CardHeaderSkeleton
