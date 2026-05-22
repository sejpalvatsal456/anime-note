import { useNavigate } from '@tanstack/react-router';

type ContentCardProps = { 
  animeId: number;
  imgUrl: string;
  title: string;
}

const ContentCard = ({ animeId, imgUrl, title }: ContentCardProps) => {

  const navigate = useNavigate();

  return (  
    <div 
      className="w-46 p-3 rounded-lg hover:bg-[rgb(50,_50,_50,_0.8)] trasistion-color duration-300 cursor-pointer"
      onClick={() => {
        navigate({
          to: '/anime/$animeId',
          params: {
            animeId: animeId.toString()
          }
        })
      }}
    >
      <img
        className="w-40 h-60 rounded-xl"
        src={imgUrl}
        alt=""
      />
      <span
        style={{ fontFamily: "Manrope" }}
        className="inline-block font-semibold text-lg mt-2 text-gray-400"
      >
        {title}
      </span>
    </div>
  )
}

export default ContentCard
  