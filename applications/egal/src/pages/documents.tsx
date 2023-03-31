import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';
import { DefaultLayout } from '@legavee/layouts/default-layout';

export default function Documents() {
  return <DefaultLayout></DefaultLayout>;
}

export const getServerSideProps = withPageAuthRequired();
