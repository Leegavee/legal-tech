// pages/api/clients.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { db, initializeDb } from '../../../libs/storage/db';
import { Client } from '../../../libs/domain/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client[] | { message: string }>,
) {
  await initializeDb();

  if (req.method === 'GET') {
    // Return all clients
    await db.read();
    res.status(200).json(db.data?.clients || []);
  } else if (req.method === 'POST') {
    // Add a new client
    const newClient: Client = req.body;
    db.data?.clients.push(newClient);
    await db.write();
    res.status(201).json([newClient]);
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
