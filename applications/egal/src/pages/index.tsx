import { useUser } from '@auth0/nextjs-auth0/client';
import { BoardMessages, SideBar, Layout } from '@legavee/modules';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { user } = useUser();
  return (
    <Layout>
      <BoardMessages />
    </Layout>
  );
}
