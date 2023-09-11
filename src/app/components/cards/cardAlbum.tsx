import Image from "next/image";
import Liniker from '../../../../public/assets/liniker.jpg';

export default function CardAlbum() {
    return (
        <a href='#' className='bg-white/5 p-3 rounded hover:bg-white/10 flex flex-col gap-2'>
            <Image src={Liniker} alt='liniker' className='w-full' />
            <strong className='font-semibold'>Indigo Borboleta Anil</strong>
            <span className='text-sm text-zinc-400'>Liniker</span>
        </a>
    );
};