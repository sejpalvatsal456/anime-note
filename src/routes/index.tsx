import ContentRail from '#/components/ContentRail'
import Navbar from '#/components/NavBar'
import { createFileRoute, } from '@tanstack/react-router'
import { FaHeart } from 'react-icons/fa'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main 
      className='w-[100vw] min-h-[100vh] bg-black/90'
      style={{ 
        backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url('/Anime-Note-bg-banner.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* <img src="/Anime-Note-bg-banner.png" className='z-[-10]' alt="" /> */}
      <Navbar activePage='home' />

      <div className='pt-20 text-white'>
        <ContentRail title='Recommandation' icon={<FaHeart size={25} />} />
      </div>

    </main>
  )
}
