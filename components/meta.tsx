type Props = {
  title?: string;
  slug?: string;
  isPost?: boolean;
  coverImage?: string;
};

const Meta = ({ title, slug, isPost, coverImage }: Props) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const ogUrl = isPost && slug ? `${baseUrl}/posts/${slug}` : baseUrl;
  const ogType = isPost ? "article" : "website";
  const resolvedCoverImage =
    isPost && coverImage
      ? /^https?:\/\//.test(coverImage)
        ? coverImage
        : `${baseUrl}${coverImage}`
      : null;
  const ogImage =
    resolvedCoverImage ??
    (title
      ? `${baseUrl}/api/og?title=${encodeURIComponent(title)}`
      : `${baseUrl}/api/og`);

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
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#fff" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:title" content={title ?? "syu-blog"} />
      <meta
        property="og:description"
        content="元ネトゲ廃人のエンジニアブログです。"
      />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:site_name" content="syu-blog" />
      <meta property="og:type" content={ogType} />
    </>
  );
};

export default Meta;
