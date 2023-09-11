import { Play } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface CardSongProps {
    name: string;
    image: StaticImageData;
}

export default function CardSong({ name, image }: CardSongProps) {
    return (
        <a
            href='#'
            className='group relative bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors duration-300'
        >
            <div className="w-28 h-28">
                <Image src={image} alt='liniker' className="w-full h-full" width={100} height={100} />
            </div>
            <strong>{name}</strong>
            <button className='w-12 h-12 flex items-center justify-center pl-0.5 rounded-full bg-green-400 text-black absolute right-4 transition-opacity duration-300 shadow-lg opacity-0 group-hover:opacity-100'>
                <Play fill='bg-black'/>
            </button>
        </a>
    );
};