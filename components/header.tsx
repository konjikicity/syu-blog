import Link from "next/link";
import Image from "next/image";
import LogoImage from "../public/logo/logo.png";
import { useEffect, useState } from "react";
import { Navbar, Collapse, Typography, IconButton } from "../components/style";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 hover:opacity-50 transition text-lg text-[#DDE6ED]"
      >
        <Link href="/" className="flex items-center font-bold">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue"
        className="p-1 text-[#DDE6ED] transition hover:opacity-50"
      >
        <Link href="/prof" className="flex items-center text-lg font-bold ">
          Prof
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="text-[#DDE6ED] p-1 transition hover:opacity-50"
      >
        <Link href="/dev" className="flex items-center text-lg font-bold">
          Dev
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="bg-[#526D82] border-none sticky top-0 z-10 h-max max-w-full rounded-none  px-4 lg:px-52">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="text-[#DDE6ED] font-bold mr-4 sm:text-lg cursor-pointer py-1.5"
        >
          <Image src={LogoImage} alt="logo" width={200} height={50} />
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                stroke="white"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
};

export default Header;
