import type { ContentRailType } from "../../types";
import ContentCard from "./ContentCard";

type ContentRailProps = {
  title: string;
  icon: React.ReactElement
};

const contentData: ContentRailType[] = [
  {
    imgUrl: 'https://i.pinimg.com/736x/69/29/00/692900b52e9d052588191783fd30137c.jpg',
    title: 'Jujutsu Kaisen'
  },
  {
    imgUrl: 'https://i.pinimg.com/736x/69/29/00/692900b52e9d052588191783fd30137c.jpg',
    title: 'Jujutsu Kaisen'
  },
  {
    imgUrl: 'https://i.pinimg.com/736x/69/29/00/692900b52e9d052588191783fd30137c.jpg',
    title: 'Jujutsu Kaisen'
  },
  {
    imgUrl: 'https://i.pinimg.com/736x/69/29/00/692900b52e9d052588191783fd30137c.jpg',
    title: 'Jujutsu Kaisen'
  },
]

const ContentRail = ({ title, icon }: ContentRailProps) => {
  return (
    <div className="mt-5 mx-10 md:mx-20">
      <span
        style={{ fontFamily: "Manrope", fontWeight: "600" }}
        className="text-2xl flex items-center gap-3"
      >
        {icon}
        {title}
      </span>
      <div className="grid md:grid-cols-5 grid-cols-3 mt-5 md:gap-15">

        {contentData.map((content, key) => (
          <ContentCard key={key} animeId={1020} imgUrl={content.imgUrl} title={content.title} />
        ))}

        
      </div>
    </div>
  );
};

export default ContentRail;
