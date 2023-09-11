import Image, { StaticImageData } from "next/image";

interface ItemSongProps {
    link?: string;
    name: string;
    image: StaticImageData;
}

export default function ItemSong({ link, name, image }: ItemSongProps) {
    return (
        <a href={link} className='flex items-center gap-2 group'>
            <div className="w-12 h-12 transition duration-300 group-hover:scale-110">
                <Image src={image} alt='alt' className="w-full h-full rounded" width={100} height={100} />
            </div>

            <p className="text-sm text-zinc-400 group-hover:text-zinc-100 hidden sm:block">
                {name}
            </p>
        </a>
    );
}