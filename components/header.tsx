import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/logo/logo.png";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/tags", label: "Categories" },
  { href: "/prof", label: "Prof" },
  { href: "/dev", label: "Dev" },
];

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-fg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="bg-white px-1 py-0.5 inline-flex">
            <Image src={LogoImage} alt="syu-blog logo" width={130} height={36} />
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-fg-inverse text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="lg:hidden p-2 text-fg-inverse hover:opacity-60 transition-opacity"
          onClick={() => setOpenNav(!openNav)}
          aria-label={openNav ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={openNav}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {openNav && (
        <div className="lg:hidden border-t border-white/10 bg-fg px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-fg-inverse text-sm font-medium tracking-wide hover:opacity-60 transition-opacity"
                onClick={() => setOpenNav(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
