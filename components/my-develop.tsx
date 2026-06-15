import Image from "next/image";
import Link from "next/link";
import RunteqLogo from "../public/dev/RUNTEQ-Q-A.png";
import BoitoreLogo from "../public/dev/boitore.png";

const projects = [
  {
    href: "https://runteq-qanda.fly.dev",
    image: RunteqLogo,
    alt: "RUNTEQ QandA",
    title: "RUNTEQ QandA",
    description: "エンジニアスクール在学中に作成したCRUDアプリです。",
  },
  {
    href: "https://boitore.fly.dev",
    image: BoitoreLogo,
    alt: "Boiトレ",
    title: "Boiトレ",
    description: "劇団四季も使用している「母音法」を使って発声練習ができる個人開発サービスです。",
  },
];

const MyDevelop = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-6 my-8">
      {projects.map(({ href, image, alt, title, description }) => (
        <Link
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block border border-border-strong bg-white hover:shadow-card-hover transition-all duration-200 overflow-hidden mt-4 sm:mt-0"
        >
          <div className="relative w-full h-52 sm:h-64 bg-bg-muted">
            <Image src={image} alt={alt} fill className="object-cover" />
          </div>
          <div className="p-5">
            <h2 className="font-bold text-fg group-hover:opacity-60 transition-opacity tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-sm text-fg-muted leading-relaxed">
              {description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MyDevelop;
