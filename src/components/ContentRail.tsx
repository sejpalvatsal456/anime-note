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
          <div key={key} className="w-46 p-3 rounded-lg hover:bg-[rgb(50,_50,_50,_0.8)] trasistion-color duration-300 cursor-pointer">
          <img
            className="w-40 h-60 rounded-xl"
            src={content.imgUrl}
            alt=""
          />
          <span
            style={{ fontFamily: "Manrope" }}
            className="inline-block font-semibold text-lg mt-2 text-gray-400"
          >
            {content.title}
          </span>
        </div>
        ))}

        
      </div>
    </div>
  );
};

export default ContentRail;
