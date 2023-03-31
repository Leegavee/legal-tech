import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React, { useEffect } from 'react';
import { DefaultLayout } from '@legavee/layouts/default-layout';
import DashboardHeader from '@legavee/components/dashboard-header';
import useLoggedInClient from '@legavee/libs/hooks/useLoggedInClient';
import EventList from '@legavee/components/event-list/event-list';
import { Event } from '@legavee/components/event-list/types';
import LoadingSpinner from '@legavee/components/loading-spinner';
import { router } from 'next/client';
import { useCasesForClient } from '@legavee/libs/hooks/useCasesForClient';
import { mockEvents } from '@legavee/data/conveyancing-events';

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
        <EventList events={mockEvents} />
      </div>
    </DefaultLayout>
  );
}

export const getServerSideProps = withPageAuthRequired();
