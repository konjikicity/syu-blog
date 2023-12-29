import { Head, Html, Main, NextScript } from "next/document";
import Meta from "../components/meta";

export default function Document() {
  return (
    <Html className="bg-[#526D82]" lang="ja">
      <Head>
        <Meta />
        <script src="https://embed.zenn.studio/js/listen-embed-event.js">
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
