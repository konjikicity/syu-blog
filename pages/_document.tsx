import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-bg" lang="ja">
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
