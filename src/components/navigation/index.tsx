import { tw } from 'twind';
import { useState } from 'react';
import Link from 'next/link';
import DropdownMenu from '@/components/navigation/dropdown';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type LinkType = {
  label: string;
  href: string;
  dropdown?: LinkType[];
};

const links: LinkType[] = [
  {
    label: `Features`,
    href: `/#features`,
  },
  {
    label: `Testimonials`,
    href: `/#testimonials`,
  },
  {
    label: `About Us`,
    href: `/about-us`,
    dropdown: [
      { label: `Life at DevSol`, href: `/life-at-devsol` },
      { label: `Blogs`, href: `/blogs/blogs` },
    ],
  },
  {
    label: `Projects`,
    href: `/#projects`,
  },
  {
    label: `Pricing`,
    href: `/#pricing`,
  },
  {
    label: `Contact Us`,
    href: `/about-us#contact`,
  },
];

const secondaryLinks: LinkType[] = [
  {
    label: `Contact`,
    href: `/contact`,
  },
  {
    label: `Get Started`,
    href: `/`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw(`p-2 text-gray-400`)}
  >
    <span className={tw(`sr-only`)}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw(`h-6 w-6`)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = ({ toggleDropdown, showDropdown }) => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: LinkType) => (
        <div key={link.label} className={tw(`relative`)}>
          <Link href={link.href} className={tw(`text-gray-500 block px-3 py-2 text-base font-medium`)}>
            {link.label}
          </Link>
          {link.dropdown && (
            <div>
              <button
                onClick={toggleDropdown}
                className={tw(`flex justify-between w-full text-left px-3 py-2 text-base font-medium text-gray-500`)}
              >
                More
                <svg
                  className={tw(`h-5 w-5`)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {showDropdown && <DropdownMenu links={link.dropdown} />}
            </div>
          )}
        </div>
      ))}
    </div>
    <div className={tw(`pt-4 pb-3 border-t border-gray-400`)}>
      <div className={tw(`px-2 space-y-1`)}>
        {secondaryLinks.map((link: LinkType) => (
          <Link
            key={`mobile-${link.label}`}
            href={link.href}
            className={tw(`block px-3 py-2 text-base font-medium text-gray-500`)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <nav className={tw(`bg-white`)} style={{ boxShadow: `0 4px 6px rgb(243, 244, 246)` }}>
      <div className={tw(`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`)}>
        <div className={tw(`flex items-center justify-between h-24`)}>
          <div className={tw(`flex items-center`)}>
            <div className={tw(`flex-shrink-0`)}>
              <Link href="/" className={tw(``)}>
                <img
                  className={tw(``)}
                  src="/logo.svg"
                  alt="DevSol - Expert Web Development & Digital Solutions"
                  style={{ height: `5rem`, width: `9.375rem` }}
                />
              </Link>
            </div>
            <div className={tw(`hidden md:block ml-36 relative`)}>
              <div className={tw(`ml-10 flex items-baseline space-x-4`)}>
                {links.map((link) => (
                  <div key={link.label} className={tw(`relative group`)}>
                    <Link
                      href={link.href}
                      className={tw(`text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium`)}
                    >
                      {link.label}
                    </Link>
                    {link.dropdown && (
                      <div className={tw(`absolute left-0 z-10 hidden group-hover:block`)}>
                        <DropdownMenu links={link.dropdown} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu && <MobileMenu toggleDropdown={toggleDropdown} showDropdown={showDropdown} />}
    </nav>
  );
};

export default Navigation;
