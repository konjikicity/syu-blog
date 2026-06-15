import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-fg">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-semibold text-fg-inverse tracking-widest uppercase mb-3">About</p>
            <p className="text-sm text-fg-inverse/60 leading-relaxed">
              元ネトゲ廃人のエンジニアブログ。<br />
              Web 技術・日常・個人開発を綴ります。
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-fg-inverse tracking-widest uppercase mb-3">Links</p>
            <ul className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/tags", label: "Categories" },
                { href: "/prof", label: "Prof" },
                { href: "/dev", label: "Dev" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-fg-inverse/60 hover:text-fg-inverse transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-fg-inverse tracking-widest uppercase mb-3">Social</p>
            <div className="flex gap-4">
              <a
                href="https://twitter.com/konjikicity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-fg-inverse/60 hover:text-fg-inverse transition-colors"
              >
                <i className="fab fa-twitter text-lg" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/konjikicity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-fg-inverse/60 hover:text-fg-inverse transition-colors"
              >
                <i className="fab fa-github text-lg" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-fg-inverse/30 text-center tracking-widest" suppressHydrationWarning>
            © {new Date().getFullYear()} SYU BLOG
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
