import { NextRequest } from "next/server";
import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "edge",
};

const font = fetch(
  new URL("../../public/font/NotoSansJP-Bold.woff", import.meta.url),
).then((res) => res.arrayBuffer());

export default async function ogp(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fontData = await font;

  const hasTitle = searchParams.has("title");
  const title = hasTitle
    ? searchParams.get("title")?.slice(0, 100)
    : "ネトゲ廃人からエンジニアブログ";

  const hasDate = searchParams.has("date");
  const date = hasDate ? searchParams.get("date") : "";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 50,
          backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
            '<svg height="600" viewBox="0 0 900 600" width="900" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h900v600h-900z" fill="#001829"/><g fill="none" stroke="#297ea6" stroke-width="2"><path d="m0-147 127.3 73.5v147l-127.3 73.5-127.3-73.5v-147z" transform="translate(706 316)"/><path d="m0-131 113.4 65.5v131l-113.4 65.5-113.4-65.5v-131z" transform="translate(141 106)"/><path d="m0-127 110 63.5v127l-110 63.5-110-63.5v-127z" transform="translate(252 581)"/></g></svg>',
          )}`})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0px 150px",
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          position: "relative",
        }}
      >
        <h2
          style={{
            width: "100%",
            color: "white",
            fontSize: 60,
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          }}
        >
          {title}
        </h2>
        <div
          style={{
            display: "flex",
            position: "absolute",
            width: "100%",
            bottom: 0,
            justifyContent: "space-between",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: 40,
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            {date}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={`https://github.com/konjikicity.png`}
              alt=""
              width="60"
              height="60"
              style={{ borderRadius: 60, marginRight: 10 }}
            />
            <h2
              style={{
                color: "white",
                fontSize: 40,
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              @konjikicity
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "NotoSansJP",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
