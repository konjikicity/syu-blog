import Container from "../components/container";
import Layout from "../components/layout";
import MyDevelop from "../components/my-develop";

export default function Dev() {
  return (
    <Layout title="Dev">
      <Container>
        <div className="pt-12 pb-6 border-b border-border-strong">
          <h1 className="text-4xl font-black text-fg tracking-tighter">Dev</h1>
          <p className="mt-2 text-sm text-fg-muted">個人開発作品の一覧です。</p>
        </div>
        <MyDevelop />
      </Container>
    </Layout>
  );
}
