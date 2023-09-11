import { Shuffle, SkipBack, Play, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2, AlignCenter } from "lucide-react";
import Image from "next/image";

// images
import Liniker from '../../../../public/assets/liniker.jpg';


export default function Footer() {
    return (
        <footer className="sticky bottom-0 bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className='flex gap-3 items-center'>
                <Image src={Liniker} alt='liniker' width={60} height={60} />
                <div className='sm:flex flex-col hidden'>
                    <strong className='font-normal'>Zero</strong>
                    <span className='text-xs text-zinc-400'>Liniker</span>
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className='flex items-center gap-6'>
                    <Shuffle size={20} />
                    <SkipBack fill='white' size={20} />
                    <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white pl-0.5 text-black hover:scale-110 transition'>
                        <Play fill='bg-black' size={20} />
                    </button>
                    <SkipForward fill='white' size={20} />
                    <Repeat size={20} />
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <span className='text-xs text-zinc-400'>0:59</span>
                    <div className='sm:w-80 w-40 h-1 rounded-full bg-zinc-600'>
                        <div className='bg-zinc-200 sm:w-34 w-16 h-1 rounded-full'></div>
                    </div>
                    <span className='text-xs text-zinc-400'>3:05</span>
                </div>
            </div>
            <div className='sm:flex hidden items-center gap-3'>
                <Mic2 size={20} />
                <LayoutList size={20} />
                <Laptop2 size={20} />
                <div className='flex items-center gap-2'>
                    <Volume size={20} />
                    <div className='w-10 h-1 rounded-full bg-zinc-600'>
                        <div className='bg-zinc-200 w-6 h-1 rounded-full'></div>
                    </div>
                </div>
                <Maximize2 size={20} />
            </div>
            <div className="flex items-center sm:hidden rounded-md hover:bg-white/20 p-2 cursor-pointer transition duration-300">
                <AlignCenter size={22} />
            </div>
        </footer>
    )
}