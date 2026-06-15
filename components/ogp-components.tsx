type Props = {
  title: string;
};

const OgpComponents = ({ title }: Props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${`data:image/svg+xml,${encodeURIComponent(
          '<svg height="600" viewBox="0 0 900 600" width="900" xmlns="http://www.w3.org/2000/svg"><path d="m0 0h900v600h-900z" fill="#0f172a"/><g fill="none" stroke="#2563eb" stroke-width="1.5"><path d="m0-147 127.3 73.5v147l-127.3 73.5-127.3-73.5v-147z" transform="translate(706 316)"/><path d="m0-131 113.4 65.5v131l-113.4 65.5-113.4-65.5v-131z" transform="translate(141 106)"/><path d="m0-127 110 63.5v127l-110 63.5-110-63.5v-127z" transform="translate(252 581)"/></g></svg>',
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
        position: "relative",
      }}
    >
      <h2
        style={{
          width: "100%",
          color: "#e2e8f0",
          fontSize: 56,
          textShadow: "0px 2px 8px rgba(0, 0, 0, 0.4)",
          lineHeight: 1.4,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "flex",
          position: "absolute",
          width: "100%",
          bottom: 24,
          justifyContent: "flex-end",
          paddingRight: 32,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="https://github.com/konjikicity.png"
            alt="Syu Onoda"
            width="48"
            height="48"
            style={{ borderRadius: 48 }}
          />
          <span
            style={{
              color: "#94a3b8",
              fontSize: 32,
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
