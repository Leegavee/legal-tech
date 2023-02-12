import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@legavee/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <button className='px-6 py-2 rounded bg-slate-400 hover:bg-slate-500 text-slate-100'>
         <Link className='btn btn-blue' href='/api/auth/login'>
            login
        </Link>
      </button>
    </>
  );
}
