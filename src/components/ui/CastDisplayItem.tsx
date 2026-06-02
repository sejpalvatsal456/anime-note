type CastDisplayItemProps = {
  imgUrl: string,
  originalName: string,
  characterName: string
}

export const CastDisplayItem = (
  { imgUrl, originalName, characterName }: CastDisplayItemProps
) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imgUrl}
        alt="pfp"
        className="mb-3 aspect-square h-30 rounded-full"
      />
      <div className="h-30 w-30 rounded-full hover:bg-white/10 absolute cursor-pointer transition-colors duration-300" />
      <h3 className="font-semibold">{originalName}</h3> {/* ORiginal Name */}
      <h3 className="text-gray-400 font-semibold text-sm">{characterName}</h3> {/* Charactor Name */}
    </div>
  )
}