import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-[#DDE6ED] text-lg font-bold tracking-tight md:tracking-tighter leading-tight my-12 mx-12">
      <Link href="/" className="hover:underline">
        ネトゲ廃人からエンジニアに転生した人のブログ
      </Link>
    </h2>
  );
};

export default Header;
