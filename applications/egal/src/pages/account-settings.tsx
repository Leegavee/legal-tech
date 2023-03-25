import NavBar from '@legavee/components/nav-bar';
import React, { useEffect, useState } from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useMutation } from '@apollo/client';
import {
  UPDATE_CLIENT_MUTATION,
  CREATE_CLIENT_MUTATION,
} from '../graphql/client/documents/mutations';

import { Client, Scalars } from '@legavee/graphql/client/client-gql-types';

import useLoggedInClient from '@legavee/libs/hooks/useLoggedInClient';

// TODO: figure out what is happening with the user object!
function AuthenticatedAccountSettingsForm() {
  const [clientFormValues, setClientFormValues] = useState<Client | null>(null);
  const [updateClient, { loading: updateClientSaving }] = useMutation(
    UPDATE_CLIENT_MUTATION,
  );
  const [createClient, { loading: createClientSaving }] = useMutation(
    CREATE_CLIENT_MUTATION,
  );
  const [client, setClient] = useState<Client | null>(null);
  const {
    client: loggedInClient,
    loading: loadingClient,
    isClientPersisted,
  } = useLoggedInClient();
  const clientDataSaved = () => {};

  useEffect(() => {
    // TODO: fix the casting problems below
    // @ts-ignore
    setClientFormValues(loggedInClient);
    // @ts-ignore
    setClient(loggedInClient);
  }, [loggedInClient]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isClientPersisted) {
      await updateClient({
        variables: {
          client: { ...clientFormValues, __typename: undefined },
        },
      });
    } else {
      await createClient({
        variables: {
          client: { ...clientFormValues, __typename: undefined },
        },
      });
    }
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientFormValues({
      ...(clientFormValues as Client),
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        {(loadingClient || updateClientSaving || createClientSaving) && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-400 bg-opacity-50 flex items-center justify-center">
            <div className="w-6 h-6 border-4 border-gray-100 rounded-full spin"></div>
          </div>
        )}
        <div className="space-y-6 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h1 className="text-3xl font-bold leading-6 text-gray-900 pb-5">
              Account Settings
            </h1>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Personal Information
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Title
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  value={(clientFormValues?.title || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                First name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="first_name"
                  value={(clientFormValues?.first_name || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Last name
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="last_name"
                  value={(clientFormValues?.last_name || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Email address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={(clientFormValues?.email || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="phone_number"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Phone number
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="text"
                  autoComplete="phone_number"
                  value={(clientFormValues?.phone_number || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Street address
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street_address"
                  value={(clientFormValues?.street_address || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Town / City
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="city"
                  value={(clientFormValues?.city || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="county"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                County
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="county"
                  id="county"
                  autoComplete="county"
                  value={(clientFormValues?.county || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="post_code"
                className="block text-sm font-medium leading-6 text-gray-900 sm:pt-1.5"
              >
                Post code
              </label>
              <div className="mt-2 sm:col-span-2 sm:mt-0">
                <input
                  type="text"
                  name="post_code"
                  id="post_code"
                  autoComplete="post_code"
                  value={(clientFormValues?.post_code || '') as string}
                  onChange={handleFormInputChange}
                  className="block w-full max-w-lg rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 divide-y divide-gray-200 pt-8 sm:space-y-5 sm:pt-10">
          <div>
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              Notifications
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              We&apos;ll always let you know about important changes, but you
              pick what else you want to hear about.
            </p>
          </div>
          <div className="space-y-6 divide-y divide-gray-200 sm:space-y-5">
            <div className="pt-6 sm:pt-5">
              <div role="group" aria-labelledby="label-email">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4">
                  <div>
                    <div
                      className="text-sm font-semibold leading-6 text-gray-900"
                      id="label-email"
                    >
                      By Email
                    </div>
                  </div>
                  <div className="mt-4 sm:col-span-2 sm:mt-0">
                    <div className="max-w-lg space-y-4">
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-900"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when a your legal representative
                            comments.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="communications"
                            name="communications"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="communications"
                            className="font-medium text-gray-900"
                          >
                            Communications
                          </label>
                          <p className="text-gray-500">
                            Get notified when we receive external
                            communications.
                          </p>
                        </div>
                      </div>
                      <div className="relative flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="instructions"
                            name="instructions"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="instructions"
                            className="font-medium text-gray-900"
                          >
                            Instructions
                          </label>
                          <p className="text-gray-500">
                            Get notified when we require your instructions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end gap-x-3">
          <button
            type="button"
            className="rounded-md bg-white py-2 px-3 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default function AccountSettings() {
  return (
    <div className="flex flex-col bg-white">
      <NavBar />
      <div className="flex-grow p-10">
        <AuthenticatedAccountSettingsForm />
      </div>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();
