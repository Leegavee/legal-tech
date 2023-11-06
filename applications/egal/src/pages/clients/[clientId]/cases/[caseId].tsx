// pages/clients/[clientId]/cases/[caseId].tsx
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { Case, Communication } from '@legavee/libs/domain/types'; // Adjust the import path as necessary
import { clientId } from '@legavee/stubs';
import NavBar from '@legavee/components/nav-bar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0'; // Adjust the import path as necessary
const CommunicationDetails = () => {
  const router = useRouter();
  const { caseId } = router.query;

  const [caseDetails, setCaseDetails] = useState<Case | null>(null);

  // Fetch case details when caseId changes
  useEffect(() => {
    if (caseId) {
      fetch(`/api/cases/${clientId}`)
        .then((response) => response.json())
        .then((cases: Case[]) => cases.find((c) => c.id === caseId))
        .then(setCaseDetails)
        .catch(console.error); // In production, handle errors properly
    }
  }, [caseId, clientId]);

  // Navigate to the add communication page
  const handleAddCommunication = () => {
    router.push(`/clients/${clientId}/cases/${caseId}/communications/new`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Case Details</h1>
      {caseDetails ? (
        <>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Background</h2>
            <p className="p-4 bg-white rounded shadow">
              {caseDetails.background}
            </p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Summary</h2>
            <p className="p-4 bg-white rounded shadow">{caseDetails.summary}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Communications</h2>
            <ul className="space-y-2">
              {caseDetails.communications.map(
                (communication: Communication) => (
                  <li
                    key={communication.id}
                    className="p-4 bg-white rounded shadow"
                  >
                    {communication.body}
                  </li>
                ),
              )}
            </ul>
          </div>

          <button
            onClick={handleAddCommunication}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Add New Communication
          </button>
        </>
      ) : (
        <p className="text-center">Loading...</p>
      )}
    </div>
  );
};

export default function CommunicationDetailsPage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          <CommunicationDetails />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
