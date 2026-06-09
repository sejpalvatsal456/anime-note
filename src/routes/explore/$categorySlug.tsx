import Navbar from "#/components/NavBar";
import { UnderConstruction } from "#/components/UnderConstruction";
import { slugToText } from "#/utils/slugConversion";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/explore/$categorySlug")({
  component: RouteComponent,
});

function RouteComponent() {
  const { categorySlug } = Route.useParams();

  return (
    <main
      style={{ fontFamily: "Manrope" }}
      className="pt-20 w-screen min-h-screen bg-black text-white"
    >
      <Navbar activePage="explore" />
      <div className="flex flex-col mx-25 mt-20">
        <span className="text-gray-400 uppercase font-bold">Category</span>
        <span className="text-4xl font-bold">{slugToText(categorySlug)}</span>
      </div>
			<UnderConstruction />
    </main>
  );
}
