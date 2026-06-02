import ContentHeader from "#/components/ContentHeader";
import ContentOverview from "#/components/ContentOverview";
import Navbar from "#/components/NavBar";
import { CastDisplayItem } from "#/components/ui/CastDisplayItem";
import ContentHeaderSkeleton from "#/components/ui/ContentHeaderSkeleton";
import ContentOverviewSkeleton from "#/components/ui/ContentOverviewSkeleton";
import ContentSection from "#/components/ui/ContentSection";
import { searchAnimeById } from "#/server/search";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/anime/$animeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { animeId } = Route.useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["anime", animeId],
    queryFn: () => searchAnimeById({ data: animeId }),
  });

  if (isLoading) {
    return (
      <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      <div className="flex flex-col gap-10">
        <ContentHeaderSkeleton />
        <div className="flex flex-row">
          <ContentOverviewSkeleton />
          <div></div>
        </div>
      </div>
    </main>
    )
  }

  return (
    <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      {/* {!isLoading && data && (
        <ContentHeader contentData={data.data} />
      )} */}

      {data
        ? (
          <div className="flex flex-col gap-10">
            <ContentHeader contentData={data.data} />
            <div className="flex flex-row mb-10">
              <div className="flex flex-col gap-10">
                <ContentOverview contentData={data.data} />
                <div className="border-b-1 border-gray-700 ml-10 mt-5 w-[60%]" />
                {/* Voice Artist */}
                <ContentSection 
                  title="Cast"
                >

                  <div className="flex flex-row gap-10">
                    
                    <CastDisplayItem
                      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMqR8UtUmWReWaLD2qeBKVQro957hfY4MnhD48ENwqxvVYy7gTjMnwGnL4pklvq-Pv1jmCY3UyD9kmxEmk9DL1rTxDlF0Pb5PzcC1vg&s=10"
                      originalName="Nicolas Cage"
                      characterName="Spider Man"
                    />

                    <CastDisplayItem
                      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMqR8UtUmWReWaLD2qeBKVQro957hfY4MnhD48ENwqxvVYy7gTjMnwGnL4pklvq-Pv1jmCY3UyD9kmxEmk9DL1rTxDlF0Pb5PzcC1vg&s=10"
                      originalName="Nicolas Cage"
                      characterName="Spider Man"
                    />

                    <CastDisplayItem
                      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMqR8UtUmWReWaLD2qeBKVQro957hfY4MnhD48ENwqxvVYy7gTjMnwGnL4pklvq-Pv1jmCY3UyD9kmxEmk9DL1rTxDlF0Pb5PzcC1vg&s=10"
                      originalName="Nicolas Cage"
                      characterName="Spider Man"
                    />

                    <CastDisplayItem
                      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMqR8UtUmWReWaLD2qeBKVQro957hfY4MnhD48ENwqxvVYy7gTjMnwGnL4pklvq-Pv1jmCY3UyD9kmxEmk9DL1rTxDlF0Pb5PzcC1vg&s=10"
                      originalName="Nicolas Cage"
                      characterName="Spider Man"
                    />

                  </div>

                </ContentSection>
              </div>
              <div></div>
            </div>
          </div>
        ) : (
          <p>No Data.</p>
        )
      }

    </main>
  );
}
