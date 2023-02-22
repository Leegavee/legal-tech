import { BoardMessages, Layout } from '@legavee/modules';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <Layout>
      <BoardMessages />
    </Layout>
  );
}
