import { tw } from 'twind';
import Link from 'next/link';

interface DropdownMenuProps {
    links: {
        label: string;
        href: string;
    }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ links }) => (
    <div className={tw(`absolute bg-white shadow-lg mt-1 rounded-md z-10 w-48`)} role="menu" aria-orientation="vertical">
        {links.map((link) => (
            <Link
                key={link.label}
                href={link.href}
                className={tw(`block px-4 py-2 text-gray-700 hover:bg-gray-100`)}
                role="menuitem"
            >
                {link.label}
            </Link>
        ))}
    </div>
);

export default DropdownMenu;
