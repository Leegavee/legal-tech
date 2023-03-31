import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import { DefaultLayout } from '@legavee/layouts/default-layout';
import DashboardHeader from '@legavee/components/dashboard-header';
import useLoggedInClient from '@legavee/libs/hooks/useLoggedInClient';
import LoadingSpinner from '@legavee/components/loading-spinner';
import Link from 'next/link';

export function Summary() {
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-8xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-indigo-600">
          Welcome back, Mr Smith,
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Progress as of 20/3/2023
        </h1>
        <p className="mt-6 text-xl leading-8">
          Welcome back to your conveyancing portal for your property at 14
          Glossop Road, CR5 1ED. Here's a summary of your progress so far:
        </p>
        <figure className="mt-10 border-l border-indigo-600 pl-9">
          <blockquote className="font-semibold text-gray-900">
            <p>
              “You've successfully initiated the process by providing us with
              your instructions. We've obtained the title deeds for the property
              from the Land Registry, and you've received, signed, and returned
              the initial paperwork to us. Great job!”
            </p>
          </blockquote>
          <figcaption className="mt-6 flex gap-x-4">
            <img
              className="h-6 w-6 flex-none rounded-full bg-gray-50"
              src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="text-sm leading-6">
              <strong className="font-semibold text-gray-900">
                Michelle Ramone
              </strong>{' '}
              – Property progress manager
            </div>
          </figcaption>
        </figure>
        <div className="mt-10 max-w-6xl">
          <p className="mb-4">
            Our team has reviewed the paperwork and sent a draft contract to the
            buyer's solicitor. They've come back with a few enquiries, and we've
            forwarded them to you.
          </p>
          <p className="mb-4">
            Thank you for choosing our services, and we look forward to helping
            you complete the conveyancing process smoothly!
          </p>
        </div>
        {/*<figure className="mt-16">*/}
        {/*  <img*/}
        {/*    className="aspect-video rounded-xl bg-gray-50 object-cover"*/}
        {/*    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"*/}
        {/*    alt=""*/}
        {/*  />*/}
        {/*  <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">*/}
        {/*    <InformationCircleIcon*/}
        {/*      className="mt-0.5 h-5 w-5 flex-none text-gray-300"*/}
        {/*      aria-hidden="true"*/}
        {/*    />*/}
        {/*    Faucibus commodo massa rhoncus, volutpat.*/}
        {/*  </figcaption>*/}
        {/*</figure>*/}
        <div className="mt-16 max-w-6xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Everything you need to get up and running
          </h2>
          <p className="mt-8 mb-4">
            <strong>Action required:</strong> Please{' '}
            <Link href="/progress" className="text-indigo-600 font-bold">
              review and respond
            </Link>{' '}
            to the enquiries we've sent you. This is an important step to move
            forward with the conveyancing process.
          </p>
          <p className="mt-8 mb-4">
            Once you provide us with the required information, we'll be able to
            address the buyer's solicitor's enquiries and continue working
            towards completing your property sale. If you have any questions or
            need assistance, please don't hesitate to{' '}
            <Link href="/chat" className="text-indigo-600 font-bold">
              get in touch
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { client, loading, isClientPersisted } = useLoggedInClient();
  // const { cases, loading: loadingCases } = useCasesForClient(client);

  // useEffect(() => {
  //   if (client && (!cases || cases.length === 0)) {
  //     router.push('/new-case');
  //   }
  // }, [cases]);

  return (
    <DefaultLayout>
      {loading && <LoadingSpinner />}
      <div className="p-8">
        <DashboardHeader />
        <Summary />
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
