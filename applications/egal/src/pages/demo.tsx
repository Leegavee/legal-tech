import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { BoardMessages, Layout } from '@legavee/modules';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import NavBar from '@legavee/components/nav-bar';
import React from 'react';
import ChatWindow from '@legavee/components/chat-window';

// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Demo() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          <ChatWindow />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
