import ContentHeader from "#/components/ContentHeader";
import ContentOverview from "#/components/ContentOverview";
import Navbar from "#/components/NavBar";
import { CastDisplayItem } from "#/components/ui/CastDisplayItem";
import ContentHeaderSkeleton from "#/components/ui/ContentHeaderSkeleton";
import ContentOverviewSkeleton from "#/components/ui/ContentOverviewSkeleton";
import ContentSection from "#/components/ui/ContentSection";
import { RatingScale } from "#/components/ui/RatingScale";
import { searchAnimeById } from "#/server/search";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import { ReviewDisplay } from "#/components/ui/ReviewDisplay";
export const Route = createFileRoute("/anime/$animeId")({
  component: RouteComponent,
});

const data = {
  data: {
    mal_id: 40748,
    url: "https://myanimelist.net/anime/40748/Jujutsu_Kaisen",
    images: {
      jpg: {
        image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222t.jpg",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
      },
      webp: {
        image_url: "https://cdn.myanimelist.net/images/anime/1171/109222.webp",
        small_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222t.webp",
        large_image_url:
          "https://cdn.myanimelist.net/images/anime/1171/109222l.webp",
      },
    },
    trailer: {
      youtube_id: null,
      url: null,
      embed_url:
        "https://www.youtube-nocookie.com/embed/4A_X-Dvl0ws?enablejsapi=1&wmode=opaque&autoplay=1",
      images: {
        image_url: null,
        small_image_url: null,
        medium_image_url: null,
        large_image_url: null,
        maximum_image_url: null,
      },
    },
    approved: true,
    titles: [
      {
        type: "Default",
        title: "Jujutsu Kaisen",
      },
      {
        type: "Synonym",
        title: "Sorcery Fight",
      },
      {
        type: "Synonym",
        title: "JJK",
      },
      {
        type: "Japanese",
        title: "呪術廻戦",
      },
      {
        type: "English",
        title: "Jujutsu Kaisen",
      },
      {
        type: "German",
        title: "Jujutsu Kaisen",
      },
      {
        type: "Spanish",
        title: "Jujutsu Kaisen",
      },
      {
        type: "French",
        title: "Jujutsu Kaisen",
      },
    ],
    title: "Jujutsu Kaisen",
    title_english: "Jujutsu Kaisen",
    title_japanese: "呪術廻戦",
    title_synonyms: ["Sorcery Fight", "JJK"],
    type: "TV",
    source: "Manga",
    episodes: 24,
    status: "Finished Airing",
    airing: false,
    aired: {
      from: "2020-10-03T00:00:00+00:00",
      to: "2021-03-27T00:00:00+00:00",
      prop: {
        from: {
          day: 3,
          month: 10,
          year: 2020,
        },
        to: {
          day: 27,
          month: 3,
          year: 2021,
        },
      },
      string: "Oct 3, 2020 to Mar 27, 2021",
    },
    duration: "23 min per ep",
    rating: "R - 17+ (violence & profanity)",
    score: 8.5,
    scored_by: 2010568,
    rank: 165,
    popularity: 11,
    members: 3050758,
    favorites: 96521,
    synopsis:
      "Idly indulging in baseless paranormal activities with the Occult Club, high schooler Yuuji Itadori spends his days at either the clubroom or the hospital, where he visits his bedridden grandfather. However, this leisurely lifestyle soon takes a turn for the strange when he unknowingly encounters a cursed item. Triggering a chain of supernatural occurrences, Yuuji finds himself suddenly thrust into the world of Curses—dreadful beings formed from human malice and negativity—after swallowing the said item, revealed to be a finger belonging to the demon Sukuna Ryoumen, the King of Curses.\n\nYuuji experiences first-hand the threat these Curses pose to society as he discovers his own newfound powers. Introduced to the Tokyo Prefectural Jujutsu High School, he begins to walk down a path from which he cannot return—the path of a Jujutsu sorcerer.\n\n[Written by MAL Rewrite]",
    background:
      "Winner of the Anime of the Year (TV Series) at the 2022 Tokyo Anime Award Festival (TAAF).",
    season: "fall",
    year: 2020,
    broadcast: {
      day: "Saturdays",
      time: "01:25",
      timezone: "Asia/Tokyo",
      string: "Saturdays at 01:25 (JST)",
    },
    casts: [
      {
        cast_id: "cast_id_1",
        name: "Yuichi Nakamura",
        character: "Gojo Saturu",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBJsGZsCG7IMXuo2p0RjS6TvMFxOUI5OC1si8VOpPoU2sJQWPhFGeNxcAah_v2Y5fcthcHKKe6t9QodC-cmYEiIxi_dgrxkIrzn05gq8l9CQ&s=10",
      },
      {
        cast_id: "cast_id_2",
        name: "Junya Enoki",
        character: "Yuji Itadori",
        image:
          "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRr5OOKltly67Z9C4AFaJyaLMvtibnXs1PwsLLqwZJuaJ9Zsm2qRrT1rD_fZJb3ACt9dWx-trlG5-IozXHOHoPI504UJtilGu60kKpGtb0wgovLOyvzdkffqHSoKGBlbQiSTnc3kbfKnDFd&s=19",
      },
    ],
    producers: [
      {
        mal_id: 143,
        type: "anime",
        name: "Mainichi Broadcasting System",
        url: "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System",
      },
      {
        mal_id: 1143,
        type: "anime",
        name: "TOHO animation",
        url: "https://myanimelist.net/anime/producer/1143/TOHO_animation",
      },
      {
        mal_id: 1365,
        type: "anime",
        name: "Shueisha",
        url: "https://myanimelist.net/anime/producer/1365/Shueisha",
      },
      {
        mal_id: 1856,
        type: "anime",
        name: "dugout",
        url: "https://myanimelist.net/anime/producer/1856/dugout",
      },
      {
        mal_id: 2260,
        type: "anime",
        name: "Sumzap",
        url: "https://myanimelist.net/anime/producer/2260/Sumzap",
      },
    ],
    licensors: [
      {
        mal_id: 119,
        type: "anime",
        name: "VIZ Media",
        url: "https://myanimelist.net/anime/producer/119/VIZ_Media",
      },
    ],
    studios: [
      {
        mal_id: 569,
        type: "anime",
        name: "MAPPA",
        url: "https://myanimelist.net/anime/producer/569/MAPPA",
      },
    ],
    genres: [
      {
        mal_id: 1,
        type: "anime",
        name: "Action",
        url: "https://myanimelist.net/anime/genre/1/Action",
      },
      {
        mal_id: 46,
        type: "anime",
        name: "Award Winning",
        url: "https://myanimelist.net/anime/genre/46/Award_Winning",
      },
      {
        mal_id: 37,
        type: "anime",
        name: "Supernatural",
        url: "https://myanimelist.net/anime/genre/37/Supernatural",
      },
    ],
    explicit_genres: [],
    themes: [
      {
        mal_id: 23,
        type: "anime",
        name: "School",
        url: "https://myanimelist.net/anime/genre/23/School",
      },
    ],
    demographics: [
      {
        mal_id: 27,
        type: "anime",
        name: "Shounen",
        url: "https://myanimelist.net/anime/genre/27/Shounen",
      },
    ],
  },
  reviews: [
    {
      uid: "uid1",
      user_name: "User 1",
      rating: 4.5,
      comment: "Kitkat GO....",
      timestamp: "1 week ago",
    },
  ],
};

