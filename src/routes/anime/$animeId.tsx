import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/anime/$animeId')({
  component: RouteComponent,
})

function RouteComponent() {

  const { animeId } = Route.useParams();

  return <div>Hello "/anime/{animeId}"!</div>
}
