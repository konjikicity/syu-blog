import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import Header from "../components/header";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>{`ネトゲ廃人からエンジニアに転生したブログ`}</title>
        <Meta />
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
