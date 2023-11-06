// database.ts
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { join } from 'path';
import { Client, Case, Communication } from '../domain/types';
import { clientId } from '@legavee/stubs';

interface Data {
  clients: Client[];
}

const defaultData = {
  clients: [
    {
      id: clientId,
      name: 'Lewis Barclay',
      cases: [],
    },
  ],
};
const file = join(process.cwd(), 'data', 'db.json');

console.log(file);
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter, defaultData);

async function initializeDb() {
  await db.read();
  db.data ||= defaultData;
  db.data.clients.forEach((client) => {
    client.cases ||= [];
    client.cases.forEach((caseItem) => {
      caseItem.communications ||= [];
    });
  });
  await db.write();
}

// Utility functions to find entities
async function findClient(clientId: string): Promise<Client | undefined> {
  await db.read();
  return db.data?.clients.find((client) => client.id === clientId);
}

async function findCase(
  clientId: string,
  caseId: string,
): Promise<Case | undefined> {
  await db.read();
  const client = db.data?.clients.find((client) => client.id === clientId);
  return client?.cases.find((caseItem) => caseItem.id === caseId);
}

async function findCommunication(
  clientId: string,
  caseId: string,
  communicationId: string,
): Promise<Communication | undefined> {
  await db.read();
  const caseItem = await findCase(clientId, caseId);
  return caseItem?.communications.find(
    (communication) => communication.id === communicationId,
  );
}

export { db, initializeDb, findClient, findCase, findCommunication };
