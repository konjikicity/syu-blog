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
          background: "#526D82",
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
