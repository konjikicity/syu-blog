import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";
import OgpComponents from "../../components/ogp-components";

export const config = {
  runtime: "edge",
};

export default async function ogp(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "syu-blog";

  const fontData = await fetchFont(title);

  return new ImageResponse(<OgpComponents title={title} />, {
    width: 1200,
    height: 600,
    fonts: [
      {
        name: "NotoSansJP",
        data: fontData,
        style: "normal",
      },
    ],
  });
}

export async function fetchFont(text: string): Promise<ArrayBuffer | null> {
  const googleFontsUrl = `https://fonts.googleapis.com/css2?family=Noto+Sans+JP&text=${encodeURIComponent(
    text,
  )}`;

  const css = await (
    await fetch(googleFontsUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (!resource) return null;
  const res = await fetch(resource[1]);
  return res.arrayBuffer();
}
