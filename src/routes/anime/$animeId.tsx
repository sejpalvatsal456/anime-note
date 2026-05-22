import ContentHeader from "#/components/ContentHeader";
import Navbar from "#/components/NavBar";
import { searchAnimeById } from "#/server/search";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/anime/$animeId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { animeId } = Route.useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["anime"],
    queryFn: () => searchAnimeById({ data: animeId }),
  });

  if (!isLoading) {
    console.log(data.data);
  }

  return (
    <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      {!isLoading && data && (
        <ContentHeader contentData={data.data} />
      )}
    </main>
  );
}
