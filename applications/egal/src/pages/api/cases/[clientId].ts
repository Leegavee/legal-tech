// pages/api/cases/[clientId].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db, initializeDb } from '../../../libs/storage/db';
import { Case, Client } from '../../../libs/domain/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Case[] | { message: string }>,
) {
  await initializeDb();
  const { clientId } = req.query;

  if (req.method === 'GET') {
    // Return all cases for a client
    const client = db.data?.clients.find((c: Client) => c.id === clientId);
    if (client) {
      res.status(200).json(client.cases);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } else if (req.method === 'POST') {
    // Add a new case to a client
    const newCase: Case = req.body;
    const client = db.data?.clients.find((c: Client) => c.id === clientId);
    if (client) {
      client.cases.push(newCase);
      await db.write();
      res.status(201).json(client.cases);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
