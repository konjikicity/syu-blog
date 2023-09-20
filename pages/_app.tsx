import { AppProps } from "next/app";
import "../styles/index.css";
import "zenn-content-css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return <Component {...pageProps} />;
}
