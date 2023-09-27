type Props = {
  title?: string;
};

const Meta = ({ title }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Noto+Sans+JP:wght@400;500;700&family=Roboto:ital,wght@0,500;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        property="og:image"
        content={
          title ? `${baseUrl}/api/og?title=${title}` : `${baseUrl}/api/og`
        }
      />
      <meta
        property="og:description"
        content="元ネトゲ廃人のエンジニアブログです。"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:title" content={title ? title : "syu-blog"} />
      <meta
        property="og:url"
        content={title ? `${baseUrl}/posts/${title}` : `${baseUrl}`}
      />
      <meta property="og:site_name" content="syu-blog" />
      <meta property="og:type" content="blog" />
    </>
  );
};

export default Meta;
