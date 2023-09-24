import Footer from "./footer";
import Meta from "./meta";
import Head from "next/head";
import Header from "../components/header";

type Props = {
  children: React.ReactNode;
  title?: string;
  date?: string;
};

const Layout = ({ children, title, date }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <Meta title={title} date={date} />
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
