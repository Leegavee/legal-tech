import Link from 'next/link';
import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/router';

export default function Login() {
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 uppercase">
          welcome to legavee
        </h1>
        <div className="text-black text-center mt-3">
          Log in with your Legavee account to continue
        </div>
        <div className="mt-6 flex justify-center">
          <Link
            href={'/api/auth/login'}
            className="w-full text-center mr-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Log in
          </Link>
          <Link
            href={'/api/auth/signin'}
            className="w-full text-center ml-6 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
          >
            Sign up
          </Link>
        </div>
        <div className="relative flex items-center justify-center w-full mt-6 border border-t"></div>
      </div>
    </div>
  );
}
