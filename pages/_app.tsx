import { AppProps } from "next/app";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "../styles/index.css";
import "zenn-content-css";
import { useEffect } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const noto = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
  preload: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return (
    <div className={`${inter.variable} ${noto.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
