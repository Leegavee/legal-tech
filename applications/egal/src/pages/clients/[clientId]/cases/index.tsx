// pages/clients/[clientId]/cases.tsx
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Case } from '@legavee/libs/domain/types';
import NavBar from '@legavee/components/nav-bar';
import { withPageAuthRequired } from '@auth0/nextjs-auth0'; // Adjust the import path as necessary

const CasesBody = () => {
  const router = useRouter();
  const { clientId } = router.query;
  const [cases, setCases] = useState<Case[]>([]);
  const [background, setBackground] = useState('');

  // Fetch cases when clientId changes
  useEffect(() => {
    if (clientId) {
      fetch(`/api/cases/${clientId}`)
        .then((response) => response.json())
        .then(setCases)
        .catch(console.error); // In production, handle errors properly
    }
  }, [clientId]);

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newCase: Case = {
      id: Date.now().toString(), // Simple ID generation for example purposes
      background: background,
      summary: background, // Initially, summary is the same as background
      communications: [], // No initial communications
    };

    const response = await fetch(`/api/cases/${clientId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCase),
    });

    if (response.ok) {
      const createdCase = await response.json();
      setCases([...cases, createdCase]);
      setBackground(''); // Reset the form
    } else {
      console.error('Failed to create a case'); // In production, handle errors properly
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cases for Client {clientId}</h1>
      <ul className="mb-4">
        {cases.map((caseItem) => (
          <li key={caseItem.id} className="mb-2">
            <Link
              href={`/clients/${clientId}/cases/${caseItem.id}`}
              legacyBehavior
            >
              <a className="text-blue-600 hover:underline">
                {caseItem.summary}
              </a>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-3">Create a New Case</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label
            htmlFor="background"
            className="block text-sm font-medium text-gray-700"
          >
            Background:
          </label>
          <textarea
            id="background"
            name="background"
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            required
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Create Case
        </button>
      </form>
    </div>
  );
};

export default function CasesPage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          <CasesBody />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
