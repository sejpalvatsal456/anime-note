import { UserProfile } from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/user/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex justify-center items-center">
      <UserProfile />
    </div>
  )
}
