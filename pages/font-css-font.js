import Layout from "../components/layout";

export default function Page() {
  return (
    <Layout>
      <article>
        <h1>Font — CSS Font</h1>
        <p>This uses default font.</p>
        <p style={{ fontFamily: 'MuseoModerno' }}>This uses MuseoModerno font.</p>
      </article>
    </Layout>
  );
}