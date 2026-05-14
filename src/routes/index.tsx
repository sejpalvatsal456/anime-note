import Navbar from '#/components/NavBar'
import { createFileRoute, Link, } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main 
      className='w-[100vw] h-[100vh] bg-black/90'
      style={{ 
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Anime-Note-bg-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <img src="/Anime-Note-bg-banner.png" className='z-[-10]' alt="" /> */}
      <Navbar activePage='home' />
    </main>
  )
}
