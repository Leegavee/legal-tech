import { BoardMessages, Layout } from '@legavee/modules';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const CaseSession = () => {
  return (
    <>
      <h1>Case Session</h1>
      {/*<BoardMessages />*/}
    </>
  );
};

export default function Home() {
  return (
    <Layout>
      <CaseSession />
    </Layout>
  );
}
