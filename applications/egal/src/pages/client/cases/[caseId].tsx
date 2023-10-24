import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import NavBar from '@legavee/components/nav-bar';
import React, { useState } from 'react';

import { useRouter } from 'next/router';

const CaseDetailsPage = () => {
  const router = useRouter();
  const { caseId } = router.query;

  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          <h1>Case {caseId} Details</h1>
          <section>
            <h2>Overview</h2>
            {/* Display overview content or link to upload overview */}
          </section>
          <section>
            <h2>Inbound Communications</h2>
            {/* List inbound communications or provide a link/button to upload */}
          </section>
          <section>
            <h2>Outbound Communications</h2>
            {/* List outbound communications or provide a link/button to upload */}
          </section>
        </div>
      </div>
    </>
  );
};

export default CaseDetailsPage;

export const getServerSideProps = withPageAuthRequired();
