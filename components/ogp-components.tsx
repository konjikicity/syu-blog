type Props = {
  title: string;
};

const OgpComponents = ({ title }: Props) => {
  const isSiteTop = !title || title === "syu-blog";
  const displayTitle = isSiteTop ? "SYU BLOG" : title;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#F8F8F8",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        fontFamily: "NotoSansJP, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 16,
          background: "#111111",
        }}
      />

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "0 80px",
        }}
      >
        <span
          style={{
            color: "#555555",
            fontSize: 24,
            letterSpacing: 6,
            marginBottom: 32,
          }}
        >
          SYU BLOG
        </span>
        <h2
          style={{
            color: "#111111",
            fontSize: isSiteTop ? 96 : 64,
            fontWeight: 700,
            lineHeight: 1.3,
            margin: 0,
            letterSpacing: isSiteTop ? 4 : 0,
          }}
        >
          {displayTitle}
        </h2>
      </div>

      <div
        style={{
          width: "100%",
          padding: "24px 80px",
          borderTop: "1px solid #D8D8D8",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span
          style={{
            color: "#555555",
            fontSize: 24,
          }}
        >
          元ネトゲ廃人のエンジニアブログ
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img
            src="https://github.com/konjikicity.png"
            alt="Syu Onoda"
            width="48"
            height="48"
            style={{ borderRadius: 48 }}
          />
          <span
            style={{
              color: "#111111",
              fontSize: 24,
            }}
          >
            @konjikicity
          </span>
        </div>
      </div>
    </div>
  );
};

export default OgpComponents;
