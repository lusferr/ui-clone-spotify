import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import Image from 'next/image';

// images
import Liniker from '../../public/assets/liniker.jpg';
import Luisa from '../../public/assets/luisa.webp';
import Casia from '../../public/assets/cassia.jpg';
import Djonga from '../../public/assets/djonga.jpg';
import Bruno from '../../public/assets/bruno.webp';
import Iza from '../../public/assets/iza.webp';

// Components
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import CardSong from './components/cards/cardSong';
import CardAlbum from './components/cards/cardAlbum';

export default function Home() {
  const playlists = [
    { name: 'Músicas curtidas', link: '#', image: Luisa },
    { name: 'Creme', link: '#', image: Djonga },
    { name: 'AULAS', link: '#', image: Bruno },
    { name: 'RAP - SÓ AS BRABA', link: '#', image: Djonga },
    { name: 'Rap Acústico', link: '#', image: Iza },
    { name: 'Rock Alternativo', link: '#', image: Casia },
    { name: 'Hip-Hop Internacional', link: '#', image: Iza },
    { name: 'Pop Hits', link: '#', image: Luisa }
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar playlists={playlists} />
        <main className="flex-1 p-6">
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-5'>
              <button className='rounded-full bg-black/40 p-1 hover:bg-white/10 transition-colors'>
                <ChevronLeft />
              </button>
              <button className='rounded-full bg-black/40 p-1 hover:bg-white/10
            transition-colors'>
                <ChevronRight />
              </button>
            </div>

            {/* imagem */}
            <div className='w-8 h-8 bg-red-400 rounded-full flex items-center justify-center'>
              <User size={24} />
            </div>
          </div>

          <h1 className='font-bold text-3xl mt-10'>Boa tarde</h1>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-4 mt-4'>
            {playlists.slice(0, 6).map((playlist, index) => (
              <CardSong
                key={index}
                name={playlist.name}
                image={playlist.image}
              />
            ))}
          </div>

          <h2 className='font-bold text-2xl mt-10'>Feito para Luis Fernando</h2>
          <div className='grid md:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2  gap-4 mt-4 '>
            <CardAlbum />
            <CardAlbum />
            <CardAlbum />
            <CardAlbum />
            <CardAlbum />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
