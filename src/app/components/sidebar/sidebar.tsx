import { HomeIcon, Library, Search } from "lucide-react";
import ItemSong from "./components/itemSong";
import ItemNav from "./components/itemNav";
import { StaticImageData } from "next/image";

interface Playlist {
    name: string;
    link: string;
    image: StaticImageData;
}

interface SidebarProps {
    playlists: Playlist[];
}

export default function Sidebar({ playlists }: SidebarProps) {
    return (
        <aside className="md:w-64 xs:w-22 bg-zinc-950 p-6">
            <nav className='space-y-5'>
                <ItemNav name="Início" icon={<HomeIcon />} link="#" />
                <ItemNav name="Buscar" icon={<Search />} link="#" />
                <ItemNav name="Sua Biblioteca" icon={<Library />} link="#" />
            </nav>

            <div className="gap-2 mt-6 pt-6 border-t border-zinc-800 hidden sm:flex">
                <button className="text-sm text-black px-2 py-1 rounded-3xl bg-white w-fit">
                    Playlists
                </button>
                <button className="text-sm text-white px-2 py-1 rounded-3xl bg-white/10 w-fit">
                    Artistas
                </button>
            </div>
            <nav className='mt-4 flex flex-col gap-3'>

                {playlists.map((item, i) => (
                    <ItemSong
                        key={i}
                        name={item.name}
                        image={item.image}
                        link={item.link} />
                ))}
            </nav>
        </aside>
    )
}