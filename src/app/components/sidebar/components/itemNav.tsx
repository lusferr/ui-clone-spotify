import { HomeIcon } from "lucide-react";

interface ItemNavProps {
    link?: string;
    name: string;
    icon: React.ReactNode;
}

export default function ItemNav({ link, name, icon }: ItemNavProps) {
    return (
        <a href={link} className='flex items-center gap-3 '>
            <div>
                {icon}
            </div>
            <p className="text-xs font-semibold text-zinc-200 hidden sm:block">{name}</p>
        </a>
    );
}