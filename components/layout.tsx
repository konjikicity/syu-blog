import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
  title?: string;
  slug?: string;
  isPost?: boolean;
  coverImage?: string;
};

const Layout = ({ children, title, slug, isPost, coverImage }: Props) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | syu-blog` : "syu-blog"}</title>
        <Meta title={title} slug={slug} isPost={isPost} coverImage={coverImage} />
      </Head>
      <Header />
      <div className="min-h-screen mb-12">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
