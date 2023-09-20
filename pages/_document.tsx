import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-[#526D82]" lang="ja">
      <Head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
