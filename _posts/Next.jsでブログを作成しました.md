---
title: "Next.jsでブログを作成しました"
date: "2023-09-18"
tags:
  - "日記"
  - "next.js"
---

## はじめに

こんにちは。リモートでWeb Engineerをしている Syu Onoda と申します。
私は未経験からWeb Engineerになり1年がたちました。
ネトゲ廃人の僕を救ってくれたエンジニアというお仕事には非常に感謝しており、
ほんの少しでも貢献したいという気持ちでこのブログを作成しました。
自分のアウトプット中心となりますが、誰かの役に立てるよう記事を作成していきます。

## Next.jsでのブログ作成

今回以下の理由でNext.jsを選択しました。

- SSGやSSRをサポートしているため高速なページロードが可能
- vercelとの統合によるデプロイの手軽さ
- Next.jsとtypeScriptの開発経験をつみたかったため
- ~~なんかかっこよさそう~~

開発コストを下げるために使用できるものはフル活用

### テンプレートの使用
Next.jsでは公式のexample集があるのでblogのtempleteを使用しました。
[blog-starter-kit](https://vercel.com/templates/next.js/blog-starter-kit)

### デザイン
Material UIのコンポーネントも使用したいが、tailwindで微調整もしたかったので
[Material Tailwind](https://www.material-tailwind.com/)を使用しました。