function RouteComponent() {
  // const { animeId } = Route.useParams();

  const [rating, setRating] = useState<number>(0);

  // const { data, isLoading } = useQuery({
  //   queryKey: ["anime", animeId],
  //   queryFn: () => searchAnimeById({ data: animeId }),
  // });

  // if (isLoading) {
  //   return (
  //     <main
  //       style={{ fontFamily: "Manrope" }}
  //       className="pt-20 w-screen min-h-screen bg-black text-white"
  //     >
  //       <Navbar activePage="explore" />
  //       <div className="flex flex-col gap-10">
  //         <ContentHeaderSkeleton />
  //         <div className="flex flex-row">
  //           <ContentOverviewSkeleton />
  //           <div></div>
  //         </div>
  //       </div>
  //     </main>
  //   );
  // }

  return (
    <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      {/* {!isLoading && data && (
        <ContentHeader contentData={data.data} />
      )} */}

      {data ? (
        <div className="flex flex-col gap-10">
          <ContentHeader contentData={data.data} />
          <div className="flex flex-row mb-10">
            <div className="flex flex-col gap-10">
              {/* Overview */}
              <ContentOverview contentData={data.data} />

              {/* Divider */}
              <div className="border-b-1 border-gray-700 ml-10 mt-5 w-[60%]" />

              {/* Voice Artist */}
              <ContentSection title="Cast">
                <div className="flex flex-row gap-10">
                  {data.data.casts &&
                    data.data.casts.map((cast) => (
                      <CastDisplayItem
                        key={cast.cast_id}
                        imgUrl={cast.image}
                        originalName={cast.name}
                        characterName={cast.character}
                      />
                    ))}
                </div>
              </ContentSection>

              {/* Divider */}
              <div className="border-b-1 border-gray-700 ml-10 mt-5 w-[60%]" />

              {/* Crew */}
              {/* // IDK */}

              {/* Production House */}
              <ContentSection title="Production House">
                <div className="ml-5 mt-5 flex flex-row items-center gap-5">
                  {data.data.producers.map((producer) => (
                    <span className="border-1 border-gray-600 text-sm font-semibold inline-block p-3 rounded-lg cursor-pointer hover:bg-[#252525] transision-colors duration-200">
                      {producer.name}
                    </span>
                  ))}
                </div>
              </ContentSection>

              {/* Divider */}
              <div className="border-b-1 border-gray-700 ml-10 mt-5 w-[60%]" />

              {/* Rating Scale */}
              <ContentSection title="Rating">
                <div className="w-full flex justify-center items-center">
                  <Rating
                    precision={0.5}
                    value={rating}
                    onChange={(_, newValue) => {
                      setRating(newValue ?? 0);
                    }}
                    icon={<StarIcon fontSize="inherit" />}
                    emptyIcon={<StarIcon fontSize="inherit" />}
                    sx={{
                      fontSize: "2.5rem",

                      "& .MuiRating-iconFilled": {
                        color: "#fbbf24", // amber-400
                      },

                      "& .MuiRating-iconHover": {
                        color: "#f59e0b", // amber-500
                      },

                      "& .MuiRating-iconEmpty": {
                        color: "#4b5563", // gray-600
                      },
                    }}
                  />
                  <Box sx={{ ml: 2, fontSize: "1.5rem" }}>{rating}</Box>
                </div>
              </ContentSection>

              {/* Divider */}
              <div className="border-b-1 border-gray-700 ml-10 mt-5 w-[60%]" />

              {/* Reviews */}
              <ContentSection title="Reviews">
                <div className="flex flex-col gap-5">
                  {data.reviews.map((review) => (
                    <ReviewDisplay
                      uid={review.uid}
                      user_name={review.user_name}
                      user_image={null}
                      rating={review.rating}
                      comment={review.comment}
                      timestamp={review.timestamp}
                    />
                  ))}
                </div>
              </ContentSection>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <p>No Data.</p>
      )}
    </main>
  );
}
