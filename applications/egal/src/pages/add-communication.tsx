import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import NavBar from '@legavee/components/nav-bar';
import React, { useState } from 'react';
import { redactPii } from '@legavee/redact';
// @ts-ignore
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function LoadingPanel() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* You can use any spinner or just a text to indicate loading */}
      <div className="bg-white p-4 rounded-md">
        <p>Loading...</p>
      </div>
    </div>
  );
}

const CommunicationForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [buttonText, setButtonText] = useState('Process');
  const [isLoading, setIsLoading] = useState(false);

  const handleProcess = async () => {
    setIsLoading(true);
    const response = await fetch('/api/redact-pii', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: content }),
    });

    const redactedContent = await response.json();

    setContent(redactedContent);
    setButtonText('Save');
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-full p-4">
      <h1 className="text-2xl font-semibold mb-4">Add Communication</h1>

      <label className="mb-2">Document Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="mb-4 p-2 border rounded-md"
        placeholder="Enter document title"
      />

      <label className="mb-2">Document Content</label>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-grow p-2 border rounded-md resize-none"
        placeholder="Paste your document content here"
      />

      <button
        onClick={handleProcess}
        className="mt-4 p-2 bg-blue-500 text-white rounded-md"
      >
        Process
      </button>
    </div>
  );
};

export default function Demo() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">
          <CommunicationForm />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
