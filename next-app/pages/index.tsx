import Layout from "../components/layout";

export default function IndexPage() {
  return (
    <Layout>
      <h1>Example Next App</h1>
      <p>
        This is an example Next app that connects to the NestJs BankID OIDC
        provider via next-auth and gets a session from it.
      </p>
    </Layout>
  );
}
