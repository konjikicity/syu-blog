import Container from "../components/container";
import Layout from "../components/layout";
import Profile from "../components/profile";

export default function Prof() {
  return (
    <Layout title="Profile">
      <Container>
        <div className="pt-12 pb-6 border-b border-border-strong">
          <h1 className="text-4xl font-black text-fg tracking-tighter">Profile</h1>
          <p className="mt-2 text-sm text-fg-muted">Syu Onoda について</p>
        </div>
        <Profile />
      </Container>
    </Layout>
  );
}
