import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import NavBar from '@legavee/components/nav-bar';
import React, { useState } from 'react';
import { Editor } from '@legavee/components/editor';
const NewCaseForm = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  const handleEditorChange = (content: string) => {
    setMarkdownContent(content);
  };

  const [overview, setOverview] = useState('');

  const handleOverviewChange = (e: any) => {
    setOverview(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(
      JSON.stringify({
        overview,
        background: markdownContent,
      }),
    );
    // Gather form data and save to S3.
    // Redirect client to their dashboard or the case details page after successful creation.
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="p-6 bg-white rounded-xl shadow-md flex flex-col h-full">
        <h2 className="text-2xl font-semibold mb-5">Create a New Case</h2>

        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col space-y-4 h-fit"
        >
          <div>
            <label
              htmlFor="overview"
              className="block text-sm font-medium text-gray-700"
            >
              Case Overview (Short Description):
            </label>
            <input
              type="text"
              id="overview"
              name="overview"
              required
              className="mt-1 p-2 w-full border rounded-md"
              onChange={handleOverviewChange}
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label
              htmlFor="background"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Case Background (Long Description):
            </label>
            <div className="flex-1">
              <Editor onChange={handleEditorChange}></Editor>
            </div>
            <div className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 self-start inline-block ml-2 mb-14 z-10">
              <button type="submit" onSubmit={handleSubmit}>
                Create Case
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default function NewCasePage() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow flex flex-col">
          <NewCaseForm />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
