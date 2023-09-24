---
title: "Next.jsでブログを作成しました"
date: "2023-09-18"
tags:
  - "next.js"
---

## はじめに

こんにちは。開発会社にてWeb EngineerをしているSyu Onoda と申します。
私は未経験からWeb Engineerになり1年がたちました。
ネトゲ廃人の僕を救ってくれたエンジニアというお仕事には非常に感謝しており、
ほんの少しでも貢献したいという気持ちでこのブログを作成しました。
自分のアウトプット中心となりますが、誰かの役に立てるよう記事を作成していきます。

## Next.jsでのブログ作成

今回以下の理由で[Next.js](https://nextjs.org/)を選択しました。

- SSGやSSRをサポートしているため高速なページロードが可能
- vercelとの統合によるデプロイの手軽さ
- Next.jsとtypeScriptの開発経験をつみたかったため
- ~~なんかかっこよさそう~~

そして開発コストを下げるために使用できるものはフル活用します

## テンプレートの使用

Next.jsでは公式のexample集があるので[blog-starter-kit](https://vercel.com/templates/next.js/blog-starter-kit)のtempleteを使用しました。
https://vercel.com/templates/next.js/blog-starter-kit

下記コマンドでインストールします

```shell
$ npx create-next-app --example blog-starter blog-starter-app
```

## デザイン

Material UIのコンポーネントの使用を検討していましたが、tailwindで微調整もしたかったので
いいとこどりできる[material-tailwind](https://www.material-tailwind.com/)を使用しました
https://www.material-tailwind.com/

下記コマンドでインストールします

```shell
$ yarn add @material-tailwind/react
```

Next.js13のappDirとサーバーコンポーネントを使用する場合は
別にファイルを作成し、クライアントサイドで読み込む必要があります。

```tsx: style.tsx
"use client";

import {
  ThemeProvider,
  Button,

} from "@material-tailwind/react";
export {
  ThemeProvider,
  Button,
  Card,
};

```

```tsx
import { Card, CardBody, Typography } from "../components/style";
```

ここで読み込んだコンポーネントをimportして使用できます。

## アイコン

下記を使用しました。
https://devicon.dev/
https://fontawesome.com/

## zenn-markdown-htmlとzenn-content-cssとzenn-embed-elementsの導入

公式のblog-starterは[remark](https://github.com/remarkjs/remark)というライブラリが使用されていますが、
リッチとは言い難いので、zennのマークダウンを使用できるようにしました。
MITライセンスに感謝です。
https://github.com/zenn-dev/zenn-editor

下記コマンドで導入

```shell
$ yarn add zenn-markdown-html zenn-content-css zenn-embed-elements
```

### 既存のマークダウン処理をzenn-markdown-htmlを使用するように変更

markdownToHtmlをzenn-markdown-htmlに変更します。

```tsx: [slug].tsx
import markdownToHtml from "zenn-markdown-html"; // 変更

~ 省略

export async function getStaticProps({ params }: Params) {

  ~ 省略

  const content = await markdownToHtml(post.content || "", {
    embedOrigin: "https://embed.zenn.studio", // 埋め込みのオプションを追加
  });

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

```

### zenn-content-cssのimport

zenn-content-cssをimportして`znc`クラスを付与します
ブログ全体でcssが使用したい場合は`_app.tsx`でimportしても大丈夫です。

```tsx:post-body.tsx
import "zenn-content-css"; // 追加

 type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto znc text-[#DDE6ED] "> // zncクラスを付与
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;

```

### zenn-embed-elementsの追加

こちらはクライアントサイドで読み込む必要があるので、
reactの`useEffect`を使用します。
またheadタグにscriptを追加すると埋め込みtweetやmermaid記法にも対応可能です。

```tsx:_app.tsx
 import { AppProps } from "next/app";
import "../styles/index.css";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  }, []);

  return <Component {...pageProps} />;
}

```

```tsx:_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="bg-[#526D82]" lang="ja">
      <Head>
        <script src="https://embed.zenn.studio/js/listen-embed-event.js"></script> //scriptの埋め込み
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

```

以上でblog-starterでzennのmarkdownが使用可能になりました。
:::message alert
リンクの埋め込みは非商用利用のみなので注意してください
:::

## タグ機能の追加

タグ機能について解説いただいている記事を参考にタグ機能を実装しました。
感謝です。
https://zenn.dev/miketako3/articles/519f5fbd1f5042

## その他追加機能

ここまででかなり本格的なブログが構築できました。

あと追加した機能を上げると

- タグの一覧表示
- ページネーション
- snsのshareボタンの追加
- OGPの設定

上記は別の記事で書こうと思っておりますので、気長にお待ちください....

## まとめ

本記事ではNext.jsでblog-starterの導入から少しカスタマイズするところまでを紹介しました。
一から作成するとすごく大変のような気がしますが、
テンプレートとtailwindを使用するとかなり工数の削減ができますので、
みなさんの独自ブログ作成に参考になれば幸いです。
